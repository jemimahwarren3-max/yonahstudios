import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Centered max-width container with responsive side gutters. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "default" && "max-w-6xl",
        size === "wide" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A small tracked-out label with a short rule, used above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3 text-muted-foreground", className)}>
      <span className="h-px w-8 bg-current opacity-50" aria-hidden />
      {children}
    </span>
  );
}
