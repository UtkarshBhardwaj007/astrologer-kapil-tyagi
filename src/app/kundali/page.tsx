"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, ScrollText, Sun, Moon, Star, Heart, Briefcase, Shield } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KundaliPage() {
  const { t } = useLanguage();
  
  const houseKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  
  const analysisAreas = [
    { icon: Star, key: "personality" },
    { icon: Briefcase, key: "career" },
    { icon: Heart, key: "marriage" },
    { icon: Sun, key: "dasha" },
    { icon: Shield, key: "dosha" },
    { icon: Moon, key: "transit" },
  ];

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
              <ScrollText size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("kundaliPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("kundaliPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("kundaliPage.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Kundali */}
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
                <span className="text-[var(--foreground)]">{t("kundaliPage.whatIsKundali")} </span>
                <span className="text-gradient-gold">{t("kundaliPage.whatIsKundaliHighlight")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("kundaliPage.whatIsKundaliDesc1")}</p>
                <p>{t("kundaliPage.whatIsKundaliDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("kundaliPage.whatIsKundaliDesc3")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-[var(--font-heading)] text-[var(--gold)] mb-6 text-center">
                {t("kundaliPage.requiredInfo")}
              </h3>
              <p className="text-[var(--foreground-muted)] text-center mb-6">
                {t("kundaliPage.requiredInfoDesc")}
              </p>
              <div className="space-y-4">
                {[
                  { label: t("kundaliPage.dateOfBirth"), value: t("kundaliPage.dateOfBirthValue") },
                  { label: t("kundaliPage.timeOfBirth"), value: t("kundaliPage.timeOfBirthValue") },
                  { label: t("kundaliPage.placeOfBirth"), value: t("kundaliPage.placeOfBirthValue") },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-[var(--gold-muted)]">
                    <span className="text-[var(--foreground)]">{item.label}</span>
                    <span className="text-[var(--foreground-muted)] text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--foreground-muted)] mt-4 text-center">
                {t("kundaliPage.accurateNote")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 12 Houses */}
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
              <span className="text-[var(--foreground)]">{t("kundaliPage.the12")} </span>
              <span className="text-gradient-gold">{t("kundaliPage.houses")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("kundaliPage.housesDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {houseKeys.map((num, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card p-4"
              >
                <div className="text-2xl font-[var(--font-heading)] text-[var(--gold)] mb-2">
                  {t(`kundaliPage.houses${num}.number`)} {t("kundaliPage.house")}
                </div>
                <div className="text-sm font-[var(--font-heading)] text-[var(--foreground)] mb-2">
                  {t(`kundaliPage.houses${num}.name`)}
                </div>
                <p className="text-xs text-[var(--foreground-muted)]">
                  {t(`kundaliPage.houses${num}.governs`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Areas */}
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
              <span className="text-[var(--foreground)]">{t("kundaliPage.whatWe")} </span>
              <span className="text-gradient-gold">{t("kundaliPage.analyze")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analysisAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-14 h-14 rounded-full border border-[var(--gold-muted)] flex items-center justify-center mb-4">
                  <area.icon size={28} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-3">
                  {t(`kundaliPage.analysis.${area.key}.title`)}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {t(`kundaliPage.analysis.${area.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">{t("kundaliPage.getYourKundali")} </span>
              <span className="text-gradient-gold">{t("kundaliPage.analyzed")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("kundaliPage.ctaDesc", { name: t("common.siteName") })}
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
