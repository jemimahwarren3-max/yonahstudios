export type Category = "Branding" | "Graphic Design" | "Websites" | "Social Media";

export type Swatch = { name: string; hex: string };

export type Project = {
  slug: string;
  name: string;
  business: string;
  sector: string;
  categories: Category[];
  /** Primary visual treatment for the auto-generated mockup. */
  kind: "website" | "branding" | "social";
  /** Themed photograph (Pexels CDN) used for cards and the detail hero. */
  image: string;
  summary: string;
  direction: string;
  deliverables: string[];
  palette: Swatch[];
  typography: { heading: string; body: string };
  /** Art-direction tokens for the code-built visuals. */
  art: { bg: string; panel: string; ink: string; accent: string; soft: string };
};

/** Build an optimized Pexels CDN url for a photo id. */
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export const projects: Project[] = [
  {
    slug: "sable-and-stone",
    image: pexels(13869948),
    name: "Sable & Stone",
    business: "Sable & Stone Safari Lodge",
    sector: "Luxury hospitality",
    categories: ["Websites", "Branding"],
    kind: "website",
    summary:
      "A booking-led website for an imagined safari lodge — all slow luxury, wide horizons and quiet confidence.",
    direction:
      "We leaned into earth and stone: generous imagery space, a refined serif, and a calm layout that lets accommodation, activities and enquiries breathe. The booking flow stays effortless so guests reach out without friction.",
    deliverables: [
      "Brand mark & wordmark",
      "Responsive website design",
      "Accommodation & activities layouts",
      "Enquiry / booking flow",
      "Photography art direction guide",
    ],
    palette: [
      { name: "Stone", hex: "#e9e2d4" },
      { name: "Clay", hex: "#b07a52" },
      { name: "Olive", hex: "#5c6149" },
      { name: "Bark", hex: "#3a3228" },
      { name: "Bone", hex: "#f6f2e9" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#efe9dc", panel: "#e3d8c4", ink: "#3a3228", accent: "#b07a52", soft: "#5c6149" },
  },
  {
    slug: "haneul",
    image: pexels(34939754),
    name: "Haneul",
    business: "Haneul Skincare",
    sector: "K-beauty skincare",
    categories: ["Branding", "Websites"],
    kind: "branding",
    summary:
      "A soft, modern identity for a Korean-inspired skincare brand, from logo to a coordinated product world.",
    direction:
      "Blush and lilac, airy whitespace and a gentle wordmark create a sense of calm ritual. The system scales from packaging to an elegant online store and a cohesive Instagram feed.",
    deliverables: [
      "Logo & brand identity",
      "Packaging direction",
      "Business cards",
      "Ecommerce website concept",
      "Instagram grid templates",
    ],
    palette: [
      { name: "Petal", hex: "#f3dfe4" },
      { name: "Lilac", hex: "#cdc3e6" },
      { name: "Blush", hex: "#e7a9b6" },
      { name: "Ink", hex: "#3d3640" },
      { name: "Cream", hex: "#faf5f3" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#f7ecef", panel: "#f1dfe6", ink: "#3d3640", accent: "#d47f93", soft: "#cdc3e6" },
  },
  {
    slug: "tavola",
    image: pexels(30469692),
    name: "Tavola",
    business: "Tavola Trattoria",
    sector: "Restaurant & dining",
    categories: ["Websites", "Social Media"],
    kind: "website",
    summary:
      "A warm restaurant presence — website, digital menu and a social campaign that makes you hungry.",
    direction:
      "Charcoal and amber, confident display type and appetising negative space. The site centres the menu and reservations, while the campaign keeps the feed consistent and inviting.",
    deliverables: [
      "Website & digital menu",
      "Reservation enquiry flow",
      "Social campaign (9 posts)",
      "Promotional flyers",
      "Logo refinement",
    ],
    palette: [
      { name: "Char", hex: "#26211d" },
      { name: "Amber", hex: "#d08a3e" },
      { name: "Terracotta", hex: "#b5543a" },
      { name: "Linen", hex: "#efe7d8" },
      { name: "Sage", hex: "#8a8a6d" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#26211d", panel: "#312a24", ink: "#efe7d8", accent: "#d08a3e", soft: "#b5543a" },
  },
  {
    slug: "meridian",
    image: pexels(3801167),
    name: "Meridian",
    business: "Meridian Partners",
    sector: "Professional services",
    categories: ["Branding", "Websites"],
    kind: "branding",
    summary:
      "A composed, credible identity for a professional services firm that still feels human.",
    direction:
      "Deep navy, slate and a restrained gold accent signal trust and precision. The system spans a corporate website, company profile and stationery that look equally at home in a boardroom and an inbox.",
    deliverables: [
      "Logo & identity system",
      "Corporate website concept",
      "Company profile",
      "Pitch deck template",
      "Stationery suite",
    ],
    palette: [
      { name: "Navy", hex: "#1f2a3c" },
      { name: "Slate", hex: "#5b6676" },
      { name: "Gold", hex: "#c0a062" },
      { name: "Mist", hex: "#dde2e8" },
      { name: "Paper", hex: "#f4f5f7" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#eef0f3", panel: "#1f2a3c", ink: "#1f2a3c", accent: "#c0a062", soft: "#5b6676" },
  },
  {
    slug: "marula-and-co",
    image: pexels(38429395),
    name: "Marula & Co",
    business: "Marula & Co Coffee Roasters",
    sector: "Artisan coffee",
    categories: ["Branding", "Graphic Design"],
    kind: "branding",
    summary:
      "A handcrafted identity for a small-batch coffee roaster — honest, tactile and full of character.",
    direction:
      "Cream, rust and espresso with a stamped, hand-made feel. The identity flexes across bags, labels, cards and a loyalty stamp, giving a small roaster a big, consistent personality.",
    deliverables: [
      "Logo & brand marks",
      "Packaging & label system",
      "Loyalty card",
      "Menu board",
      "Social launch set",
    ],
    palette: [
      { name: "Cream", hex: "#ece0cc" },
      { name: "Rust", hex: "#a8512e" },
      { name: "Espresso", hex: "#3a271d" },
      { name: "Clay", hex: "#c98b5e" },
      { name: "Leaf", hex: "#6f7850" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#ece0cc", panel: "#e0cfb3", ink: "#3a271d", accent: "#a8512e", soft: "#6f7850" },
  },
  {
    slug: "lela",
    image: pexels(6899550),
    name: "Lelà",
    business: "Lelà Beauty & Spa",
    sector: "Beauty & wellness",
    categories: ["Social Media", "Branding"],
    kind: "social",
    summary:
      "A month of coordinated content for a beauty salon — calm, luxe and unmistakably consistent.",
    direction:
      "Mauve, rose and ivory with soft light and elegant type. A nine-post grid, matching stories and reel covers show a salon exactly how a professionally managed feed would feel.",
    deliverables: [
      "9-post Instagram grid",
      "Stories & reel covers",
      "Promotional campaign",
      "Content calendar",
      "Caption & hashtag set",
    ],
    palette: [
      { name: "Mauve", hex: "#b893a1" },
      { name: "Rose", hex: "#e6b7bd" },
      { name: "Ivory", hex: "#f7efe9" },
      { name: "Plum", hex: "#4a3a42" },
      { name: "Gold", hex: "#caa46f" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#f3e7e6", panel: "#e9cdd0", ink: "#4a3a42", accent: "#b893a1", soft: "#caa46f" },
  },
  {
    slug: "atrium",
    image: pexels(31804342),
    name: "Atrium",
    business: "Atrium Property",
    sector: "Real estate",
    categories: ["Websites"],
    kind: "website",
    summary:
      "A boutique real-estate website that makes every listing feel like an editorial feature.",
    direction:
      "Sand and forest green with architectural whitespace. Listings read like a magazine, with a clean enquiry path and calm, confident typography throughout.",
    deliverables: [
      "Website design",
      "Listing & detail layouts",
      "Enquiry flow",
      "Brand refinement",
      "Social teaser set",
    ],
    palette: [
      { name: "Sand", hex: "#e4dccb" },
      { name: "Forest", hex: "#2f4237" },
      { name: "Moss", hex: "#6c7a5e" },
      { name: "Stone", hex: "#b9ac93" },
      { name: "Paper", hex: "#f5f1e8" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#eee8da", panel: "#2f4237", ink: "#2f4237", accent: "#6c7a5e", soft: "#b9ac93" },
  },
  {
    slug: "fiore",
    image: pexels(4466585),
    name: "Fiore",
    business: "Fiore Florals",
    sector: "Boutique florist",
    categories: ["Social Media", "Branding"],
    kind: "social",
    summary:
      "A delicate identity and content set for a florist — fresh, seasonal and quietly beautiful.",
    direction:
      "Sage and peach with airy type and lots of light. The brand and its seasonal content feel hand-tied and personal, scaling from a logo to a full feed.",
    deliverables: [
      "Logo & identity",
      "Seasonal campaign",
      "6-post feed set",
      "Packaging stickers",
      "Market stall signage",
    ],
    palette: [
      { name: "Sage", hex: "#a7b196" },
      { name: "Peach", hex: "#f0c3a3" },
      { name: "Cream", hex: "#f7f1e6" },
      { name: "Stem", hex: "#4b5540" },
      { name: "Petal", hex: "#e8a5a0" },
    ],
    typography: { heading: "Fraunces", body: "Inter" },
    art: { bg: "#f1efe2", panel: "#dfe4cf", ink: "#4b5540", accent: "#d98e7f", soft: "#a7b196" },
  },
];

export const categories: Category[] = [
  "Branding",
  "Graphic Design",
  "Websites",
  "Social Media",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
