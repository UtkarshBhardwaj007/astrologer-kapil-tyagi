import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.numerology.title,
  description: PAGE_SEO.numerology.description,
  keywords: PAGE_SEO.numerology.keywords,
  openGraph: {
    title: PAGE_SEO.numerology.title,
    description: PAGE_SEO.numerology.description,
    url: `${SEO_CONFIG.domain}/numerology/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Numerology Services and Name Analysis by Expert Numerologist in Delhi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.numerology.title,
    description: PAGE_SEO.numerology.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/numerology/`,
  },
};

export default function NumerologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Numerology Consultation",
    "Expert numerology services including name numerology, lucky numbers, and business name analysis in Delhi.",
    "/numerology/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Numerology", url: "/numerology/" },
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
