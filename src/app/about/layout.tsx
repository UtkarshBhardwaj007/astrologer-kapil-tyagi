import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  keywords: PAGE_SEO.about.keywords,
  openGraph: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    url: `${SEO_CONFIG.domain}/about/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/about-me.jpeg`,
        width: 1200,
        height: 630,
        alt: "Pandit Kapil Tyagi - Famous Jyotish Acharya Delhi with 25+ years experience",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    images: [`${SEO_CONFIG.domain}/images/about-me.jpeg`],
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/about/`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Astrologer Kapil Tyagi", url: "/about/" },
  ]);

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
