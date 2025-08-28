"use client";

import { useState } from "react";
import ProjectCard, { ProjectItem } from "@/components/ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { projects } from "@/contents/projects";

type Props = {
  gridClassName?: string;
  onlyFeatured?: boolean;
  limit?: number;
};

export default function ProjectsGrid({
  gridClassName = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  onlyFeatured = false,
  limit,
}: Props) {
  let list = projects;
  if (onlyFeatured) list = list.filter((p) => p.featured);
  if (typeof limit === "number") list = list.slice(0, limit);

  const [open, setOpen] = useState<ProjectItem | null>(null);

  return (
    <>
      <div className={gridClassName}>
        {list.map((p) => (
          <ProjectCard key={p.slug} p={p} onOpen={setOpen} />
        ))}
      </div>

      {open && (
        <ProjectDetailModal project={open} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
