// Server Component

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const INTERESTS = [
  "풀스택 웹 · Next.js/React/Node.js (제품 아이디어를 서비스로 구현)",
  "데이터베이스 설계 · MySQL 스키마/인덱스/쿼리 튜닝",
  "UI/UX 실험 · 토큰화 인터페이스·인터랙션 디자인",
  "데이터 파이프라인/분석 · 골프 라운드·샷 레벨 모델링",
  "배포/운영 · Vercel·Render·Railway·CI/CD",
  "게임 개발 · Unity/C# (상태 머신, 추적 AI, Dash)", 
];


const TIMELINE = [
  {
    period: "2025",
    title: "포트폴리오 프로젝트",
    desc: "Next.js 기반 개인 포트폴리오 구축 및 컴포넌트 라이브러리화",
  },
  {
    period: "2025",
    title: "개인 프로젝트",
    desc: "골프 라운드/샷 기록 풀스택 웹앱 (React + Node.js + MySQL)",
  },
  {
    period: "2025",
    title: "캡스톤 프로젝트",
    desc: "Text Operator — 토큰 기반 텍스트 계산기 설계/구현",
  },
  {
    period: "2024",
    title: "Unity 게임 프로젝트",
    desc: "HaginGame — 적 추적 AI(2종), HP 기반 속도 변화, Dash 스킬 구현", // ← NEW
  },
  {
    period: "2023.08–2024.07",
    title: "인턴",
    desc: "KJ&투자파트너스 — 리서치/프로토타입 제작 보조",
  },
  {
    period: "2018–2025",
    title: "학부",
    desc: "Korea University — Computer Science",
  },
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
  <CardHeader>
    <CardTitle className="text-xl">관심 분야</CardTitle>
  </CardHeader>
  <CardContent className="flex flex-wrap gap-2">
    {INTERESTS.map((i) => (
      <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">
        {i}
      </Badge>
    ))}
  </CardContent>
</Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">타임라인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            {TIMELINE.map((t) => (
              <div key={t.period + t.title}>
                <p className="font-medium text-foreground">
                  {t.period} – {t.title}
                </p>
                <p className="mt-1">{t.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      
      {/* Links */}
      {/* <div className="flex gap-4 text-muted-foreground">
        <Link href="mailto:you@example.com"><Mail className="w-5 h-5 hover:text-blue-500" /></Link>
        <Link href="https://github.com/jinwoo33588" target="_blank"><Github className="w-5 h-5 hover:text-gray-800" /></Link>
        <Link href="https://www.linkedin.com/in/yourname" target="_blank"><Linkedin className="w-5 h-5 hover:text-blue-600" /></Link>
        <Link href="/resume"><FileText className="w-5 h-5 hover:text-green-600" /></Link>
      </div> */}
    </section>
  );
}
