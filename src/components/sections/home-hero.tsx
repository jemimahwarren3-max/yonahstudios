"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Container } from "@/components/site/container";
import { SoftBlurInText } from "@/components/soft-blur-in-text";
import { ButtonLink } from "@/components/site/cta";
import { siteImages } from "@/lib/img";
import { whatsappLink } from "@/lib/site";

export function HomeHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Background drifts down + fades as you scroll (parallax).
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 80],
  );
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[94vh] items-end overflow-hidden"
    >
      {/* Background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-8%] -z-10">
        <Image
          src={siteImages.hero}
          alt="A warm, considered creative studio workspace"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
      </motion.div>
      {/* Warm legibility gradient */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/35"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(194,104,63,0.25),transparent_60%)]"
        aria-hidden
      />

      <Container className="relative pb-24 pt-40 sm:pb-28">
        <motion.div style={{ y: contentY }} className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-3 text-white/80"
          >
            <span className="h-px w-8 bg-current opacity-60" />
            Creative studio · Fully remote
          </motion.p>

          <h1 className="mt-6 font-heading text-[2.8rem] font-semibold leading-[1.03] tracking-tight text-white sm:text-7xl">
            <SoftBlurInText text="Good businesses deserve " stagger={0.026} />
            <span className="italic text-[color:var(--peach)]">
              <SoftBlurInText text="beautiful" stagger={0.026} delay={0.6} />
            </span>
            <SoftBlurInText
              text=" digital experiences."
              stagger={0.026}
              delay={0.82}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            We craft thoughtful brands, beautiful websites and digital marketing
            that help businesses stand out, connect with customers and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink
              href="/work"
              className="bg-white text-charcoal hover:bg-terracotta hover:text-white"
            >
              Explore our work
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="light" external>
              Start a project
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <span className="animate-scrollcue text-lg">↓</span>
        </div>
      </div>
    </section>
  );
}
