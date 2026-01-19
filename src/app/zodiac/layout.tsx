import type { Metadata } from "next";
import { SEO_CONFIG, SITE_CONFIG } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Zodiac Signs & Horoscope | Vedic Astrology | Astrologer Kapil Tyagi",
  description: "Explore all 12 zodiac signs with detailed horoscope readings. Learn about personality traits, compatibility, career prospects, and more. Expert Vedic astrology insights by Astrologer Kapil Tyagi in Delhi.",
  keywords: "zodiac signs, horoscope Delhi, rashi, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces, Vedic astrology Delhi",
  openGraph: {
    title: "Zodiac Signs & Horoscope | Astrologer Kapil Tyagi",
    description: "Explore all 12 zodiac signs with detailed horoscope readings by expert Vedic astrologer in Delhi.",
    url: `${SEO_CONFIG.domain}/zodiac/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Zodiac Signs and Horoscope by Astrologer Kapil Tyagi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zodiac Signs & Horoscope | Astrologer Kapil Tyagi",
    description: "Explore all 12 zodiac signs with detailed horoscope readings.",
  },
  alternates: {
    canonical: `${SEO_CONFIG.domain}/zodiac/aries/`,
  },
};

export default function ZodiacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Zodiac Signs", url: "/zodiac/aries/" },
  ]);

  // ItemList schema for all zodiac signs
  const zodiacListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "12 Zodiac Signs",
    description: "Complete guide to all 12 zodiac signs with Vedic astrology insights",
    numberOfItems: 12,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Aries (Mesh)", url: `${SEO_CONFIG.domain}/zodiac/aries/` },
      { "@type": "ListItem", position: 2, name: "Taurus (Vrishabh)", url: `${SEO_CONFIG.domain}/zodiac/taurus/` },
      { "@type": "ListItem", position: 3, name: "Gemini (Mithun)", url: `${SEO_CONFIG.domain}/zodiac/gemini/` },
      { "@type": "ListItem", position: 4, name: "Cancer (Kark)", url: `${SEO_CONFIG.domain}/zodiac/cancer/` },
      { "@type": "ListItem", position: 5, name: "Leo (Simha)", url: `${SEO_CONFIG.domain}/zodiac/leo/` },
      { "@type": "ListItem", position: 6, name: "Virgo (Kanya)", url: `${SEO_CONFIG.domain}/zodiac/virgo/` },
      { "@type": "ListItem", position: 7, name: "Libra (Tula)", url: `${SEO_CONFIG.domain}/zodiac/libra/` },
      { "@type": "ListItem", position: 8, name: "Scorpio (Vrishchik)", url: `${SEO_CONFIG.domain}/zodiac/scorpio/` },
      { "@type": "ListItem", position: 9, name: "Sagittarius (Dhanu)", url: `${SEO_CONFIG.domain}/zodiac/sagittarius/` },
      { "@type": "ListItem", position: 10, name: "Capricorn (Makar)", url: `${SEO_CONFIG.domain}/zodiac/capricorn/` },
      { "@type": "ListItem", position: 11, name: "Aquarius (Kumbh)", url: `${SEO_CONFIG.domain}/zodiac/aquarius/` },
      { "@type": "ListItem", position: 12, name: "Pisces (Meen)", url: `${SEO_CONFIG.domain}/zodiac/pisces/` },
    ],
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(zodiacListSchema),
        }}
      />
    </>
  );
}
