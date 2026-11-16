import { BrowserFrame } from "./frame";
import type { Project } from "@/lib/data/projects";

/** Renders a code-built design preview for a project — website mockup or
 * graphic-design piece — themed from its art-direction tokens. No stock photos. */
export function ProjectVisual({ project }: { project: Project }) {
  switch (project.variant) {
    case "poster":
      return <PosterPiece project={project} />;
    case "packaging":
      return <PackagingPiece project={project} />;
    case "brand":
      return <BrandPiece project={project} />;
    case "type":
      return <TypePiece project={project} />;
    case "social":
      return <SocialPiece project={project} />;
    default:
      return <WebsiteMockup project={project} />;
  }
}

/* ============================ WEBSITES ============================ */

function WebsiteMockup({ project }: { project: Project }) {
  const a = project.art;
  const nav = ["Home", "About", "Work", "Contact"];
  return (
    <BrowserFrame url={`${project.slug}.com`}>
      <div
        className="flex aspect-[16/11] flex-col p-6 sm:p-7"
        style={{ background: a.bg, color: a.ink }}
      >
        {/* nav */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em]">
          <span className="font-heading text-sm normal-case tracking-normal">
            {project.name}
          </span>
          <span className="hidden gap-4 sm:flex" style={{ opacity: 0.55 }}>
            {nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </div>

        {project.variant === "shop" ? (
          <ShopBody project={project} />
        ) : (
          <HeroBody project={project} />
        )}
      </div>
    </BrowserFrame>
  );
}

function HeroBody({ project }: { project: Project }) {
  const a = project.art;
  const center = project.variant === "center";
  const split = project.variant === "split";
  return (
    <div
      className={`mt-auto grid gap-5 pt-8 ${split ? "grid-cols-[1.1fr_0.9fr] items-end" : ""} ${
        center ? "text-center" : ""
      }`}
    >
      <div className={center ? "mx-auto max-w-md" : ""}>
        <p
          className="text-[10px] uppercase tracking-[0.25em]"
          style={{ color: a.accent }}
        >
          {project.sector}
        </p>
        <p className="mt-2 font-heading text-2xl leading-[1.05] sm:text-[1.9rem]">
          {project.tagline ?? "Beautifully made."}
        </p>
        <div
          className={`mt-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}
        >
          <span
            className="rounded-full px-4 py-1.5 text-[11px] font-medium"
            style={{ background: a.accent, color: a.bg }}
          >
            Get started
          </span>
          <span className="text-[11px]" style={{ opacity: 0.6 }}>
            Learn more →
          </span>
        </div>
      </div>
      {split ? (
        <div
          className="h-24 rounded-lg"
          style={{ background: `linear-gradient(135deg, ${a.soft}, ${a.accent})` }}
        />
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {[a.soft, a.accent, a.panel].map((c, i) => (
            <div
              key={i}
              className="h-12 rounded-md"
              style={{ background: `linear-gradient(140deg, ${c}, ${a.ink}22)` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ShopBody({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div className="mt-auto pt-6">
      <div className="flex items-end justify-between">
        <p className="font-heading text-xl leading-tight">{project.tagline}</p>
        <span className="text-[10px]" style={{ opacity: 0.6 }}>
          Shop all →
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i}>
            <div
              className="h-16 rounded-lg"
              style={{
                background: `linear-gradient(160deg, ${
                  [a.soft, a.panel, a.accent][i]
                }, ${a.ink}18)`,
              }}
            />
            <div className="mt-1.5 flex items-center justify-between text-[9px]">
              <span style={{ opacity: 0.7 }}>Product {i + 1}</span>
              <span style={{ color: a.accent }}>$—</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================ GRAPHIC ============================ */

function PosterPiece({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div
      className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-xl p-7"
      style={{ background: a.bg, color: a.ink }}
    >
      {/* floating accent shapes */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
        style={{ background: a.accent, opacity: 0.9 }}
      />
      <div
        className="absolute -bottom-12 -left-8 h-36 w-36 rotate-12 rounded-3xl"
        style={{ background: a.soft, opacity: 0.85 }}
      />
      <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
        <span>{project.sector}</span>
        <span>{project.typography.heading}</span>
      </div>
      <div className="relative">
        <p className="font-heading text-6xl font-semibold leading-[0.9] sm:text-7xl">
          {project.name}
        </p>
        {project.tagline && (
          <p className="mt-4 max-w-[80%] text-sm" style={{ opacity: 0.8 }}>
            {project.tagline}
          </p>
        )}
      </div>
      <div className="relative flex gap-1.5">
        {project.palette.slice(0, 5).map((s) => (
          <span
            key={s.hex}
            className="h-2 flex-1 rounded-full"
            style={{ background: s.hex }}
          />
        ))}
      </div>
    </div>
  );
}

function Starburst({ fill, className }: { fill: string; className?: string }) {
  // 16-point die-cut badge
  const pts = Array.from({ length: 32 }, (_, i) => {
    const ang = (Math.PI * 2 * i) / 32;
    const r = i % 2 === 0 ? 50 : 41;
    return `${50 + r * Math.cos(ang)},${50 + r * Math.sin(ang)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <polygon points={pts} fill={fill} />
    </svg>
  );
}

function PackagingPiece({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div
      className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl p-6"
      style={{ background: a.bg }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(${a.ink}22 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      />
      <div className="relative h-56 w-56">
        <Starburst fill={a.accent} className="absolute inset-0 h-full w-full drop-shadow-xl" />
        <Starburst
          fill={a.soft}
          className="absolute inset-0 h-full w-full -rotate-[10deg] scale-[0.82] opacity-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span
            className="font-heading text-3xl font-semibold leading-none"
            style={{ color: a.bg }}
          >
            {project.name}
          </span>
          <span
            className="mt-2 text-[9px] uppercase tracking-[0.2em]"
            style={{ color: a.bg, opacity: 0.85 }}
          >
            {project.tagline}
          </span>
        </div>
      </div>
    </div>
  );
}

function BrandPiece({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div
      className="flex aspect-[4/5] flex-col justify-between rounded-xl p-7"
      style={{ background: a.bg, color: a.ink }}
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full font-heading text-3xl"
          style={{ background: a.accent, color: a.bg }}
        >
          {project.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-2xl leading-none">{project.name}</p>
          <p
            className="mt-1 text-[10px] uppercase tracking-[0.22em]"
            style={{ opacity: 0.6 }}
          >
            {project.sector}
          </p>
        </div>
      </div>

      <div>
        <p className="font-heading text-6xl leading-none">Aa</p>
        <p className="mt-2 text-xs" style={{ opacity: 0.6 }}>
          {project.typography.heading} · {project.typography.body}
        </p>
      </div>

      <div className="flex gap-1.5">
        {project.palette.map((s) => (
          <div
            key={s.hex}
            className="h-10 flex-1 rounded-md"
            style={{ background: s.hex }}
            title={s.name}
          />
        ))}
      </div>
    </div>
  );
}

function TypePiece({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div
      className="flex aspect-[4/5] flex-col justify-between rounded-xl p-7"
      style={{ background: a.bg, color: a.ink }}
    >
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
        <span>{project.name}</span>
        <span style={{ opacity: 0.5 }}>Type system</span>
      </div>
      <div className="space-y-1">
        <p className="font-heading text-7xl font-semibold leading-[0.85]">Ag</p>
        <p className="font-heading text-2xl" style={{ color: a.accent }}>
          {project.tagline}
        </p>
      </div>
      <div className="space-y-2 text-[11px]" style={{ opacity: 0.75 }}>
        <p className="font-heading text-base">ABCDEFGHIJKLM</p>
        <p>abcdefghijklmnopqrstuvwxyz 0123456789</p>
        <p style={{ opacity: 0.6 }}>
          Display / Heading / Body — one considered system.
        </p>
      </div>
    </div>
  );
}

function SocialPiece({ project }: { project: Project }) {
  const a = project.art;
  const cells = [
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
      className="flex aspect-[4/5] flex-col rounded-xl p-5"
      style={{ background: a.bg }}
    >
      <div className="mb-3 flex items-center gap-2 px-1">
        <div
          className="flex h-7 w-7 items-center justify-center rounded-full font-heading text-xs"
          style={{ background: a.accent, color: a.bg }}
        >
          {project.name.charAt(0)}
        </div>
        <span className="text-[11px] font-medium" style={{ color: a.ink }}>
          @{project.slug.replace(/-/g, "")}
        </span>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-1.5">
        {cells.map((style, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-md"
            style={style}
          >
            {i === 4 && (
              <span className="px-1 text-center font-heading text-sm leading-tight">
                {project.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
