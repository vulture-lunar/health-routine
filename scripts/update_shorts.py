#!/usr/bin/env python3
"""Refresh public Shorts metadata without account credentials or API secrets."""
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import json
import hashlib
from pathlib import Path
import re
import time
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'shorts-data.js'
NS = {'a': 'http://www.w3.org/2005/Atom', 'y': 'http://www.youtube.com/xml/schemas/2015', 'm': 'http://search.yahoo.com/mrss/'}
# Curated IDs retain their editorial assignments. These rules apply to new titles only.
RULES = {
    'meal': r'혈당|식후|식사량|식욕|폭식|과식|야식|군것질|간식|식전|당뇨',
    'light': r'다이어트|체지방|복부비만|내장지방|뱃살|허리둘레|허리|체중|감량|붓기|부종',
    'gut': r'위장|위염|위산|속쓰림|소화|더부룩|양배추|위\s?점막|위\s?속',
    'bowel': r'변비|배변|대변|화장실|차전자피|장\s?건강|장내|유산균|식이섬유|이눌린',
    'skin': r'피부|콜라겐|히알루론산|주름|기미|글루타치온|레티놀',
    'hair': r'탈모|머리숱|모발|머리카락|두피|비오틴|아누카',
    'change': r'갱년기|폐경|이소플라본|레드클로버|여성\s?호르몬',
    'sleep': r'수면|잠들|잠이|잠을|잠\s?잘|불면|멜라토닌|락티움|테아닌|생체시계|침대',
    'throat': r'도라지|삼백초|기도|기관지|가래|기침|비염|코막힘|목이|목\s?건강',
    'vessel': r'혈관|혈압|혈행|콜레스테롤|혈전|동맥|코엔자임|홍국|중성지방',
    'parents': r'부모님|노년|노인|치매|인지|기억력|골다공증|뼈|근감소|\d+세|외로움',
}


def fetch(url):
    for attempt in range(3):
        try:
            request = Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'ko-KR,ko;q=0.9'})
            with urlopen(request, timeout=25) as response:
                return response.read().decode('utf-8')
        except (URLError, TimeoutError) as exc:
            if isinstance(exc, HTTPError) and exc.code not in (429, 500, 502, 503, 504):
                raise
            if attempt == 2:
                raise
            time.sleep(2 ** attempt)


def load_data(path):
    text = path.read_text(encoding='utf-8')
    return json.loads(text[text.index('{'):text.rindex(';')])


def classify(title, description):
    topics = [key for key, pattern in RULES.items() if re.search(pattern, title, re.I)]
    if not topics:
        # Hashtags help classify an otherwise ambiguous title; the full description
        # often discusses several unrelated conditions, so do not classify from it.
        hashtags = ' '.join(re.findall(r'#[\w가-힣]+', description))
        topics = [key for key, pattern in RULES.items() if re.search(pattern, hashtags, re.I)]
    return topics


def parse_feed(xml, channel_id, now):
    entries = ET.fromstring(xml).findall('a:entry', NS)
    if not entries:
        raise ValueError('Channel feed contained no videos; retaining existing data.')
    videos = []
    for entry in entries:
        if entry.findtext('y:channelId', namespaces=NS) != channel_id:
            raise ValueError('Unexpected channel ID in feed.')
        video_id = entry.findtext('y:videoId', default='', namespaces=NS)
        if not re.fullmatch(r'[A-Za-z0-9_-]{11}', video_id):
            raise ValueError('Invalid video ID.')
        links = entry.findall('a:link', NS)
        if not any('/shorts/' + video_id in link.get('href', '') for link in links):
            continue  # Long videos and livestreams must not become Shorts.
        title = entry.findtext('a:title', default='', namespaces=NS).strip()
        published = entry.findtext('a:published', default='', namespaces=NS)
        date = datetime.fromisoformat(published.replace('Z', '+00:00'))
        if not title or date.tzinfo is None:
            raise ValueError('Missing title or publication date.')
        if date > now:
            continue
        statistics = entry.find('m:group/m:community/m:statistics', NS)
        views = int(statistics.get('views')) if statistics is not None else None
        if views is None or views < 0:
            raise ValueError('Missing/invalid view count.')
        description = entry.findtext('m:group/m:description', default='', namespaces=NS)
        videos.append({'id': video_id, 'title': title, 'publishedAt': date.isoformat(),
                       'views': views, 'topics': classify(title, description),
                       'thumbnail': f'https://i.ytimg.com/vi/{video_id}/hqdefault.jpg'})
    return videos


