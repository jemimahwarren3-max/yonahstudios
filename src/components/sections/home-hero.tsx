"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/site/container";
import { ButtonLink } from "@/components/site/cta";
import { whatsappLink } from "@/lib/site";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <Container size="wide">
        <div className="max-w-5xl">
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-muted-foreground"
          >
            Brand · Web · Social — Zimbabwe & South Africa
          </motion.p>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.45, 1] }}
            className="mt-8 font-heading text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.92] tracking-tighter text-charcoal"
          >
            Good businesses
            <br />
            deserve <span className="text-terracotta">beautiful</span>
            <br />
            digital experiences.
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            We craft thoughtful brands, websites and social media that help
            businesses stand out, connect and grow.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <ButtonLink href="/work">Explore our work</ButtonLink>
            <ButtonLink href={whatsappLink()} variant="outline" external>
              Start a project
            </ButtonLink>
          </motion.div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-8 flex justify-center sm:bottom-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <span className="animate-scrollcue text-lg">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
