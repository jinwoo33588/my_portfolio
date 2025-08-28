import MainSection from "@/app/main/MainSection";
import AboutSection from "@/app/about/AboutSection";
import SkillsSection from "@/app/skill/SkillsSection";
import ProjectsSection from "@/app/projects/ProjectSection";
import ResumeSection from "@/app/resume/ResumeSection";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth">
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
    </div>
  );
}
