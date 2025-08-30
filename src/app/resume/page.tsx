import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SKILLS: Record<string, string[]> = {
  "Frontend (UI/제품)": ["React", "Next.js (App Router)", "TypeScript", "TailwindCSS", "shadcn/ui"],
  "Backend (API/인증)": ["Node.js", "Express", "REST API", "JWT"],
  "Database (성능)": ["MySQL", "스키마 설계", "인덱싱", "쿼리 튜닝"],
  "Tools": ["Git/GitHub", "Vercel", "pnpm", "ESLint/Prettier"],
};

export default function ResumeBody() {
  return (
    <article className="mx-auto w-full max-w-3xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Jinwoo Kim</h1>
        <p className="mt-2 text-[15px] text-gray-700">
          Full-stack Developer · Node.js / React / MySQL
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
          <Link href="mailto:jinwoo3358@naver.com" className="underline text-gray-700 hover:text-gray-900">
            jinwoo3358@naver.com
          </Link>
          <span className="text-gray-400">·</span>
          <Link
            href="https://github.com/jinwoo33588"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-700 hover:text-gray-900"
          >
            GitHub
          </Link>
          <span className="text-gray-400">·</span>
          
          <span className="text-gray-400">·</span>
          <Link href="my-portfolio-kskp.vercel.app" className="underline text-gray-700 hover:text-gray-900">
            Portfolio
          </Link>
          <span className="text-gray-400">·</span>
          {/* <Button asChild variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-50">
            <a href="/resume.pdf" download>
              PDF 다운로드
            </a>
          </Button> */}
        </div>
      </header>

      <hr className="border-gray-200 my-6" />

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">요약</h2>
        <p className="mt-3 text-[15px] leading-[1.85] text-gray-700">
          React + Node.js + MySQL 기반의 풀스택 개발자입니다. 인증/권한 관리, REST API 설계,
          MySQL 스키마·인덱싱 최적화 경험이 있으며, 실제 프로젝트에서{" "}
          <span className="font-semibold text-gray-900">API 응답 속도 60% 개선(300ms → 120ms)</span>,
          <span className="font-semibold text-gray-900"> 입력 UX 30% 단축</span> 성과를 달성했습니다.
          최근에는 <strong className="text-gray-900">Next.js(App Router)</strong>,{" "}
          <strong className="text-gray-900">Tailwind</strong>,{" "}
          <strong className="text-gray-900">shadcn/ui</strong> 기반으로
          사용자 경험과 개발 생산성을 동시에 높이는 데 집중하고 있습니다.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">핵심 기술</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([group, list]) => (
            <div key={group}>
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-gray-300 bg-gray-100 text-gray-800"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career & Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">경력 & 학력</h2>
        {/* Education */}
        <div className="mt-6 flex items-baseline justify-between">
          <p className="font-medium text-gray-900">
            Korea University — Computer Science
          </p>
          <span className="text-xs text-gray-500">2018 – 2025</span>
        </div>
        {/* <p className="mt-1 text-[15px] text-gray-700">
          소프트웨어·DB·알고리즘 전공. 캡스톤 디자인으로 토큰 기반 텍스트 계산기 개발,
          웹/모바일 애플리케이션 설계~구현 전 과정 경험.
        </p> */}
        {/* Internship */}
        <div className="mt-4 flex items-baseline justify-between">
          <p className="font-medium text-gray-900">
            KJ&투자파트너스 — 인턴 (Investment/IT Support)
          </p>
          <span className="text-xs text-gray-500">2023.07 – 2024.08</span>
        </div>
        {/* <ul className="mt-2 space-y-1 pl-5">
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            투자 데이터 수집·정리 자동화 보조, 사내 리서치 문서화 지원
          </li>
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            사내 IT 업무 지원 (간단한 웹/DB 관리 및 기술 자료 조사)
          </li>
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            보고 체계·업무 프로세스 경험 → 협업/문서화 역량 강화
          </li>
        </ul> */}
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">프로젝트</h2>
        
        {/* Golf Tracker */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-base font-semibold text-gray-900">
              Golf Round &amp; Shot Tracker
            </h3>
            <time className="text-xs text-gray-500">2025.03 – 2025.08</time>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {["React", "Next.js", "Node.js", "Express", "MySQL", "JWT", "Vercel"].map((t) => (
              <Badge key={t} className="border-gray-300 bg-gray-100 text-gray-800" variant="outline">
                {t}
              </Badge>
            ))}
          </div>
          <p className="mt-3 text-[15px] text-gray-700">
            라운드/홀/샷 데이터를 기록하고 통계를 제공하는 풀스택 웹앱. JWT 인증과 소유권 검증,
            서버 집계 통계 API(v1), MySQL 인덱스 최적화를 통해 실제 사용성과 성능을 개선했습니다.
          </p>
          <ul className="mt-2 space-y-1 pl-5">
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">설계:</span> App Router FE, Express BE,
              users/rounds/holes/shots 정규화 스키마
            </li>
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">구현:</span> 라운드 생성 시 18홀 scaffold, 샷 CRUD, 통계 대시보드
            </li>
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">성과:</span> 통계 API 응답{" "}
              300ms → 120ms, 기록 UX 30% 단축
            </li>
          </ul>
        </div>

        {/* Text Operator */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-base font-semibold text-gray-900">
              Text Operator – 토큰 기반 텍스트 계산기
            </h3>
            <time className="text-xs text-gray-500">2024.11 – 2025.02</time>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind"].map((t) => (
              <Badge key={t} className="border-gray-300 bg-gray-100 text-gray-800" variant="outline">
                {t}
              </Badge>
            ))}
          </div>
          <p className="mt-3 text-[15px] text-gray-700">
            문장을 토큰 단위로 분해·조합하는 실험적 UI. Drag&amp;Drop, Pill UI, 기록/복원 기능을 구현했습니다.
          </p>
          <ul className="mt-2 space-y-1 pl-5">
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">설계:</span> token[] + history[] 상태 모델,
              키보드·마우스 병행 UX
            </li>
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">구현:</span> 토큰 파서/시각화, DnD 인터랙션, LocalStorage 기록/복원
            </li>
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">성과:</span> 긴 입력 500자 기준 렌더링{" "}
              ≤ 50ms, 번들 사이즈 15% 축소
            </li>
          </ul>
        </div>

        {/* Portfolio */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-base font-semibold text-gray-900">
              Portfolio Site – Next.js 기반 개인 포트폴리오
            </h3>
            <time className="text-xs text-gray-500">2025.01 – 2025.03</time>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Next.js", "Tailwind", "shadcn/ui", "Vercel"].map((t) => (
              <Badge key={t} className="border-gray-300 bg-gray-100 text-gray-800" variant="outline">
                {t}
              </Badge>
            ))}
          </div>
          <p className="mt-3 text-[15px] text-gray-700">
            개발 역량과 프로젝트를 정리한 포트폴리오 사이트. Section 컴포넌트, 공식 아이콘 타일,
            플로팅 버튼 등 최신 UI 패턴을 적용했습니다.
          </p>
          <ul className="mt-2 space-y-1 pl-5">
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">구현:</span> JSON 기반 contents/projects →
              자동 카드/상세 렌더링 구조
            </li>
            <li className="list-disc text-[15px] leading-relaxed text-gray-700">
              <span className="font-medium text-gray-900">성과:</span> Lighthouse 성능 95+, 접근성 95+,
              Vercel CI/CD로 신속한 배포
            </li>
          </ul>
        </div>
      </section>

      {/* HaginGame */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base font-semibold text-gray-900">
            Hagin Project – Unity 생존 러너
          </h3>
          <time className="text-xs text-gray-500">2024.09 – 2024.12</time>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Unity", "C#", "OOP", "State Machine", "Game AI"].map((t) => (
            <Badge
              key={t}
              className="border-gray-300 bg-gray-100 text-gray-800"
              variant="outline"
            >
              {t}
            </Badge>
          ))}
        </div>
        <p className="mt-3 text-[15px] text-gray-700">
          Unity3D 기반 러너/생존 게임. 플레이어는 적 두 마리의 추적 AI를 피해 달아나며,
          HP가 줄면 속도가 감소하고 Dash 스킬로 긴급 회피가 가능합니다.
        </p>
        <ul className="mt-2 space-y-1 pl-5">
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            <span className="font-medium text-gray-900">설계:</span> UnitBase 상속 구조,
            상태 머신 기반 Idle/Walk/Run/Dash
          </li>
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            <span className="font-medium text-gray-900">구현:</span> 체력 연동 속도 변화,
            Dash 스킬, 적 추적 AI(2종)
          </li>
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            <span className="font-medium text-gray-900">성과:</span> 플레이어·적 공통 구조 설계로
            확장 용이, 추적 AI와 스킬 시스템 직접 구현 경험 확보
          </li>
        </ul>
      </div>


      {/* Etc */}
      {/* <section className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-900">기타</h2>
        <ul className="mt-3 space-y-1 pl-5">
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            블로그(MDX) – 프로젝트 회고 및 트러블슈팅 기록(App Router SSR/CSR 분리, JWT 만료 처리 등)
          </li>
          <li className="list-disc text-[15px] leading-relaxed text-gray-700">
            오픈소스 기여 – 문서/예제 개선, 버그 리포트
          </li>
        </ul>
      </section> */}
    </article>
  );
}
