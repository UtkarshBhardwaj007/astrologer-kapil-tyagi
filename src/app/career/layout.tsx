import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.career.title,
  description: PAGE_SEO.career.description,
  keywords: PAGE_SEO.career.keywords,
  openGraph: {
    title: PAGE_SEO.career.title,
    description: PAGE_SEO.career.description,
    url: `${SEO_CONFIG.domain}/career/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Career and Business Astrology Consultation in Delhi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.career.title,
    description: PAGE_SEO.career.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/career/`,
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Career & Business Astrology",
    "Expert career and business astrology consultation. Job change timing, business success predictions, and partnership compatibility in Delhi.",
    "/career/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Career & Business", url: "/career/" },
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
