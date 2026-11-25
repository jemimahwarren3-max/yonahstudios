import { type ReactNode } from "react";
import { Container, Eyebrow } from "./container";
import { Reveal } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-36 pb-6 sm:pt-44">
      <Container>
        <Reveal className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
