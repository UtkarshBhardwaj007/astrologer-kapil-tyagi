"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Hash } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NumerologyPage() {
  const { t } = useLanguage();
  
  const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numberColors: Record<string, string> = {
    "1": "#FFD700",
    "2": "#C0C0C0",
    "3": "#FF8C00",
    "4": "#8B4513",
    "5": "#50C878",
    "6": "#FFC0CB",
    "7": "#9370DB",
    "8": "#4682B4",
    "9": "#DC143C",
  };

  const serviceKeys = ["lifePath", "destiny", "name", "business", "mobile", "lucky"];

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
              <Hash size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("numerologyPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("numerologyPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("numerologyPage.heroDescription")}
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
                <span className="text-[var(--foreground)]">{t("numerologyPage.thePowerOf")} </span>
                <span className="text-gradient-gold">{t("numerologyPage.numbers")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("numerologyPage.numbersDesc1")}</p>
                <p>{t("numerologyPage.numbersDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("numerologyPage.numbersDesc3")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {numberKeys.map((num) => (
                <div
                  key={num}
                  className="card p-4 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold"
                    style={{ backgroundColor: `${numberColors[num]}30`, color: numberColors[num], border: `2px solid ${numberColors[num]}` }}
                  >
                    {num}
                  </div>
                  <p className="text-xs text-[var(--gold)]">{t(`numerologyPage.numberMeanings.${num}.planet`)}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Number Meanings */}
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
              <span className="text-[var(--foreground)]">{t("numerologyPage.understanding")} </span>
              <span className="text-gradient-gold">{t("numerologyPage.eachNumber")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("numerologyPage.eachNumberDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {numberKeys.map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold"
                    style={{ backgroundColor: `${numberColors[num]}30`, color: numberColors[num], border: `2px solid ${numberColors[num]}` }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                      {t("numerologyPage.number")} {num}
                    </h3>
                    <p className="text-sm text-[var(--gold)]">{t(`numerologyPage.numberMeanings.${num}.planet`)}</p>
                  </div>
                </div>

                <p className="text-sm text-[var(--foreground-muted)] mb-3">
                  {t(`numerologyPage.numberMeanings.${num}.description`)}
                </p>

                <div className="text-xs text-[var(--gold-muted)] italic">
                  {t(`numerologyPage.numberMeanings.${num}.traits`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              <span className="text-[var(--foreground)]">{t("numerologyPage.numerologyServices")} </span>
              <span className="text-gradient-gold">{t("numerologyPage.servicesTitle")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--gold-muted)] flex items-center justify-center mb-4">
                  <Hash size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                  {t(`numerologyPage.services.${key}.title`)}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t(`numerologyPage.services.${key}.description`)}
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
              <span className="text-[var(--foreground)]">{t("numerologyPage.discoverYour")} </span>
              <span className="text-gradient-gold">{t("numerologyPage.numbers")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("numerologyPage.ctaDesc", { name: t("common.siteName") })}
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
