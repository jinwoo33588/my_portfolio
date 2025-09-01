// app/(sections)/SkillsTools.tsx
"use client";

import { useState, Fragment } from "react";
import Section from "@/components/Section";
import IconTile from "@/components/IconTile";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiShadcnui,
  SiNodedotjs, SiExpress, SiMysql,
  SiGithub, SiVercel, SiFigma, SiNotion,
  SiUnity, SiDotnet,
} from "react-icons/si";

// shadcn/ui components (tooltips & modal)
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const brand = {
  next: "text-black dark:text-white",
  react: "text-[#61DAFB]",
  ts: "text-[#3178C6]",
  tailwind: "text-[#06B6D4]",
  shadcn: "text-white",
  node: "text-[#339933]",
  express: "text-white",
  mysql: "text-[#4479A1]",
  github: "text-white",
  vercel: "text-white",
  figma: "text-[#F24E1E]",
  notion: "text-white",
  unity: "text-white",
  csharp: "text-[#239120]",
};

// 상세 설명 데이터 (툴팁/모달 공용)
const INFO: Record<string, { intro: string; context: string[]; link?: { href: string; label: string } }> = {
  "Next.js": {
    intro: "React 기반 풀스택 프레임워크 (App Router).",
    context: [
      "App Router로 섹션형 페이지 구성 및 SEO 처리",
      "Server/Client Component 혼합, 동적 메타데이터",
      "MDX/이미지 최적화, Vercel 배포"
    ],
    link: { href: "https://nextjs.org", label: "nextjs.org" }
  },
  React: {
    intro: "컴포넌트 기반 UI 라이브러리.",
    context: ["상태 관리와 훅 중심 설계", "재사용 가능한 Card/Modal 컴포넌트 구축", "반응형 레이아웃"]
  },
  TypeScript: {
    intro: "정적 타입으로 안정성 확보.",
    context: ["도메인 타입 정의(라운드/홀/샷)", "API 응답 타입 세이프티", "유틸 제네릭"]
  },
  TailwindCSS: {
    intro: "유틸리티 퍼스트 CSS 프레임워크.",
    context: ["토큰화된 색/간격 스케일", "다크모드 테마", "모바일 우선 반응형"]
  },
  "shadcn/ui": {
    intro: "Radix 기반 접근성 컴포넌트 모음.",
    context: ["Dialog/Tooltip/Dropdown으로 인터랙션", "Form/Badge/Button 일관된 UI", "프로젝트 디자인 토큰 연계"]
  },
  "Node.js": {
    intro: "런타임 & 서버 사이드 구현.",
    context: ["REST API 서버 실행", "비동기 I/O로 요청 처리", "로그/에러 핸들링"]
  },
  Express: {
    intro: "경량 웹 프레임워크.",
    context: ["Auth/JWT 미들웨어", "라운드/홀/샷 라우트 설계", "환경별 설정 분리"]
  },
  MySQL: {
    intro: "관계형 DB & 쿼리 튜닝.",
    context: ["인덱스/조인 최적화", "샷 단위 스키마/정규화", "집계 통계 뷰"]
  },
  GitHub: {
    intro: "버전관리 & 협업.",
    context: ["브랜치 전략(main/v2)", "PR 리뷰 플로우", "Actions로 CI 시도"]
  },
  Vercel: {
    intro: "프론트엔드 호스팅/배포.",
    context: ["환경변수 관리", "프리뷰 배포", "이미지/캐시 최적화"]
  },
  Figma: {
    intro: "UI 와이어프레임/프로토타입.",
    context: ["카드/모달 컴포넌트 시안", "아이콘 그리드 레이아웃", "모바일 우선 설계"]
  },
  Notion: {
    intro: "문서/스펙/ADR 기록.",
    context: ["요구사항/체크리스트", "릴리즈 노트", "스터디 정리"]
  },
  Unity: {
    intro: "게임 엔진(3D/2D).",
    context: ["상태 머신 기반 캐릭터 제어", "Dash 스킬/스태미나", "적 추적 AI(2종)"]
  },
  "C# / .NET": {
    intro: "Unity 스크립팅 & 툴링.",
    context: ["OOP 구조화(플레이어/적/매니저)", "직렬화/데이터 저장", "에디터 스크립트 기본"]
  },
};

