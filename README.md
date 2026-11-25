# 백년 탐구생활 건강 루틴

정적 GitHub Pages 사이트: https://vulture-lunar.github.io/health-routine/

## 매일 영상 갱신

`.github/workflows/site.yml`이 매일 **한국시간 자정 00:00**에 실행됩니다.
UTC 기준 예약은 `0 15 * * *`이며 GitHub의 실행 대기 시간에 따라 실제 반영은 늦어질 수 있습니다.
GitHub Actions 화면에서 **Update videos and deploy site → Run workflow**로 즉시 갱신할 수도 있습니다.
계정 로그인·API 키·추가 유료 서비스는 필요하지 않습니다.

1. 채널 `UCE9Si-9SKNSVv0HunJgyVuQ`의 공개 피드에서 새 쇼츠, 공개 시각, 제목, 조회수를 확인합니다.
2. 피드에 없는 기존 영상은 유지하고 공개 영상 메타데이터에서 조회수를 갱신합니다.
3. 기존 영상의 수동 주제 분류는 보존합니다. 새 영상은 제목과 해시태그의 주제 규칙으로 분류합니다.
   맞는 주제가 없는 영상은 저장하되 고민별 추천에 노출하지 않고 실행 기록에 표시합니다.
4. `shorts-data.js`를 저장하고, 브라우저가 새 목록을 읽도록 데이터 주소의 버전도 함께 갱신한 뒤 정적 사이트를 배포합니다.
   관련 주제 안에서 최신 영상이 메인, 나머지 중 조회수 높은 3개가 서브로 표시됩니다.

피드를 읽지 못하거나 데이터가 유효하지 않으면 갱신·배포를 중단해 이전 페이지를 유지합니다.
기존 영상 일부의 조회수만 읽지 못하면 그 영상의 마지막 확인값을 보존하고 경고를 남깁니다.
조회수별 확인 시각은 데이터의 `viewsCheckedAt`, 전체 갱신 시각은 `updatedAt`에 저장됩니다.
피드가 최근 영상만 반환하므로 오래된 영상을 피드에서 빠졌다는 이유로 지우지 않습니다.

주제 기준은 `scripts/update_shorts.py`의 `RULES`, 영상별 수동 분류는 `shorts-data.js`의 `topics`입니다.
YouTube 공개 피드/페이지 형식이 변경되면 갱신기를 수정해야 할 수 있습니다.

## 로컬 확인

Python 3.12 이상, 외부 라이브러리 불필요:

```sh
python3 -m unittest discover -s tests -v
python3 scripts/update_shorts.py
python3 -m http.server 8765
```

일반적인 `main` 코드 변경도 같은 작업에서 배포됩니다.
Pages의 게시 소스는 **GitHub Actions**입니다. 갱신 작업이 저장하는 커밋은
후속 push 작업을 발생시키지 않으므로 같은 실행에서 갱신 후 배포까지 완료합니다.
