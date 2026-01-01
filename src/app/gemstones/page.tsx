"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Gem, CheckCircle, AlertTriangle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GemstonesPage() {
  const { t, tRaw } = useLanguage();
  
  const gemstoneKeys = ["ruby", "pearl", "coral", "emerald", "yellowSapphire", "diamond", "blueSapphire", "hessonite", "catsEye"];
  const gemstoneColors: Record<string, string> = {
    ruby: "#E0115F",
    pearl: "#FDEEF4",
    coral: "#FF4040",
    emerald: "#50C878",
    yellowSapphire: "#FFD700",
    diamond: "#B9F2FF",
    blueSapphire: "#0F52BA",
    hessonite: "#8B4513",
    catsEye: "#808000",
  };

  const guidelineKeys = ["consult", "quality", "energization", "weight"];

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-[var(--background-secondary)] particles-bg">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[var(--gold)] flex items-center justify-center">
              <Gem size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("gemstonesPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("gemstonesPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("gemstonesPage.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-[var(--font-heading)] mb-4">
                <span className="text-[var(--foreground)]">{t("gemstonesPage.theScienceOf")} </span>
                <span className="text-gradient-gold">{t("gemstonesPage.ratnaShastra")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("gemstonesPage.ratnaDesc1")}</p>
                <p>{t("gemstonesPage.ratnaDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("gemstonesPage.ratnaDesc3")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {guidelineKeys.map((key, index) => {
                const guidelineType = t(`gemstonesPage.guidelines.${key}.type`);
                return (
                  <div
                    key={index}
                    className={`card p-4 flex items-start gap-4 ${
                      guidelineType === "warning" ? "border-yellow-500/50" : ""
                    }`}
                  >
                    {guidelineType === "warning" ? (
                      <AlertTriangle size={24} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle size={24} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">
                        {t(`gemstonesPage.guidelines.${key}.title`)}
                      </h3>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        {t(`gemstonesPage.guidelines.${key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gemstones Grid */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">{t("gemstonesPage.the")} </span>
              <span className="text-gradient-gold">{t("gemstonesPage.navaratna")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("gemstonesPage.navaratnaDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gemstoneKeys.map((key, index) => {
              const color = gemstoneColors[key];
              const benefits = tRaw<string[]>(`gemstonesPage.gemstones.${key}.benefits`) || [];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}30`, border: `2px solid ${color}` }}
                    >
                      <Gem size={24} style={{ color: color }} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)]">
                        {t(`gemstonesPage.gemstones.${key}.name`)}
                      </h3>
                      <p className="text-sm text-[var(--gold)]">{t(`gemstonesPage.gemstones.${key}.hindi`)}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--foreground-muted)]">{t("common.planet")}:</span>
                      <span className="text-[var(--foreground)]">{t(`gemstonesPage.gemstones.${key}.planet`)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--foreground-muted)]">{t("common.zodiac")}:</span>
                      <span className="text-[var(--foreground)]">{t(`gemstonesPage.gemstones.${key}.zodiac`)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--foreground-muted)]">{t("common.finger")}:</span>
                      <span className="text-[var(--foreground)]">{t(`gemstonesPage.gemstones.${key}.finger`)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--foreground-muted)]">{t("common.metal")}:</span>
                      <span className="text-[var(--foreground)]">{t(`gemstonesPage.gemstones.${key}.metal`)}</span>
                    </div>
                  </div>

                  <div className="border-t border-[var(--gold-muted)] pt-4">
                    <p className="text-xs text-[var(--foreground-muted)] mb-2">{t("common.benefits")}:</p>
                    <div className="flex flex-wrap gap-1">
                      {benefits.map((benefit: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-[var(--gold-muted)] text-[var(--gold)] rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">{t("gemstonesPage.getYour")} </span>
              <span className="text-gradient-gold">{t("gemstonesPage.personalizedRecommendation")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("gemstonesPage.ctaDesc", { name: t("common.siteName") })}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-gold flex items-center gap-2">
                <Calendar size={18} />
                {t("home.hero.cta")}
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="btn-outline-gold flex items-center gap-2"
              >
                <Phone size={18} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
