import Link from "next/link";
import { ProjectVisual } from "./project-visual";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col"
      aria-label={`${project.name} — ${project.sector} concept project`}
    >
      <div
        className="rounded-2xl p-5 transition-transform duration-500 group-hover:-translate-y-1.5 sm:p-7"
        style={{ background: project.art.bg }}
      >
        <div className="transition-transform duration-500 group-hover:scale-[1.015]">
          <ProjectVisual project={project} />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-xl text-charcoal">{project.name}</h3>
            <span className="rounded-full bg-sand px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Studio Concept
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{project.sector}</p>
        </div>
        <span className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-terracotta">
          →
        </span>
      </div>
    </Link>
  );
}