def watch_views(video_id, channel_id):
    html = fetch('https://www.youtube.com/watch?v=' + video_id)
    match = re.search(r'ytInitialPlayerResponse\s*=\s*', html)
    if not match:
        raise ValueError('Public video metadata unavailable')
    player, _ = json.JSONDecoder().raw_decode(html[match.end():])
    details = player.get('videoDetails', {})
    if details.get('channelId') != channel_id:
        raise ValueError('Missing or mismatched channel metadata')
    views = int(details['viewCount'])
    if views < 0:
        raise ValueError('Invalid view count')
    return views


def refresh(existing, now, feed_xml=None, lookup=watch_views):
    channel_id = existing['channelId']
    latest = parse_feed(feed_xml if feed_xml is not None else fetch(
        f'https://www.youtube.com/feeds/videos.xml?channel_id={channel_id}'), channel_id, now)
    if not latest:
        raise ValueError('No published Shorts found; refusing to overwrite existing data.')
    by_id = {video['id']: dict(video) for video in existing['videos']}
    checked_at = now.isoformat(timespec='seconds')
    for video in latest:
        previous = by_id.get(video['id'])
        if previous is not None:
            video['topics'] = previous['topics']  # Preserve manual editorial choices.
        video['viewsCheckedAt'] = checked_at
        by_id[video['id']] = video
    latest_ids = {video['id'] for video in latest}
    warnings = []
    # The public feed contains only the latest 15 uploads. Never delete older
    # curated videos; refresh their counts separately for popularity ranking.
    with ThreadPoolExecutor(max_workers=4) as executor:
        pending = {executor.submit(lookup, video_id, channel_id): video_id
                   for video_id in by_id if video_id not in latest_ids}
        for future in as_completed(pending):
            video_id = pending[future]
            try:
                by_id[video_id]['views'] = future.result()
                by_id[video_id]['viewsCheckedAt'] = checked_at
            except Exception as exc:
                warnings.append(f'{video_id}: {type(exc).__name__}; keeping previous count')
    videos = sorted(by_id.values(), key=lambda video: (datetime.fromisoformat(
        video['publishedAt'].replace('Z', '+00:00')), video['id']), reverse=True)
    result = {**existing, 'checkedAt': now.astimezone(ZoneInfo('Asia/Seoul')).date().isoformat(),
              'updatedAt': checked_at, 'videos': videos}
    report = {'videos': len(videos), 'newVideos': len(set(by_id) - {v['id'] for v in existing['videos']}),
              'refreshedViewCounts': sum(v.get('viewsCheckedAt') == checked_at for v in videos),
              'unclassified': [v['id'] for v in latest if not v['topics']], 'warnings': warnings}
    return result, report


def write_snapshot(data_path, index_path, result):
    output = '// Automatically refreshed public YouTube Shorts metadata; curated topics are preserved.\n'
    output += 'const HEALTH_SHORTS = ' + json.dumps(result, ensure_ascii=False, indent=2) + ';\n'
    version = hashlib.sha256(output.encode('utf-8')).hexdigest()[:12]
    index, replacements = re.subn(r'src="shorts-data\.js(?:\?[^"]*)?"',
                                  f'src="shorts-data.js?v={version}"', index_path.read_text(encoding='utf-8'))
    if replacements != 1:
        raise ValueError('Expected exactly one Shorts data script; refusing to publish a stale page.')
    temporary = data_path.with_suffix('.js.tmp')
    temporary.write_text(output, encoding='utf-8')
    temporary.replace(data_path)
    index_path.write_text(index, encoding='utf-8')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--data', type=Path, default=DATA)
    parser.add_argument('--index', type=Path, default=ROOT / 'index.html')
    args = parser.parse_args()
    result, report = refresh(load_data(args.data), datetime.now(timezone.utc))
    # Validate both outputs before writing; failures prevent the workflow commit.
    write_snapshot(args.data, args.index, result)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    for warning in report['warnings']:
        print('::warning::' + warning)
    for video_id in report['unclassified']:
        print(f'::warning::Unclassified Short {video_id}; retained but not shown in concern recommendations.')


if __name__ == '__main__':
    main()
