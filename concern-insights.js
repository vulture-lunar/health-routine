// Reviewed against the linked public health guidance on 2026-11-24.
const ROUTINE_INSIGHTS = {
  "meal": [
    {
      "question": "잠이 부족한 다음 날, 왜 더 먹고 싶을까요?",
      "answer": "수면 부족은 배고픔과 포만감에 관여하는 호르몬의 균형에 영향을 줄 수 있어요. 군것질이 늘었다면 식사량만 탓하기 전에, 최근 며칠의 잠도 함께 돌아보세요.",
      "source": {
        "label": "미국 국립심폐혈액연구소 · 수면 부족의 영향",
        "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects"
      }
    },
    {
      "question": "야식 메뉴보다 먼저 볼 것은 따로 있을까요?",
      "answer": "밤에 속쓰림이나 역류가 있다면 먹은 뒤 눕기까지의 간격을 살펴보세요. 잠들기 최소 3시간 전에 식사를 마치는 것이 증상을 줄이는 데 도움이 될 수 있어요.",
      "source": {
        "label": "미국 국립당뇨·소화기·신장질환연구소 · 역류와 식사",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    }
  ],
  "light": [
    {
      "question": "어제보다 늘어난 체중, 전부 살이 찐 걸까요?",
      "answer": "짠 음식을 먹으면 몸에 수분이 더 머물러 붓거나 체중이 늘 수 있어요. 하루의 숫자로 체지방 변화를 단정하기보다, 전날 식사와 며칠간의 흐름을 함께 보는 편이 좋아요.",
      "source": {
        "label": "미국심장협회 · 나트륨과 수분 저류",
        "url": "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/effects-of-excess-sodium-infographic/"
      }
    },
    {
      "question": "국물만 남기면 나트륨 걱정은 끝일까요?",
      "answer": "나트륨은 국물뿐 아니라 빵·가공육·소스 등에도 들어 있어요. 짠맛의 정도만으로 판단하기보다, 자주 먹는 포장식품의 영양정보를 한 번 비교해 보세요.",
      "source": {
        "label": "미국심장협회 · 나트륨과 수분 저류",
        "url": "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/effects-of-excess-sodium-infographic/"
      }
    }
  ],
  "gut": [
    {
      "question": "똑같은 음식을 먹어도, 눕는 시간이 중요한 이유는?",
      "answer": "식사 직후 눕는 습관은 역류 증상에 영향을 줄 수 있어요. 특히 밤에 속이 쓰리다면 음식 종류와 함께 식사 후 눕기까지의 시간을 기록해 보세요.",
      "source": {
        "label": "미국 국립당뇨·소화기·신장질환연구소 · 역류와 식사",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    },
    {
      "question": "속이 불편할 때, 무조건 피해야 할 음식이 있을까요?",
      "answer": "커피·기름진 음식·매운 음식 등이 역류 증상과 관련될 수 있지만, 불편함을 느끼는 음식은 사람마다 달라요. 전부 끊기보다 무엇을 먹은 날 증상이 반복되는지 살펴보세요.",
      "source": {
        "label": "미국 국립당뇨·소화기·신장질환연구소 · 역류와 식사",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    }
  ],
  "bowel": [
    {
      "question": "식이섬유를 늘렸는데, 왜 배가 더 빵빵할까요?",
      "answer": "식이섬유를 갑자기 많이 늘리면 가스와 복부 팽만이 생길 수 있어요. 한 번에 양을 크게 늘리기보다 조금씩 더하면서 몸의 반응을 살펴보세요.",
      "source": {
        "label": "미국 국립당뇨·소화기·신장질환연구소 · 식이섬유",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome/eating-diet-nutrition"
      }
    },
    {
      "question": "식이섬유도 종류에 따라 다를까요?",
      "answer": "물에 녹는 수용성, 잘 녹지 않는 불용성 식이섬유가 있어요. 과민성장증후군에서는 수용성 식이섬유가 증상 완화에 더 도움이 될 수 있어, 무조건 많은 양보다 종류도 살펴볼 만해요.",
      "source": {
        "label": "미국 국립당뇨·소화기·신장질환연구소 · 식이섬유",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome/eating-diet-nutrition"
      }
    }
  ],
  "skin": [
    {
      "question": "같은 보습제도, 바르는 타이밍이 다를까요?",
      "answer": "보습제는 피부의 수분을 붙잡아 두는 역할을 해요. 씻고 난 뒤 피부가 완전히 마르기 전에 바르면 수분을 유지하는 데 도움이 됩니다. 제품을 바꾸기 전, 바르는 순간부터 살펴보세요.",
      "source": {
        "label": "미국 국립의학도서관 · 건조한 피부 관리",
        "url": "https://medlineplus.gov/ency/patientinstructions/000751.htm"
      }
    },
    {
      "question": "뜨거운 샤워 뒤의 개운함, 피부도 좋아할까요?",
      "answer": "뜨거운 물과 긴 목욕은 피부를 더 건조하게 만들 수 있어요. 샤워 후 유독 당긴다면 보습제뿐 아니라 물 온도와 씻는 시간도 함께 돌아보세요.",
      "source": {
        "label": "미국 국립의학도서관 · 건조한 피부 관리",
        "url": "https://medlineplus.gov/ency/patientinstructions/000751.htm"
      }
    }
  ],
  "hair": [
    {
      "question": "요즘 빠지는 머리카락, 몇 달 전 일과 관련 있을까요?",
      "answer": "큰 스트레스나 질병, 체중 감소 뒤 모발 탈락이 몇 달 지나 눈에 띄기도 해요. 최근 샴푸만 떠올리기보다 지난 몇 달의 건강 상태와 식사 변화도 함께 돌아보세요.",
      "source": {
        "label": "미국피부과학회 · 모발 탈락",
        "url": "https://www.aad.org/public/diseases/hair-loss/insider/shedding"
      }
    },
    {
      "question": "많이 빠지는 것과, 새로 자라지 않는 것은 같을까요?",
      "answer": "일시적으로 모발이 많이 빠지는 현상과 성장을 방해하는 탈모는 원인과 관리가 달라요. 영양 제품을 고르기 전, 정수리가 점점 비거나 탈락이 지속된다면 피부과에서 원인부터 확인하는 게 좋아요.",
      "source": {
        "label": "미국피부과학회 · 모발 탈락",
        "url": "https://www.aad.org/public/diseases/hair-loss/insider/shedding"
      }
    }
  ],
  "change": [
    {
      "question": "갑자기 더워지는 순간, 공통점이 있을까요?",
      "answer": "일부 사람은 뜨거운 음료·매운 음식·카페인·술을 접할 때 안면홍조가 두드러져요. 어떤 상황에서 더워졌는지 짧게 기록하면 나만의 유발 요인을 찾는 데 도움이 될 수 있어요.",
      "source": {
        "label": "미국 국립노화연구소 · 안면홍조",
        "url": "https://www.nia.nih.gov/health/menopause/hot-flashes-what-can-i-do"
      }
    },
    {
      "question": "밤에 땀이 나는 것, 잠과도 이어질까요?",
      "answer": "야간 발한과 안면홍조는 잠을 방해할 수 있어요. 피로만 따로 보지 말고 밤중에 깼는지, 덥거나 땀이 났는지도 함께 살펴보세요. 생활에 불편이 크다면 상담으로 관리 방법을 찾을 수 있어요.",
      "source": {
        "label": "미국 국립노화연구소 · 안면홍조",
        "url": "https://www.nia.nih.gov/health/menopause/hot-flashes-what-can-i-do"
      }
    }
  ],
  "sleep": [
    {
      "question": "점심에 마신 커피가 밤까지 남아 있을까요?",
      "answer": "카페인의 영향은 최대 8시간 이어질 수 있어요. 오후 커피를 마신 날 잠들기 어렵다면, 양만 줄이기보다 마지막으로 마신 시간을 앞당겨 보세요.",
      "source": {
        "label": "미국 국립심폐혈액연구소 · 수면 습관",
        "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits"
      }
    },
    {
      "question": "잠을 보충한 주말, 왜 일요일 밤은 더 말똥할까요?",
      "answer": "주중과 주말의 취침·기상 시간이 크게 달라지면 몸의 수면 리듬이 흔들릴 수 있어요. 억지로 일찍 눕기만 하기보다, 주말에도 일어나는 시간을 비슷하게 맞춰 보세요.",
      "source": {
        "label": "미국 국립심폐혈액연구소 · 수면 습관",
        "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits"
      }
    }
  ],
  "throat": [
    {
      "question": "목이 쉬었을 때, 속삭이면 더 편할까요?",
      "answer": "속삭이는 소리도 목소리에 부담을 줄 수 있어요. 목이 피곤한 날에는 억지로 작게 말하기보다 잠시 말을 쉬고, 소음 속에서 목소리를 높이는 상황도 줄여 보세요.",
      "source": {
        "label": "미국 국립청각·의사소통장애연구소 · 목소리 관리",
        "url": "https://www.nidcd.nih.gov/health/taking-care-your-voice"
      }
    },
    {
      "question": "감기가 아닌데도 목이 자꾸 불편할 수 있을까요?",
      "answer": "위산이 목이나 식도로 역류하면 목소리와 목의 불편함에 영향을 줄 수 있어요. 늦은 식사 뒤나 누웠을 때 반복되는지도 살펴보고, 증상이 이어지면 원인을 확인해 보세요.",
      "source": {
        "label": "미국 국립청각·의사소통장애연구소 · 목소리 관리",
        "url": "https://www.nidcd.nih.gov/health/taking-care-your-voice"
      }
    }
  ],
  "vessel": [
    {
      "question": "커피 한 잔 뒤 잰 혈압, 평소 혈압일까요?",
      "answer": "카페인·운동·흡연은 측정값에 영향을 줄 수 있어요. 측정 전 30분은 이를 피하고, 의자에 앉아 최소 5분간 조용히 쉰 뒤 재면 비교하기 좋은 기록을 남길 수 있어요.",
      "source": {
        "label": "미국심장협회 · 가정 혈압 측정",
        "url": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home"
      }
    },
    {
      "question": "혈압이 한 번 높게 나오면, 그 숫자로 판단할까요?",
      "answer": "혈압은 한 번의 수치보다 여러 날의 기록이 중요해요. 매번 비슷한 시간과 자세로 두 번씩, 1분 간격을 두고 측정해 기록을 진료 때 함께 보여 주세요.",
      "source": {
        "label": "미국심장협회 · 가정 혈압 측정",
        "url": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home"
      }
    }
  ],
  "parents": [
    {
      "question": "병원과 집에서 잰 혈압, 왜 다를까요?",
      "answer": "긴장이나 측정 환경에 따라 혈압이 달라질 수 있어요. 병원 수치 하나만 보기보다 같은 조건에서 잰 집의 기록을 함께 보여드리면, 의료진이 판단하는 데 도움이 됩니다.",
      "source": {
        "label": "미국심장협회 · 가정 혈압 측정",
        "url": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home"
      }
    },
    {
      "question": "부모님 혈압을 잴 때, 대화도 영향을 줄까요?",
      "answer": "측정 중 말하거나 휴대폰을 보는 대신 조용히 쉬는 것이 좋아요. 등과 팔을 받치고 발은 바닥에 둔 채 측정해 보세요. 옆에서 대화를 잠시 멈추는 것도 도움이 됩니다.",
      "source": {
        "label": "미국심장협회 · 가정 혈압 측정",
        "url": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home"
      }
    }
  ]
};
