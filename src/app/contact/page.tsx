import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { ProjectVisual } from "@/components/concept/project-visual";
import { site, whatsappLink, mailtoLink } from "@/lib/site";
import { getProject } from "@/lib/data/projects";

const contactPiece = getProject("fiore")!;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Yonah Studios. Tell us about your business and we'll help bring your brand, website or social media to life.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start something."
        intro="Tell us a little about your business and what you need. We'll get back to you with next steps, and an honest, clear quote."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <ProjectVisual project={contactPiece} />
                <div className="rounded-2xl border border-border bg-sand/50 p-7">
                  <h2 className="font-heading text-xl text-charcoal">
                    Prefer to chat?
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The fastest way to reach us is WhatsApp. We&apos;re happy to
                    talk through your idea before you commit to anything.
                  </p>
                  <div className="mt-5 space-y-3">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl bg-charcoal px-5 py-4 text-ivory transition-colors hover:bg-terracotta"
                    >
                      <span className="text-sm font-medium">WhatsApp</span>
                      <span className="text-sm">{site.phoneDisplay}</span>
                    </a>
                    <a
                      href={mailtoLink}
                      className="flex items-center justify-between rounded-xl border border-border px-5 py-4 text-charcoal transition-colors hover:border-charcoal"
                    >
                      <span className="text-sm font-medium">Email</span>
                      <span className="break-all text-sm text-muted-foreground">
                        {site.email}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-border p-7">
                  <h2 className="eyebrow text-muted-foreground">Based remotely</h2>
                  <p className="mt-3 text-charcoal">{site.locations}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Everything is delivered online, so we can work with you
                    wherever you are.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
