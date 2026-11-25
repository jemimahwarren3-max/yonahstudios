import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";

export function ParallaxBanner({
  eyebrow,
  title,
  attribution,
}: {
  eyebrow?: string;
  title: string;
  attribution?: string;
}) {
  return (
    <section className="bg-charcoal py-20 sm:py-32">
      <Container>
        <Reveal>
          {eyebrow && (
            <p className="eyebrow text-center text-ivory/50">{eyebrow}</p>
          )}
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-4xl leading-[1.05] tracking-tight text-ivory sm:text-7xl">
            {title}
          </h2>
          {attribution && (
            <p className="mt-6 text-center text-sm text-ivory/45">{attribution}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
