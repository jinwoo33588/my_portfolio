// Server Component

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


const INTERESTS = [
  "풀스택 웹(Next.js · React · Node.js)",
  "MySQL 스키마/인덱스/튜닝",
  "UI/UX 실험(토큰화 인터페이스)",
  "스포츠 데이터 분석(골프 라운드/샷)",
];



export default function AboutFull() {
  return (
    <section className="space-y-8">
      {/* Profile */}
      {/* ... */}

      {/* Interests + Timeline (2열 배치) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Interests */}
        <Card>
          <CardHeader><CardTitle className="text-xl">관심 분야</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              {INTERESTS.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader><CardTitle className="text-xl">타임라인</CardTitle></CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">2025 – 포트폴리오 프로젝트</p>
              <p className="mt-1">Next.js 기반 개인 포트폴리오 사이트 구축</p>
            </div>
            <div>
              <p className="font-medium text-foreground">2025 – 개인 프로젝트</p>
              <p className="mt-1">골프 라운드/샷 기록 풀스택 웹앱 (React + Node.js + MySQL)</p>
            </div>
            <div>
              <p className="font-medium text-foreground">2024 – 언어/도구 실험</p>
              <p className="mt-1">Text Operator(토큰 기반 텍스트 계산기) 프로토타입</p>
            </div>
            <div>
              <p className="font-medium text-foreground">2021 ~ – Computer Science</p>
              <p className="mt-1">Korea University</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Links */}
      <Card>
        <CardHeader><CardTitle className="text-xl">링크</CardTitle></CardHeader>
        <CardContent className="flex flex-wrap gap-4 text-sm">
          <Link href="mailto:you@example.com" className="underline">Email</Link>
          <Link href="https://github.com/yourname" target="_blank" className="underline">GitHub</Link>
          <Link href="https://www.linkedin.com/in/yourname" target="_blank" className="underline">LinkedIn</Link>
          <Link href="/resume" className="underline">Resume</Link>
        </CardContent>
      </Card>
    </section>
  );
}
