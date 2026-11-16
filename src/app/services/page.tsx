import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/motion/reveal";
import { ProjectVisual } from "@/components/concept/project-visual";
import { ProcessSection } from "@/components/sections/process";
import { FinalCTA } from "@/components/sections/final-cta";
import { services } from "@/lib/data/services";
import { getProject } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Graphic design & branding, website design & development, and social media management — everything a growing business needs to look professional online.",
};

const serviceVisual: Record<string, string> = {
  branding: "haneul",
  web: "sable-and-stone",
  social: "lela",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to look professional online."
        intro="Three core services, designed to work beautifully on their own or together. Thoughtful, practical and priced for businesses that are growing."
      />

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
                      <ProjectVisual project={project} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <FinalCTA />
    </>
  );
}
