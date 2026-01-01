"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Clock, CheckCircle, Heart, Home, Briefcase, Car, Plane, GraduationCap } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MahuratPage() {
  const { t, tRaw } = useLanguage();
  
  const muhuratTypeKeys = ["marriage", "grihaPravesh", "business", "vehicle", "travel", "education"];
  const muhuratIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    marriage: Heart,
    grihaPravesh: Home,
    business: Briefcase,
    vehicle: Car,
    travel: Plane,
    education: GraduationCap,
  };

  const panchangElementKeys = ["tithi", "nakshatra", "yoga", "karana", "vara"];

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
              <Clock size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("mahuratPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("mahuratPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("mahuratPage.heroDescription")}
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
                <span className="text-[var(--foreground)]">{t("mahuratPage.whatIs")} </span>
                <span className="text-gradient-gold">{t("mahuratPage.muhurat")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("mahuratPage.muhuratDesc1")}</p>
                <p>{t("mahuratPage.muhuratDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("mahuratPage.muhuratDesc3")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card p-6">
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-6 text-center">
                  {t("mahuratPage.benefitsOf")}
                </h3>
                <div className="space-y-3">
                  {tRaw<string[]>("mahuratPage.benefits")?.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--foreground-muted)]">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Muhurat */}
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
              <span className="text-[var(--foreground)]">{t("mahuratPage.typesOf")} </span>
              <span className="text-gradient-gold">{t("mahuratPage.heroTitle1")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("mahuratPage.typesDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {muhuratTypeKeys.map((key, index) => {
              const IconComponent = muhuratIcons[key];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--gold-muted)] flex items-center justify-center mb-4">
                    <IconComponent size={28} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                    {t(`mahuratPage.types.${key}.title`)}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {t(`mahuratPage.types.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Panchang Section */}
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
              <span className="text-[var(--foreground)]">{t("mahuratPage.fiveElementsOf")} </span>
              <span className="text-gradient-gold">{t("mahuratPage.panchang")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("mahuratPage.panchangDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {panchangElementKeys.map((key, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-5 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-[var(--background)] flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                  {t(`mahuratPage.panchangElements.${key}.title`)}
                </h3>
                <p className="text-xs text-[var(--foreground-muted)]">
                  {t(`mahuratPage.panchangElements.${key}.description`)}
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
              <span className="text-[var(--foreground)]">{t("mahuratPage.getYour")} </span>
              <span className="text-gradient-gold">{t("mahuratPage.personalizedMuhurat")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("common.siteName")} {t("mahuratPage.ctaDesc")}
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
