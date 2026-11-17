"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/site/container";
import { SoftBlurInText } from "@/components/soft-blur-in-text";
import { ButtonLink } from "@/components/site/cta";
import { Tilt } from "@/components/motion/tilt";
import { Magnetic } from "@/components/motion/magnetic";
import { ProjectVisual } from "@/components/concept/project-visual";
import { getProject } from "@/lib/data/projects";
import { whatsappLink } from "@/lib/site";

const poster = getProject("verve")!;
const can = getProject("dos-monos")!;
const site = getProject("sable-and-stone")!;
const brand = getProject("fiore")!;

function Float({
  children,
  className,
  delay = 0,
  rotate = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.92 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotate }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HomeHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* warm ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[34rem] w-[34rem] rounded-full bg-peach/40 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blush/35 blur-[130px]"
        aria-hidden
      />

      {/* floating work: our own designs (desktop), tilting toward the cursor */}
      <Float
        className="absolute left-[2%] top-[13%] hidden w-52 xl:block"
        rotate={-6}
        delay={0.35}
      >
        <Tilt strength={12}>
          <ProjectVisual project={poster} />
        </Tilt>
      </Float>
      <Float
        className="absolute bottom-[7%] left-[6%] hidden w-36 lg:block"
        rotate={5}
        delay={0.55}
      >
        <Tilt strength={14}>
          <ProjectVisual project={can} />
        </Tilt>
      </Float>
      <Float
        className="absolute right-[3%] top-[11%] hidden w-[17rem] lg:block"
        rotate={5}
        delay={0.45}
      >
        <Tilt strength={8}>
          <ProjectVisual project={site} />
        </Tilt>
      </Float>
      <Float
        className="absolute bottom-[9%] right-[6%] hidden w-44 xl:block"
        rotate={-5}
        delay={0.65}
      >
        <Tilt strength={12}>
          <ProjectVisual project={brand} />
        </Tilt>
      </Float>

      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-3 text-muted-foreground"
          >
            <span className="h-px w-8 bg-current opacity-50" />
            Creative studio · Fully remote
          </motion.p>

          <h1 className="mt-6 font-heading text-[2.8rem] font-semibold leading-[1.02] tracking-tight text-charcoal sm:text-7xl">
            <SoftBlurInText text="Good businesses deserve " stagger={0.026} />
            <span className="italic text-terracotta">
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
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            We craft thoughtful brands, beautiful websites and digital marketing
            that help businesses stand out, connect with customers and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic>
              <ButtonLink href="/work">Explore our work</ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href={whatsappLink()} variant="outline" external>
                Start a project
              </ButtonLink>
            </Magnetic>
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <span className="animate-scrollcue text-lg">↓</span>
        </div>
      </div>
    </section>
  );
}
