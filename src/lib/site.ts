export const site = {
  name: "Yonah Studios",
  domain: "www.yonahstudios.com",
  url: "https://www.yonahstudios.com",
  tagline: "Brand, web & social design studio",
  description:
    "A remote creative studio crafting thoughtful brands, beautiful websites and digital marketing for businesses across Zimbabwe, South Africa and beyond.",
  email: "yonahmartinez30@gmail.com",
  // Display + raw (digits only) for wa.me / tel: links
  phoneDisplay: "+263 77 672 7967",
  phoneRaw: "263776727967",
  locations: "Zimbabwe · South Africa · Worldwide (remote)",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Build a pre-filled WhatsApp link. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phoneRaw}`;
  const text =
    message ??
    "Hi Yonah Studios, I'd like to start a project. Here's what I have in mind:";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const mailtoLink = `mailto:${site.email}`;
export const telLink = `tel:+${site.phoneRaw}`;
