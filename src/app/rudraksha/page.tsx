"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Circle, CheckCircle, AlertTriangle, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RudrakshaPage() {
  const { t, tRaw } = useLanguage();
  
  const rudrakshaTypeKeys = ["1mukhi", "2mukhi", "3mukhi", "4mukhi", "5mukhi", "6mukhi", "7mukhi", "8mukhi", "9mukhi", "10mukhi", "11mukhi", "12mukhi"];
  const rudrakshaColors: Record<string, string> = {
    "1mukhi": "#FFD700",
    "2mukhi": "#C0C0C0",
    "3mukhi": "#FF6347",
    "4mukhi": "#50C878",
    "5mukhi": "#87CEEB",
    "6mukhi": "#DDA0DD",
    "7mukhi": "#FFD700",
    "8mukhi": "#8B4513",
    "9mukhi": "#800000",
    "10mukhi": "#4169E1",
    "11mukhi": "#FF4500",
    "12mukhi": "#FFA500",
  };

  const guidelineKeys = ["authenticity", "energization", "wearing", "consult"];

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
              <Circle size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("rudrakshaPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("rudrakshaPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("rudrakshaPage.heroDescription")}
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
                <span className="text-[var(--foreground)]">{t("rudrakshaPage.theSacred")} </span>
                <span className="text-gradient-gold">{t("rudrakshaPage.rudraksha")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("rudrakshaPage.rudrakshaDesc1")}</p>
                <p>{t("rudrakshaPage.rudrakshaDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("rudrakshaPage.rudrakshaDesc3")}
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
                const guidelineType = t(`rudrakshaPage.guidelines.${key}.type`);
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
                        {t(`rudrakshaPage.guidelines.${key}.title`)}
                      </h3>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        {t(`rudrakshaPage.guidelines.${key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <span className="text-[var(--foreground)]">{t("rudrakshaPage.benefitsOf")} </span>
              <span className="text-gradient-gold">{t("rudrakshaPage.rudraksha")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {tRaw<string[]>("rudrakshaPage.benefits")?.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card p-4 text-center"
              >
                <Sparkles size={20} className="text-[var(--gold)] mx-auto mb-2" />
                <p className="text-sm text-[var(--foreground)]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rudraksha Types Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">{t("rudrakshaPage.typesOf")} </span>
              <span className="text-gradient-gold">{t("rudrakshaPage.rudraksha")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("rudrakshaPage.typesDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rudrakshaTypeKeys.map((key, index) => {
              const color = rudrakshaColors[key];
              const benefits = tRaw<string[]>(`rudrakshaPage.types.${key}.benefits`) || [];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
                    >
                      <Circle size={24} style={{ color: color }} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)]">
                        {t(`rudrakshaPage.types.${key}.mukhi`)}
                      </h3>
                      <p className="text-sm text-[var(--gold)]">{t(`rudrakshaPage.types.${key}.deity`)}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--foreground-muted)]">{t("common.planet")}:</span>
                      <span className="text-[var(--foreground)]">{t(`rudrakshaPage.types.${key}.planet`)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--foreground-muted)]">{t("common.availability")}:</span>
                      <span className="text-[var(--foreground)]">{t(`rudrakshaPage.types.${key}.rarity`)}</span>
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

      {/* How to Wear Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-6 text-center">
              <span className="text-[var(--foreground)]">{t("rudrakshaPage.howToWear")} </span>
              <span className="text-gradient-gold">{t("rudrakshaPage.rudraksha")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />

            <div className="space-y-4">
              {tRaw<string[]>("rudrakshaPage.wearingSteps")?.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--gold)] text-[var(--background)] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-[var(--foreground-muted)]">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              <span className="text-[var(--foreground)]">{t("rudrakshaPage.getYour")} </span>
              <span className="text-gradient-gold">{t("rudrakshaPage.rudrakshaRecommendation")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("rudrakshaPage.ctaDesc", { name: t("common.siteName") })}
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
