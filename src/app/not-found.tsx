import { Container } from "@/components/site/container";
import { ButtonLink } from "@/components/site/cta";
import { Dove } from "@/components/brand/dove";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <Dove className="mx-auto h-14 w-14 text-terracotta" />
        <p className="mt-8 font-heading text-6xl text-charcoal sm:text-7xl">404</p>
        <h1 className="mt-4 font-heading text-2xl text-charcoal">
          This page has flown off somewhere.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, but there&apos;s
          plenty of beautiful work to explore.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/work" variant="outline">
            See our work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
