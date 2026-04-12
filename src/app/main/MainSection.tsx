import Section from "@/components/Section";

import { ZEBRA } from "@/lib/sectionTheme";
import { Badge } from "@/components/ui/badge";

const STACK = [
  "Next.js",
  "React",
  "Node.js",
  "MySQL",
  "Tailwind",
  "shadcn/ui",
  "MDX",
  "Unity",
  "C#",
  ".NET",
];

export default function MainSection() {
  return (
    <Section
      id="main"
      zebra={ZEBRA}
      index={0}
      eyebrow="Welcome"
      title="안녕하세요, 김진우입니다."
      subtitle={
        <>
          아이디어를 실제 서비스로 구현하는 풀스택 개발자입니다.
          <br />
          Node.js · React · MySQL을 기반으로, 최근에는 Next.js · Tailwind ·
          shadcn/ui로 UI/UX를 고도화하고 있습니다.
        </>
      }
      showLine
    >
      <div className="flex flex-wrap gap-3">
        <div className="mt-3 flex flex-wrap gap-2">
          {STACK.map((s) => (
            <Badge key={s} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
