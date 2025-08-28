import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../contents/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </section>
  );
}
