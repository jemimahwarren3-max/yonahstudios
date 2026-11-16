export type Category = "Branding" | "Graphic Design" | "Websites" | "Social Media";
export type Discipline = "website" | "graphic";
/** Visual treatment for the code-built preview. */
export type Variant =
  | "editorial" // website
  | "shop"
  | "center"
  | "split"
  | "poster" // graphic
  | "packaging"
  | "brand"
  | "type"
  | "social";

export type Swatch = { name: string; hex: string };

export type Project = {
  slug: string;
  name: string;
  business: string;
  sector: string;
  discipline: Discipline;
  variant: Variant;
  categories: Category[];
  summary: string;
  direction: string;
  deliverables: string[];
  palette: Swatch[];
  typography: { heading: string; body: string };
  /** Art-direction tokens for the code-built visuals. */
  art: { bg: string; panel: string; ink: string; accent: string; soft: string };
  /** Short all-caps line shown inside poster/packaging pieces. */
  tagline?: string;
  /** Additional piece types to show alongside the primary variant, so a graphic
   * project reads as a full identity system (logo + packaging + stationery)
   * rather than one isolated artifact. */
  extraVariants?: Variant[];
};

const p = (
  bg: string,
  panel: string,
  ink: string,
  accent: string,
  soft: string,
) => ({ bg, panel, ink, accent, soft });

