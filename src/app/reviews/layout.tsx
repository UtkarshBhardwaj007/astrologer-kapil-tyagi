import type { Metadata } from "next";
import { PAGE_SEO, SEO_CONFIG, SITE_CONFIG, STATS } from "@/lib/constants";
import { generateBreadcrumbSchema, generateReviewSchema } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: PAGE_SEO.reviews.title,
  description: PAGE_SEO.reviews.description,
  keywords: PAGE_SEO.reviews.keywords,
  openGraph: {
    title: PAGE_SEO.reviews.title,
    description: PAGE_SEO.reviews.description,
    url: `${SEO_CONFIG.domain}/reviews/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Client Reviews for Astrologer Kapil Tyagi - ${STATS.averageRating} Star Rating`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.reviews.title,
    description: PAGE_SEO.reviews.description,
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/reviews/`,
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Client Reviews", url: "/reviews/" },
  ]);

  // Generate review schemas from testimonials
  const reviewSchemas = generateReviewSchema(
    testimonials.map((t) => ({
      author: t.name,
      rating: t.rating,
      review: t.review,
      date: t.date,
    }))
  );

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {reviewSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
