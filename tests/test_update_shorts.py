import copy
from datetime import datetime, timezone
import importlib.util
from pathlib import Path
import unittest

SPEC = importlib.util.spec_from_file_location('update_shorts', Path(__file__).resolve().parents[1] / 'scripts/update_shorts.py')
u = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(u)
CHANNEL = 'UCE9Si-9SKNSVv0HunJgyVuQ'
NOW = datetime(2026, 11, 25, 0, tzinfo=timezone.utc)


def feed(video_id='new_video_1', title='식후 혈당 관리', channel=CHANNEL, views='99', short=True, date='2026-11-24T09:00:00Z'):
    path = 'shorts/' if short else 'watch?v='
    return f'''<feed xmlns="{u.NS['a']}" xmlns:yt="{u.NS['y']}" xmlns:media="{u.NS['m']}"><entry>
    <yt:channelId>{channel}</yt:channelId><yt:videoId>{video_id}</yt:videoId><title>{title}</title>
    <published>{date}</published><link href="https://www.youtube.com/{path}{video_id}" />
    <media:group><media:description>#혈당</media:description><media:community><media:statistics views="{views}" /></media:community></media:group>
    </entry></feed>'''


class ShortsUpdateTests(unittest.TestCase):
    def setUp(self):
        self.existing = {'channelId': CHANNEL, 'checkedAt': '2026-11-23', 'videos': [
            {'id':'old_video_1','title':'수면 이야기','views':1000,'publishedAt':'2026-11-20T09:00:00Z','topics':['sleep'],'thumbnail':'old.jpg'}]}

    def test_refresh_retains_archive_and_updates_popularity(self):
        original = copy.deepcopy(self.existing)
        result, report = u.refresh(self.existing, NOW, feed(), lambda *_: 2000)
        self.assertEqual(len(result['videos']), 2)
        self.assertEqual(result['videos'][0]['topics'], ['meal'])
        self.assertEqual(result['videos'][1]['views'], 2000)
        self.assertEqual(report['newVideos'], 1)
        self.assertEqual(report['refreshedViewCounts'], 2)
        self.assertEqual(original, self.existing)

    def test_preserve_editorial_topics_for_known_video(self):
        result, _ = u.refresh(self.existing, NOW, feed(video_id='old_video_1'), lambda *_: 0)
        self.assertEqual(result['videos'][0]['topics'], ['sleep'])

    def test_archive_fetch_failure_does_not_erase_known_count(self):
        def fail(*_):
            raise ValueError('not available')
        result, report = u.refresh(self.existing, NOW, feed(), fail)
        self.assertEqual(result['videos'][1]['views'], 1000)
        self.assertNotIn('viewsCheckedAt', result['videos'][1])
        self.assertEqual(len(report['warnings']), 1)

    def test_reject_wrong_channel_missing_counts_empty_or_invalid_feed(self):
        for xml in [feed(channel='other-channel'), feed(views='bad'), feed(views='-1'), '<feed/>', 'invalid xml']:
            with self.subTest(xml=xml[:80]), self.assertRaises((ValueError, u.ET.ParseError)):
                u.refresh(self.existing, NOW, xml, lambda *_: 0)

    def test_long_video_and_future_publication_are_not_shorts(self):
        self.assertEqual(u.parse_feed(feed(short=False), CHANNEL, NOW), [])
        self.assertEqual(u.parse_feed(feed(date='2026-11-26T09:00:00Z'), CHANNEL, NOW), [])

    def test_ambiguous_new_videos_do_not_get_unrelated_default_topic(self):
        self.assertEqual(u.classify('새로운 이야기', '설명에 혈당, 피부, 수면을 모두 적어도'), [])
        self.assertEqual(u.classify('새로운 이야기', '#수면 #백년탐구생활'), ['sleep'])
        self.assertEqual(u.classify('지금 줄자로 재 보세요, 사망 위험 가장 낮았던 허리', ''), ['light'])
        self.assertEqual(u.classify('외로움이 오래가면, 치매가 2명 중 1명꼴', ''), ['parents'])


if __name__ == '__main__':
    unittest.main()
