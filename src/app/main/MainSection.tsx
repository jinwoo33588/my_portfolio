import Link from "next/link";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ZEBRA } from "@/lib/sectionTheme";
import { Badge } from "@/components/ui/badge";

const STACK = ["Next.js", "React", "Node.js", "MySQL", "Tailwind", "shadcn/ui", "MDX"];

export default function MainSection() {
  return (
    <Section
      id="main"
      zebra={ZEBRA}
      index={0}
      eyebrow="Welcome"
      title="안녕하세요, 김진우입니다."
      subtitle="Node.js + React + MySQL 기반 풀스택. 요즘은 Next.js, Tailwind, shadcn/ui, MDX에 집중합니다."
      showLine
    >
      <div className="flex flex-wrap gap-3">
      <div className="mt-3 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </div>
        {/* <Button asChild size="lg"><Link href="#about">About</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="#projects">Projects</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="#resume">Resume</Link></Button> */}
      </div>
    </Section>
  );
}
