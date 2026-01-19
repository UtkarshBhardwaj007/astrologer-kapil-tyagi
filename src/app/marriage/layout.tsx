import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.marriage.title,
  description: PAGE_SEO.marriage.description,
  keywords: PAGE_SEO.marriage.keywords,
  openGraph: {
    title: PAGE_SEO.marriage.title,
    description: PAGE_SEO.marriage.description,
    url: `${SEO_CONFIG.domain}/marriage/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Marriage Astrology and Kundli Matching Services in Delhi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.marriage.title,
    description: PAGE_SEO.marriage.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/marriage/`,
  },
};

export default function MarriageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Marriage Compatibility & Kundli Matching",
    "Expert kundli matching for marriage with 36 Guna Milan, Manglik dosha check, and compatibility analysis in Delhi.",
    "/marriage/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Marriage Compatibility", url: "/marriage/" },
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
