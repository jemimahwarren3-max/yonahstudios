import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A realistic browser chrome around a concept website preview. */
export function BrowserFrame({
  children,
  className,
  url = "yonahstudios.com",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_30px_60px_-25px_rgba(40,30,20,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-black/5 bg-neutral-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <span className="ml-3 hidden flex-1 truncate rounded-full bg-white px-3 py-1 text-[10px] text-neutral-400 sm:block">
          {url}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

/** A phone outline around a concept mobile preview. */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-[0_30px_60px_-25px_rgba(40,30,20,0.45)]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-neutral-700" />
      <div className="relative overflow-hidden rounded-[1.6rem] bg-white">
        {children}
      </div>
    </div>
  );
}
