import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG, CONTACT_INFO, SEO_CONFIG, SOCIAL_LINKS, STATS, PAGE_SEO } from "@/lib/constants";
import { totalReviews, averageRating } from "@/data/testimonials";
import { LanguageProvider } from "@/contexts/LanguageContext";
import {
  generateLocalBusinessSchema,
  generatePersonSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.domain),
  title: {
    default: PAGE_SEO.home.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SEO_CONFIG.domain }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SEO_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Best Vedic Astrologer in Delhi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: ["/images/og-image.jpg"],
    creator: "@astrologerkapiltyagi",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SEO_CONFIG.domain,
    languages: {
      "en-IN": SEO_CONFIG.domain,
      "hi-IN": `${SEO_CONFIG.domain}/hi/`,
    },
  },
  category: "Astrology",
  classification: "Professional Services",
  other: {
    // Geo meta tags for local SEO
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.7016145;77.1082165",
    "ICBM": "28.7016145, 77.1082165",
    // Business meta tags
    "business:contact_data:street_address": `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
    "business:contact_data:locality": CONTACT_INFO.address.city,
    "business:contact_data:postal_code": CONTACT_INFO.address.pincode,
    "business:contact_data:country_name": CONTACT_INFO.address.country,
    "business:contact_data:phone_number": CONTACT_INFO.phone,
    "business:contact_data:email": CONTACT_INFO.email,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate all structured data schemas
  const localBusinessSchema = generateLocalBusinessSchema();
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1a0a0d" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content={SITE_CONFIG.name} />
        <meta name="language" content="English, Hindi" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Verification tags - uncomment and add your codes */}
        {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}
        {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-[120px] md:pt-[140px]">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
