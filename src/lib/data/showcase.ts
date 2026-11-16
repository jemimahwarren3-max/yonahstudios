import { liveProjects } from "./work";
import { getProject, type Project } from "./projects";

export type ShowcaseItem = {
  name: string;
  sector: string;
  description: string;
  href: string;
  external: boolean;
  tag: "Live site" | "Studio concept";
  linkLabel: string;
  /** Live sites carry a screenshot; concepts carry the project for a code-built preview. */
  image?: string;
  project?: Project;
};

const live = (slug: string): ShowcaseItem => {
  const p = liveProjects.find((x) => x.slug === slug)!;
  return {
    name: p.name,
    sector: p.sector,
    description: p.description,
    href: p.url,
    external: true,
    tag: "Live site",
    linkLabel: "Visit live site",
    image: p.image,
  };
};

const concept = (slug: string): ShowcaseItem => {
  const p = getProject(slug)!;
  return {
    name: p.name,
    sector: p.sector,
    description: p.summary,
    href: `/work/${p.slug}`,
    external: false,
    tag: "Studio concept",
    linkLabel: "Explore the concept",
    project: p,
  };
};

/** Six works in rotation: live sites, website concepts and graphic design. */
export const showcaseItems: ShowcaseItem[] = [
  live("everafter"),
  concept("dos-monos"),
  live("wilderness-collection"),
  concept("haneul"),
  live("haki-systems"),
  concept("verve"),
];
