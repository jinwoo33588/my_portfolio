export type SkillGroup = { group: string; items: string[] };

export type EduItem = {
  school: string;
  major?: string;
  period: string; // "2018 – 2025"
};

export type ExpItem = {
  company: string;
  role?: string;
  period: string; // "2023.07 – 2024.08"
};

export type ProjectItem = {
  title: string;
  period: string; // "2025.03 – 2025.08"
  tags: string[];
  summary: string;
  bullets: { label?: string; text: string }[];
};

export type ResumeContent = {
  header: {
    name: string;
    roleLine: string; // "Full-stack Developer · Node.js / React / MySQL"
    email: string;
    githubUrl?: string;
    portfolioUrl?: string;
    pdfHref?: string; // "/resume.pdf" 등
  };
  summary: string;
  skills: SkillGroup[];
  education: EduItem[];
  experience?: ExpItem[];
  projects: ProjectItem[];
};

export const resumeContent: ResumeContent = {
  header: {
    name: "Jinwoo Kim",
    roleLine: "Full-stack Developer · Node.js / React / MySQL",
    email: "jinwoo3358@naver.com",
    githubUrl: "https://github.com/jinwoo33588",
    portfolioUrl: "https://my-portfolio-kskp.vercel.app",
    pdfHref: "/api/resume",
  },
  summary:
    "React + Node.js + MySQL 기반의 풀스택 개발자입니다. 인증/권한 관리, REST API 설계, MySQL 스키마·인덱싱 최적화 경험이 있으며, 실제 프로젝트에서 API 응답 속도 60% 개선(300ms → 120ms), 입력 UX 30% 단축 성과를 달성했습니다. 최근에는 Next.js(App Router), Tailwind, shadcn/ui 기반으로 사용자 경험과 개발 생산성을 동시에 높이는 데 집중하고 있습니다.",
  skills: [
    { group: "Frontend (UI/제품)", items: ["React", "Next.js (App Router)", "TypeScript", "TailwindCSS", "shadcn/ui"] },
    { group: "Backend (API/인증)", items: ["Node.js", "Express", "REST API", "JWT"] },
    { group: "Database (성능)", items: ["MySQL", "스키마 설계", "인덱싱", "쿼리 튜닝"] },
    { group: "Tools", items: ["Git/GitHub", "Vercel", "pnpm", "ESLint/Prettier"] },
  ],
  education: [
    { school: "Korea University", major: "Computer Science", period: "2018 – 2025" },
  ],
  experience: [
    { company: "KJ&투자파트너스", role: "인턴 (Investment/IT Support)", period: "2023.08 – 2024.07" },
  ],
  projects: [
    {
      title: "Golf Round & Shot Tracker",
      period: "2025.07 – 2025.08",
      tags: ["React", "Next.js", "Node.js", "Express", "MySQL", "JWT", "Vercel"],
      summary:
        "라운드/홀/샷 데이터를 기록하고 통계를 제공하는 풀스택 웹앱. JWT 인증과 소유권 검증, 서버 집계 통계 API(v1), MySQL 인덱스 최적화를 통해 실제 사용성과 성능을 개선했습니다.",
      bullets: [
        { label: "설계", text: "App Router FE, Express BE, users/rounds/holes/shots 정규화 스키마" },
        { label: "구현", text: "라운드 생성 시 18홀 scaffold, 샷 CRUD, 통계 대시보드" },
        { label: "성과", text: "통계 API 응답 300ms → 120ms, 기록 UX 30% 단축" },
      ],
    },
    {
      title: "Text Operator – 토큰 기반 텍스트 계산기",
      period: "2025.03 – 2025.06",
      tags: ["React", "TypeScript", "Tailwind"],
      summary:
        "문장을 토큰 단위로 분해·조합하는 실험적 UI. Drag&Drop, Pill UI, 기록/복원 기능을 구현했습니다.",
      bullets: [
        { label: "설계", text: "token[] + history[] 상태 모델, 키보드·마우스 병행 UX" },
        { label: "구현", text: "토큰 파서/시각화, DnD 인터랙션, LocalStorage 기록/복원" },
        { label: "성과", text: "긴 입력 500자 기준 렌더링 ≤ 50ms, 번들 사이즈 15% 축소" },
      ],
    },
    {
      title: "Portfolio Site – Next.js 기반 개인 포트폴리오",
      period: "2025.08 – 현재",
      tags: ["Next.js", "Tailwind", "shadcn/ui", "Vercel"],
      summary:
        "개발 역량과 프로젝트를 정리한 포트폴리오 사이트. Section 컴포넌트, 공식 아이콘 타일, 플로팅 버튼 등 최신 UI 패턴을 적용했습니다.",
      bullets: [
        { label: "구현", text: "JSON 기반 contents/projects → 자동 카드/상세 렌더링 구조" },
        { label: "성과", text: "Lighthouse 성능 95+, 접근성 95+, Vercel CI/CD로 신속한 배포" },
      ],
    },
    {
      title: "Hagin Project – Unity 생존 러너",
      period: "2024.09 – 2024.12",
      tags: ["Unity", "C#", "OOP", "State Machine", "Game AI"],
      summary:
        "Unity3D 기반 러너/생존 게임. 적 추적 AI를 피해 달아나는 플레이, HP 연동 속도 변화와 Dash 스킬 구현.",
      bullets: [
        { label: "설계", text: "UnitBase 상속 구조, 상태 머신 기반 Idle/Walk/Run/Dash" },
        { label: "구현", text: "체력 연동 속도 변화, Dash 스킬, 적 추적 AI(2종)" },
        { label: "성과", text: "플레이어·적 공통 구조 설계로 확장 용이" },
      ],
    },
  ],
};