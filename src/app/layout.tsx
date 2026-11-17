import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PromoBanner } from "@/components/site/promo-banner";
import { JsonLd } from "@/components/site/json-ld";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://yonahstudios.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yonah Studios: Brand, Web & Social Design Studio",
    template: "%s · Yonah Studios",
  },
  description:
    "Yonah Studios is a remote creative studio crafting thoughtful brands, beautiful websites and digital marketing for businesses across Zimbabwe, South Africa and beyond.",
  keywords: [
    "creative agency",
    "branding",
    "web design",
    "social media management",
    "graphic design",
    "Zimbabwe",
    "South Africa",
    "Yonah Studios",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Yonah Studios",
    title: "Yonah Studios: Brand, Web & Social Design Studio",
    description:
      "Thoughtful brands, beautiful websites and digital marketing experiences that help businesses stand out and grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yonah Studios: Brand, Web & Social Design Studio",
    description:
      "Thoughtful brands, beautiful websites and digital marketing experiences that help businesses stand out and grow.",
  },
};

export const viewport = {
  themeColor: "#1a1512",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd />
        <PromoBanner />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
