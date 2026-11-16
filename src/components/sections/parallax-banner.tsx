import { ParallaxImage } from "@/components/motion/parallax";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";

export function ParallaxBanner({
  image,
  alt,
  eyebrow,
  title,
  attribution,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  attribution?: string;
}) {
  return (
    <ParallaxImage
      src={image}
      alt={alt}
      sizes="100vw"
      overlayClassName="bg-black/55"
      className="flex min-h-[62vh] items-center"
    >
      <Container className="py-24 text-center">
        <Reveal>
          {eyebrow && (
            <p className="eyebrow text-white/70">
              <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-current opacity-60" />
              {eyebrow}
            </p>
          )}
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] text-white sm:text-6xl">
            {title}
          </h2>
          {attribution && (
            <p className="mt-6 text-sm text-white/55">{attribution}</p>
          )}
        </Reveal>
      </Container>
    </ParallaxImage>
  );
}
