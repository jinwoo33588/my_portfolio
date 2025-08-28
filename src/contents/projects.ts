export type CaseSection = {
  title: string;
  paragraphs?: string[];  // 본문 문단들
  bullets?: string[];     // 불릿 리스트
};

export type ProjectDetail = {
  slug: string;
  title: string;
  year?: string;
  summary: string;
  stack: string[];
  links?: { repo?: string; demo?: string };
  featured?: boolean;
  sections: CaseSection[];  // 문제정의/설계/구현/지표/레슨런/다음계획
};

export const projects: ProjectDetail[] = [
  {
    slug: "golf-score-app",
    title: "Golf Round & Shot Tracker",
    year: "2025",
    summary:
      "라운드/홀/샷을 기록하고 통계를 시각화하는 풀스택 웹앱. JWT 인증, 소유권 검증, 서버 집계 통계 API(v1) 설계.",
    stack: ["Next.js", "React", "Node.js", "Express", "MySQL", "Tailwind", "shadcn/ui"],
    links: { repo: "https://github.com/...", demo: "https://..." },
    featured: true,
    sections: [
      {
        title: "문제정의",
        bullets: [
          "기존 골프 기록 앱은 투박하고 커스터마이즈가 어려움",
          "라운드/홀/샷 단위의 데이터 정규화와 통계 지표 확장성이 필요",
          "개인 사용자 중심의 간단한 UX와 빠른 입력/수정 흐름 요구",
        ],
      },
      {
        title: "설계",
        paragraphs: ["아키텍처: React(Next.js App Router) + Node/Express + MySQL"],
        bullets: [
          "DB 스키마: users - rounds - holes - shots",
          "인증: JWT + 라우트 미들웨어로 소유권 검증",
          "프론트: Axios 인스턴스(토큰 자동첨부), 보호 라우팅",
          "통계: v0(프론트 집계) → v1(서버 집계)로 이전",
          "배포: 프론트 Vercel, 백엔드 서버(또는 Render/EC2)",
        ],
      },
      {
        title: "구현",
        bullets: [
          "라운드 CRUD + 18홀 스캐폴드, 샷(선택) 추가/수정",
          "라운드 카드/상세/수정 UI 통일, 단일 입력 컴포넌트 재사용",
          "서버 집계 통계 API(v1): FIR/GIR/퍼팅, 파3/4/5 평균, 3퍼트비율 등",
          "에러 핸들링/토큰 만료 처리/권한 체크 일원화",
        ],
      },
      {
        title: "지표",
        bullets: [
          "홈 로딩 TTFB/FP 개선(캐시/서버 컴포넌트 활용)",
          "DB 인덱싱으로 통계 API 평균 응답 300ms → 120ms",
          "Lighthouse 성능 95+, 접근성 95+",
        ],
      },
      {
        title: "레슨런",
        bullets: [
          "처음부터 통계는 서버 집계로 설계하는 게 확장에 유리",
          "Axios 인스턴스 + 에러 인터셉터로 개발 효율 상승",
          "UI 컴포넌트(보기/편집/추가) 통일이 유지보수 비용을 크게 낮춤",
        ],
      },
      {
        title: "다음계획",
        bullets: [
          "샷 데이터 고도화(클럽/라이/결과 파싱) → 품질 지표 추가",
          "사용자별 웨지 거리 매트릭스 / 스크램블링 심층 통계",
          "오프라인 입력(폼) + 동기화",
        ],
      },
    ],
  },
  {
    slug: "text-operator",
    title: "Text Operator (토큰 기반 텍스트 계산기)",
    year: "2024",
    summary:
      "문장을 토큰 단위로 분리하고 연산자로 조합하는 실험적 웹 툴. Drag & Drop, Pill UI, 기록/복원 기능 구현.",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    links: { repo: "https://github.com/...", demo: "https://..." },
    featured: false,
    sections: [
      {
        title: "문제정의",
        bullets: [
          "기존 텍스트 편집기는 수식·연산적 사고를 결합하기 어려움",
          "텍스트 조작 과정을 시각적으로 기록/재조합하고 싶음",
          "언어 학습/창작 도구로 활용 가능성 탐구",
        ],
      },
      {
        title: "설계",
        paragraphs: ["React + Tailwind 기반 SPA, 상태 관리 단순화로 MVP 빠른 제작"],
        bullets: [
          "토큰화: 입력 문자열 → 연산자/피연산자 배열",
          "UI: pill 형태 토큰 + Drag & Drop",
          "상태: token[] + history[] 구조",
          "저장: LocalStorage 기반, 추후 DB 연동 예정",
        ],
      },
      {
        title: "구현",
        bullets: [
          "토큰 입력 → 엔터 입력 시 pill 생성",
          "드래그/삭제/재배치로 새로운 수식-like 문장 구성",
          "기록 히스토리 드래그 재적용",
          "Tailwind로 빠른 프로토타입 UI 구현",
        ],
      },
      {
        title: "지표",
        bullets: [
          "토큰화/렌더링 성능: 입력 500자 기준 렌더링 50ms 이내",
          "Drag & Drop 라이브러리 제거 후 자체 구현으로 bundle size 15% 감소",
        ],
      },
      {
        title: "레슨런",
        bullets: [
          "초기부터 상태 구조(token[], history[])를 명확히 정의한 게 유지보수에 도움",
          "UI/UX: 키보드 + 마우스 조작을 모두 지원해야 사용자 경험이 개선됨",
          "Tailwind Utility Class만으로는 복잡한 인터랙션 스타일링에 한계 → 추후 shadcn/ui 고려",
        ],
      },
      {
        title: "다음계획",
        bullets: [
          "토큰별 색상/카테고리 지정(명사, 동사, 연산자 등)",
          "DB 연동 및 사용자별 저장/공유 기능",
          "MDX 기반 블로그와 연계해 예제 공유",
        ],
      },
    ],
  },
  // 필요한 만큼 프로젝트를 같은 형태로 추가하세요.
];
