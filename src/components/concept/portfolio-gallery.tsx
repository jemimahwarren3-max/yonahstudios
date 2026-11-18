"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "./project-card";
import { LiveWorkCard } from "./live-work-card";
import { projects, categories, type Category } from "@/lib/data/projects";
import { liveProjects, type LiveProject } from "@/lib/data/work";
import { cn } from "@/lib/utils";

type Filter = "All" | Category;
const filters: Filter[] = ["All", ...categories];

type Entry =
  | { kind: "live"; key: string; project: LiveProject }
  | { kind: "concept"; key: string; project: (typeof projects)[number] };

const entries: Entry[] = [
  ...liveProjects.map((p): Entry => ({ kind: "live", key: `live-${p.slug}`, project: p })),
  ...projects.map((p): Entry => ({ kind: "concept", key: `concept-${p.slug}`, project: p })),
];

function matches(entry: Entry, filter: Filter) {
  if (filter === "All") return true;
  if (entry.kind === "live") return filter === "Websites";
  return entry.project.categories.includes(filter);
}

export function PortfolioGallery() {
  const [active, setActive] = useState<Filter>("All");
  const visible = useMemo(
    () => entries.filter((e) => matches(e, active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === f
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-border bg-background text-muted-foreground hover:border-charcoal/40 hover:text-charcoal",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-x-8 gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((entry) => (
            <motion.div
              key={entry.key}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {entry.kind === "live" ? (
                <LiveWorkCard project={entry.project} />
              ) : (
                <ProjectCard project={entry.project} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
