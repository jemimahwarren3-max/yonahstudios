import { site } from "@/lib/site";

/** Organization + WebSite structured data, for richer search results. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        description: site.description,
        email: site.email,
        telephone: `+${site.phoneRaw}`,
        areaServed: ["Zimbabwe", "South Africa", "Worldwide"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: `+${site.phoneRaw}`,
          email: site.email,
          areaServed: ["ZW", "ZA"],
          availableLanguage: ["English"],
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