// 클릭 가능한 타일(툴팁 + 모달 트리거)
function SkillTile({ label, children }: { label: keyof typeof INFO; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const data = INFO[label];
  return (
    <Fragment>
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setOpen(true)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen(true); }}
              className="outline-none"
              aria-label={`${label} 상세 보기`}
              title={data.intro}
            >
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[240px] text-sm">
            <div className="font-medium mb-1">{label}</div>
            <p className="text-muted-foreground">{data.intro}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle>{label}</DialogTitle>
            <DialogDescription className="!mt-1">{data.intro}</DialogDescription>
          </DialogHeader>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {data.context.map((c, i) => (<li key={i}>{c}</li>))}
          </ul>
          {data.link && (
            <a
              href={data.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm underline text-muted-foreground hover:text-foreground"
            >
              {data.link.label}
            </a>
          )}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default function SkillsTools() {
  return (
    <Section
      id="skills"
      zebra={["dark","muted"]}
      index={2}
      eyebrow="Skills"
      title="Skill & Tools"
      subtitle="프로젝트와 포트폴리오에서 실제로 사용한 기술 스택"
      showLine
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* FrontEnd */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">FrontEnd</h3>
          <div className="flex flex-wrap gap-3">
            <SkillTile label="Next.js">
              <IconTile title="Next.js"><SiNextdotjs className={`text-2xl ${brand.next}`} /></IconTile>
            </SkillTile>
            <SkillTile label="React">
              <IconTile title="React"><SiReact className={`text-2xl ${brand.react}`} /></IconTile>
            </SkillTile>
            <SkillTile label="TypeScript">
              <IconTile title="TypeScript"><SiTypescript className={`text-2xl ${brand.ts}`} /></IconTile>
            </SkillTile>
            <SkillTile label="TailwindCSS">
              <IconTile title="TailwindCSS"><SiTailwindcss className={`text-2xl ${brand.tailwind}`} /></IconTile>
            </SkillTile>
            <SkillTile label="shadcn/ui">
              <IconTile title="shadcn/ui"><SiShadcnui className={`text-2xl ${brand.shadcn}`} /></IconTile>
            </SkillTile>
          </div>
        </div>

        {/* Backend / Tools */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Backend · Tools</h3>
          <div className="flex flex-wrap gap-3">
            <SkillTile label="Node.js">
              <IconTile title="Node.js"><SiNodedotjs className={`text-2xl ${brand.node}`} /></IconTile>
            </SkillTile>
            <SkillTile label="Express">
              <IconTile title="Express"><SiExpress className={`text-2xl ${brand.express}`} /></IconTile>
            </SkillTile>
            <SkillTile label="MySQL">
              <IconTile title="MySQL"><SiMysql className={`text-2xl ${brand.mysql}`} /></IconTile>
            </SkillTile>
            <SkillTile label="GitHub">
              <IconTile title="GitHub"><SiGithub className={`text-2xl ${brand.github}`} /></IconTile>
            </SkillTile>
            <SkillTile label="Vercel">
              <IconTile title="Vercel"><SiVercel className={`text-2xl ${brand.vercel}`} /></IconTile>
            </SkillTile>
            <SkillTile label="Figma">
              <IconTile title="Figma"><SiFigma className={`text-2xl ${brand.figma}`} /></IconTile>
            </SkillTile>
            <SkillTile label="Notion">
              <IconTile title="Notion"><SiNotion className={`text-2xl ${brand.notion}`} /></IconTile>
            </SkillTile>
          </div>
        </div>

        {/* Game Dev */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Game Dev</h3>
          <div className="flex flex-wrap gap-3">
            <SkillTile label="Unity">
              <IconTile title="Unity"><SiUnity className={`text-2xl ${brand.unity}`} /></IconTile>
            </SkillTile>
            <SkillTile label="C# / .NET">
              <IconTile title="C# / .NET"><SiDotnet className={`text-2xl ${brand.csharp}`} /></IconTile>
            </SkillTile>
          </div>
          {/* <p className="mt-2 text-sm text-muted-foreground">
            HaginGame — 상태 머신 기반 캐릭터 제어, HP-속도 연동, Dash 스킬, 적 추적 AI(2종)
          </p> */}
        </div>
      </div>
    </Section>
  );
}
