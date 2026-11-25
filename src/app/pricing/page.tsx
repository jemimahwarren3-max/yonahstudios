import type { Metadata } from "next";
import { Palette, Globe, Megaphone, Sparkles } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { FinalCTA } from "@/components/sections/final-cta";
import { ParallaxBanner } from "@/components/sections/parallax-banner";
import {
  pricingGroups,
  pricingConditions,
  inclusions,
} from "@/lib/data/pricing";
import { services } from "@/lib/data/services";
import { whatsappLink } from "@/lib/site";
import { PROMO_ACTIVE, PROMO_PERCENT, discountedPrice } from "@/lib/promo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, honest pricing in USD for branding, websites and social media. Custom packages available for larger projects.",
  alternates: { canonical: "/pricing" },
};

const icons = { branding: Palette, web: Globe, social: Megaphone } as const;

export default function PricingPage() {
  return (
    <>
      <section className="pt-36 pb-6 sm:pt-44">
        <Container className="max-w-4xl">
          <Reveal>
            {PROMO_ACTIVE && (
              <span className="mb-5 inline-block bg-terracotta px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-ivory">
                Launch offer: {PROMO_PERCENT}% off everything
              </span>
            )}
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-7xl">
              Honest pricing, no surprises.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Transparent USD pricing for every service. Mix and match what
              you need. For anything larger or combined, we&apos;ll put
              together a custom quote.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
            {pricingGroups.map((group, i) => {
              const service = services.find((s) => s.slug === group.slug);
              const accent = service?.accent ?? "#c2683f";
              const Icon = icons[group.slug as keyof typeof icons] ?? Sparkles;
              return (
                <Reveal key={group.slug} delay={i * 0.08}>
                  <div className="flex h-full flex-col bg-background p-8">
                    <div
                      className="flex h-10 w-10 items-center justify-center"
                      style={{ background: `${accent}15`, color: accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 font-heading text-2xl font-bold text-charcoal">
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
                            {PROMO_ACTIVE ? (
                              <span className="flex items-baseline gap-2">
                                <span className="text-sm text-muted-foreground line-through">
                                  {item.price}
                                </span>
                                <span
                                  className="font-heading text-xl font-bold"
                                  style={{ color: accent }}
                                >
                                  {discountedPrice(item.price)}
                                </span>
                              </span>
                            ) : (
                              <span className="font-heading text-xl font-bold text-charcoal">
                                {item.price}
                              </span>
                            )}
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
              );
            })}
          </div>
        </Container>
      </section>

      <ParallaxBanner
        eyebrow="Fair & flexible"
        title="Great design, priced for growing businesses."
      />

      <section className="py-12">
        <Container>
          <Reveal>
            <Eyebrow>Social media: what&apos;s included</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {[inclusions.contentCreation, inclusions.fullManagement].map(
              (block) => (
                <Reveal key={block.title}>
                  <div className="bg-background p-8">
                    <h3 className="font-heading text-xl font-bold text-charcoal">
                      {block.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-charcoal"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-terracotta" />
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

      <section className="py-12">
        <Container>
          <Reveal>
            <div className="bg-charcoal p-8 text-ivory sm:p-12">
              <h2 className="eyebrow text-ivory/50">Good to know</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {pricingConditions.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm text-ivory/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-terracotta" />
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
