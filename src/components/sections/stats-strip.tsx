import { Container } from "@/components/site/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { projects } from "@/lib/data/projects";
import { liveProjects } from "@/lib/data/work";

const websiteCount = projects.filter((p) => p.discipline === "website").length;
const graphicCount = projects.filter((p) => p.discipline === "graphic").length;

const stats = [
  { value: liveProjects.length, label: "Live client sites" },
  { value: websiteCount, label: "Website concepts" },
  { value: graphicCount, label: "Graphic design concepts" },
  { value: 3, label: "Core services, one studio" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-sand/40 py-14">
      <Container>
        <Stagger className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <p className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
                <CountUp to={s.value} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
