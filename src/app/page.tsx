import Link from "next/link";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { HomeHero } from "@/components/sections/home-hero";
import { ParallaxBanner } from "@/components/sections/parallax-banner";
import { ProcessSection } from "@/components/sections/process";
import { FinalCTA } from "@/components/sections/final-cta";
import Image from "next/image";
import { ShowcaseCarousel } from "@/components/sections/showcase-carousel";
import { services } from "@/lib/data/services";
import { getProject } from "@/lib/data/projects";
import { siteImages } from "@/lib/img";

const valuePoints = [
  { title: "Thoughtful design", text: "Every piece is considered, intentional and made to fit your business." },
  { title: "Practical solutions", text: "Beautiful work that also does its job — clear, useful and easy to run." },
  { title: "Affordable & professional", text: "Studio-quality design at prices that make sense for growing businesses." },
  { title: "Clear communication", text: "No jargon and no guessing. You'll always know what's happening." },
  { title: "Remote collaboration", text: "Work with us from anywhere — everything is delivered online." },
];

const serviceVisual: Record<string, string> = {
  branding: "haneul",
  web: "sable-and-stone",
  social: "lela",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Intro / trust */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-5 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                A remote creative partner for businesses that want to look
                their best.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Yonah Studios helps startups, entrepreneurs and established
                businesses show up online with confidence — through brand
                design, websites and social media that feel considered,
                consistent and genuinely yours.
              </p>
            </Reveal>

            <Stagger className="grid gap-px self-center overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {valuePoints.map((v) => (
                <StaggerItem key={v.title} className="bg-background p-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <h3 className="mt-4 font-heading text-lg text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </StaggerItem>
              ))}
              <StaggerItem className="hidden bg-sand p-6 sm:block">
                <p className="font-heading text-lg text-charcoal">
                  Real work, honestly shown
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Alongside live sites we&apos;ve built, we show studio concepts
                  — each clearly labelled — so you always know exactly what
                  you&apos;re looking at.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Parallax statement */}
      <ParallaxBanner
        image={siteImages.bannerWarm}
        alt="A warm, beautifully designed interior space"
        eyebrow="Our promise"
        title="We make the kind of work people remember."
      />

      {/* Services preview */}
      <section className="bg-sand/60 py-20 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
              Three ways we help you grow.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20">
            {services.map((service, i) => {
              const project = getProject(serviceVisual[service.slug])!;
              const reversed = i % 2 === 1;
              return (
                <Reveal key={service.slug}>
                  <div
                    className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <span className="font-heading text-2xl text-terracotta">
                        {service.number}
                      </span>
                      <h3 className="mt-3 font-heading text-3xl text-charcoal">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {service.deliverables.slice(0, 5).map((d) => (
                          <li
                            key={d}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <ButtonLink
                          href={`/services/${service.slug}`}
                          variant="outline"
                        >
                          Explore {service.title.split(" ")[0].toLowerCase()}
                        </ButtonLink>
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand shadow-[0_30px_60px_-30px_rgba(40,30,20,0.4)]">
                      <Image
                        src={project.image}
                        alt={`${service.title} — ${project.name} concept`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Work in rotation</Eyebrow>
              <h2 className="mt-5 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                A showreel of what we make.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Live sites and studio concepts, cycling through — pause on any
                that catches your eye and open it to explore.
              </p>
            </div>
            <Link
              href="/work"
              className="group hidden items-center gap-2 text-sm font-medium text-charcoal sm:inline-flex"
            >
              View all work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
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

      <ProcessSection />
      <FinalCTA />
    </>
  );
}
