import Link from "next/link";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { HomeHero } from "@/components/sections/home-hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ProcessSection } from "@/components/sections/process";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { ShowcaseCarousel } from "@/components/sections/showcase-carousel";
import { services } from "@/lib/data/services";

const valuePoints = [
  { title: "Thoughtful design", text: "Every piece is considered, intentional and made to fit your business." },
  { title: "Practical solutions", text: "Beautiful work that also does its job: clear, useful and easy to run." },
  { title: "Affordable & professional", text: "Studio-quality design at prices that make sense for growing businesses." },
  { title: "Clear communication", text: "No jargon and no guessing. You'll always know what's happening." },
  { title: "Remote collaboration", text: "Work with us from anywhere: everything is delivered online." },
];

const sectors = [
  "Hospitality",
  "Beauty & Skincare",
  "Restaurants",
  "Real Estate",
  "Fashion",
  "Healthcare",
  "Education",
  "Interior Design",
  "Coffee & Beverage",
  "Fintech",
];

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Stats */}
      <StatsStrip />

      {/* Intro / trust */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
                A remote creative partner for businesses that want to look
                their best.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col justify-end">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Yonah Studios helps startups, entrepreneurs and established
                businesses show up online with confidence — through brand
                design, websites and social media that feel considered,
                consistent and genuinely yours.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Alongside live sites we&apos;ve built, we show studio concepts,
                each clearly labelled, so you always know exactly what
                you&apos;re looking at.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {valuePoints.map((v) => (
              <StaggerItem key={v.title} className="bg-background p-8">
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </StaggerItem>
            ))}
            <StaggerItem className="bg-charcoal p-8 text-ivory">
              <h3 className="font-heading text-lg font-bold">
                Real work, honestly shown
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                Live sites and studio concepts — each clearly labelled so you
                always know what you&apos;re looking at.
              </p>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* Statement band — vivid color block */}
      <section className="bg-coral py-20 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center text-4xl leading-[1.05] tracking-tight text-white sm:text-7xl">
              We make the kind of work people remember.
            </h2>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              Three ways we help you grow.
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem
                key={service.slug}
                className="group relative bg-background p-8 transition-all duration-300 hover:bg-charcoal hover:text-ivory sm:p-10"
              >
                <span className="font-heading text-6xl font-bold text-border transition-colors duration-300 group-hover:text-ivory/20">
                  {service.number}
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-charcoal transition-colors duration-300 group-hover:text-ivory">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-ivory/60">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.slice(0, 4).map((d) => (
                    <li
                      key={d}
                      className="border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-all duration-300 group-hover:border-ivory/20 group-hover:bg-transparent group-hover:text-ivory/60"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.04em] text-charcoal transition-colors duration-300 group-hover:text-ivory hover:text-terracotta"
                  >
                    Explore {service.title.split(" ")[0].toLowerCase()}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Featured work */}
      <section className="bg-sand/40 py-20 sm:py-32">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
                A showreel of what we make.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Live sites and studio concepts. Pause on any that catches your
                eye and open it to explore.
              </p>
            </div>
            <Link
              href="/work"
              className="group hidden items-center gap-2 text-sm font-medium uppercase tracking-[0.04em] text-charcoal sm:inline-flex"
            >
              View all work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>

          <div className="mt-14">
            <ShowcaseCarousel />
          </div>

          <div className="mt-12 sm:hidden">
            <ButtonLink href="/work" variant="outline">
              View all work
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Sectors marquee */}
      <section className="border-y border-border py-10 sm:py-14">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {sectors.map((s) => (
              <span
                key={s}
                className="font-heading text-xl font-bold tracking-tight text-charcoal/40 sm:text-2xl"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
