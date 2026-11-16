import Link from "next/link";
import { Dove } from "@/components/brand/dove";
import { Container } from "./container";
import { nav, site, whatsappLink, mailtoLink } from "@/lib/site";
import { services } from "@/lib/data/services";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-ivory">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Dove className="h-9 w-9 text-ivory" />
              <span className="font-heading text-xl font-semibold">
                Yonah Studios
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              A remote creative studio crafting thoughtful brands, beautiful
              websites and digital marketing for businesses that want to look as
              good online as the work they do offline.
            </p>
            <p className="mt-5 text-xs text-ivory/50">{site.locations}</p>
          </div>

          <div>
            <h3 className="eyebrow text-ivory/50">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-ivory/50">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/80 transition-colors hover:text-ivory"
                >
                  WhatsApp · {site.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={mailtoLink}
                  className="break-all text-ivory/80 transition-colors hover:text-ivory"
                >
                  {site.email}
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-ivory transition-colors hover:border-ivory/60"
                >
                  Start a project →
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ivory/45">
              Services offered: {services.map((s) => s.title.split(" & ")[0]).join(", ")}.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
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
