import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { FinalCTA } from "@/components/sections/final-cta";
import { ParallaxBanner } from "@/components/sections/parallax-banner";
import {
  pricingGroups,
  pricingConditions,
  inclusions,
} from "@/lib/data/pricing";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, honest pricing in USD for branding, websites and social media. Custom packages available for larger projects.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Honest pricing, no surprises."
        intro="Transparent USD pricing for every service. Mix and match what you need — and for anything larger or combined, we'll put together a custom quote."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingGroups.map((group) => (
              <Reveal key={group.slug}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-background p-8">
                  <h2 className="font-heading text-2xl text-charcoal">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {group.blurb}
                  </p>
                  <ul className="mt-7 flex-1 space-y-4">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-border/70 pb-4 last:border-0"
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-charcoal">{item.name}</span>
                          <span className="font-heading text-xl text-charcoal">
                            {item.price}
                          </span>
                        </div>
                        {item.note && (
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                            {item.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink
                      href={whatsappLink(
                        `Hi Yonah Studios, I'm interested in your ${group.title} services.`,
                      )}
                      external
                      className="w-full"
                    >
                      {group.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Statement band */}
      <ParallaxBanner
        eyebrow="Fair & flexible"
        title="Great design, priced for growing businesses."
      />

      {/* Social inclusions */}
      <section className="py-12">
        <Container>
          <Reveal>
            <Eyebrow>Social media — what&apos;s included</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[inclusions.contentCreation, inclusions.fullManagement].map(
              (block) => (
                <Reveal key={block.title}>
                  <div className="rounded-2xl border border-border bg-sand/50 p-8">
                    <h3 className="font-heading text-xl text-charcoal">
                      {block.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-charcoal"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* Conditions */}
      <section className="py-12">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-charcoal p-8 text-ivory sm:p-12">
              <h2 className="eyebrow text-ivory/60">Good to know</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {pricingConditions.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm text-ivory/85"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink
                  href={whatsappLink(
                    "Hi Yonah Studios, I'd like a custom quote for my project.",
                  )}
                  variant="light"
                  external
                >
                  Request a custom quote
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
