import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";

const SKILLS = [
  "Next.js(App Router)", "React", "TypeScript",
  "Node.js", "Express", "MySQL",
  "TailwindCSS", "shadcn/ui", "MDX",
];

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      zebra={["dark","muted"]}
      index={2}
      eyebrow="Skills"
      title="Skills Snapshot"
      subtitle="프로젝트에서 자주 사용한 기술"
      showLine
    >
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((s) => (
          <Badge key={s} variant="secondary" className="text-base px-3 py-1.5">
            {s}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
