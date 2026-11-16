"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { nav, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The hero is light, so the header always uses dark text.
  const onDarkHero = false;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo light={onDarkHero} />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm transition-colors",
                  onDarkHero
                    ? active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : active
                      ? "text-charcoal"
                      : "text-muted-foreground hover:text-charcoal",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-terracotta" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              onDarkHero
                ? "bg-white text-charcoal hover:bg-terracotta hover:text-white"
                : "bg-charcoal text-ivory hover:bg-terracotta",
            )}
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden",
            onDarkHero ? "text-white" : "text-charcoal",
          )}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
          >
            <div className="flex h-18 items-center justify-between px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-heading text-4xl text-charcoal"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-10">
              <Link
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-base font-medium text-ivory"
              >
                Start a Project →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
