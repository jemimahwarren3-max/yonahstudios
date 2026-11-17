import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { ProjectVisual, DeliverableGrid } from "@/components/concept/project-visual";
import type { Project, Variant } from "@/lib/data/projects";
import { ProcessSection } from "@/components/sections/process";
import { FinalCTA } from "@/components/sections/final-cta";
import { services } from "@/lib/data/services";
import { getProject } from "@/lib/data/projects";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Graphic design & branding, website design & development, and social media management: everything a growing business needs to look professional online.",
};

const serviceVisual: Record<string, string> = {
  branding: "fiore",
  web: "sable-and-stone",
  social: "marula-and-co",
};

const heroPieces: { project: Project; rotate: number; variant?: Variant }[] = [
  { project: getProject("sable-and-stone")!, rotate: -4 },
  { project: getProject("aurelle")!, rotate: 3 },
  { project: getProject("tavola")!, rotate: -2, variant: "social" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              Everything your business needs to be seen beautifully.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              From thoughtful brand identities to beautiful websites and
              digital campaigns, we create the visual and digital foundations
              that help businesses make their mark.
            </p>
            <div className="mt-9">
              <ButtonLink href={whatsappLink()} external>
                Start a project
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-3 gap-5 sm:gap-8">
            {heroPieces.map((h, i) => (
              <Reveal key={h.project.slug} delay={i * 0.1}>
                <div
                  className="transition-transform duration-500 hover:scale-[1.03]"
                  style={{ transform: `rotate(${h.rotate}deg)` }}
                >
                  <ProjectVisual project={h.project} variant={h.variant} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="space-y-20">
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
                      <span
                        className="font-heading text-2xl"
                        style={{ color: service.accent }}
                      >
                        {service.number}
                      </span>
                      <h2 className="mt-3 font-heading text-3xl text-charcoal sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group mt-8 inline-flex items-center gap-2 font-medium text-charcoal"
                      >
                        Explore this service
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                    <div>
                      {service.slug === "branding" ? (
                        <DeliverableGrid project={project} />
                      ) : (
                        <ProjectVisual
                          project={project}
                          variant={service.slug === "social" ? "social" : undefined}
                        />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <FinalCTA
        heading="Your business deserves to be seen differently."
        text="Tell us about your business and what you want to achieve. We'll put together a clear, honest quote."
      />
    </>
  );
}
