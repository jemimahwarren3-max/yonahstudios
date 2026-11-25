import Link from "next/link";
import { Dove } from "@/components/brand/dove";
import { Container } from "./container";
import { nav, site, whatsappLink, mailtoLink } from "@/lib/site";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal text-ivory">
      <Container className="py-10 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto_auto] sm:gap-12">
          <div className="flex items-center gap-2.5">
            <Dove className="h-7 w-7 text-ivory" />
            <span className="font-heading text-lg font-bold tracking-tight">
              Yonah Studios
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm text-ivory/60 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ivory/40 after:transition-transform after:duration-300 hover:text-ivory hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/60 transition-colors hover:text-ivory"
            >
              WhatsApp
            </Link>
            <span className="text-ivory/20">·</span>
            <Link
              href={mailtoLink}
              className="text-ivory/60 transition-colors hover:text-ivory"
            >
              Email
            </Link>
            <span className="text-ivory/20">·</span>
            <Link
              href="/contact"
              className="text-ivory/60 transition-colors hover:text-ivory"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-ivory/10 pt-6 text-xs text-ivory/30">
          <p>© {year} Yonah Studios · {site.locations}</p>
        </div>
      </Container>
    </footer>
  );
}
