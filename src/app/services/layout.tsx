import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  keywords: PAGE_SEO.services.keywords,
  openGraph: {
    title: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
    url: `${SEO_CONFIG.domain}/services/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Astrology Services in Delhi - Kundli, Vastu, Numerology by Astrologer Kapil Tyagi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/services/`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Astrology Services", url: "/services/" },
  ]);

  // Service catalog schema
  const servicesCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Astrology Services by Astrologer Kapil Tyagi",
    description: "Comprehensive astrology services including Kundli making, Vastu consultation, marriage matching, numerology, and more in Delhi.",
    numberOfItems: 10,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kundli Making",
        url: `${SEO_CONFIG.domain}/kundali/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vastu Consultation",
        url: `${SEO_CONFIG.domain}/vastu/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Marriage Compatibility",
        url: `${SEO_CONFIG.domain}/marriage/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Numerology",
        url: `${SEO_CONFIG.domain}/numerology/`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Gemstone Consultation",
        url: `${SEO_CONFIG.domain}/gemstones/`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Rudraksha Consultation",
        url: `${SEO_CONFIG.domain}/rudraksha/`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Puja & Remedies",
        url: `${SEO_CONFIG.domain}/puja/`,
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Muhurat Advice",
        url: `${SEO_CONFIG.domain}/mahurat/`,
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Career & Business",
        url: `${SEO_CONFIG.domain}/career/`,
      },
    ],
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesCatalogSchema),
        }}
      />
    </>
  );
}
