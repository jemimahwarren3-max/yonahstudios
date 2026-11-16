/** Real, live projects designed & built by Yonah Studios. */
export type LiveProject = {
  slug: string;
  name: string;
  url: string;
  sector: string;
  category: string;
  description: string;
  image: string; // local screenshot in /public
  /** true when we still need an accurate description from the client. */
  needsDetail?: boolean;
};

export const liveProjects: LiveProject[] = [
  {
    slug: "everafter",
    name: "EverAfter",
    url: "https://everafter-eta.vercel.app",
    sector: "Luxury weddings & events",
    category: "Website Design & Development",
    description:
      "A romantic, editorial website for a bespoke wedding and events studio: full-bleed photography, elegant serif type and a calm, timeless layout.",
    image: "/work/everafter.png",
  },
  {
    slug: "wilderness-collection",
    name: "The Wilderness Collection",
    url: "https://wildernesscollection.vercel.app",
    sector: "Luxury safari travel",
    category: "Website Design & Development",
    description:
      "A website for a luxury African safari collection: quiet-luxury styling, immersive wildlife imagery and curated lodge and journey pages.",
    image: "/work/wilderness.png",
  },
  {
    slug: "haki-systems",
    name: "Haki Systems",
    url: "https://hakisystems.co.zw",
    sector: "AI engineering & automation",
    category: "Website Design & Development",
    description:
      "A modern corporate site for an AI engineering and automation consultancy: confident, professional layouts with clear service and industry sections.",
    image: "/work/haki.png",
  },
];
