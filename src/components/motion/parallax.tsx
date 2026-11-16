"use client";

import { type ReactNode, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A full-bleed image that drifts on scroll (parallax). Children render
 * above the image + optional overlay.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  overlayClassName = "bg-black/40",
  strength = 70,
  priority,
  sizes = "100vw",
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
  strength?: number;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-strength, strength],
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
      <div className={cn("absolute inset-0", overlayClassName)} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
