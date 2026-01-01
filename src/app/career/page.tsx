"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Briefcase, TrendingUp, Building, Users, Target, Award, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CareerPage() {
  const { t, tRaw } = useLanguage();
  
  const careerAspects = [
    { icon: TrendingUp, key: "growth" },
    { icon: Building, key: "business" },
    { icon: Users, key: "partnership" },
    { icon: Target, key: "jobChange" },
    { icon: Award, key: "recognition" },
    { icon: Briefcase, key: "path" },
  ];

  const planetKeys = ["sun", "saturn", "mercury", "jupiter"];
  const planetColors: Record<string, string> = {
    sun: "#ff6b2c",
    saturn: "#6b7280",
    mercury: "#10b981",
    jupiter: "#ffc107",
  };

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
              <Briefcase size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("careerPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("careerPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("careerPage.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
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
                <span className="text-[var(--foreground)]">{t("careerPage.astrological")} </span>
                <span className="text-gradient-gold">{t("careerPage.careerGuidance")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("careerPage.careerGuidanceDesc1")}</p>
                <p>
                  {t("common.siteName")} {t("careerPage.careerGuidanceDesc2")}
                </p>
                <p>{t("careerPage.careerGuidanceDesc3")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-[var(--font-heading)] text-[var(--gold)] mb-6">
                {t("careerPage.whatYoullGain")}
              </h3>
              <ul className="space-y-4">
                {tRaw<string[]>("careerPage.benefits")?.map((benefit: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-[var(--gold)] flex-shrink-0" />
                    <span className="text-[var(--foreground)]">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Aspects */}
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
              <span className="text-[var(--foreground)]">{t("careerPage.areasOf")} </span>
              <span className="text-gradient-gold">{t("careerPage.consultation")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("careerPage.consultationDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerAspects.map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center mb-4">
                  <aspect.icon size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-3">
                  {t(`careerPage.aspects.${aspect.key}.title`)}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                  {t(`careerPage.aspects.${aspect.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planetary Influences */}
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
              <span className="text-[var(--foreground)]">{t("careerPage.keyPlanetary")} </span>
              <span className="text-gradient-gold">{t("careerPage.influences")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("careerPage.influencesDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {planetKeys.map((key, index) => {
              const color = planetColors[key];
              const name = t(`careerPage.planets.${key}.name`);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
                  >
                    <span className="text-2xl font-[var(--font-heading)]" style={{ color }}>
                      {name[0]}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-2">
                    {name}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {t(`careerPage.planets.${key}.influence`)}
                  </p>
                </motion.div>
              );
            })}
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
              <span className="text-[var(--foreground)]">{t("careerPage.getExpert")} </span>
              <span className="text-gradient-gold">{t("careerPage.careerGuidance")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("common.siteName")} {t("careerPage.ctaDesc")}
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
