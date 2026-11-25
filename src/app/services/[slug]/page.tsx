import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { BrowserFrame } from "@/components/concept/frame";
import { ProjectVisual, DeliverableGrid } from "@/components/concept/project-visual";
import { FinalCTA } from "@/components/sections/final-cta";
import { services } from "@/lib/data/services";
import { pricingGroups, inclusions } from "@/lib/data/pricing";
import { getProject, type Project } from "@/lib/data/projects";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const pricing = pricingGroups.find((g) => g.slug === slug);

  return (
    <>
      <section className="pt-36 pb-10 sm:pt-44">
        <Container>
          <Reveal className="max-w-3xl">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-charcoal"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              All services
            </Link>
            <p className="mt-8 font-heading text-3xl font-bold" style={{ color: service.accent }}>
              {service.number}
            </p>
            <h1 className="mt-3 text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={whatsappLink()} external>
                Start a project
              </ButtonLink>
              <ButtonLink href="/pricing" variant="outline">
                See pricing
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <Eyebrow>What you can receive</Eyebrow>
          </Reveal>
          <Stagger className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d) => (
              <StaggerItem key={d} className="flex items-center gap-3 bg-background p-6">
                <span
                  className="h-1.5 w-1.5 shrink-0"
                  style={{ background: service.accent }}
                />
                <span className="text-charcoal">{d}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Service-specific showcase */}
      {slug === "web" && <WebShowcase />}
      {slug === "branding" && <BrandingShowcase />}
      {slug === "social" && <SocialShowcase />}

      {/* Pricing teaser */}
      {pricing && (
        <section className="py-12 sm:py-16">
          <Container>
            <Reveal>
              <div className="border border-border bg-sand/50 p-8 sm:p-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <Eyebrow>Pricing</Eyebrow>
                    <h2 className="mt-4 text-3xl tracking-tight text-charcoal">
                      {pricing.title}
                    </h2>
                  </div>
                  <ButtonLink href="/pricing" variant="outline">
                    Full pricing
                  </ButtonLink>
                </div>
                <dl className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {pricing.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-3"
                    >
                      <dt className="text-charcoal">{item.name}</dt>
                      <dd className="font-heading text-lg text-charcoal">
                        {item.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      <FinalCTA />
    </>
  );
}

/* ---- Service-specific showcases ---- */

const webConcepts: { project: Project; label: string; blurb: string }[] = [
  {
    project: getProject("sable-and-stone")!,
    label: "Luxury hospitality",
    blurb: "Rooms, activities, galleries and effortless booking enquiries.",
  },
  {
    project: getProject("tavola")!,
    label: "Restaurant",
    blurb: "Appetising imagery, a digital menu and reservations.",
  },
  {
    project: getProject("atrium")!,
    label: "Real estate",
    blurb: "Image-led listings and a calm, confident enquiry path.",
  },
  {
    project: getProject("wellspring")!,
    label: "Healthcare",
    blurb: "A welcoming layout that makes booking care feel simple.",
  },
];

function MiniSite({ project }: { project: Project }) {
  const a = project.art;
  if (project.image) {
    // The reference photo already depicts its own device mockup, so it
    // isn't wrapped in another browser frame on top.
    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.sector}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <BrowserFrame url={`${project.slug}.com`}>
      <div className="p-5" style={{ background: a.bg, color: a.ink }}>
        <div className="flex justify-between text-[9px] uppercase tracking-[0.2em]">
          <span>{project.name}</span>
          <span style={{ opacity: 0.5 }}>Menu</span>
        </div>
        <p className="mt-8 font-heading text-xl leading-tight">
          {project.tagline ?? "Beautifully made."}
        </p>
        <span
          className="mt-3 inline-block rounded-full px-3 py-1 text-[10px] font-medium"
          style={{ background: a.accent, color: a.bg }}
        >
          Enquire
        </span>
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {[a.soft, a.panel, a.accent].map((c, i) => (
            <div key={i} className="h-10 rounded" style={{ background: c }} />
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function WebShowcase() {
  return (
    <section className="bg-sand/60 py-14 sm:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Interactive concepts</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal">
            Four website concepts, four distinct worlds.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse of the range we design for, from boutique hospitality to
            professional services. Open any concept in the portfolio to explore
            it in full.
          </p>
        </Reveal>
        <div className="mt-9 sm:mt-12 grid gap-8 sm:grid-cols-2">
          {webConcepts.map((c, i) => (
            <Reveal key={c.project.slug} delay={i * 0.05}>
              <Link href={`/work/${c.project.slug}`} className="group block">
                <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                  <MiniSite project={c.project} />
                </div>
                <h3 className="mt-5 font-heading text-xl text-charcoal">
                  {c.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="border border-border bg-background p-5 text-sm text-muted-foreground">
            Domain registration, hosting and any third-party services are
            charged separately, and quoted clearly before we begin.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function BrandingShowcase() {
  const aurelle = getProject("aurelle")!;
  const marula = getProject("marula-and-co")!;
  return (
    <section className="bg-sand/60 py-14 sm:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>A brand, transformed</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal">
            From a name to a complete identity.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A logo is just the start. We build the full world around it: colour,
            type, cards, flyers and social templates, so everything feels like
            one considered brand.
          </p>
        </Reveal>
        <div className="mt-9 sm:mt-12 grid gap-10 lg:grid-cols-2">
          {[marula, aurelle].map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                  <DeliverableGrid project={p} />
                </div>
                <h3 className="mt-5 font-heading text-xl text-charcoal">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.sector} · {[p.variant, ...(p.extraVariants ?? [])].length} coordinated pieces
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

const socialCampaigns: { project: Project; variant: "social" }[] = [
  { project: getProject("bloom")!, variant: "social" },
  { project: getProject("marula-and-co")!, variant: "social" },
  { project: getProject("tavola")!, variant: "social" },
];

function SocialShowcase() {
  return (
    <section className="bg-sand/60 py-14 sm:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Coordinated campaigns</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal">
            A feed that looks like a brand.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We design coordinated monthly content: grids, stories and reel
            covers, so your social presence looks consistent and intentional,
            whatever the business.
          </p>
        </Reveal>

        <div className="mt-9 sm:mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {socialCampaigns.map((c, i) => (
            <Reveal key={c.project.slug} delay={i * 0.05}>
              <Link href={`/work/${c.project.slug}`} className="group block">
                <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                  <ProjectVisual project={c.project} variant={c.variant} />
                </div>
                <h3 className="mt-5 font-heading text-lg text-charcoal">
                  {c.project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.project.sector}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-9 sm:mt-12 grid gap-6 sm:grid-cols-2">
            <div className="border border-border bg-background p-5">
              <h3 className="font-heading text-lg font-bold text-charcoal">
                {inclusions.contentCreation.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {inclusions.contentCreation.items.map((x) => (
                  <li key={x}>&bull; {x}</li>
                ))}
              </ul>
            </div>
            <div className="border border-border bg-background p-5">
              <h3 className="font-heading text-lg font-bold text-charcoal">
                {inclusions.fullManagement.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {inclusions.fullManagement.items.map((x) => (
                  <li key={x}>&bull; {x}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            You supply photos and raw footage digitally. We don't include
            physical filming or photography sessions.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
