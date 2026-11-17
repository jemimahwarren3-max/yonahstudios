"use client";

import { type ReactNode, type PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Wraps an image/card so it tilts in 3D toward the cursor and gets a subtle
 * shine/scale lift on hover. Settles back to flat on pointer leave.
 * No-ops under prefers-reduced-motion.
 */
export function Tilt({
  children,
  className,
  strength = 10,
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  scale?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [strength, -strength]);
  const rotateY = useTransform(springX, [0, 1], [-strength, strength]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  function handleMove(e: ReactPointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }
  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      className={cn("group relative", className)}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.25), transparent 55%)`,
          ),
        }}
      />
    </motion.div>
  );
}
