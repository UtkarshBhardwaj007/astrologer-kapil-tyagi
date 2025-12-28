import { Metadata } from "next";
import { notFound } from "next/navigation";
import ZodiacPageContent from "./ZodiacPageContent";
import { zodiacSigns, getZodiacSign } from "@/data/zodiac-signs";
import { SITE_CONFIG } from "@/lib/constants";

interface PageProps {
  params: Promise<{ sign: string }>;
}

export async function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    sign: sign.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sign: signId } = await params;
  const sign = getZodiacSign(signId);

  if (!sign) {
    return {
      title: "Sign Not Found",
    };
  }

  return {
    title: `${sign.name} Zodiac Sign - Horoscope & Traits`,
    description: `Learn about ${sign.name} zodiac sign (${sign.dateRange}). Discover personality traits, compatibility, career insights, and more. Consultation by ${SITE_CONFIG.name}.`,
    keywords: `${sign.name}, ${sign.name} horoscope, ${sign.name} zodiac, ${sign.name} traits, ${sign.name} compatibility, astrology`,
  };
}

export default async function ZodiacPage({ params }: PageProps) {
  const { sign: signId } = await params;
  const sign = getZodiacSign(signId);

  if (!sign) {
    notFound();
  }

  return <ZodiacPageContent sign={sign} />;
}

