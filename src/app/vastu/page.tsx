"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, Home, CheckCircle, Compass } from "lucide-react";
import { CONTACT_INFO, getImagePath } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VastuPage() {
  const { t, tRaw } = useLanguage();
  
  const vastuTipKeys = ["entrance", "livingRoom", "masterBedroom", "kitchen", "bathroom", "office"];
  const fiveElementKeys = ["earth", "water", "fire", "air", "space"];
  const elementColors: Record<string, string> = {
    earth: "#8B4513",
    water: "#1E90FF",
    fire: "#FF4500",
    air: "#87CEEB",
    space: "#9932CC",
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
              <Home size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">{t("vastuPage.heroTitle1")} </span>
              <span className="text-gradient-gold">{t("vastuPage.heroTitle2")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("vastuPage.heroDescription")}
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
                <span className="text-[var(--foreground)]">{t("vastuPage.whatIs")} </span>
                <span className="text-gradient-gold">{t("vastuPage.vastuShastra")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>{t("vastuPage.whatIsDesc1")}</p>
                <p>{t("vastuPage.whatIsDesc2")}</p>
                <p>
                  {t("common.siteName")} {t("vastuPage.whatIsDesc3")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Premium golden frame container */}
              <div className="relative max-w-md mx-auto p-4">
                {/* Outer glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                  style={{
                    background: "radial-gradient(ellipse at center, #D4AF37 0%, #B8860B 40%, transparent 70%)"
                  }}
                />
                
                {/* Main frame with double border */}
                <div 
                  className="relative rounded-xl p-1"
                  style={{
                    background: "linear-gradient(135deg, #FFD700 0%, #D4AF37 25%, #B8860B 50%, #D4AF37 75%, #FFD700 100%)"
                  }}
                >
                  {/* Inner border */}
                  <div 
                    className="rounded-lg p-1"
                    style={{
                      background: "linear-gradient(135deg, #1A0A0D 0%, #2D0F16 50%, #1A0A0D 100%)"
                    }}
                  >
                    {/* Secondary gold border */}
                    <div 
                      className="rounded-md p-0.5"
                      style={{
                        background: "linear-gradient(135deg, #CFB53B 0%, #D4AF37 50%, #CFB53B 100%)"
                      }}
                    >
                      {/* Image container */}
                      <div className="aspect-[2/3] relative rounded overflow-hidden">
                        <Image
                          src={getImagePath("/images/vastu.png")}
                          alt="Vastu Consultation Services in Delhi - Vastu Shastra Expert Astrologer Kapil Tyagi for Home, Office and Commercial Properties"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner flourishes */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-2 left-2 w-full h-[2px]" style={{ background: "linear-gradient(90deg, #FFD700, transparent)" }} />
                  <div className="absolute top-2 left-2 h-full w-[2px]" style={{ background: "linear-gradient(180deg, #FFD700, transparent)" }} />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8">
                  <div className="absolute top-2 right-2 w-full h-[2px]" style={{ background: "linear-gradient(270deg, #FFD700, transparent)" }} />
                  <div className="absolute top-2 right-2 h-full w-[2px]" style={{ background: "linear-gradient(180deg, #FFD700, transparent)" }} />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8">
                  <div className="absolute bottom-2 left-2 w-full h-[2px]" style={{ background: "linear-gradient(90deg, #FFD700, transparent)" }} />
                  <div className="absolute bottom-2 left-2 h-full w-[2px]" style={{ background: "linear-gradient(0deg, #FFD700, transparent)" }} />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8">
                  <div className="absolute bottom-2 right-2 w-full h-[2px]" style={{ background: "linear-gradient(270deg, #FFD700, transparent)" }} />
                  <div className="absolute bottom-2 right-2 h-full w-[2px]" style={{ background: "linear-gradient(0deg, #FFD700, transparent)" }} />
                </div>
              </div>
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
              <span className="text-gradient-gold">{t("vastuPage.benefitsOf")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tRaw<string[]>("vastuPage.benefits")?.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card p-4 flex items-center gap-3"
              >
                <CheckCircle size={20} className="text-[var(--gold)] flex-shrink-0" />
                <p className="text-sm text-[var(--foreground)]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vastu Tips Section */}
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
              <span className="text-[var(--foreground)]">{t("vastuPage.essentialVastu")} </span>
              <span className="text-gradient-gold">{t("vastuPage.tips")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("vastuPage.tipsDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vastuTipKeys.map((key, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--gold-muted)] flex items-center justify-center mb-4">
                  <Home size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                  {t(`vastuPage.vastuTips.${key}.title`)}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t(`vastuPage.vastuTips.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Elements Section */}
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
              <span className="text-[var(--foreground)]">{t("vastuPage.theFive")} </span>
              <span className="text-gradient-gold">{t("vastuPage.elements")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("vastuPage.elementsDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {fiveElementKeys.map((key, index) => {
              const color = elementColors[key];
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
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
                  >
                    <Compass size={28} style={{ color: color }} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-1">
                    {t(`vastuPage.fiveElements.${key}.name`)}
                  </h3>
                  <p className="text-sm text-[var(--gold)] mb-2">{t(`vastuPage.fiveElements.${key}.hindi`)}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    {t("vastuPage.direction")}: {t(`vastuPage.fiveElements.${key}.direction`)}
                  </p>
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
              <span className="text-[var(--foreground)]">{t("vastuPage.getExpert")} </span>
              <span className="text-gradient-gold">{t("vastuPage.vastuConsultation")}</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("common.siteName")} {t("vastuPage.ctaDesc")}
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
