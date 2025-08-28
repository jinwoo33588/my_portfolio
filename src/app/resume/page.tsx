// components/resume/ResumeBody.tsx
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SKILLS: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  Frontend: ["React", "Next.js (App Router)", "TailwindCSS", "shadcn/ui"],
  Backend: ["Node.js", "Express", "REST API", "JWT"],
  Database: ["MySQL", "Query Tuning", "Indexing"],
  Tools: ["Git/GitHub", "Vercel", "pnpm", "ESLint/Prettier"],
};

export default function ResumeBody() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <Card>
        <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-3xl">Jinwoo Kim</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Full-stack Developer · Node.js / React / MySQL
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link href="mailto:you@example.com" className="underline">you@example.com</Link>
            <span className="text-muted-foreground">·</span>
            <Link href="https://github.com/yourname" target="_blank" rel="noreferrer" className="underline">GitHub</Link>
            <span className="text-muted-foreground">·</span>
            <Link href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="underline">LinkedIn</Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/" className="underline">Portfolio</Link>
            <span className="text-muted-foreground">·</span>
            <Button asChild variant="outline">
              <a href="/resume.pdf" download>PDF 다운로드</a>
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">요약</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          React + Node.js + MySQL 기반의 풀스택 개발자. 인증(JWT), REST API 설계,
          DB 스키마/인덱싱 및 성능 최적화에 관심이 큼. 최근에는 Next.js(App Router),
          Tailwind, shadcn/ui, MDX 중심으로 제품 실험과 포트폴리오를 확장 중.
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">핵심 기술</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([group, list]) => (
            <div key={group} className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{group}</p>
              <div className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <Badge key={item} variant="secondary">{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Experience 1 */}
      <Card>
        <CardHeader className="gap-1">
          <div className="flex items-baseline justify-between gap-4">
            <CardTitle className="text-base font-semibold">개인 프로젝트 – Golf Round & Shot Tracker</CardTitle>
            <span className="text-xs text-muted-foreground">2025.03 – 2025.08</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "Express", "MySQL", "JWT", "Vercel"].map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            React + Node.js + MySQL로 라운드/홀/샷 기록 및 통계 대시보드 구현.
            JWT 인증, Axios 인스턴스 자동 토큰, 서버 집계 통계 API(v1) 설계/구현, Vercel/서버 배포.
          </p>
          <ul className="list-disc pl-5">
            <li>DB 스키마(Users/Rounds/Holes/Shots) 및 인덱스 설계, N+1 개선</li>
            <li>REST API: /rounds, /holes, /shots, /stats(v1) – CRUD 및 조회</li>
            <li>프론트: 라운드 카드/디테일/수정, 홈 최근 라운드, 통계 차트</li>
            <li>보안: 소유권 검증 미들웨어, JWT 만료 처리, 에러 핸들링 일원화</li>
          </ul>
        </CardContent>
        <CardFooter className="flex gap-4 text-sm">
          <Link className="underline" href="/projects/golf-score-app">Case study →</Link>
          <Link className="underline" href="https://github.com/..." target="_blank" rel="noreferrer">Repo</Link>
          <Link className="underline" href="https://..." target="_blank" rel="noreferrer">Live</Link>
        </CardFooter>
      </Card>

      {/* Experience 2 */}
      <Card>
        <CardHeader className="gap-1">
          <div className="flex items-baseline justify-between gap-4">
            <CardTitle className="text-base font-semibold">Text Operator – 토큰 기반 텍스트 계산기</CardTitle>
            <span className="text-xs text-muted-foreground">2024.11 – 2025.02</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind"].map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>문장을 토큰 단위로 조합/연산하는 실험적 UI. Drag & Drop, Pill UI, 기록/복원.</p>
          <ul className="list-disc pl-5">
            <li>토큰 파서/시각화, 이력 기반 재조합, 키보드 우선 UX</li>
            <li>컴포넌트 아키텍처 정리, 재사용 입력 컴포넌트 구축</li>
          </ul>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">학력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <div className="flex items-baseline justify-between">
            <p className="font-medium">Korea University – Computer Science</p>
            <span className="text-xs text-muted-foreground">YYYY – YYYY</span>
          </div>
          <p className="text-muted-foreground">
            캡스톤 디자인: 웹/모바일 애플리케이션 설계/구현, 프로젝트 관리.
          </p>
        </CardContent>
      </Card>

      {/* Etc */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">기타</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <ul className="list-disc pl-5 space-y-1">
            <li>블로그(MDX) – 기술 회고 및 트러블슈팅 정리</li>
            <li>개인 오픈소스 기여(문서/예제/버그 리포트 등)</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
