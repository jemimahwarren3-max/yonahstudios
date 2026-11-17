import Link from "next/link";
import Image from "next/image";
import { ProjectVisual } from "./project-visual";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col"
      aria-label={`${project.name}, a ${project.sector} concept project`}
    >
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
        {project.image ? (
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
            <Image
              src={project.image}
              alt={`${project.name} — ${project.sector}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <ProjectVisual project={project} />
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl text-charcoal">{project.name}</h3>
            <span className="rounded-full bg-sand px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
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
