import Link from "next/link";
import { Dove } from "@/components/brand/dove";
import { Container } from "./container";
import { nav, site, whatsappLink, mailtoLink } from "@/lib/site";
import { services } from "@/lib/data/services";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal text-ivory">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Dove className="h-8 w-8 text-ivory" />
              <span className="font-heading text-lg font-bold tracking-tight">
                Yonah Studios
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ivory/60">
              A remote creative studio crafting thoughtful brands, beautiful
              websites and digital marketing for businesses that want to look as
              good online as the work they do offline.
            </p>
            <p className="mt-5 text-xs text-ivory/40">{site.locations}</p>
          </div>

          <div>
            <h3 className="eyebrow text-ivory/40">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-ivory/40">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 transition-colors hover:text-ivory"
                >
                  WhatsApp · {site.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={mailtoLink}
                  className="break-all text-ivory/70 transition-colors hover:text-ivory"
                >
                  {site.email}
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-ivory/20 px-4 py-2 text-sm text-ivory transition-colors hover:border-ivory/50"
                >
                  Start a project →
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ivory/35">
              Services offered: {services.map((s) => s.title.split(" & ")[0]).join(", ")}.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/35 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Yonah Studios. All rights reserved.</p>
          <p>
            Live projects link to the real, published site. Studio concepts are
            clearly labelled and are original demonstrations, not client work.
          </p>
        </div>
      </Container>
    </footer>
  );
}
