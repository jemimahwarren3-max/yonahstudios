import { site } from "@/lib/site";
import { services } from "@/lib/data/services";

/** ProfessionalService + WebSite structured data, for richer, locally-relevant
 * search results (Google knowledge panels, service listings). */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        image: `${site.url}/icon.svg`,
        description: site.description,
        email: site.email,
        telephone: `+${site.phoneRaw}`,
        priceRange: "$5-$250",
        areaServed: [
          { "@type": "Country", name: "Zimbabwe" },
          { "@type": "Country", name: "South Africa" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: `+${site.phoneRaw}`,
          email: site.email,
          areaServed: ["ZW", "ZA"],
          availableLanguage: ["English"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.short,
              areaServed: [
                { "@type": "Country", name: "Zimbabwe" },
                { "@type": "Country", name: "South Africa" },
              ],
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
