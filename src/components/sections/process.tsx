import { Container, Eyebrow } from "@/components/site/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { processSteps } from "@/lib/data/services";

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
            A simple process, start to finish.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No jargon, no runaround. Clear steps and clear communication, so you
            always know where your project stands.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <StaggerItem key={step.number} className="bg-background p-7">
              <span className="font-heading text-3xl text-terracotta">
                {step.number}
              </span>
              <h3 className="mt-4 font-heading text-xl text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
