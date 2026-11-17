"use client";

import { motion, useReducedMotion } from "motion/react";

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  // Duplicate the list so the looped track has no visible seam.
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-background py-6">
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-heading text-2xl text-charcoal/70 sm:text-3xl"
          >
            {item}
            <span className="text-terracotta" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
