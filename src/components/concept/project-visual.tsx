import { type CSSProperties } from "react";
import { BrowserFrame } from "./frame";
import type { Project } from "@/lib/data/projects";

/**
 * Renders a code-built concept visual for a project, themed from its
 * art-direction tokens. No external images — fast and always on-brand.
 */
export function ProjectVisual({ project }: { project: Project }) {
  if (project.kind === "website") return <WebsiteVisual project={project} />;
  if (project.kind === "social") return <SocialVisual project={project} />;
  return <BrandingVisual project={project} />;
}

function WebsiteVisual({ project }: { project: Project }) {
  const a = project.art;
  return (
    <BrowserFrame url={`${project.slug}.com`}>
      <div
        className="flex min-h-[15rem] flex-col p-5 sm:p-7"
        style={{ background: a.bg, color: a.ink }}
      >
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em]">
          <span style={{ opacity: 0.8 }}>{project.name}</span>
          <span className="flex gap-3" style={{ opacity: 0.5 }}>
            <span>Stay</span>
            <span>About</span>
            <span>Enquire</span>
          </span>
        </div>
        <div className="mt-auto pt-10">
          <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: a.accent }}>
            {project.sector}
          </p>
          <p className="mt-2 font-heading text-2xl leading-tight sm:text-3xl">
            {websiteHeadline(project.slug)}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span
              className="rounded-full px-4 py-1.5 text-[11px] font-medium"
              style={{ background: a.accent, color: a.bg }}
            >
              Book a stay
            </span>
            <span className="text-[11px]" style={{ opacity: 0.6 }}>
              View gallery →
            </span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-12 rounded-md"
                style={{ background: blend(i, a) }}
              />
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function BrandingVisual({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div
      className="flex min-h-[15rem] flex-col justify-between rounded-xl border border-black/10 p-6 shadow-[0_30px_60px_-25px_rgba(40,30,20,0.3)] sm:p-8"
      style={{ background: a.bg, color: a.ink }}
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full font-heading text-2xl"
          style={{ background: a.ink, color: a.bg }}
        >
          {project.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-xl leading-none">{project.name}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.25em]" style={{ opacity: 0.6 }}>
            {project.sector}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-heading text-5xl leading-none">Aa</p>
          <p className="mt-2 text-[11px]" style={{ opacity: 0.6 }}>
            {project.typography.heading} · {project.typography.body}
          </p>
        </div>
        <div className="flex gap-1.5">
          {project.palette.slice(0, 5).map((s) => (
            <div
              key={s.hex}
              className="h-10 w-5 rounded-full"
              style={{ background: s.hex }}
              title={s.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialVisual({ project }: { project: Project }) {
  const a = project.art;
  const cells: CSSProperties[] = [
    { background: a.panel },
    { background: a.accent },
    { background: a.soft },
    { background: a.soft },
    { background: a.ink, color: a.bg },
    { background: a.panel },
    { background: a.accent },
    { background: a.bg, border: `1px solid ${a.ink}22` },
    { background: a.soft },
  ];
  return (
    <div
      className="rounded-xl border border-black/10 p-4 shadow-[0_30px_60px_-25px_rgba(40,30,20,0.3)]"
      style={{ background: a.bg }}
    >
      <div className="mb-3 flex items-center gap-2 px-1">
        <div
          className="flex h-7 w-7 items-center justify-center rounded-full font-heading text-xs"
          style={{ background: a.ink, color: a.bg }}
        >
          {project.name.charAt(0)}
        </div>
        <span className="text-[11px] font-medium" style={{ color: a.ink }}>
          @{project.slug.replace(/-/g, "")}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {cells.map((style, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-md"
            style={style}
          >
            {i === 4 && (
              <span className="font-heading text-sm leading-tight text-center px-1">
                {project.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* helpers */
function websiteHeadline(slug: string) {
  const map: Record<string, string> = {
    "sable-and-stone": "Where the wild feels like home.",
    tavola: "A table worth travelling for.",
    atrium: "Spaces that tell a story.",
  };
  return map[slug] ?? "Beautifully made for you.";
}

function blend(i: number, a: Project["art"]) {
  const tones = [a.soft, a.accent, a.panel];
  return `linear-gradient(135deg, ${tones[i % tones.length]}, ${a.ink}22)`;
}
