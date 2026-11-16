import { type SVGProps } from "react";

/**
 * Yonah Studios dove mark: a minimal single-weight line illustration
 * of a perched dove. Uses currentColor so it inherits text color.
 */
export function Dove({
  title = "Yonah Studios",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 120 108"
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* body + head + beak, one continuous contour */}
      <path d="M17 64c10-20 33-30 55-27 6 1 10-2 15-8 1 4 0 8-3 12 6 2 12 2 18-1-4 7-11 12-19 13-4 11-16 18-29 18-14 0-28-2-37-7Z" />
      {/* wing */}
      <path d="M38 58c10-9 25-10 36-5" />
      {/* eye */}
      <circle cx="82" cy="37" r="1.6" fill="currentColor" stroke="none" />
      {/* legs */}
      <path d="M54 64v13M64 64v13" />
      {/* perch (double line, like the reference) */}
      <path d="M26 84h68M30 92h60" />
    </svg>
  );
}
