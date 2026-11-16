import { liveProjects } from "./work";
import { getProject } from "./projects";

export type ShowcaseItem = {
  name: string;
  sector: string;
  description: string;
  image: string;
  href: string;
  external: boolean;
  tag: "Live site" | "Studio concept";
  linkLabel: string;
};

const live = (slug: string): ShowcaseItem => {
  const p = liveProjects.find((x) => x.slug === slug)!;
  return {
    name: p.name,
    sector: p.sector,
    description: p.description,
    image: p.image,
    href: p.url,
    external: true,
    tag: "Live site",
    linkLabel: "Visit live site",
  };
};

const concept = (slug: string): ShowcaseItem => {
  const p = getProject(slug)!;
  return {
    name: p.name,
    sector: p.sector,
    description: p.summary,
    image: p.image,
    href: `/work/${p.slug}`,
    external: false,
    tag: "Studio concept",
    linkLabel: "Explore the concept",
  };
};

/** Six works in rotation — live sites interleaved with studio concepts. */
export const showcaseItems: ShowcaseItem[] = [
  live("everafter"),
  concept("haneul"),
  live("wilderness-collection"),
  concept("tavola"),
  live("haki-systems"),
  concept("lela"),
];
