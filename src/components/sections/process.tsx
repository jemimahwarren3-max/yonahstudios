import { Container, Eyebrow } from "@/components/site/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";
import { processSteps } from "@/lib/data/services";
import { siteImages } from "@/lib/img";

export function ProcessSection() {
  return (
    <ParallaxImage
      src={siteImages.process}
      alt="A calm, considered workspace"
      sizes="100vw"
      overlayClassName="bg-charcoal/88"
    >
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow className="text-white/60">How we work</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-white sm:text-5xl">
              A simple process, start to finish.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              No jargon, no runaround. Clear steps and clear communication, so
              you always know where your project stands.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem
                key={step.number}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <span className="font-heading text-3xl text-[color:var(--peach)]">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {step.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </ParallaxImage>
  );
}
