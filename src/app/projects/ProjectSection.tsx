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
      subtitle="제가 작업한 모든 프로젝트 카드입니다. 클릭하면 케이스 스터디 상세로 이동해요."
      showLine
    >
      <ProjectsGrid />
    </Section>
  );
}
