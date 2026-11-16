import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/motion/reveal";
import { LiveWorkCard } from "@/components/concept/live-work-card";
import { ProjectCard } from "@/components/concept/project-card";
import { FinalCTA } from "@/components/sections/final-cta";
import { liveProjects } from "@/lib/data/work";
import { websiteProjects, graphicProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Ten website projects and ten graphic-design projects by Yonah Studios: live client sites plus studio concepts across branding, packaging, posters and type.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Websites & graphic design."
        intro="Ten websites and ten graphic-design projects. Live client sites are marked “Live” and link to the real thing; everything else is a clearly-labelled studio concept, original design we created to show our range."
      />

      {/* Websites */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <Eyebrow>Websites · 10</Eyebrow>
            <h2 className="mt-5 font-heading text-3xl leading-tight text-charcoal sm:text-4xl">
              From first click to checkout.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {liveProjects.map((project) => (
              <Reveal key={project.slug}>
                <LiveWorkCard project={project} />
              </Reveal>
            ))}
            {websiteProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Graphic design */}
      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Graphic design · 10</Eyebrow>
            <h2 className="mt-5 font-heading text-3xl leading-tight text-charcoal sm:text-4xl">
              Identities, packaging, posters & type.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Studio concepts across branding and graphic design, each an
              original piece we designed to show how we think.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {graphicProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        heading="Like what you see? Let's make yours."
        text="Whether it's a brand-new site, a rebrand or a full identity, we'll design it around your business."
      />
    </>
  );
}
