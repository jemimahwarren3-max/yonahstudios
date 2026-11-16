"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/site/container";
import { SoftBlurInText } from "@/components/soft-blur-in-text";
import { ButtonLink } from "@/components/site/cta";
import { BrowserFrame, PhoneFrame } from "@/components/concept/frame";
import { getProject } from "@/lib/data/projects";
import { whatsappLink } from "@/lib/site";

const lodge = getProject("sable-and-stone")!;
const beauty = getProject("haneul")!;

export function HomeHero() {
  const reduce = useReducedMotion();
  const float = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 40, scale: 0.97 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* warm ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-peach/40 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-20 -left-32 h-[28rem] w-[28rem] rounded-full bg-blush/30 blur-[120px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          {/* Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow inline-flex items-center gap-3 text-muted-foreground"
            >
              <span className="h-px w-8 bg-current opacity-50" />
              Creative studio · Fully remote
            </motion.p>

            <h1 className="mt-6 font-heading text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              <SoftBlurInText text="Good businesses deserve " stagger={0.028} />
              <span className="italic text-terracotta">
                <SoftBlurInText
                  text="beautiful"
                  stagger={0.028}
                  delay={0.65}
                />
              </span>
              <SoftBlurInText
                text=" digital experiences."
                stagger={0.028}
                delay={0.9}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              We create thoughtful brands, beautiful websites and digital
              marketing experiences that help businesses stand out, connect with
              customers and grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.45 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <ButtonLink href="/work">Explore our work</ButtonLink>
              <ButtonLink href={whatsappLink()} variant="outline" external>
                Start a project
              </ButtonLink>
            </motion.div>
          </div>

          {/* Composition */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <motion.div {...float(0.3)}>
              <BrowserFrame url="sableandstone.com" className="w-full">
                <HeroSite />
              </BrowserFrame>
            </motion.div>

            <motion.div
              {...float(0.7)}
              className="absolute -bottom-10 -left-4 w-32 sm:-left-8 sm:w-40"
            >
              <PhoneFrame>
                <HeroPhone />
              </PhoneFrame>
            </motion.div>

            <motion.div
              {...float(0.9)}
              className="absolute -right-3 -top-8 hidden w-44 rounded-xl border border-black/10 bg-white p-4 shadow-xl sm:block"
            >
              <HeroBrandChip />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroSite() {
  const a = lodge.art;
  return (
    <div className="p-6" style={{ background: a.bg, color: a.ink }}>
      <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em]">
        <span>Sable &amp; Stone</span>
        <span style={{ opacity: 0.5 }}>Stay · Safari · Enquire</span>
      </div>
      <p className="mt-10 font-heading text-2xl leading-tight sm:text-[1.7rem]">
        Where the wild feels like home.
      </p>
      <div className="mt-4 flex items-center gap-3 text-[10px]">
        <span
          className="rounded-full px-3 py-1 font-medium"
          style={{ background: a.accent, color: a.bg }}
        >
          Book a stay
        </span>
        <span style={{ opacity: 0.6 }}>Explore the lodge →</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {[a.soft, a.accent, a.panel].map((c, i) => (
          <div
            key={i}
            className="h-14 rounded-md"
            style={{ background: `linear-gradient(140deg, ${c}, ${a.ink}22)` }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroPhone() {
  const a = beauty.art;
  return (
    <div className="p-3" style={{ background: a.bg, color: a.ink }}>
      <div className="h-16 rounded-lg" style={{ background: a.panel }} />
      <p className="mt-2 font-heading text-sm leading-tight">Haneul</p>
      <p className="text-[8px]" style={{ opacity: 0.6 }}>
        Skincare, softly done
      </p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <div className="h-10 rounded" style={{ background: a.accent }} />
        <div className="h-10 rounded" style={{ background: a.soft }} />
      </div>
      <div
        className="mt-2 rounded-full py-1 text-center text-[8px] font-medium"
        style={{ background: a.ink, color: a.bg }}
      >
        Shop now
      </div>
    </div>
  );
}

function HeroBrandChip() {
  return (
    <div>
      <p className="eyebrow text-[0.5rem] text-muted-foreground">Brand board</p>
      <p className="mt-1 font-heading text-base text-charcoal">Marula &amp; Co</p>
      <div className="mt-3 flex gap-1.5">
        {["#ece0cc", "#a8512e", "#3a271d", "#6f7850"].map((c) => (
          <span
            key={c}
            className="h-6 w-4 rounded-full"
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  );
}
