export type TroubleCase = {
  title: string;       // 문제 상황 제목
  problem: string;     // 문제점 설명
  solution: string;    // 해결 방법
  reflection?: string; // 회고/배운 점
};

export type CaseSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  troubles?: TroubleCase[]; // Trouble Shooting일 경우만 사용
};

export type ProjectDetail = {
  slug: string;
  title: string;
  year?: string;
  summary: string;
  stack: string[];
  links?: { repo?: string; demo?: string };
  featured?: boolean;
  sections: CaseSection[];
};

export const projects: ProjectDetail[] = [
  {
    slug: "portfolio-site",
    title: "개인 포트폴리오 사이트",
    year: "2025",
    summary:
      "Next.js(App Router) + Tailwind + shadcn/ui 기반 포트폴리오. Section 토큰 설계, 공식 아이콘 타일, 오른쪽 하단 플로팅 버튼 등 최신 프론트엔드 패턴 적용.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
    links: {
      repo: "https://github.com/jinwoo33588/my_portfolio.git",
      demo: "my-portfolio-kskp.vercel.app",
    },
    featured: true,
    sections: [
      {
        title: "개요",
        bullets: [
          "개발 역량과 프로젝트를 한눈에 보여주는 단일 포트폴리오 사이트 필요",
          "다크 테마 환경에서도 가독성과 정보 밀도를 유지하는 UI 요구",
          "섹션 기반 구조로 쉽게 추가·수정 가능해야 함",
        ],
      },
      {
        title: "설계 & 구현",
        bullets: [
          "아키텍처: Next.js(App Router) + TailwindCSS + shadcn/ui",
          "UI 토큰화: Section 컴포넌트(eyebrow/title/subtitle/zebra)",
          "Skill & Tools: IconTile 컴포넌트(둥근 블러 타일 + react-icons 공식 로고)",
          "SocialFloat: 이메일·GitHub·Resume + ScrollToTop 버튼 항상 표시",
          "프로젝트 데이터: contents/projects에 JSON 기반 정의 → 카드/상세 자동 반영",
          "접근성: aria-label/sr-only, 포커스 링, 대비 체크",
          "배포: Vercel Preview URL로 QA/검수",
        ],
      },
      {
        title: "Trouble Shooting",
        troubles: [
          {
            title: "App Router Client/Server 혼합 오류",
            problem: "서버 컴포넌트에 onClick 핸들러를 넘겨 'Event handlers cannot be passed…' 에러 발생",
            solution: "클라이언트 컴포넌트로 분리하여 이벤트 전달",
            reflection: "Next.js App Router 구조를 이해하고 SSR/CSR를 구분하는 능력을 기름",
          },
          {
            title: "아이콘 색상 문제",
            problem: "react-icons가 다크 모드에서 전부 흰색으로 표시",
            solution: "아이콘마다 브랜드 컬러 클래스를 직접 매핑",
            reflection: "공식 컬러를 직접 지정하는 것이 UI 완성도를 높임",
          },
          {
            title: "빌드 경고 (ESM)",
            problem: "postcss.config.js ESM 경고 발생",
            solution: "package.json에 `type: module` 추가해 해결",
            reflection: "빌드 로그를 무시하지 않고 초기에 해결해야 배포 안정성이 보장됨",
          },
        ],
      },
      {
        title: "성과",
        bullets: [
          "Section/Tile 구조 설계로 새로운 프로젝트/스킬 추가 시 UI 수정 없이 반영 가능",
          "코드 스플리팅(섹션 단위) → 초기 로드 성능 개선",
          "이미지/폰트 최적화로 첫 페인트 안정화",
        ],
      },
      {
        title: "레슨런 & 다음계획",
        bullets: [
          "컴포넌트 토큰화를 초기에 정의하면 유지보수와 확장에 큰 장점",
          "CTA(연락/깃허브)는 항상 보이도록 배치해 탐색 피로 감소",
          "향후: MDX 기반 케이스 스터디 문서화, i18n 지원, 섹션 가시성 애널리틱스 도입",
        ],
      },
    ],
  },

  {
    slug: "golf-score-app",
    title: "Golf Round & Shot Tracker",
    year: "2025",
    summary:
      "라운드/홀/샷 단위 기록 및 통계 시각화를 제공하는 풀스택 웹앱. JWT 인증, 소유권 검증, 서버 집계 통계 API(v1), MySQL 인덱스 튜닝 경험 포함.",
    stack: ["Next.js", "React", "Node.js", "Express", "MySQL", "Tailwind", "shadcn/ui"],
    links: {
      repo: "https://github.com/jinwoo33588/golf-score-app.git",
      demo: "golf-score-app-v2.vercel.app",
    },
    featured: true,
    sections: [
      {
        title: "개요",
        bullets: [
          "기존 골프 기록 앱은 확장성 부족·입력 흐름 복잡",
          "라운드→홀→샷 정규화 데이터와 직관적 UX 제공",
        ],
      },
      {
        title: "설계 & 구현",
        bullets: [
          "아키텍처: Next.js(App Router) + Node/Express + MySQL",
          "DB 설계: users-rounds-holes-shots 3계층, 외래키 및 인덱스 튜닝",
          "인증: JWT 토큰, 미들웨어에서 라운드 소유권 검증",
          "프론트엔드: Axios 인스턴스에 토큰 자동 첨부, 401 응답 인터셉터 처리",
          "주요 기능: 라운드 생성 시 18홀 scaffold 자동 생성, 샷 CRUD, 통계 대시보드",
          "UI: RoundCard/Detail/Edit 단일 입력 컴포넌트 재사용으로 코드 중복 제거",
          "통계 API(v1): FIR/GIR/퍼팅, 파3/4/5 평균, 더블 이상 비율 제공",
        ],
      },
      {
        title: "Trouble Shooting",
        troubles: [
          {
            title: "DB 연결 오류 (ENOTFOUND)",
            problem: "Render 배포 환경에서 MySQL 접속 실패",
            solution: "DB를 Railway로 이전하고 .env 환경 변수를 정리해 접속 안정화",
            reflection: "배포 환경에 맞는 DB 선택과 초기 로깅 설계의 중요성을 학습",
          },
          {
            title: "Sequelize timestamp 충돌",
            problem: "createdAt/updatedAt 자동 컬럼이 DB 스키마와 불일치",
            solution: "ORM을 버리고 mysql2로 마이그레이션, 스키마를 직접 정의",
            reflection: "ORM은 빠르지만 제약이 크다. 상황에 맞는 기술 선택이 필요",
          },
          {
            title: "JWT 만료 처리 누락",
            problem: "만료된 토큰 상태에서 API 요청이 무한 반복",
            solution: "axios 인스턴스에 인터셉터 추가, 401 발생 시 로그인 리다이렉트",
            reflection: "에러 핸들링을 공통 레이어로 모아두면 유지보수성이 크게 향상",
          },
          {
            title: "통계 API 성능 저하",
            problem: "통계 조회 시 조인 과다로 평균 응답 시간이 300ms 이상 발생",
            solution: "인덱스를 추가해 120ms 수준으로 개선",
            reflection: "데이터가 늘어날수록 성능 저하는 필연적, 초기 인덱싱 전략 필요",
          },
        ],
      },
      {
        title: "성과",
        bullets: [
          "DB 인덱싱으로 통계 API 성능 60% 개선",
          "서버 집계 전환으로 클라이언트 렌더링 부하 감소",
          "라운드 입력 속도 기존 대비 30% 이상 단축",
        ],
      },
      {
        title: "레슨런 & 다음계획",
        bullets: [
          "API 버전 관리를 초기에 고려하는 것이 확장성에 유리",
          "UI 컴포넌트 재사용이 유지보수 비용 절감에 효과적",
          "향후: 샷 데이터 고도화(클럽/라이/결과), 웨지 매트릭스, 오프라인 입력/동기화",
        ],
      },
    ],
  },

  {
    slug: "text-operator",
    title: "Text Operator (토큰 기반 텍스트 계산기)",
    year: "2024",
    summary:
      "문장을 토큰 단위로 분리하고 Drag & Drop으로 재조합하는 실험적 텍스트 툴. 상태 설계와 UI/UX 실험을 통해 인터랙션을 연구.",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    links: {
      repo: "https://github.com/jinwoo33588/20251R0136COSE48001.git",
      demo: "20251-r0136-cose-48001-tau.vercel.app",
    },
    featured: false,
    sections: [
      {
        title: "개요",
        bullets: [
          "기존 편집기는 텍스트와 연산적 사고를 결합하기 어려움",
          "토큰 단위 조작을 통해 창작·학습 도구 가능성 탐구",
        ],
      },
      {
        title: "설계 & 구현",
        bullets: [
          "SPA 아키텍처: React + Tailwind + Vite",
          "상태 구조: token[] + history[] 로 입력/변환/복원 흐름 관리",
          "UI: pill 토큰 + Drag & Drop 인터랙션, 엔터 입력 시 토큰 생성",
          "저장: LocalStorage 기반 기록/복원, 추후 DB 연동 고려",
          "UX: 키보드·마우스 병행 조작 지원",
        ],
      },
      {
        title: "Trouble Shooting",
        troubles: [
          {
            title: "Drag & Drop 라이브러리 충돌",
            problem: "외부 D&D 라이브러리가 React 버전 충돌로 불안정",
            solution: "직접 구현으로 교체, 번들 사이즈 15% 축소",
            reflection: "핵심 기능은 직접 구현해 제어권을 가지는 것이 유지보수에 유리",
          },
          {
            title: "긴 입력 성능 저하",
            problem: "500자 이상의 입력 시 렌더링 지연",
            solution: "debounce + React.memo 적용으로 렌더링 50ms 이내 유지",
            reflection: "UX는 성능과 직결됨, 최적화는 필수",
          },
          {
            title: "스타일 관리 혼란",
            problem: "Tailwind 유틸리티 클래스가 난잡해 유지보수 어려움",
            solution: "컴포넌트 추출로 캡슐화, 필요시 shadcn/ui 고려",
            reflection: "Utility-first는 빠르지만 규모가 커지면 컴포넌트 추출이 필수",
          },
        ],
      },
      {
        title: "성과",
        bullets: [
          "토큰화/렌더링 성능: 입력 500자 기준 50ms 이내",
          "Drag&Drop 직접 구현으로 성능 및 의존성 관리 개선",
        ],
      },
      {
        title: "레슨런 & 다음계획",
        bullets: [
          "상태 구조를 초기에 정의하면 유지보수/확장에 유리",
          "UI/UX: 키보드와 마우스를 동시에 고려해야 사용자 만족도 향상",
          "향후: 토큰 카테고리 색상 지정, DB 연동·공유 기능, MDX 블로그 연계",
        ],
      },
    ],
  },
  {
    slug: "hagin-Project",
    title: "Hagin Project (Unity 생존 러너)",
    year: "2024",
    summary:
      "Unity3D 기반 생존 러너 게임. 플레이어는 두 개의 적 추적 AI를 피해 달아나며, HP에 따라 이동 속도가 변하고 Dash 스킬로 긴급 회피가 가능.",
    stack: ["Unity", "C#", "OOP", "State Machine", "Game AI"],
    links: {
      repo: "https://github.com/jinwoo33588/jinwoo33588-20242R0136COSE45700",
      // demo: "https://..." // 데모가 있으면 나중에 추가
    },
    featured: false,
    sections: [
      {
        title: "개요",
        bullets: [
          "Unity3D로 제작한 러너/생존 장르 프로토타입",
          "플레이어는 WASD 이동, 적(Enemy1/Enemy2)의 추적 AI를 피해 생존",
          "HP에 따라 이동 속도가 동적으로 변화, Dash 스킬로 긴급 회피"
        ]
      },
      {
        title: "설계 & 구현",
        bullets: [
          "OOP 구조: `UnitBase`를 공통 베이스로 `PlayerController`/`EnemyController` 상속",
          "상태 제어: Idle/Walk/Run/Dash 상태 전환(입력·스태미나 조건 기반)",
          "스탯 시스템: HP·Stamina·Speed 연동(HP 감소 시 Speed 페널티 적용)",
          "적 AI: 두 종류의 적이 플레이어를 지속 추적(거리 기반 추적/도달 시 충돌 판정)",
          "게임 루프: 충돌 시 HP 감소 → HP=0이면 게임 종료"
        ]
      },
      {
        title: "Trouble Shooting",
        troubles: [
          {
            title: "Dash와 이동 가속도 충돌",
            problem: "Dash 중 기존 이동 로직의 가속도가 중첩되어 예상치 못한 속도 폭증 발생",
            solution: "Dash 시 이동 벡터를 정규화하고, 일정 시간 동안 가속 로직을 비활성화",
            reflection: "능동 스킬은 기본 이동과 별도 타이밍/가중치로 분리 설계해야 안정적"
          },
          {
            title: "HP-속도 연동의 체감 부족",
            problem: "HP가 줄어도 속도 변화가 체감되지 않음(곡선 설계 미흡)",
            solution: "선형에서 지수형 감쇠 커브로 변경해 저HP 구간에서 체감 증대",
            reflection: "게임 체감은 수식보다 커브가 좌우—애니메이션 커브/그래프 도입이 효과적"
          },
          {
            title: "적 추적의 급격한 회전 문제",
            problem: "적이 플레이어를 추적할 때 즉각적인 방향 전환으로 부자연스러운 움직임",
            solution: "회전 속도에 상한을 두고 `Quaternion.Slerp`로 보간",
            reflection: "추적 AI도 물리·애니메이션 관점에서 ‘자연스러움’을 고려해야 몰입도 상승"
          }
        ]
      },
      {
        title: "성과",
        bullets: [
          "상태 머신과 스탯 시스템을 분리 설계하여 캐릭터 로직 확장 용이",
          "간단한 추적 AI로도 ‘압박감’ 연출—핵심 재미 요소 확인",
          "Dash·HP-속도 연동으로 컨트롤 스킬 표현력 확보"
        ]
      },
      {
        title: "레슨런 & 다음계획",
        bullets: [
          "AI 고도화: 네비메시 기반 경로 탐색, 시야각/가청범위 도입",
          "콘텐츠 확장: 아이템(회복/버프), 다양한 적 패턴, 난이도 곡선 설계",
          "UX 개선: HUD(HP/Stamina), 피격 피드백(화면 틴트·카메라 셰이크), 튜토리얼 추가"
        ]
      }
    ]
  }
  
];
