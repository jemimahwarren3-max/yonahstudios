import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { WorkGallery } from "@/components/concept/work-gallery";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A curated collection of Yonah Studios concept projects — imagined brands, websites and social campaigns designed end to end to show what's possible.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Concept projects, designed end to end."
        intro="We're a new studio, so everything here is our own studio concept work — imagined businesses we branded, built and styled to demonstrate exactly what you could receive. Nothing here is a completed client project."
      />
      <section className="py-12 sm:py-16">
        <Container>
          <WorkGallery />
        </Container>
      </section>
      <FinalCTA
        heading="Like what you see? Let's make yours."
        text="Pick the style closest to your vision — or bring something entirely new. We'll design it around your business."
      />
    </>
  );
}
