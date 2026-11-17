import { BrowserFrame } from "./frame";
import { PlatformRow } from "@/components/brand/social-icons";
import type { Project, Variant } from "@/lib/data/projects";

function isDark(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b < 140;
}

/** Renders a code-built design preview for a project: website mockup or
 * graphic-design piece, themed from its art-direction tokens. No stock photos.
 * Pass `variant` to render a specific piece type rather than the project's default
 * (used by DeliverableGrid to show a brand's packaging, poster and type together). */
export function ProjectVisual({
  project,
  variant,
}: {
  project: Project;
  variant?: Variant;
}) {
  switch (variant ?? project.variant) {
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

/**
 * Shows a graphic-design project as a complete identity system: its primary
 * piece plus every entry in `project.extraVariants`, laid out as a deliverable
 * set rather than a single isolated artifact.
 */
export function DeliverableGrid({ project }: { project: Project }) {
  const variants: Variant[] = [project.variant, ...(project.extraVariants ?? [])];
  if (variants.length === 1) return <ProjectVisual project={project} />;
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5">
      <div className="col-span-2 sm:col-span-1">
        <ProjectVisual project={project} variant={variants[0]} />
      </div>
      {variants.slice(1).map((v, i) => (
        <div key={v + i} className={variants.length === 2 ? "col-span-2 sm:col-span-1" : ""}>
          <ProjectVisual project={project} variant={v} />
        </div>
      ))}
    </div>
  );
}

/* ============================ WEBSITES ============================ */

const FEATURE_LABELS = ["Thoughtful design", "Built to convert", "Fast and reliable"];

/** A moody, always-dark photographic-feeling gradient, independent of the
 * project's light/dark role assignment, so every hero reads like a real
 * photographed banner rather than a flat colour fill. */
function heroImageGradient(a: Project["art"]) {
  return `radial-gradient(circle at 25% 20%, color-mix(in srgb, ${a.accent} 55%, transparent), transparent 55%),
          radial-gradient(circle at 80% 85%, color-mix(in srgb, ${a.soft} 45%, transparent), transparent 55%),
          linear-gradient(145deg, color-mix(in srgb, ${a.accent} 65%, #10090a), color-mix(in srgb, ${a.soft} 55%, #0d0b08) 60%, color-mix(in srgb, ${a.ink} 40%, #0a0908))`;
}

function WebsiteMockup({ project }: { project: Project }) {
  const a = project.art;
  const nav = ["Home", "About", "Work", "Contact"];
  return (
    <BrowserFrame url={`${project.slug}.com`}>
      <div className="flex aspect-[3/4] flex-col" style={{ background: a.bg, color: a.ink }}>
        {/* photographic-feeling hero image block */}
        <div
          className="relative flex flex-1 flex-col overflow-hidden p-6 text-white sm:p-7"
          style={{ background: heroImageGradient(a) }}
        >
          <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.2em]">
            <span className="font-heading text-sm normal-case tracking-normal">
              {project.name}
            </span>
            <span className="hidden gap-4 sm:flex" style={{ opacity: 0.75 }}>
              {nav.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </span>
          </div>

          <div className="relative mt-auto">
            {project.variant === "shop" ? (
              <ShopBody project={project} />
            ) : (
              <HeroBody project={project} />
            )}
          </div>
        </div>

        {/* feature row, so the page reads as a full site, not a single banner */}
        <div className="relative grid grid-cols-3 gap-3 p-6 pt-5 sm:p-7 sm:pt-5">
          {FEATURE_LABELS.map((label, i) => (
            <div key={label}>
              <span
                className="block h-1.5 w-5 rounded-full"
                style={{ background: [a.accent, a.soft, a.accent][i] }}
              />
              <p className="mt-2 text-[9px] font-medium leading-tight" style={{ opacity: 0.8 }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between px-6 pb-6 text-[8px] uppercase tracking-[0.18em] sm:px-7 sm:pb-7"
          style={{ opacity: 0.45 }}
        >
          <span>{project.name}</span>
          <span>{project.sector}</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function HeroBody({ project }: { project: Project }) {
  const a = project.art;
  const center = project.variant === "center";
  const split = project.variant === "split";
  return (
    <div className={center ? "text-center" : ""}>
      <div className={center ? "mx-auto max-w-md" : ""}>
        <p
          className="text-[10px] uppercase tracking-[0.25em]"
          style={{ opacity: 0.85 }}
        >
          {project.sector}
        </p>
        <p className="mt-3 font-heading text-[1.7rem] leading-[1.08] sm:text-3xl">
          {project.tagline ?? "Beautifully made."}
        </p>
        <p className="mt-3 max-w-xs text-[11px] leading-relaxed" style={{ opacity: 0.65 }}>
          {project.summary}
        </p>
        <div
          className={`mt-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}
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
      <div className={`mt-7 grid gap-2.5 ${split ? "grid-cols-2" : "grid-cols-3"}`}>
        {(split ? [a.soft, a.accent] : [a.soft, a.accent, a.panel]).map((c, i) => (
          <div
            key={i}
            className="flex h-20 items-end rounded-lg p-2.5"
            style={{ background: `linear-gradient(150deg, ${c}, ${a.ink}22)` }}
          >
            <span className="text-[8px] font-medium uppercase tracking-wide text-white/80">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopBody({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div>
      <p
        className="text-[10px] uppercase tracking-[0.25em]"
        style={{ opacity: 0.85 }}
      >
        {project.sector}
      </p>
      <div className="mt-3 flex items-end justify-between">
        <p className="font-heading text-2xl leading-tight">{project.tagline}</p>
        <span className="text-[10px]" style={{ opacity: 0.6 }}>
          Shop all →
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i}>
            <div
              className="h-24 rounded-lg"
              style={{
                background: `linear-gradient(160deg, ${
                  [a.soft, a.panel, a.accent][i]
                }, ${a.ink}18)`,
              }}
            />
            <div className="mt-1.5 flex items-center justify-between text-[9px]">
              <span style={{ opacity: 0.7 }}>Product {i + 1}</span>
              <span style={{ color: a.accent }}>Enquire</span>
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

const cylinder = (c: string) =>
  `linear-gradient(90deg, color-mix(in srgb, ${c} 68%, #000), ${c} 28%, color-mix(in srgb, ${c} 62%, #fff) 50%, ${c} 72%, color-mix(in srgb, ${c} 66%, #000))`;

function Label({
  project,
  dark,
}: {
  project: Project;
  dark: string;
}) {
  const a = project.art;
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-3 text-center">
      <p
        className="text-[7px] font-medium uppercase tracking-[0.2em]"
        style={{ color: dark, opacity: 0.75 }}
      >
        {project.sector}
      </p>
      <p
        className="font-heading text-lg font-semibold leading-none"
        style={{ color: dark }}
      >
        {project.name}
      </p>
      <div
        className="mx-auto mt-1.5 h-[3px] w-9 rounded"
        style={{ background: a.soft }}
      />
      <p
        className="mt-1.5 text-[6px] uppercase leading-snug tracking-[0.14em]"
        style={{ color: dark, opacity: 0.7 }}
      >
        {project.tagline}
      </p>
    </div>
  );
}

/** Beverage can mockup. */
function Can({ project }: { project: Project }) {
  const a = project.art;
  const labelInk = "#f7f3ea";
  return (
    <div className="relative" style={{ width: 118, height: 214 }}>
      {/* lid */}
      <div
        className="absolute left-1/2 top-0 z-10 h-[10px] w-[98px] -translate-x-1/2 rounded-[50%]"
        style={{ background: "linear-gradient(90deg,#8d8d8d,#ededed 50%,#8d8d8d)" }}
      />
      {/* body */}
      <div
        className="absolute inset-x-0 bottom-0 top-[5px] overflow-hidden rounded-[13px]"
        style={{ background: cylinder(a.accent) }}
      >
        <div
          className="absolute inset-x-0 top-0 h-2"
          style={{ background: "#ffffff", opacity: 0.18 }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-3"
          style={{ background: "#000000", opacity: 0.18 }}
        />
        <Label project={project} dark={labelInk} />
      </div>
    </div>
  );
}

/** Stand-up pouch / bag mockup. */
function Bag({ project }: { project: Project }) {
  const a = project.art;
  const onDark = isDark(a.accent);
  const labelInk = onDark ? "#f7f3ea" : a.ink;
  return (
    <div className="relative" style={{ width: 138, height: 198 }}>
      {/* crimped top seal */}
      <div
        className="absolute inset-x-2 top-0 z-10 h-4 rounded-[3px]"
        style={{
          background: `repeating-linear-gradient(90deg, ${a.ink}, ${a.ink} 4px, color-mix(in srgb, ${a.ink} 55%, #fff) 4px, color-mix(in srgb, ${a.ink} 55%, #fff) 8px)`,
          opacity: 0.9,
        }}
      />
      {/* body */}
      <div
        className="absolute inset-x-0 bottom-0 top-3 overflow-hidden rounded-b-[10px] rounded-t-[4px]"
        style={{ background: cylinder(a.accent) }}
      >
        <div
          className="absolute inset-y-0 left-0 w-2"
          style={{ background: "#000", opacity: 0.12 }}
        />
        <Label project={project} dark={labelInk} />
      </div>
    </div>
  );
}

function PackagingPiece({ project }: { project: Project }) {
  const a = project.art;
  const Product = project.slug === "dos-monos" ? Can : Bag;
  return (
    <div
      className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl"
      style={{
        background: `linear-gradient(180deg, color-mix(in srgb, ${a.panel} 70%, #fff), ${a.panel})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(${a.ink} 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative flex flex-col items-center">
        <div className="drop-shadow-[0_24px_24px_rgba(0,0,0,0.28)]">
          <Product project={project} />
        </div>
        {/* contact shadow */}
        <div
          className="mt-1 h-3 w-28 rounded-[50%] blur-md"
          style={{ background: "#000", opacity: 0.25 }}
        />
      </div>
    </div>
  );
}

function BrandPiece({ project }: { project: Project }) {
  const a = project.art;
  return (
    <div
      className="relative flex aspect-[4/5] flex-col gap-6 overflow-hidden rounded-xl p-7"
      style={{ background: a.bg, color: a.ink }}
    >
      {/* ambient texture, keeps the board from ever reading as empty */}
      <div
        className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full blur-3xl"
        style={{ background: a.accent, opacity: 0.2 }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(${a.ink} 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
      />

      {/* header lockup */}
      <div className="relative flex items-center gap-4">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full font-heading text-3xl"
          style={{ background: a.accent, color: a.bg }}
        >
          {project.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-2xl leading-none">{project.name}</p>
          <p
            className="mt-1.5 text-[10px] uppercase tracking-[0.22em]"
            style={{ opacity: 0.6 }}
          >
            {project.sector}
          </p>
        </div>
      </div>

      {/* oversized decorative wordmark */}
      <div className="relative">
        <p
          className="font-heading text-[3.2rem] font-semibold leading-[0.85] tracking-tight"
          style={{ color: a.accent, opacity: 0.9 }}
        >
          {project.name}
        </p>
        {project.tagline && (
          <p className="mt-2 max-w-[90%] text-xs leading-relaxed" style={{ opacity: 0.65 }}>
            {project.tagline}
          </p>
        )}
      </div>

      {/* type specimen */}
      <div className="relative flex items-end justify-between border-t pt-5" style={{ borderColor: `${a.ink}18` }}>
        <div>
          <p className="font-heading text-5xl leading-none">Aa</p>
          <p className="mt-2 text-[10px]" style={{ opacity: 0.6 }}>
            {project.typography.heading} · {project.typography.body}
          </p>
        </div>
        <p className="max-w-[40%] text-right text-[9px] uppercase leading-snug tracking-[0.12em]" style={{ opacity: 0.55 }}>
          ABCDEFGH
          <br />
          abcdefgh 0123
        </p>
      </div>

      {/* palette strip with labels, filling the base of the board */}
      <div className="relative mt-auto">
        <div className="flex gap-1.5">
          {project.palette.map((s) => (
            <div
              key={s.hex}
              className="h-12 flex-1 rounded-md"
              style={{ background: s.hex }}
              title={s.name}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[7px] uppercase tracking-wide" style={{ opacity: 0.5 }}>
          <span>{project.palette[0]?.name}</span>
          <span>{project.palette[project.palette.length - 1]?.name}</span>
        </div>
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
          Display / Heading / Body: one considered system.
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
      <div className="mb-3 flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
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
        <PlatformRow style={{ color: a.ink }} />
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
