import type { Metadata } from "next";
import { SEO_CONFIG, PAGE_SEO, CONTACT_INFO, SOCIAL_LINKS, STATS } from "./constants";

// Type definitions
type PageKey = keyof typeof PAGE_SEO;

interface BreadcrumbItem {
  name: string;
  url: string;
}

// Generate metadata for a specific page
export function generatePageMetadata(pageKey: PageKey): Metadata {
  const pageSeo = PAGE_SEO[pageKey];
  const canonicalPath = pageKey === "home" ? "/" : `/${pageKey}/`;
  
  return {
    title: pageSeo.title,
    description: pageSeo.description,
    keywords: pageSeo.keywords,
    authors: [{ name: SEO_CONFIG.siteName }],
    creator: SEO_CONFIG.siteName,
    publisher: SEO_CONFIG.siteName,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${SEO_CONFIG.domain}${canonicalPath}`,
      siteName: SEO_CONFIG.siteName,
      title: pageSeo.title,
      description: pageSeo.description,
      images: [
        {
          url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${SEO_CONFIG.siteName} - Best Vedic Astrologer in Delhi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
      images: [`${SEO_CONFIG.domain}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${SEO_CONFIG.domain}${canonicalPath}`,
    },
    verification: {
      // Add your verification codes here
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
  };
}

// Generate LocalBusiness + ProfessionalService Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SEO_CONFIG.domain}/#business`,
    name: SEO_CONFIG.siteName,
    alternateName: [
      "Pandit Kapil Tyagi",
      "Jyotish Acharya Kapil Tyagi",
      "Acharya Kapil Tyagi",
    ],
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.domain,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: `${SEO_CONFIG.domain}/images/og-image.jpg`,
    logo: `${SEO_CONFIG.domain}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: "Delhi",
      postalCode: CONTACT_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.7016145,
      longitude: 77.1082165,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Delhi",
      },
      {
        "@type": "State",
        name: "Delhi NCR",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    serviceType: [
      "Vedic Astrology",
      "Vastu Consultation",
      "Kundli Making",
      "Horoscope Reading",
      "Marriage Matching",
      "Numerology",
      "Gemstone Consultation",
      "Rudraksha Consultation",
      "Muhurat Selection",
      "Puja Services",
    ],
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.youtube,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(STATS.averageRating),
      reviewCount: String(STATS.totalReviews),
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Astrology Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kundli Making",
            description: "Comprehensive birth chart creation and life predictions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vastu Consultation",
            description: "Home and office Vastu analysis and remedies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marriage Matching",
            description: "Kundali matching for matrimonial purposes",
          },
        },
      ],
    },
  };
}

// Generate Person Schema for Astrologer Kapil Tyagi
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SEO_CONFIG.domain}/#person`,
    name: "Astrologer Kapil Tyagi",
    alternateName: ["Pandit Kapil Tyagi", "Acharya Kapil Tyagi", "Jyotish Kapil Tyagi"],
    jobTitle: "Jyotish Acharya",
    description: `Renowned Vedic astrologer with ${STATS.yearsOfExperience}+ years of experience in astrology, numerology, Vastu Shastra, and gemstone consultation.`,
    url: SEO_CONFIG.domain,
    image: `${SEO_CONFIG.domain}/images/about-me.jpeg`,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
      addressLocality: CONTACT_INFO.address.city,
      postalCode: CONTACT_INFO.address.pincode,
      addressCountry: "IN",
    },
    award: "Silver Medalist in Vedic Astrology",
    knowsAbout: [
      "Vedic Astrology",
      "Jyotish Shastra",
      "Vastu Shastra",
      "Numerology",
      "Gemstone Therapy",
      "Rudraksha",
      "Kundali Making",
      "Horoscope Reading",
      "Marriage Matching",
    ],
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.youtube,
    ],
    worksFor: {
      "@type": "Organization",
      name: SEO_CONFIG.siteName,
    },
  };
}

// Generate Service Schema for individual service pages
export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: `${SEO_CONFIG.domain}${serviceUrl}`,
    provider: {
      "@type": "Person",
      name: "Astrologer Kapil Tyagi",
      url: SEO_CONFIG.domain,
    },
    areaServed: {
      "@type": "City",
      name: "Delhi",
    },
    serviceType: serviceName,
  };
}

// Generate BreadcrumbList Schema
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.domain}${item.url}`,
    })),
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Review Schema
export function generateReviewSchema(reviews: { author: string; rating: number; review: string; date: string }[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating),
      bestRating: "5",
    },
    reviewBody: review.review,
    datePublished: review.date,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: SEO_CONFIG.siteName,
    },
  }));
}

// Generate WebSite Schema with SearchAction
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.domain}/#website`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.domain,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      "@id": `${SEO_CONFIG.domain}/#person`,
    },
    inLanguage: ["en-IN", "hi-IN"],
  };
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.domain}/#organization`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.domain,
    logo: `${SEO_CONFIG.domain}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.youtube,
    ],
  };
}

// Helper to combine multiple schemas
export function combineSchemas(...schemas: object[]) {
  return schemas;
}

// Get optimized alt text for images
export const IMAGE_ALT_TEXTS = {
  homepage: "Astrologer Kapil Tyagi - Best Vedic Astrologer in Delhi NCR - Jyotish Acharya",
  about: `Pandit Kapil Tyagi - Famous Jyotish Acharya Delhi with ${STATS.yearsOfExperience}+ years experience in Vedic Astrology`,
  vastu: "Vastu Consultation Services in Delhi by Expert Vastu Consultant Astrologer Kapil Tyagi",
  kundali: "Kundli Making and Birth Chart Analysis in Delhi by Astrologer Kapil Tyagi",
  marriage: "Marriage Astrology and Kundli Matching Services in Delhi",
  gemstones: "Gemstone Consultation and Recommendation by Expert Astrologer in Delhi",
  rudraksha: "Authentic Rudraksha Beads Consultation in Delhi",
  numerology: "Numerology Services and Name Analysis by Expert Numerologist Delhi",
  qrcode: "Scan QR Code to Leave a Review for Astrologer Kapil Tyagi on Google Maps",
  directions: "Location Map to Astrologer Kapil Tyagi Office in Rohini Delhi",
};
