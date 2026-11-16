export type Service = {
  slug: "branding" | "web" | "social";
  number: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  accent: string; // hex, for section theming
};

export const services: Service[] = [
  {
    slug: "branding",
    number: "01",
    title: "Graphic Design & Branding",
    short: "Identities that make small businesses feel considered and premium.",
    description:
      "We shape how a business looks and feels: from the logo and colour story to the everyday pieces that build trust. Thoughtful, consistent, and made to work everywhere your customers meet you.",
    deliverables: [
      "Logo design",
      "Brand identity systems",
      "Business cards",
      "Flyers & posters",
      "Company profiles",
      "Banners",
      "Receipt book designs",
      "CV & résumé designs",
      "Pitch decks",
    ],
    accent: "#c2683f",
  },
  {
    slug: "web",
    number: "02",
    title: "Website Design & Development",
    short: "Beautiful, fast websites that turn visitors into enquiries.",
    description:
      "We design and build responsive websites that look expensive and load quickly: from single landing pages to multi-page business sites and simple online stores. Clear structure, elegant motion, and calls to action that convert.",
    deliverables: [
      "Landing pages",
      "Business & brochure websites",
      "Multi-page corporate websites",
      "Ecommerce stores",
      "Responsive mobile experiences",
      "Google Business Profile setup",
    ],
    accent: "#4f6652",
  },
  {
    slug: "social",
    number: "03",
    title: "Social Media & Digital Marketing",
    short: "Coordinated content that makes a feed look like a brand.",
    description:
      "We plan and design monthly content that feels consistent and intentional: grids, stories, reels covers and campaigns, so your social presence looks as professional as your business is. Available as content creation or full management.",
    deliverables: [
      "Instagram grid & feed design",
      "Facebook promotional posts",
      "Stories & Reels covers",
      "Seasonal campaigns",
      "Monthly content calendars",
      "Caption & hashtag strategy",
      "Campaign planning",
      "Monthly reporting (full management)",
    ],
    accent: "#b2546a",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We get to know your business, your customers and what you want to achieve.",
  },
  {
    number: "02",
    title: "Create",
    text: "We develop the design, strategy or website, crafted around your goals.",
  },
  {
    number: "03",
    title: "Refine",
    text: "We review your feedback together and make the agreed revisions.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We hand over the finished, polished digital work, ready to use.",
  },
];
