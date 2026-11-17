import { type CSSProperties, type SVGProps } from "react";

/** Minimal single-weight platform glyphs, drawn to match the Dove mark's
 * line style. Purely decorative, not linked to real accounts. */

export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M13.8 21v-7h2.2l.4-2.8h-2.6V9.4c0-.8.3-1.4 1.5-1.4h1.2V5.5c-.6-.1-1.4-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8v2.1H8.3v2.8h2.3v7" />
    </svg>
  );
}

export function TikTokGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M14 4v10.3a3.2 3.2 0 1 1-2.6-3.15" />
      <path d="M14 4c.3 2.1 1.9 3.6 4 3.85" />
    </svg>
  );
}

/** A small, cosmetic row showing which platforms a campaign spans. */
export function PlatformRow({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={className}
      style={style}
      aria-hidden="true"
      title="Designed for Instagram, Facebook and TikTok"
    >
      <div className="flex items-center gap-1.5 opacity-60">
        <InstagramGlyph className="h-3 w-3" />
        <FacebookGlyph className="h-3 w-3" />
        <TikTokGlyph className="h-3 w-3" />
      </div>
    </div>
  );
}
