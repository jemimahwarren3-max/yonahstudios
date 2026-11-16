export type PriceItem = { name: string; price: string; note?: string };
export type PriceGroup = {
  slug: string;
  title: string;
  blurb: string;
  items: PriceItem[];
  cta: string;
};

export const pricingGroups: PriceGroup[] = [
  {
    slug: "branding",
    title: "Graphic Design & Branding",
    blurb: "Professional design for the pieces your business uses every day.",
    cta: "Start a branding project",
    items: [
      { name: "Logo design", price: "$20" },
      { name: "Company profile (PDF)", price: "$50" },
      { name: "Flyer / poster design", price: "$10" },
      { name: "Business card design", price: "$10" },
      { name: "Banner design", price: "$10" },
      { name: "Receipt book design", price: "$10" },
      { name: "CV / résumé design", price: "$12" },
      { name: "Pitch deck (up to 10 slides)", price: "$50" },
    ],
  },
  {
    slug: "web",
    title: "Website Design & Development",
    blurb: "Fast, responsive websites built to turn visitors into enquiries.",
    cta: "Start a website project",
    items: [
      { name: "Landing page (1 page)", price: "$80" },
      { name: "Brochure website (3–4 pages)", price: "$150" },
      { name: "Full website (5–7 pages)", price: "$250" },
      { name: "Google Business Profile setup", price: "$20" },
    ],
  },
  {
    slug: "social",
    title: "Social Media",
    blurb: "Coordinated monthly content, or fully managed for you.",
    cta: "Start with social",
    items: [
      { name: "Social media page setup", price: "$25" },
      {
        name: "Content creation",
        price: "$45",
        note: "/month — graphics, captions & a monthly content calendar. You publish.",
      },
      {
        name: "Full social media management",
        price: "$80",
        note: "/month — content, scheduling, publishing, basic engagement & a monthly report.",
      },
    ],
  },
];

export const pricingConditions = [
  "Domain registration and hosting are charged separately where applicable.",
  "Paid advertising spend (e.g. boosting posts) is not included.",
  "Printing and physical production are quoted separately.",
  "Photography and filming are not included — you supply photos and raw footage digitally.",
  "Larger or combined projects can receive a custom quotation.",
];

export const inclusions = {
  contentCreation: {
    title: "Content creation — what's included",
    items: [
      "Designed graphics for your posts",
      "Written captions",
      "A monthly content calendar",
      "You publish the content yourself",
    ],
  },
  fullManagement: {
    title: "Full management — what's included",
    items: [
      "Everything in content creation",
      "Scheduling and publishing for you",
      "Basic engagement (replies & comments)",
      "A monthly performance report",
    ],
  },
};
