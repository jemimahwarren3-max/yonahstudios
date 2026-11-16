import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/motion/reveal";
import { LiveWorkCard } from "@/components/concept/live-work-card";
import { WorkGallery } from "@/components/concept/work-gallery";
import { FinalCTA } from "@/components/sections/final-cta";
import { liveProjects } from "@/lib/data/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Live websites designed and built by Yonah Studios, plus studio concept projects that show the full range of what we can create.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Live projects, and concepts to match."
        intro="Below are real websites we've designed and built, followed by studio concepts — original demonstrations that show our range. Concepts are clearly labelled as such."
      />

      {/* Live work */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <Eyebrow>Selected work · Live</Eyebrow>
            <h2 className="mt-5 font-heading text-3xl leading-tight text-charcoal sm:text-4xl">
              Real sites, out in the world.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {liveProjects.map((project) => (
              <Reveal key={project.slug}>
                <LiveWorkCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Concepts */}
      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Studio concepts</Eyebrow>
            <h2 className="mt-5 font-heading text-3xl leading-tight text-charcoal sm:text-4xl">
              Imagined brands, designed end to end.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These are studio concepts — fictional businesses we branded and
              built to demonstrate what you could receive. They&apos;re not
              completed client projects.
            </p>
          </Reveal>
          <div className="mt-12">
            <WorkGallery />
          </div>
        </Container>
      </section>

      <FinalCTA
        heading="Like what you see? Let's make yours."
        text="Whether it's a brand-new site or a refresh, we'll design it around your business."
      />
    </>
  );
}
