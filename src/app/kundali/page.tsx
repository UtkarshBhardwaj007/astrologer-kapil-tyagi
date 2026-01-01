"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, ScrollText, Sun, Moon, Star, Heart, Briefcase, Shield } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KundaliPage() {
  const { t } = useLanguage();
  const houses = [
    { number: "1st", name: "Lagna (Ascendant)", governs: "Self, personality, physical appearance" },
    { number: "2nd", name: "Dhana Bhava", governs: "Wealth, family, speech" },
    { number: "3rd", name: "Sahaja Bhava", governs: "Siblings, courage, short travels" },
    { number: "4th", name: "Sukha Bhava", governs: "Mother, home, happiness" },
    { number: "5th", name: "Putra Bhava", governs: "Children, creativity, education" },
    { number: "6th", name: "Ari Bhava", governs: "Enemies, health issues, debts" },
    { number: "7th", name: "Kalatra Bhava", governs: "Marriage, partnerships, spouse" },
    { number: "8th", name: "Mrityu Bhava", governs: "Longevity, transformation, inheritance" },
    { number: "9th", name: "Dharma Bhava", governs: "Fortune, religion, father" },
    { number: "10th", name: "Karma Bhava", governs: "Career, status, public image" },
    { number: "11th", name: "Labha Bhava", governs: "Gains, income, elder siblings" },
    { number: "12th", name: "Vyaya Bhava", governs: "Losses, spirituality, foreign lands" },
  ];

  const analysisAreas = [
    {
      icon: Star,
      title: "Personality Analysis",
      description: "Understanding your core traits, strengths, and areas of improvement based on planetary positions.",
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Identifying suitable career paths, favorable periods for job changes, and business prospects.",
    },
    {
      icon: Heart,
      title: "Marriage Compatibility",
      description: "Gun Milan, Manglik Dosha check, and timing predictions for marriage.",
    },
    {
      icon: Sun,
      title: "Dasha Analysis",
      description: "Understanding current and upcoming planetary periods and their effects on your life.",
    },
    {
      icon: Shield,
      title: "Dosha Analysis",
      description: "Identification of doshas like Manglik, Kaal Sarp, Pitra Dosha with effective remedies.",
    },
    {
      icon: Moon,
      title: "Transit Effects",
      description: "How current planetary transits are affecting your chart and what to expect.",
    },
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
              <span className="text-[var(--foreground)]">Kundali </span>
              <span className="text-gradient-gold">Analysis</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Your birth chart is a cosmic snapshot of the sky at the moment of your birth. 
              Decode its secrets to understand your life path, karma, and destiny.
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
                <span className="text-[var(--foreground)]">What is a </span>
                <span className="text-gradient-gold">Kundali?</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  A Kundali (also known as Janam Kundali, birth chart, or horoscope) is a 
                  celestial map that captures the positions of all nine planets at the exact 
                  time and place of your birth. This map is divided into 12 houses, each 
                  governing different aspects of life.
                </p>
                <p>
                  The positions of planets in these houses, their aspects (drishti), and 
                  their conjunctions create a unique pattern that influences your personality, 
                  relationships, career, health, and overall life journey.
                </p>
                <p>
                  {t("common.siteName")} provides detailed Kundali analysis, examining all aspects 
                  of your birth chart to provide insights and guidance for various life situations.
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
                Required Information
              </h3>
              <p className="text-[var(--foreground-muted)] text-center mb-6">
                To create an accurate Kundali, we need:
              </p>
              <div className="space-y-4">
                {[
                  { label: "Date of Birth", value: "Exact date (DD/MM/YYYY)" },
                  { label: "Time of Birth", value: "As accurate as possible (HH:MM AM/PM)" },
                  { label: "Place of Birth", value: "City, State, Country" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-[var(--gold-muted)]">
                    <span className="text-[var(--foreground)]">{item.label}</span>
                    <span className="text-[var(--foreground-muted)] text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--foreground-muted)] mt-4 text-center">
                * Accurate birth time is crucial for precise predictions
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
              <span className="text-[var(--foreground)]">The 12 </span>
              <span className="text-gradient-gold">Houses</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Each house in your Kundali governs specific areas of life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {houses.map((house, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card p-4"
              >
                <div className="text-2xl font-[var(--font-heading)] text-[var(--gold)] mb-2">
                  {house.number} House
                </div>
                <div className="text-sm font-[var(--font-heading)] text-[var(--foreground)] mb-2">
                  {house.name}
                </div>
                <p className="text-xs text-[var(--foreground-muted)]">
                  {house.governs}
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
              <span className="text-[var(--foreground)]">What We </span>
              <span className="text-gradient-gold">Analyze</span>
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
                  {area.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {area.description}
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
              <span className="text-[var(--foreground)]">Get Your Kundali </span>
              <span className="text-gradient-gold">Analyzed</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Receive a comprehensive analysis of your birth chart from {t("common.siteName")}. 
              Understand your planetary positions, doshas, favorable periods, and get 
              personalized guidance for life decisions.
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

