import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { PortfolioGallery } from "@/components/concept/portfolio-gallery";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Website and graphic-design projects by Yonah Studios: live client sites plus studio concepts across branding, packaging, posters and type.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work · 24 projects"
        title="Websites & graphic design."
        intro="Live client sites are marked “Live” and link to the real thing; everything else is a clearly-labelled studio concept, original design we created to show our range."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <PortfolioGallery />
        </Container>
      </section>

      <FinalCTA
        heading="Like what you see? Let's make yours."
        text="Whether it's a brand-new site, a rebrand or a full identity, we'll design it around your business."
      />
    </>
  );
}
