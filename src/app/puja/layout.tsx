import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.puja.title,
  description: PAGE_SEO.puja.description,
  keywords: PAGE_SEO.puja.keywords,
  openGraph: {
    title: PAGE_SEO.puja.title,
    description: PAGE_SEO.puja.description,
    url: `${SEO_CONFIG.domain}/puja/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Puja Services and Vedic Remedies in Delhi by Pandit Kapil Tyagi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.puja.title,
    description: PAGE_SEO.puja.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/puja/`,
  },
};

export default function PujaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema(
    "Puja & Vedic Remedies",
    "Powerful Vedic puja services including Graha Shanti, Navgraha puja, Kaal Sarp dosh nivaran and astrological remedies in Delhi.",
    "/puja/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: "Puja & Remedies", url: "/puja/" },
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
