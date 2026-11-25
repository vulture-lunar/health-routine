// Questions connect each concern to its existing product picks and evidence-based ingredient roles.
const ROUTINE_INSIGHTS = {
  "meal": [
    {
      "question": "식사량 관리와 식후 혈당 관리, 같은 이야기일까요?",
      "answer": "얼마나 먹는지와 먹은 뒤 포도당을 어떻게 처리하는지는 다른 문제예요. 점성을 만드는 식이섬유는 포만감 관련 연구에서, 바나바잎의 코로솔산은 포도당의 세포 유입 연구에서 살펴보는 성분입니다. 어떤 관리가 필요한지 나눠 보면 원료를 비교하기 쉬워요.",
      "sources": [
        {
          "label": "Carolean™ 원료 특성·시험 범위 · Nexira",
          "url": "https://www.nexira.com/brand/carolean-appetite-control/"
        },
        {
          "label": "코로솔산·포도당 유입 원료 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/15256748/"
        }
      ],
      "relatedProducts": [
        {
          "id": "off",
          "label": "식사량 관리, 관련 제품은?"
        },
        {
          "id": "51",
          "label": "식후 혈당, 관련 제품은?"
        }
      ]
    },
    {
      "question": "물을 만나 걸쭉해지는 식이섬유는 왜 식전에 찾을까요?",
      "answer": "일부 식이섬유는 수분을 머금어 점성이 있는 겔을 만들어요. 이 성질을 위 배출과 식사량 조절에 연결해 연구합니다. Carolean™도 이런 점성에 주목한 원료지만, 원료사의 모사·동물 시험과 실제 제품을 먹은 사람의 결과는 구분해서 봐야 해요.",
      "sources": [
        {
          "label": "Carolean™ 원료 특성·시험 범위 · Nexira",
          "url": "https://www.nexira.com/brand/carolean-appetite-control/"
        }
      ],
      "relatedProducts": [
        {
          "id": "off",
          "label": "이 식이섬유를 담은 제품은?"
        }
      ]
    }
  ],
  "light": [
    {
      "question": "어제보다 늘어난 체중, 수분일까요 체지방일까요?",
      "answer": "짠 음식 뒤의 수분 저류와 오랜 기간 쌓인 체지방은 나눠서 봐야 해요. 모로오렌지 성분을 살펴볼 때 연결되는 부분도 붓기를 빼는 작용보다는 체지방·허리둘레를 다룬 원료 연구입니다.",
      "sources": [
        {
          "label": "나트륨과 수분 저류 · 미국심장협회",
          "url": "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/effects-of-excess-sodium-infographic/"
        },
        {
          "label": "모로오렌지 추출물·체지방 인체 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/35276783/"
        }
      ],
      "relatedProducts": [
        {
          "id": "49",
          "label": "이 성분을 담은 제품은?"
        }
      ]
    },
    {
      "question": "다이어트 성분은 왜 지방의 생성과 분해를 나눠 볼까요?",
      "answer": "지방이 새로 만들어져 저장되는 과정과 저장된 지방을 분해하는 과정은 달라요. 모로오렌지의 동물 연구는 지방조직의 대사 변화를, 락토페린의 세포 연구는 지방방울과 분해 신호의 변화를 살펴봤어요. 성분 이름보다 어느 경로를 연구했는지 보는 편이 이해하기 쉽습니다.",
      "sources": [
        {
          "label": "모로오렌지·지방조직 동물 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/20029381/"
        },
        {
          "label": "락토페린·지방 분해 세포 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/23470763/"
        }
      ],
      "relatedProducts": [
        {
          "id": "49",
          "label": "두 원료를 함께 담은 제품은?"
        }
      ]
    }
  ],
  "gut": [
    {
      "question": "양배추 이야기에는 왜 위의 점액층이 등장할까요?",
      "answer": "위 표면은 점액층으로 보호되고, 뮤신은 그 점액을 이루는 성분이에요. SMM 계열 물질의 위 점액세포 실험에서는 뮤신 분비가 늘어나는 변화가 관찰됐어요. 양배추의 SMM을 위 점막 방어와 연결해 설명하는 이유입니다.",
      "sources": [
        {
          "label": "SMM 계열 물질·뮤신 분비 세포 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/10719747/"
        }
      ],
      "relatedProducts": [
        {
          "id": "74",
          "label": "양배추 성분을 담은 제품은?"
        }
      ]
    },
    {
      "question": "식후 더부룩함은 위가 비워지는 속도와 관계있을까요?",
      "answer": "위에서 음식이 내려가는 속도는 식후 불편함을 살펴보는 요소 중 하나예요. 생강의 소규모 인체 연구에서는 위 운동·배출의 변화가 있었지만, 더부룩함 등 증상 감소는 확인되지 않았어요. 작용 경로와 실제 느끼는 변화가 같은 뜻은 아니라는 점도 함께 살펴볼 만해요.",
      "sources": [
        {
          "label": "생강·위 운동과 증상 소규모 인체 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/21218090/"
        }
      ],
      "relatedProducts": [
        {
          "id": "74",
          "label": "이 원료가 들어간 제품은?"
        }
      ]
    }
  ],
  "bowel": [
    {
      "question": "차전자피를 고를 때, 왜 물도 함께 봐야 할까요?",
      "answer": "차전자피는 물을 흡수해 부풀고 점성이 있는 젤을 만들어요. 이 젤이 변에 수분과 부피를 더하는 성질이 배변활동과 연결됩니다. 제품 표시사항에 맞춰 물과 함께 섭취하는 이유도 여기에 있어요.",
      "sources": [
        {
          "label": "차전자피의 수분 흡수와 섭취 방법 · MedlinePlus",
          "url": "https://medlineplus.gov/druginfo/meds/a601104.html"
        }
      ],
      "relatedProducts": [
        {
          "id": "fib",
          "label": "이 식이섬유를 담은 제품은?"
        }
      ]
    },
    {
      "question": "장내균의 먹이가 되는 섬유와 물을 잡는 섬유는 같을까요?",
      "answer": "이눌린은 장내 미생물에 의해 잘 발효되는 성질이, 차전자피는 점성 젤로 물을 붙잡는 성질이 두드러져요. 발효 과정에서는 가스가 생길 수 있어서, 배변과 복부 팽만을 함께 고민한다면 식이섬유의 종류도 살펴볼 만해요.",
      "sources": [
        {
          "label": "차전자피·이눌린의 점성·발효 인체 연구",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8995815/"
        }
      ],
      "relatedProducts": [
        {
          "id": "fib",
          "label": "물과 만나는 식이섬유, 제품은?"
        }
      ]
    }
  ],
  "skin": [
    {
      "question": "먹는 콜라겐 연구에서는 왜 피부의 보습인자를 볼까요?",
      "answer": "각질층에는 수분을 붙잡는 천연보습인자가 있어요. 특정 콜라겐 펩타이드의 인체 연구에서 이 인자가 늘어나는 변화가 관찰돼, 피부 보습과 연결해 설명합니다. 보습 원료를 고를 때 콜라겐의 종류와 섭취 조건도 함께 살펴보는 이유예요.",
      "sources": [
        {
          "label": "콜라겐 펩타이드·천연보습인자 별도 원료 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/33774639/"
        }
      ],
      "relatedProducts": [
        {
          "id": "col",
          "label": "이 보습 성분을 담은 제품은?"
        }
      ]
    },
    {
      "question": "비타민C는 피부를 받치는 콜라겐과 어떤 관계일까요?",
      "answer": "콜라겐은 피부의 지지 구조를 이루는 단백질이에요. 비타민C는 콜라겐 사슬을 안정시키는 효소가 작용하는 데 필요합니다. 피부 성분을 비교할 때 비타민C를 단순한 항산화라는 말보다 콜라겐 합성과 연결해 보는 이유예요.",
      "sources": [
        {
          "label": "비타민C와 콜라겐 합성 · NIH ODS",
          "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
        }
      ],
      "relatedProducts": [
        {
          "id": "64",
          "label": "피부를 위한 성분 조합은?"
        }
      ]
    }
  ],
  "hair": [
    {
      "question": "머리카락의 굵기와 케라틴은 어떤 관계일까요?",
      "answer": "케라틴은 모발을 이루는 주요 단백질이에요. 특정 아누카사과 추출물 연구는 모발 변화와 함께 케라틴 생성을 살펴봤고, 동물 모낭 실험에서는 아미노산을 케라틴 합성에 활용하는 대사 변화가 관찰됐어요. 이런 연구를 볼 때는 어떤 추출물과 조건으로 시험했는지가 중요해요.",
      "sources": [
        {
          "label": "특정 아누카사과 추출물·모발 인체 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/28956697/"
        },
        {
          "label": "아누카사과 추출물·모낭 대사 동물 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30279339/"
        }
      ],
      "relatedProducts": [
        {
          "id": "59",
          "label": "이 사과 성분을 담은 제품은?"
        }
      ]
    },
    {
      "question": "비오틴을 많이 먹으면 머리카락도 더 자랄까요?",
      "answer": "비오틴이 부족하면 모발 탈락이 생길 수 있어요. 하지만 결핍이 없는 사람이 더 먹었을 때 모발 성장이 늘어난다는 근거는 제한적입니다. 모발 영양 제품을 볼 때 함량의 크기뿐 아니라 부족한 영양이 무엇인지 함께 살펴볼 이유예요.",
      "sources": [
        {
          "label": "비오틴의 역할과 모발 연구 범위 · NIH ODS",
          "url": "https://ods.od.nih.gov/factsheets/Biotin-HealthProfessional/"
        }
      ],
      "relatedProducts": [
        {
          "id": "59",
          "label": "모발을 위한 성분 조합은?"
        }
      ]
    }
  ],
  "change": [
    {
      "question": "식물성 이소플라본이 왜 중년 여성의 변화와 연결될까요?",
      "answer": "이소플라본은 에스트로겐과 구조가 비슷해 일부 수용체와 상호작용해요. 이 성질 때문에 갱년기 변화를 대상으로 연구하지만, 증상 완화 결과가 일관되지는 않습니다. 식물성이라는 표현보다 어떤 원료와 경로를 말하는지 보는 게 중요해요.",
      "sources": [
        {
          "label": "레드클로버·이소플라본 연구 범위 · NCCIH",
          "url": "https://www.nccih.nih.gov/health/red-clover"
        }
      ],
      "relatedProducts": [
        {
          "id": "rfq",
          "label": "이 식물 성분을 담은 제품은?"
        }
      ]
    },
    {
      "question": "중년 여성의 변화와 일상 피로는 왜 나눠서 볼까요?",
      "answer": "에스트로겐 신호와 관련된 변화와 영양 부족으로 인한 에너지 이용 문제는 구분해서 봐야 해요. 마그네슘과 비타민B군은 정상적인 신경·근육 기능과 에너지 대사에 관여합니다. 제품 안에서도 식물 원료와 영양소의 역할을 나눠 보면 구성을 이해하기 쉬워요.",
      "sources": [
        {
          "label": "마그네슘의 역할 · NIH ODS",
          "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
        },
        {
          "label": "비타민B1과 에너지 대사 · NIH ODS",
          "url": "https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/"
        }
      ],
      "relatedProducts": [
        {
          "id": "rfq",
          "label": "이 성분들을 함께 담은 제품은?"
        }
      ]
    }
  ],
  "sleep": [
    {
      "question": "멜라토닌은 왜 수면의 시간 신호라고 할까요?",
      "answer": "멜라토닌은 몸에 밤이 왔다는 정보를 전달하며 생체시계와 연결돼요. 잠드는 시점과 수면 리듬을 설명할 때 등장하는 이유입니다. 식물 유래 원료를 볼 때도 이름만으로 판단하기보다 실제 표시된 성분과 섭취량을 살펴보세요.",
      "sources": [
        {
          "label": "멜라토닌과 생체시계 · NCCIH",
          "url": "https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know"
        }
      ],
      "relatedProducts": [
        {
          "id": "54",
          "label": "잠의 리듬, 관련 제품은?"
        }
      ]
    },
    {
      "question": "잠들기 전 긴장을 푸는 것과 수면 리듬을 맞추는 것은 같을까요?",
      "answer": "긴장으로 쉬기 어려운 상태와 잠드는 시간대가 밀린 상태는 구분해서 볼 수 있어요. 락티움의 특정 펩타이드는 신경 흥분을 억제하는 GABA-A 관련 원료 실험에서, 멜라토닌은 생체시계의 시간 신호에서 살펴보는 성분이에요. 두 역할을 나누면 수면 관련 배합을 이해하기 쉬워집니다.",
      "sources": [
        {
          "label": "알파카소제핀·GABA-A 원료 실험",
          "url": "https://faseb.onlinelibrary.wiley.com/doi/full/10.1096/fj.00-0685fje"
        },
        {
          "label": "멜라토닌과 생체시계 · NCCIH",
          "url": "https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know"
        }
      ],
      "relatedProducts": [
        {
          "id": "54",
          "label": "이 성분들을 함께 담은 제품은?"
        }
      ]
    }
  ],
  "throat": [
    {
      "question": "목·가래 이야기에는 왜 뮤신이 등장할까요?",
      "answer": "뮤신은 기도 표면을 덮는 점액의 주요 성분이에요. 도라지 추출물과 일부 사포닌의 세포·동물 연구에서는 뮤신 생성·분비의 변화가 관찰됐어요. 원료를 볼 때 도라지의 양과 함께 어떤 성분·추출물을 시험했는지도 살펴보게 되는 이유예요.",
      "sources": [
        {
          "label": "도라지 성분·기도 뮤신 세포·동물 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/24290472/"
        }
      ],
      "relatedProducts": [
        {
          "id": "72",
          "label": "도라지 성분을 담은 제품은?"
        }
      ]
    },
    {
      "question": "코·목의 불편함과 알레르기성 염증은 어떻게 이어질까요?",
      "answer": "알레르기성 염증은 점액 분비 등과 연결되는 원인 중 하나예요. 특정 삼백초 추출물의 동물 연구도 염증 신호와 점액 과다 생성을 살펴봤습니다. 삼백초라는 이름이 같아도 추출 방식과 성분 구성이 다를 수 있어요.",
      "sources": [
        {
          "label": "특정 삼백초 추출물·기도 염증 동물 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/33024647/"
        }
      ],
      "relatedProducts": [
        {
          "id": "77",
          "label": "이 식물 성분을 담은 제품은?"
        }
      ]
    }
  ],
  "vessel": [
    {
      "question": "혈압·혈당·콜레스테롤은 왜 성분을 따로 볼까요?",
      "answer": "혈관 건강이라는 말 안에서도 관리할 지표와 성분의 역할은 달라요. 코엔자임Q10은 혈관 이완 관련 연구, 바나바잎은 포도당의 세포 유입 연구, 홍국은 간의 콜레스테롤 합성 경로와 연결됩니다. 필요한 지표를 먼저 정하면 복합 원료의 구성을 비교하기 쉬워요.",
      "sources": [
        {
          "label": "코엔자임Q10·혈관 내피 기능 인체 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/11914748/"
        },
        {
          "label": "코로솔산·포도당 유입 원료 연구",
          "url": "https://pubmed.ncbi.nlm.nih.gov/15256748/"
        },
        {
          "label": "모나콜린K·로바스타틴의 작용 · MedlinePlus",
          "url": "https://medlineplus.gov/druginfo/meds/a688006.html"
        }
      ],
      "relatedProducts": [
        {
          "id": "75",
          "label": "이 성분들을 함께 담은 제품은?"
        }
      ]
    },
    {
      "question": "콜레스테롤은 간에서 만들기도 하고, 장과도 관계있을까요?",
      "answer": "홍국의 모나콜린K는 간에서 콜레스테롤을 만드는 효소에 작용해요. 차전자피는 장내 점성과 담즙산의 재흡수·배설에 관련해 연구됩니다. 같은 콜레스테롤 관리라도 성분이 작용하는 위치와 경로는 다를 수 있어요.",
      "sources": [
        {
          "label": "모나콜린K·로바스타틴의 작용 · MedlinePlus",
          "url": "https://medlineplus.gov/druginfo/meds/a688006.html"
        },
        {
          "label": "차전자피·담즙산 합성 인체 연구",
          "url": "https://www.jlr.org/article/S0022-2275%2820%2940770-9/fulltext"
        }
      ],
      "relatedProducts": [
        {
          "id": "75",
          "label": "간의 경로, 관련 제품은?"
        },
        {
          "id": "fib",
          "label": "장의 경로, 관련 제품은?"
        }
      ]
    }
  ],
  "parents": [
    {
      "question": "부모님 제품은 왜 검진 항목과 복용 중인 약을 함께 볼까요?",
      "answer": "혈압·혈당·콜레스테롤은 서로 다른 관리 항목이라 원료의 역할도 나눠 살펴봐야 해요. 복합 제품에는 홍국·은행잎처럼 복용 중인 약과 함께 확인할 성분도 있습니다. 검진 기록과 약·영양제 목록을 함께 확인하면 원료가 겹치는지도 비교하기 쉬워요.",
      "sources": [
        {
          "label": "더블러드 제품 원료·주의사항 표시정보",
          "url": "https://xn--in2b81owrpjjc.com/product/detail.html?product_no=75"
        }
      ],
      "relatedProducts": [
        {
          "id": "75",
          "label": "이 성분 조합의 제품은?"
        }
      ]
    },
    {
      "question": "배변과 콜레스테롤 고민이 같은 식이섬유와 연결될 수 있을까요?",
      "answer": "차전자피는 물을 머금는 젤을 만들어 변의 수분·부피와 연결돼요. 콜레스테롤 관리에서는 장내 점성과 담즙산의 재흡수·배설에 관련된 경로를 살펴봅니다. 두 포인트가 같은 원료에 연결되는 이유를 알면 구성을 이해하기 쉬워요.",
      "sources": [
        {
          "label": "차전자피의 수분 흡수와 섭취 방법 · MedlinePlus",
          "url": "https://medlineplus.gov/druginfo/meds/a601104.html"
        },
        {
          "label": "차전자피·담즙산 합성 인체 연구",
          "url": "https://www.jlr.org/article/S0022-2275%2820%2940770-9/fulltext"
        }
      ],
      "relatedProducts": [
        {
          "id": "fib",
          "label": "두 고민에 연결된 제품은?"
        }
      ]
    }
  ]
};
