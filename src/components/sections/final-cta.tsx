import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { Dove } from "@/components/brand/dove";
import { whatsappLink } from "@/lib/site";

export function FinalCTA({
  heading = "Your next chapter deserves a better digital presence.",
  text = "Tell us about your business and what you want to achieve. We'll help you bring it to life — thoughtfully, and beautifully.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-16 text-center text-ivory sm:px-16 sm:py-24">
            <Dove className="mx-auto h-12 w-12 text-ivory/80" />
            <h2 className="mx-auto mt-8 max-w-2xl font-heading text-4xl leading-tight sm:text-5xl">
              {heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ivory/70">{text}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href={whatsappLink()} variant="light" external>
                Chat on WhatsApp
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="light"
                className="border-ivory bg-ivory text-charcoal hover:bg-terracotta hover:text-ivory"
              >
                Start a project
              </ButtonLink>
            </div>
            <div
              className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-terracotta/20 blur-3xl"
              aria-hidden
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
