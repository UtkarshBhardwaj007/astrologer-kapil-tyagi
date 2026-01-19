import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  keywords: PAGE_SEO.contact.keywords,
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: `${SEO_CONFIG.domain}/contact/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Astrologer Kapil Tyagi - Book Appointment in Delhi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/contact/`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact & Book Appointment", url: "/contact/" },
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
