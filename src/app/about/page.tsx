import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Wrench, ShieldCheck, MessagesSquare } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { LogoStacked } from "@/components/brand/logo";
import { ButtonLink } from "@/components/site/cta";
import { FinalCTA } from "@/components/sections/final-cta";
import { ParallaxBanner } from "@/components/sections/parallax-banner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yonah Studios is a remote creative studio working with businesses across Zimbabwe, South Africa and beyond. Here's who we are and how we work.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Compass,
    title: "Design with intent",
    text: "Every choice (a colour, a typeface, a layout) should earn its place and serve the business behind it.",
  },
  {
    icon: Wrench,
    title: "Make it useful",
    text: "Beautiful is the baseline. The work also has to be clear, practical and easy for you to run day to day.",
  },
  {
    icon: ShieldCheck,
    title: "Keep it honest",
    text: "We're a new studio, so we show concept work rather than pretend. What you see is genuinely what you can get.",
  },
  {
    icon: MessagesSquare,
    title: "Stay close",
    text: "Remote doesn't mean distant. Clear, friendly communication from first message to final handover.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-6 sm:pt-44">
        <Container className="max-w-4xl">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-7xl">
              A creative studio for businesses that care how they show up.
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="pb-8 pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <Reveal>
              <p className="font-heading text-2xl font-bold leading-relaxed text-charcoal sm:text-[1.75rem]">
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
              <div className="border border-border bg-sand/50 px-8 py-16">
                <LogoStacked />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Our craft, in practice</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
                Every piece designed to feel like one considered brand.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                This is one example from our social media work: a coordinated
                grid built around a single brand's colours and voice, so every
                post looks like it belongs together.
              </p>
              <div className="mt-8">
                <ButtonLink href="/work" variant="outline">
                  See more of our work
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden border border-border">
                <Image
                  src="/about/work-example.png"
                  alt="A coordinated social media grid, one of our studio concepts"
                  width={642}
                  height={800}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ParallaxBanner
        eyebrow="Our craft"
        title="Details done well, every time."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="bg-charcoal p-8 text-ivory sm:p-14">
              <Eyebrow className="text-ivory/50">How we work</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-3xl leading-[1.05] tracking-tight sm:text-4xl">
                Fully remote, fully focused on you.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/65">
                Everything we do is delivered online, from the first
                conversation to final files. That keeps us flexible, keeps your
                costs down, and means we can work with you wherever your business
                is based. You share the details and any photos or footage; we
                handle the design and development and send everything back ready
                to use.
              </p>
              <p className="mt-6 text-sm text-ivory/45">{site.locations}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we value</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
              The principles behind the work.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:mt-14 sm:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title} className="bg-background p-8">
                <div className="flex h-10 w-10 items-center justify-center bg-terracotta/10 text-terracotta">
                  <p.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-charcoal">
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
