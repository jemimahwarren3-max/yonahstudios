import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { DeliverableGrid } from "@/components/concept/project-visual";
import { site, whatsappLink, mailtoLink } from "@/lib/site";
import { getProject } from "@/lib/data/projects";

const contactPiece = getProject("fiore")!;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Yonah Studios. Tell us about your business and we'll help bring your brand, website or social media to life.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-6 sm:pt-44">
        <Container className="max-w-4xl">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-7xl">
              Let&apos;s start something.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Tell us a little about your business and what you need. We&apos;ll
              get back to you with next steps, and an honest, clear quote.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <Reveal>
              <div className="border border-border bg-background p-7 sm:p-10">
                <h2 className="font-heading text-2xl font-bold text-charcoal">
                  Tell us about your project
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  The more we know, the more useful our first reply will be.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="bg-sand/50 p-5">
                  <p className="eyebrow text-muted-foreground">
                    A taste of what you could receive
                  </p>
                  <div className="mt-4">
                    <DeliverableGrid project={contactPiece} />
                  </div>
                  <Link
                    href="/work"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.04em] text-charcoal"
                  >
                    See more of our work
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>

                <div className="border border-border bg-background p-7">
                  <h2 className="font-heading text-xl font-bold text-charcoal">
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
                      className="group flex items-center gap-3 bg-charcoal px-5 py-4 text-ivory transition-colors hover:bg-terracotta"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0 opacity-80" />
                      <span className="flex flex-1 items-center justify-between">
                        <span className="text-sm font-medium">WhatsApp</span>
                        <span className="text-sm opacity-80">{site.phoneDisplay}</span>
                      </span>
                    </a>
                    <a
                      href={mailtoLink}
                      className="group flex items-center gap-3 border border-border px-5 py-4 text-charcoal transition-colors hover:border-charcoal"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="flex flex-1 items-center justify-between gap-3">
                        <span className="text-sm font-medium">Email</span>
                        <span className="break-all text-sm text-muted-foreground">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="border border-border p-7">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-terracotta" />
                    <h2 className="eyebrow text-muted-foreground">
                      Based remotely
                    </h2>
                  </div>
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
