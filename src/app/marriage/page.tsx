"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Heart, CheckCircle, AlertTriangle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MarriagePage() {
  const { t, tRaw } = useLanguage();
  
  const serviceKeys = ["gunMilan", "doshaDetection", "muhurat", "compatibility"];
  const gunMilanKeys = ["varna", "vashya", "tara", "yoni", "grahaMaitri", "gana", "bhakoot", "nadi"];
  const doshaKeys = ["manglik", "nadi", "bhakoot"];

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
              <Heart size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("marriagePage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("marriagePage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("marriagePage.heroDescription")}
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
                <span className="text-[var(--foreground)]">{t("marriagePage.theArtOf")} </span>
                <span className="text-gradient-gold">{t("marriagePage.kundaliMatching")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("marriagePage.matchingDesc1")}</p>
                <p>{t("marriagePage.matchingDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("marriagePage.matchingDesc3")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {serviceKeys.map((key, index) => (
                <div key={index} className="card p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold-muted)] flex items-center justify-center mx-auto mb-3">
                    <Heart size={20} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm text-[var(--foreground)] mb-2">
                    {t(`marriagePage.services.${key}.title`)}
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    {t(`marriagePage.services.${key}.description`)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ashta Kuta Section */}
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
              <span className="text-[var(--foreground)]">{t("marriagePage.ashta")} </span>
              <span className="text-gradient-gold">{t("marriagePage.kuta")}</span>
              <span className="text-[var(--foreground)]"> {t("marriagePage.system")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("marriagePage.kutaDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gunMilanKeys.map((key, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--gold)] text-[var(--background)] flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {t(`marriagePage.gunMilan.${key}.points`)}
                </div>
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                  {t(`marriagePage.gunMilan.${key}.name`)}
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] mb-2">
                  {t("common.max")} {t(`marriagePage.gunMilan.${key}.points`)} {Number(t(`marriagePage.gunMilan.${key}.points`)) === 1 ? t("common.point") : t("common.points")}
                </p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t(`marriagePage.gunMilan.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-4 card px-6 py-3">
              <span className="text-[var(--foreground-muted)]">{t("common.totalPoints")}:</span>
              <span className="text-2xl font-bold text-[var(--gold)]">36</span>
              <span className="text-[var(--foreground-muted)]">|</span>
              <span className="text-[var(--foreground-muted)]">{t("common.minimumRequired")}:</span>
              <span className="text-2xl font-bold text-[var(--gold)]">18</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doshas Section */}
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
              <span className="text-[var(--foreground)]">{t("marriagePage.marriage")} </span>
              <span className="text-gradient-gold">{t("marriagePage.doshas")}</span>
              <span className="text-[var(--foreground)]"> {t("marriagePage.andRemedies")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("marriagePage.doshasDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {doshaKeys.map((key, index) => {
              const remedies = tRaw<string[]>(`marriagePage.doshasList.${key}.remedies`) || [];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle size={24} className="text-yellow-500" />
                    <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                      {t(`marriagePage.doshasList.${key}.name`)}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--foreground-muted)] mb-4">
                    {t(`marriagePage.doshasList.${key}.description`)}
                  </p>
                  <div className="border-t border-[var(--gold-muted)] pt-4">
                    <p className="text-xs text-[var(--foreground-muted)] mb-2">{t("common.remedies")}:</p>
                    <ul className="space-y-1">
                      {remedies.map((remedy: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[var(--gold)]">
                          <CheckCircle size={12} />
                          {remedy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
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
              <span className="text-[var(--foreground)]">{t("marriagePage.important")} </span>
              <span className="text-gradient-gold">{t("marriagePage.tipsTitle")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />

            <div className="space-y-4">
              {tRaw<string[]>("marriagePage.tips")?.map((tip: string, index: number) => (
                <div key={index} className="flex items-start gap-3 card p-4">
                  <CheckCircle size={20} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <p className="text-[var(--foreground-muted)]">{tip}</p>
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
              <span className="text-[var(--foreground)]">{t("marriagePage.getYour")} </span>
              <span className="text-gradient-gold">{t("marriagePage.compatibilityAnalysis")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("marriagePage.ctaDesc", { name: t("common.siteName") })}
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
