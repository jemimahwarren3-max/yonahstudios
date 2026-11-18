import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";

/** A bold typographic statement band: charcoal, no stock imagery. */
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
    <section className="py-8">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-14 text-center text-ivory sm:py-28">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-terracotta/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-peach/10 blur-3xl"
            aria-hidden
          />
          <Reveal>
            {eyebrow && (
              <p className="eyebrow text-ivory/60">
                <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-current opacity-60" />
                {eyebrow}
              </p>
            )}
            <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] sm:text-6xl">
              {title}
            </h2>
            {attribution && (
              <p className="mt-6 text-sm text-ivory/55">{attribution}</p>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
