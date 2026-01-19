import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.rudraksha.title,
  description: PAGE_SEO.rudraksha.description,
  keywords: PAGE_SEO.rudraksha.keywords,
  openGraph: {
    title: PAGE_SEO.rudraksha.title,
    description: PAGE_SEO.rudraksha.description,
    url: `${SEO_CONFIG.domain}/rudraksha/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Authentic Rudraksha Beads Consultation in Delhi by Astrologer Kapil Tyagi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.rudraksha.title,
    description: PAGE_SEO.rudraksha.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/rudraksha/`,
  },
};

export default function RudrakshaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Rudraksha Consultation",
    "Authentic Rudraksha selection and consultation based on your horoscope. Original Nepal Rudraksha with certification in Delhi.",
    "/rudraksha/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Rudraksha Consultation", url: "/rudraksha/" },
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
