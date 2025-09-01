
import Section from "@/components/Section";

import { ZEBRA } from "@/lib/sectionTheme";
import { Badge } from "@/components/ui/badge";

const STACK = ["Next.js", "React", "Node.js", "MySQL", "Tailwind", "shadcn/ui", "MDX","Unity","C#",".NET"];

export default function MainSection() {
  return (
    <Section
      id="main"
      zebra={ZEBRA}
      index={0}
      eyebrow="Welcome"
      title="안녕하세요, 김진우입니다."
      subtitle="풀스택 웹 개발을 통해 아이디어를 서비스로 구현하는 것을 원하고 공부중입니다. Node.js · React · MySQL을 기반으로, 최근에는 Next.js · TailwindCSS · shadcn/ui 등을 활용하고 있습니다."
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
