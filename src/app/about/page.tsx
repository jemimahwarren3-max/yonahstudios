import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { LogoStacked } from "@/components/brand/logo";
import { FinalCTA } from "@/components/sections/final-cta";
import { ParallaxBanner } from "@/components/sections/parallax-banner";
import { site } from "@/lib/site";

const principles = [
  {
    title: "Design with intent",
    text: "Every choice (a colour, a typeface, a layout) should earn its place and serve the business behind it.",
  },
  {
    title: "Make it useful",
    text: "Beautiful is the baseline. The work also has to be clear, practical and easy for you to run day to day.",
  },
  {
    title: "Keep it honest",
    text: "We're a new studio, so we show concept work rather than pretend. What you see is genuinely what you can get.",
  },
  {
    title: "Stay close",
    text: "Remote doesn't mean distant. Clear, friendly communication from first message to final handover.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A creative studio for businesses that care how they show up."
      />

      <section className="pb-8 pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <Reveal>
              <p className="font-heading text-2xl leading-relaxed text-charcoal sm:text-[1.75rem]">
                &ldquo;We believe every business deserves to look as good online
                as the work it does offline. Our job is to bring that vision to
                life through thoughtful design, useful technology and creative
                digital marketing.&rdquo;
              </p>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Yonah Studios is a remote creative studio working with startups,
                entrepreneurs, SMEs and established businesses across Zimbabwe,
                South Africa and beyond. We help brands look considered and
                professional, from a first logo to a full website and an
                ongoing social presence.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="self-center">
              <div className="rounded-3xl border border-border bg-sand/50 px-8 py-16">
                <LogoStacked />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Statement band */}
      <ParallaxBanner
        eyebrow="Our craft"
        title="Details done well, every time."
      />

      {/* Remote model */}
      <section className="py-16">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-charcoal p-8 text-ivory sm:p-14">
              <Eyebrow className="text-ivory/60">How we work</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-heading text-3xl leading-tight sm:text-4xl">
                Fully remote, fully focused on you.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/75">
                Everything we do is delivered online, from the first
                conversation to final files. That keeps us flexible, keeps your
                costs down, and means we can work with you wherever your business
                is based. You share the details and any photos or footage; we
                handle the design and development and send everything back ready
                to use.
              </p>
              <p className="mt-6 text-sm text-ivory/55">{site.locations}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we value</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
              The principles behind the work.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title} className="bg-background p-8">
                <div className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <h3 className="mt-4 font-heading text-xl text-charcoal">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
