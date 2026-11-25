import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { Dove } from "@/components/brand/dove";
import { whatsappLink } from "@/lib/site";

export function FinalCTA({
  heading = "Your next chapter deserves a better digital presence.",
  text = "Tell us about your business and what you want to achieve. We'll help you bring it to life, thoughtfully and beautifully.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="pb-20 sm:pb-32">
      <Container>
        <Reveal>
          <div className="bg-charcoal px-6 py-16 text-center text-ivory sm:px-16 sm:py-28">
            <Dove className="mx-auto h-12 w-12 text-ivory/70" />
            <h2 className="mx-auto mt-10 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              {heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/60">{text}</p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
