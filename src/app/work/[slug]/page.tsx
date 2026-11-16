import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/site/cta";
import { ProjectVisual } from "@/components/concept/project-visual";
import { FinalCTA } from "@/components/sections/final-cta";
import { projects, getProject } from "@/lib/data/projects";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — ${project.sector} (Studio Concept)`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="pt-36 pb-10 sm:pt-44">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-charcoal"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              All work
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-sand px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Studio Concept
              </span>
              {project.categories.map((c) => (
                <span key={c} className="text-sm text-muted-foreground">
                  {c}
                </span>
              ))}
            </div>

            <h1 className="mt-5 font-heading text-5xl font-semibold leading-tight tracking-tight text-charcoal sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {project.business} · {project.sector}
            </p>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-charcoal">
              {project.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Feature visual */}
      <section className="pb-16">
        <Container>
          <Reveal>
            <div
              className="rounded-3xl p-6 sm:p-16"
              style={{ background: project.art.bg }}
            >
              <div className="mx-auto max-w-2xl">
                <ProjectVisual project={project} />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Direction + meta */}
      <section className="pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <Reveal>
              <h2 className="eyebrow text-muted-foreground">Creative direction</h2>
              <p className="mt-6 text-xl leading-relaxed text-charcoal">
                {project.direction}
              </p>

              <h3 className="eyebrow mt-12 text-muted-foreground">Colour palette</h3>
              <div className="mt-5 flex flex-wrap gap-4">
                {project.palette.map((s) => (
                  <div key={s.hex} className="text-center">
                    <div
                      className="h-16 w-16 rounded-xl border border-black/5"
                      style={{ background: s.hex }}
                    />
                    <p className="mt-2 text-xs font-medium text-charcoal">
                      {s.name}
                    </p>
                    <p className="text-[10px] uppercase text-muted-foreground">
                      {s.hex}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="eyebrow mt-12 text-muted-foreground">Typography</h3>
              <div className="mt-4 flex items-baseline gap-6">
                <span className="font-heading text-4xl text-charcoal">
                  {project.typography.heading}
                </span>
                <span className="text-xl text-muted-foreground">
                  {project.typography.body}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-sand/50 p-8">
                <h3 className="eyebrow text-muted-foreground">Deliverables</h3>
                <ul className="mt-5 space-y-3">
                  {project.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-charcoal"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink
                    href={whatsappLink(
                      `Hi Yonah Studios, I love the ${project.name} concept — I'd like something similar for my business.`,
                    )}
                    external
                  >
                    Request a project like this
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Next project */}
      <section className="pb-8">
        <Container>
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between border-t border-border py-10"
          >
            <div>
              <p className="eyebrow text-muted-foreground">Next concept</p>
              <p className="mt-2 font-heading text-3xl text-charcoal">
                {next.name}
              </p>
            </div>
            <span className="text-2xl text-muted-foreground transition-all group-hover:translate-x-2 group-hover:text-terracotta">
              →
            </span>
          </Link>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
