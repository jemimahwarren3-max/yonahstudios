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
  // Split into words and whitespace so letters animate individually, but
  // words never break across lines.
  const tokens = text.split(/(\s+)/);
  let letter = 0;

  return (
    <span
      className={className}
      style={{ "--sbi-blur": `${blur}px` } as CSSProperties}
    >
      {tokens.map((token, ti) => {
        if (/^\s+$/.test(token) || token === "") {
          // Breakable whitespace between words.
          return <span key={ti}>{token}</span>;
        }
        return (
          <span key={ti} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {Array.from(token).map((char) => {
              const idx = letter++;
              return (
                <span
                  key={idx}
                  className="soft-blur-in-char"
                  style={{
                    animationDelay: `${delay + idx * stagger}s`,
                    animationDuration: `${duration}s`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
