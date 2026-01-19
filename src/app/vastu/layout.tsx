import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.vastu.title,
  description: PAGE_SEO.vastu.description,
  keywords: PAGE_SEO.vastu.keywords,
  openGraph: {
    title: PAGE_SEO.vastu.title,
    description: PAGE_SEO.vastu.description,
    url: `${SEO_CONFIG.domain}/vastu/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/vastu.png`,
        width: 1200,
        height: 630,
        alt: "Vastu Consultation Services in Delhi by Astrologer Kapil Tyagi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.vastu.title,
    description: PAGE_SEO.vastu.description,
    images: [`${SEO_CONFIG.domain}/images/vastu.png`],
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/vastu/`,
  },
};

export default function VastuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Vastu Consultation",
    "Expert Vastu Shastra consultation for home, office, and commercial properties in Delhi. Practical remedies without demolition.",
    "/vastu/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Vastu Consultation", url: "/vastu/" },
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
