"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Flame, CheckCircle, Sun, Moon, Star, Shield, Heart, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PujaPage() {
  const { t, tRaw } = useLanguage();
  
  const planetaryPujaKeys = ["surya", "chandra", "mangal", "budh", "guru", "shukra"];
  const planetaryPujaIcons: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
    surya: Sun,
    chandra: Moon,
    mangal: Shield,
    budh: Star,
    guru: Sparkles,
    shukra: Heart,
  };
  const planetaryPujaColors: Record<string, string> = {
    surya: "#FFD700",
    chandra: "#C0C0C0",
    mangal: "#FF4040",
    budh: "#50C878",
    guru: "#FFD700",
    shukra: "#FFC0CB",
  };

  const specialPujaKeys = ["mahamrityunjaya", "navgraha", "kaalSarp", "pitra", "satyanarayan", "grihaPravesh", "vivah", "sunderkand"];

  const remedyTypeKeys = ["mantra", "donation", "fasting", "gemstone"];

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
              <Flame size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("pujaPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("pujaPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("pujaPage.heroDescription")}
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
                <span className="text-[var(--foreground)]">{t("pujaPage.thePowerOf")} </span>
                <span className="text-gradient-gold">{t("pujaPage.vedicRemedies")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("pujaPage.remediesDesc1")}</p>
                <p>{t("pujaPage.remediesDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("pujaPage.remediesDesc3")}
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
              {remedyTypeKeys.map((key, index) => {
                const items = tRaw<string[]>(`pujaPage.remedyTypes.${key}.items`) || [];
                return (
                  <div key={index} className="card p-5">
                    <h3 className="font-[var(--font-heading)] text-sm text-[var(--gold)] mb-3">
                      {t(`pujaPage.remedyTypes.${key}.type`)}
                    </h3>
                    <ul className="space-y-2">
                      {items.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[var(--foreground-muted)]">
                          <CheckCircle size={12} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planetary Pujas */}
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
              <span className="text-[var(--foreground)]">{t("pujaPage.planetary")} </span>
              <span className="text-gradient-gold">{t("pujaPage.pujas")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("pujaPage.pujasDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planetaryPujaKeys.map((key, index) => {
              const IconComponent = planetaryPujaIcons[key];
              const color = planetaryPujaColors[key];
              const benefits = tRaw<string[]>(`pujaPage.planetaryPujas.${key}.benefits`) || [];
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
                      style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
                    >
                      <IconComponent size={24} style={{ color: color }} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                        {t(`pujaPage.planetaryPujas.${key}.planet`)}
                      </h3>
                      <p className="text-sm text-[var(--gold)]">{t(`pujaPage.planetaryPujas.${key}.puja`)}</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-[var(--background)] rounded-lg text-center">
                    <p className="text-xs text-[var(--foreground-muted)] mb-1">{t("common.mantra")}:</p>
                    <p className="text-sm text-[var(--gold)] font-medium italic">{t(`pujaPage.planetaryPujas.${key}.mantra`)}</p>
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

      {/* Special Pujas */}
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
              <span className="text-[var(--foreground)]">{t("pujaPage.special")} </span>
              <span className="text-gradient-gold">{t("pujaPage.pujasAndRituals")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("pujaPage.ritualsDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {specialPujaKeys.map((key, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold-muted)] flex items-center justify-center flex-shrink-0">
                    <Flame size={20} className="text-[var(--gold)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                      {t(`pujaPage.specialPujas.${key}.name`)}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] mb-3">
                      {t(`pujaPage.specialPujas.${key}.description`)}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--gold-muted)] rounded-full">
                      <span className="text-xs text-[var(--gold)]">{t("common.when")}: {t(`pujaPage.specialPujas.${key}.occasion`)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="text-[var(--foreground)]">{t("pujaPage.our")} </span>
              <span className="text-gradient-gold">{t("pujaPage.process")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />

            <div className="space-y-4">
              {tRaw<Array<{step: string; description: string}>>("pujaPage.processSteps")?.map((item, index) => (
                <div key={index} className="flex items-start gap-4 card p-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--background)] flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">
                      {item.step}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">{item.description}</p>
                  </div>
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
              <span className="text-[var(--foreground)]">{t("pujaPage.getYour")} </span>
              <span className="text-gradient-gold">{t("pujaPage.personalizedRemedies")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("pujaPage.ctaDesc", { name: t("common.siteName") })}
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
