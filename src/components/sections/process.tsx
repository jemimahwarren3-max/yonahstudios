import { Container, Eyebrow } from "@/components/site/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { processSteps } from "@/lib/data/services";

export function ProcessSection() {
  return (
    <section className="bg-charcoal text-ivory">
      <Container className="py-20 sm:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-ivory/50">How we work</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            A simple process, start to finish.
          </h2>
          <p className="mt-4 text-lg text-ivory/60">
            No jargon, no runaround. Clear steps and clear communication, so you
            always know where your project stands.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <StaggerItem
              key={step.number}
              className="bg-charcoal p-8"
            >
              <span className="font-heading text-5xl font-bold tracking-tighter text-ivory/15">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                {step.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
