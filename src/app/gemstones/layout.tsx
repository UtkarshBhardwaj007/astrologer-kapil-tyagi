import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.gemstones.title,
  description: PAGE_SEO.gemstones.description,
  keywords: PAGE_SEO.gemstones.keywords,
  openGraph: {
    title: PAGE_SEO.gemstones.title,
    description: PAGE_SEO.gemstones.description,
    url: `${SEO_CONFIG.domain}/gemstones/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gemstone Consultation and Recommendation by Expert Astrologer in Delhi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.gemstones.title,
    description: PAGE_SEO.gemstones.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/gemstones/`,
  },
};

export default function GemstonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Gemstone Consultation",
    "Expert gemstone recommendation based on birth chart analysis. Authentic Navaratna gemstones with proper energization in Delhi.",
    "/gemstones/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Gemstone Consultation", url: "/gemstones/" },
  ]);

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
