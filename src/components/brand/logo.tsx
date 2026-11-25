import Link from "next/link";
import { Dove } from "./dove";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/",
  light = false,
}: {
  className?: string;
  href?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label="Yonah Studios: home"
      className={cn(
        "group inline-flex items-center gap-2.5 transition-colors duration-300",
        light ? "text-white" : "text-charcoal",
        className,
      )}
    >
      <Dove className="h-7 w-7 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="font-heading text-lg font-bold tracking-tight">
        Yonah Studios
      </span>
    </Link>
  );
}

export function LogoStacked({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center text-charcoal", className)}>
      <Dove className="h-16 w-16" />
      <span className="mt-4 font-heading text-2xl font-bold tracking-tight">
        YONAH
      </span>
      <span className="eyebrow mt-2 text-muted-foreground">Studios</span>
    </div>
  );
}
