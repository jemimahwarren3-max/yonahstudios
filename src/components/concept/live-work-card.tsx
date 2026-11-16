import Image from "next/image";
import { BrowserFrame } from "./frame";
import type { LiveProject } from "@/lib/data/work";

export function LiveWorkCard({ project }: { project: LiveProject }) {
  const host = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col"
      aria-label={`${project.name} — visit the live site`}
    >
      <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
        <BrowserFrame url={host}>
          <div className="relative aspect-[16/10] overflow-hidden bg-sand">
            <Image
              src={project.image}
              alt={`${project.name} website — ${project.sector}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </BrowserFrame>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-xl text-charcoal">{project.name}</h3>
            <span className="rounded-full bg-terracotta/12 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-terracotta">
              Live
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{project.sector}</p>
        </div>
        <span className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-terracotta">
          ↗
        </span>
      </div>
    </a>
  );
}
