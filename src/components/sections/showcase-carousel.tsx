"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrowserFrame } from "@/components/concept/frame";
import { ProjectVisual } from "@/components/concept/project-visual";
import { showcaseItems } from "@/lib/data/showcase";

const n = showcaseItems.length;
const INTERVAL = 5000;

export function ShowcaseCarousel() {
  const reduce = useReducedMotion();
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = (dir: number) =>
    setState(([i]) => [(i + dir + n) % n, dir]);
  const select = (target: number) =>
    setState(([i]) => [target, target >= i ? 1 : -1]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused]);

  const item = showcaseItems[index];

  const variants = {
    enter: (dir: number) =>
      reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? 60 : -60 },
    center: { opacity: 1, x: 0 },
    exit: (dir: number) =>
      reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? -60 : 60 },
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[26rem] sm:min-h-[22rem]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.65, 0, 0.45, 1] }}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <div className="order-1">
              {item.image ? (
                <BrowserFrame url={previewUrl(item)}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                    <Image
                      src={item.image}
                      alt={`${item.name}, ${item.sector}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover object-top"
                    />
                  </div>
                </BrowserFrame>
              ) : item.project ? (
                <div className="mx-auto max-w-sm">
                  <ProjectVisual project={item.project} />
                </div>
              ) : null}
            </div>

            <div className="order-2">
              <span
                className={`inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                  item.external
                    ? "bg-terracotta/10 text-terracotta"
                    : "bg-sand text-muted-foreground"
                }`}
              >
                {item.tag}
              </span>
              <h3 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
                {item.name}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground">
                {item.sector}
              </p>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-8">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-charcoal px-6 py-3 text-sm font-medium uppercase tracking-[0.04em] text-ivory transition-colors hover:bg-terracotta"
                  >
                    {item.linkLabel}
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 border border-charcoal/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.04em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                  >
                    {item.linkLabel}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          {showcaseItems.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => select(i)}
              aria-label={`Show ${s.name}`}
              aria-current={i === index}
              className={`relative h-1.5 overflow-hidden transition-all duration-300 ${
                i === index
                  ? "w-10 bg-border"
                  : "w-1.5 bg-border hover:bg-muted-foreground/50"
              }`}
            >
              {i === index && !reduce && (
                <span
                  key={index}
                  className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 animate-[showreel-progress_var(--showreel-duration)_linear_forwards] bg-charcoal"
                  style={
                    {
                      "--showreel-duration": `${INTERVAL}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    } as CSSProperties
                  }
                />
              )}
              {i === index && reduce && (
                <span className="absolute inset-0 bg-charcoal" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-heading text-sm font-bold text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, "0")}
            <span className="opacity-40"> / {String(n).padStart(2, "0")}</span>
          </span>
          <div className="ml-2 flex gap-1.5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center border border-border text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center border border-border text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function previewUrl(item: { external: boolean; href: string }) {
  return item.external
    ? item.href.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "yonahstudios.com";
}
