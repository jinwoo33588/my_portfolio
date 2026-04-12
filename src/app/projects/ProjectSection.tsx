import Section from "@/components/Section";
import ProjectsGrid from "./ProjectGrid"; // 기존 카드 그리드

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      zebra={["dark", "muted"]}
      index={3}
      eyebrow="Projects"
      title="All Projects"
      subtitle=""
      showLine
    >
      <ProjectsGrid />
    </Section>
  );
}