export const projects: Project[] = [
  /* ---------------- WEBSITES (concepts) ---------------- */
  {
    slug: "sable-and-stone",
    name: "Sable & Stone",
    business: "Sable & Stone Safari Lodge",
    sector: "Luxury hospitality",
    discipline: "website",
    variant: "editorial",
    categories: ["Websites", "Branding"],
    summary:
      "A booking-led website for a safari lodge: slow luxury, wide horizons, quiet confidence.",
    direction:
      "Earth and stone, generous imagery space and a refined serif. Accommodation, activities and enquiries breathe, and the booking flow stays effortless.",
    deliverables: ["Website design", "Booking flow", "Brand mark", "Photo art direction"],
    palette: [
      { name: "Stone", hex: "#e9e2d4" },
      { name: "Clay", hex: "#b07a52" },
      { name: "Olive", hex: "#5c6149" },
      { name: "Bark", hex: "#3a3228" },
      { name: "Bone", hex: "#f6f2e9" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#efe9dc", "#e3d8c4", "#3a3228", "#b07a52", "#5c6149"),
    tagline: "Where the wild feels like home",
  },
  {
    slug: "tavola",
    name: "Tavola",
    business: "Tavola Trattoria",
    sector: "Restaurant & dining",
    discipline: "website",
    variant: "center",
    categories: ["Websites", "Social Media"],
    summary:
      "A warm restaurant site: menu-forward, reservation-ready and genuinely appetising.",
    direction:
      "Charcoal and amber with confident display type. The site centres the menu and reservations with inviting negative space.",
    deliverables: ["Website & digital menu", "Reservations", "Logo refinement", "Launch set"],
    palette: [
      { name: "Char", hex: "#26211d" },
      { name: "Amber", hex: "#d08a3e" },
      { name: "Terracotta", hex: "#b5543a" },
      { name: "Linen", hex: "#efe7d8" },
      { name: "Sage", hex: "#8a8a6d" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#26211d", "#312a24", "#efe7d8", "#d08a3e", "#b5543a"),
    tagline: "A table worth travelling for",
  },
  {
    slug: "atrium",
    name: "Atrium",
    business: "Atrium Property",
    sector: "Real estate",
    discipline: "website",
    variant: "split",
    categories: ["Websites"],
    summary:
      "A boutique real-estate website where every listing reads like an editorial feature.",
    direction:
      "Sand and forest green with architectural whitespace. Listings feel like a magazine, with a calm, confident enquiry path.",
    deliverables: ["Website design", "Listing layouts", "Enquiry flow", "Brand refinement"],
    palette: [
      { name: "Sand", hex: "#e4dccb" },
      { name: "Forest", hex: "#2f4237" },
      { name: "Moss", hex: "#6c7a5e" },
      { name: "Stone", hex: "#b9ac93" },
      { name: "Paper", hex: "#f5f1e8" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#eee8da", "#2f4237", "#2f4237", "#6c7a5e", "#b9ac93"),
    tagline: "Spaces that tell a story",
  },
  {
    slug: "haneul",
    name: "Haneul",
    business: "Haneul Skincare",
    sector: "Beauty ecommerce",
    discipline: "website",
    variant: "shop",
    categories: ["Websites", "Branding"],
    summary:
      "A soft, modern ecommerce experience for a Korean-inspired skincare brand.",
    direction:
      "Blush and lilac, airy whitespace and premium product cards create a sense of calm ritual, from homepage to checkout.",
    deliverables: ["Ecommerce design", "Product pages", "Brand identity", "Email templates"],
    palette: [
      { name: "Petal", hex: "#f3dfe4" },
      { name: "Lilac", hex: "#cdc3e6" },
      { name: "Blush", hex: "#e7a9b6" },
      { name: "Ink", hex: "#3d3640" },
      { name: "Cream", hex: "#faf5f3" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#f7ecef", "#f1dfe6", "#3d3640", "#d47f93", "#cdc3e6"),
    tagline: "Skincare, softly done",
  },
  {
    slug: "meridian",
    name: "Meridian",
    business: "Meridian Partners",
    sector: "Professional services",
    discipline: "website",
    variant: "editorial",
    categories: ["Websites", "Branding"],
    summary:
      "A composed, credible website for a professional services firm that still feels human.",
    direction:
      "Deep navy, slate and a restrained gold accent signal trust and precision across a corporate site and company profile.",
    deliverables: ["Website design", "Company profile", "Pitch deck", "Stationery"],
    palette: [
      { name: "Navy", hex: "#1f2a3c" },
      { name: "Slate", hex: "#5b6676" },
      { name: "Gold", hex: "#c0a062" },
      { name: "Mist", hex: "#dde2e8" },
      { name: "Paper", hex: "#f4f5f7" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#1f2a3c", "#263349", "#eef0f3", "#c0a062", "#5b6676"),
    tagline: "Built on trust and precision",
  },
  {
    slug: "lumen",
    name: "Lumen",
    business: "Lumen Analytics",
    sector: "Tech / SaaS",
    discipline: "website",
    variant: "center",
    categories: ["Websites"],
    summary:
      "A crisp SaaS marketing site: confident, modern and conversion-focused.",
    direction:
      "Ink and electric blue with a clean grid, bold product claims and clear calls to action for a data startup.",
    deliverables: ["Marketing site", "Pricing page", "Brand system", "Icon set"],
    palette: [
      { name: "Ink", hex: "#141627" },
      { name: "Electric", hex: "#3b5bff" },
      { name: "Sky", hex: "#9db4ff" },
      { name: "Cloud", hex: "#eef1fb" },
      { name: "Mint", hex: "#6fe0c0" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#141627", "#1e2138", "#eef1fb", "#3b5bff", "#6fe0c0"),
    tagline: "See the whole picture",
  },
  {
    slug: "coraline",
    name: "Coraline",
    business: "Coraline Studio",
    sector: "Fashion ecommerce",
    discipline: "website",
    variant: "shop",
    categories: ["Websites", "Branding"],
    summary:
      "A refined fashion storefront: editorial, tactile and built to sell beautifully.",
    direction:
      "Bone and oxblood with elegant serif headlines and generous product imagery, balancing fashion editorial with a smooth shop.",
    deliverables: ["Ecommerce design", "Lookbook", "Brand identity", "Campaign art direction"],
    palette: [
      { name: "Bone", hex: "#f1ece3" },
      { name: "Oxblood", hex: "#6e2b2f" },
      { name: "Rose", hex: "#c98b86" },
      { name: "Ink", hex: "#241f1d" },
      { name: "Sand", hex: "#ddd2c2" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#f1ece3", "#e2d7c7", "#241f1d", "#6e2b2f", "#c98b86"),
    tagline: "Dress the part",
  },

  /* ---------------- GRAPHIC DESIGN (concepts) ---------------- */
  {
    slug: "dos-monos",
    name: "Dos Monos",
    business: "Dos Monos Cervecería",
    sector: "Craft beer",
    discipline: "graphic",
    variant: "packaging",
    categories: ["Branding", "Graphic Design"],
    summary:
      "Loud, joyful can designs and a brand that doesn't take itself too seriously.",
    direction:
      "Hot pink, electric blue and die-cut badge shapes. Expressive, playful packaging that pops on a shelf and a feed alike.",
    deliverables: ["Can & label design", "Logo", "Poster set", "Social launch"],
    palette: [
      { name: "Shock", hex: "#ff2d9b" },
      { name: "Electric", hex: "#2b2bff" },
      { name: "Lemon", hex: "#ffe14d" },
      { name: "Ink", hex: "#141216" },
      { name: "Paper", hex: "#f3efe6" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#f3efe6", "#ff2d9b", "#141216", "#2b2bff", "#ffe14d"),
    tagline: "Two monkeys, one great beer",
    extraVariants: ["brand", "poster"],
  },
  {
    slug: "verve",
    name: "Verve",
    business: "Verve Music Festival",
    sector: "Events & music",
    discipline: "graphic",
    variant: "poster",
    categories: ["Graphic Design", "Branding"],
    summary:
      "A high-energy festival identity: big type, bold colour, impossible to ignore.",
    direction:
      "Electric gradients and oversized display type. A poster system that scales from billboards to Instagram stories.",
    deliverables: ["Festival identity", "Poster series", "Lineup graphics", "Wayfinding"],
    palette: [
      { name: "Volt", hex: "#d6ff3f" },
      { name: "Grape", hex: "#5b21b6" },
      { name: "Flame", hex: "#ff5a36" },
      { name: "Ink", hex: "#160f20" },
      { name: "Haze", hex: "#efe7ff" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#160f20", "#5b21b6", "#efe7ff", "#d6ff3f", "#ff5a36"),
    tagline: "Three days · One sound",
  },
  {
    slug: "marula-and-co",
    name: "Marula & Co",
    business: "Marula & Co Coffee Roasters",
    sector: "Artisan coffee",
    discipline: "graphic",
    variant: "packaging",
    categories: ["Branding", "Graphic Design"],
    summary:
      "A handcrafted identity and bag system for a small-batch coffee roaster.",
    direction:
      "Cream, rust and espresso with a stamped, hand-made feel that flexes across bags, labels and a loyalty stamp.",
    deliverables: ["Packaging system", "Logo", "Loyalty card", "Menu board"],
    palette: [
      { name: "Cream", hex: "#ece0cc" },
      { name: "Rust", hex: "#a8512e" },
      { name: "Espresso", hex: "#3a271d" },
      { name: "Clay", hex: "#c98b5e" },
      { name: "Leaf", hex: "#6f7850" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#ece0cc", "#a8512e", "#3a271d", "#a8512e", "#6f7850"),
    tagline: "Small batch · Big heart",
    extraVariants: ["type", "brand"],
  },
  {
    slug: "ember",
    name: "Ember",
    business: "Ember Kitchen",
    sector: "Restaurant branding",
    discipline: "graphic",
    variant: "poster",
    categories: ["Graphic Design", "Branding"],
    summary:
      "A smoky, premium identity and menu system for a live-fire restaurant.",
    direction:
      "Charcoal, ember orange and a confident serif. Menus and posters feel warm, tactile and quietly upscale.",
    deliverables: ["Menu design", "Poster set", "Logo", "Signage"],
    palette: [
      { name: "Coal", hex: "#1c1a1a" },
      { name: "Ember", hex: "#e0612a" },
      { name: "Ash", hex: "#8a7f76" },
      { name: "Cream", hex: "#efe6da" },
      { name: "Gold", hex: "#c79a53" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#1c1a1a", "#e0612a", "#efe6da", "#e0612a", "#c79a53"),
    tagline: "Cooked over fire",
    extraVariants: ["brand", "social"],
  },
  {
    slug: "lela",
    name: "Lelà",
    business: "Lelà Beauty & Spa",
    sector: "Beauty & wellness",
    discipline: "graphic",
    variant: "social",
    categories: ["Social Media", "Branding"],
    summary:
      "A month of coordinated content for a beauty salon: calm, luxe, unmistakably consistent.",
    direction:
      "Mauve, rose and ivory with soft light and elegant type across a nine-post grid, stories and reel covers.",
    deliverables: ["9-post grid", "Stories & reels", "Content calendar", "Captions"],
    palette: [
      { name: "Mauve", hex: "#b893a1" },
      { name: "Rose", hex: "#e6b7bd" },
      { name: "Ivory", hex: "#f7efe9" },
      { name: "Plum", hex: "#4a3a42" },
      { name: "Gold", hex: "#caa46f" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#f3e7e6", "#e9cdd0", "#4a3a42", "#b893a1", "#caa46f"),
    tagline: "Glow, scheduled",
  },
  {
    slug: "fiore",
    name: "Fiore",
    business: "Fiore Florals",
    sector: "Boutique florist",
    discipline: "graphic",
    variant: "brand",
    categories: ["Branding", "Social Media"],
    summary:
      "A delicate identity and content set for a florist: fresh, seasonal, quietly beautiful.",
    direction:
      "Sage and peach with airy type and lots of light. Hand-tied and personal, scaling from a logo to a full feed.",
    deliverables: ["Logo & identity", "Packaging stickers", "Seasonal campaign", "Signage"],
    palette: [
      { name: "Sage", hex: "#a7b196" },
      { name: "Peach", hex: "#f0c3a3" },
      { name: "Cream", hex: "#f7f1e6" },
      { name: "Stem", hex: "#4b5540" },
      { name: "Petal", hex: "#e8a5a0" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#f1efe2", "#dfe4cf", "#4b5540", "#d98e7f", "#a7b196"),
    tagline: "Tied by hand",
    extraVariants: ["packaging", "social"],
  },
  {
    slug: "nova",
    name: "Nova",
    business: "Nova Pay",
    sector: "Fintech",
    discipline: "graphic",
    variant: "brand",
    categories: ["Branding", "Graphic Design"],
    summary:
      "A clean, trustworthy fintech identity with a flexible mark and bright accent.",
    direction:
      "Ink navy and a vivid mint, geometric mark and crisp grid, approachable but serious about money.",
    deliverables: ["Logo system", "Brand guidelines", "App icon", "Card design"],
    palette: [
      { name: "Ink", hex: "#10203a" },
      { name: "Mint", hex: "#2fd6a6" },
      { name: "Sky", hex: "#4aa3ff" },
      { name: "Cloud", hex: "#eaf1f8" },
      { name: "Coral", hex: "#ff7a66" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#10203a", "#2fd6a6", "#eaf1f8", "#2fd6a6", "#4aa3ff"),
    tagline: "Money, moving forward",
    extraVariants: ["type"],
  },
  {
    slug: "paramo",
    name: "Páramo",
    business: "Páramo Outdoors",
    sector: "Outdoor apparel",
    discipline: "graphic",
    variant: "type",
    categories: ["Branding", "Graphic Design"],
    summary:
      "A rugged-but-refined identity and typographic system for an outdoor apparel label.",
    direction:
      "Pine, slate and a safety-orange accent with a bold condensed type system built for tags, trail signs and lookbooks.",
    deliverables: ["Logo & wordmark", "Type system", "Hang tags", "Lookbook"],
    palette: [
      { name: "Pine", hex: "#243b33" },
      { name: "Slate", hex: "#55636a" },
      { name: "Signal", hex: "#ef6a30" },
      { name: "Bone", hex: "#ece6da" },
      { name: "Fog", hex: "#b7c0bd" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#243b33", "#2e4a40", "#ece6da", "#ef6a30", "#b7c0bd"),
    tagline: "Made for the wild",
    extraVariants: ["brand"],
  },
  {
    slug: "bloom",
    name: "Bloom",
    business: "Bloom Bakehouse",
    sector: "Bakery",
    discipline: "graphic",
    variant: "packaging",
    categories: ["Branding", "Graphic Design"],
    summary:
      "A sweet, wholesome packaging and brand system for a neighbourhood bakery.",
    direction:
      "Butter yellow, berry and a friendly rounded mark. Boxes, bags and labels feel handmade and inviting.",
    deliverables: ["Packaging", "Logo", "Loyalty card", "Market signage"],
    palette: [
      { name: "Butter", hex: "#f6d774" },
      { name: "Berry", hex: "#b23a5b" },
      { name: "Cream", hex: "#fbf3df" },
      { name: "Cocoa", hex: "#4a2f26" },
      { name: "Leaf", hex: "#7fa06a" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#fbf3df", "#f6d774", "#4a2f26", "#b23a5b", "#7fa06a"),
    tagline: "Baked fresh daily",
  },
  {
    slug: "studio-kin",
    name: "Studio Kin",
    business: "Studio Kin Architects",
    sector: "Architecture",
    discipline: "graphic",
    variant: "type",
    categories: ["Branding", "Graphic Design"],
    summary:
      "A quiet, confident identity and typographic system for an architecture practice.",
    direction:
      "Concrete grey, warm white and a single black accent. Restrained, grid-driven and deeply typographic.",
    deliverables: ["Logo & wordmark", "Grid system", "Stationery", "Portfolio layout"],
    palette: [
      { name: "Concrete", hex: "#cfccc5" },
      { name: "Warm white", hex: "#f2efe9" },
      { name: "Graphite", hex: "#2a2a28" },
      { name: "Taupe", hex: "#8c857a" },
      { name: "Clay", hex: "#b4866a" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: p("#f2efe9", "#cfccc5", "#2a2a28", "#2a2a28", "#8c857a"),
    tagline: "Form, with intent",
    extraVariants: ["brand"],
  },
];

export const categories: Category[] = [
  "Branding",
  "Graphic Design",
  "Websites",
  "Social Media",
];

export function getProject(slug: string) {
  return projects.find((x) => x.slug === slug);
}

export const websiteProjects = projects.filter((x) => x.discipline === "website");
export const graphicProjects = projects.filter((x) => x.discipline === "graphic");
