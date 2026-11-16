import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col"
      aria-label={`${project.name} — ${project.sector} concept project`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.sector}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        {/* legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/5" />

        {/* concept badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal backdrop-blur-sm">
          Studio Concept
        </span>

        {/* caption */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center gap-1.5">
            {project.palette.slice(0, 4).map((s) => (
              <span
                key={s.hex}
                className="h-2.5 w-2.5 rounded-full ring-1 ring-white/40"
                style={{ background: s.hex }}
              />
            ))}
          </div>
          <h3 className="mt-3 font-heading text-2xl leading-tight text-white">
            {project.name}
          </h3>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-sm text-white/75">{project.sector}</p>
            <span className="text-white/80 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
