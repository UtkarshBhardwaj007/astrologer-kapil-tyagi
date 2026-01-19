import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.kundali.title,
  description: PAGE_SEO.kundali.description,
  keywords: PAGE_SEO.kundali.keywords,
  openGraph: {
    title: PAGE_SEO.kundali.title,
    description: PAGE_SEO.kundali.description,
    url: `${SEO_CONFIG.domain}/kundali/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Kundli Making and Birth Chart Analysis in Delhi by Astrologer Kapil Tyagi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.kundali.title,
    description: PAGE_SEO.kundali.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/kundali/`,
  },
};

export default function KundaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Kundli Making",
    "Accurate Janam Kundali (birth chart) preparation and detailed analysis by expert Vedic astrologer in Delhi.",
    "/kundali/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Kundli Making", url: "/kundali/" },
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
