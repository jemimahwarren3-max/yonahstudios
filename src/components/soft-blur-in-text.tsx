"use client";

import { type CSSProperties } from "react";

export interface SoftBlurInTextProps {
  text: string;
  /** Blur distance in px at the start of the animation. */
  blur?: number;
  /** Seconds between each letter starting. */
  stagger?: number;
  /** Seconds before the first letter starts. */
  delay?: number;
  /** Seconds each letter takes to settle. */
  duration?: number;
  className?: string;
}

export function SoftBlurInText({
  text,
  blur = 12,
  stagger = 0.04,
  delay = 0,
  duration = 0.9,
  className,
}: SoftBlurInTextProps) {
  return (
    <span
      className={className}
      style={{ "--sbi-blur": `${blur}px` } as CSSProperties}
    >
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="soft-blur-in-char"
          style={{
            animationDelay: `${delay + i * stagger}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
