"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ZodiacSign } from "@/data/zodiac-signs";
import { useLanguage } from "@/contexts/LanguageContext";

interface ZodiacCardProps {
  sign: ZodiacSign;
  index: number;
}

export default function ZodiacCard({ sign, index }: ZodiacCardProps) {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/zodiac/${sign.id}/`} className="block group">
        <div className="card p-3 sm:p-4 text-center hover:border-[var(--gold)] transition-all h-full flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px]">
          {/* Symbol */}
          <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">
            {sign.symbol}
          </div>

          {/* Name */}
          <h3 className="font-[var(--font-heading)] text-xs sm:text-sm text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors leading-tight">
            {t(`zodiac.${sign.id}`)}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

