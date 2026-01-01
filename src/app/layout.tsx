import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { totalReviews, averageRating } from "@/data/testimonials";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.title} | Vedic Astrologer in Delhi`,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.title,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: SITE_CONFIG.title,
              description: SITE_CONFIG.description,
              telephone: CONTACT_INFO.phone,
              email: CONTACT_INFO.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
                addressLocality: CONTACT_INFO.address.city,
                postalCode: CONTACT_INFO.address.pincode,
                addressCountry: "IN",
              },
              priceRange: "$$",
              openingHours: "Mo-Su 09:00-21:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: String(averageRating),
                reviewCount: String(totalReviews),
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
