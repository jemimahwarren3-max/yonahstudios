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
  title: "Web Design, Branding & Social Media Services",
  description:
    "Website design, graphic design & branding, and social media management for businesses in Zimbabwe and South Africa. Clear pricing, remote delivery.",
  alternates: { canonical: "/services" },
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
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Container>
          <Reveal className="max-w-4xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-7xl">
              Everything your business needs to be seen beautifully.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
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

          <div className="mt-10 grid grid-cols-3 gap-5 sm:mt-14 sm:gap-8">
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

      <section className="py-12 sm:py-20">
        <Container>
          <div className="space-y-14 sm:space-y-20">
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
                        className="font-heading text-2xl font-bold"
                        style={{ color: service.accent }}
                      >
                        {service.number}
                      </span>
                      <h2 className="mt-3 text-3xl tracking-tight text-charcoal sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.04em] text-charcoal"
                      >
                        Explore this service
                        <span className="transition-transform group-hover:translate-x-1">→</span>
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
