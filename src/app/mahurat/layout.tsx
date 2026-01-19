import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.mahurat.title,
  description: PAGE_SEO.mahurat.description,
  keywords: PAGE_SEO.mahurat.keywords,
  openGraph: {
    title: PAGE_SEO.mahurat.title,
    description: PAGE_SEO.mahurat.description,
    url: `${SEO_CONFIG.domain}/mahurat/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Muhurat Consultation and Shubh Muhurat Selection in Delhi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.mahurat.title,
    description: PAGE_SEO.mahurat.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/mahurat/`,
  },
};

export default function MahuratLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Muhurat Consultation",
    "Expert Muhurat selection for marriage, griha pravesh, business inauguration and all important events in Delhi.",
    "/mahurat/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Muhurat Advice", url: "/mahurat/" },
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
