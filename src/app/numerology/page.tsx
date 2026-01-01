"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Hash, Calculator, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NumerologyPage() {
  const { t } = useLanguage();
  const numbers = [
    {
      number: "1",
      planet: "Sun",
      traits: "Leadership, independence, ambition",
      description: "Natural leaders with strong willpower and determination. Creative and innovative.",
    },
    {
      number: "2",
      planet: "Moon",
      traits: "Cooperation, sensitivity, diplomacy",
      description: "Peacemakers who value harmony and partnerships. Intuitive and empathetic.",
    },
    {
      number: "3",
      planet: "Jupiter",
      traits: "Creativity, expression, optimism",
      description: "Creative communicators with charm and enthusiasm. Artistic and social.",
    },
    {
      number: "4",
      planet: "Rahu",
      traits: "Stability, hard work, practicality",
      description: "Builders and organizers who value structure. Reliable and disciplined.",
    },
    {
      number: "5",
      planet: "Mercury",
      traits: "Freedom, versatility, adventure",
      description: "Dynamic individuals who love change and variety. Curious and adaptable.",
    },
    {
      number: "6",
      planet: "Venus",
      traits: "Love, harmony, responsibility",
      description: "Nurturing souls focused on family and beauty. Caring and artistic.",
    },
    {
      number: "7",
      planet: "Ketu",
      traits: "Spirituality, wisdom, introspection",
      description: "Deep thinkers and seekers of truth. Analytical and mysterious.",
    },
    {
      number: "8",
      planet: "Saturn",
      traits: "Power, success, material wealth",
      description: "Business-minded individuals with strong ambition. Karmic lessons in focus.",
    },
    {
      number: "9",
      planet: "Mars",
      traits: "Compassion, completion, humanitarianism",
      description: "Old souls with universal love. Selfless and spiritually advanced.",
    },
  ];

  const services = [
    {
      title: "Life Path Number",
      description: "Derived from your birth date, reveals your life purpose and the path you're meant to walk.",
    },
    {
      title: "Destiny Number",
      description: "Calculated from your full name, shows your life's goals and what you're destined to achieve.",
    },
    {
      title: "Name Numerology",
      description: "Analysis and correction of names to align with favorable vibrations for success.",
    },
    {
      title: "Business Name Analysis",
      description: "Select or modify business names for better luck, growth, and prosperity.",
    },
    {
      title: "Mobile Number Selection",
      description: "Choose lucky mobile numbers that resonate with your personal vibrations.",
    },
    {
      title: "Lucky Numbers",
      description: "Identify your lucky numbers for important dates, decisions, and opportunities.",
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
              <Hash size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Vedic </span>
              <span className="text-gradient-gold">Numerology</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Unlock the hidden meanings in numbers. Discover how the vibrations of 
              numbers influence your personality, destiny, and life path.
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
                <span className="text-[var(--foreground)]">The Power of </span>
                <span className="text-gradient-gold">Numbers</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  Numerology is an ancient science that studies the mystical relationship 
                  between numbers and life events. Every number carries a specific vibration 
                  that influences various aspects of our existence.
                </p>
                <p>
                  In Vedic numerology, numbers 1-9 are associated with the nine planets, 
                  each carrying unique energies and characteristics. Your birth date and 
                  name convert into numbers that reveal insights about your personality, 
                  strengths, challenges, and destiny.
                </p>
                <p>
                  {t("common.siteName")} provides comprehensive numerology consultations, including 
                  life path analysis, name corrections, and lucky number identification to 
                  help you align with positive vibrations.
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="card p-4 text-center group hover:border-[var(--gold)] transition-colors">
                  <div className="text-4xl font-[var(--font-heading)] text-[var(--gold)] mb-2 group-hover:scale-110 transition-transform">
                    {num}
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)]">
                    {numbers[num - 1].planet}
                  </div>
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
              <span className="text-[var(--foreground)]">Understanding </span>
              <span className="text-gradient-gold">Each Number</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Each number from 1 to 9 carries unique vibrations and meanings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {numbers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full border-2 border-[var(--gold)] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-[var(--font-heading)] text-[var(--gold)]">
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                      Number {item.number}
                    </h3>
                    <p className="text-sm text-[var(--gold)]">Planet: {item.planet}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--foreground-muted)] mb-3">
                  {item.description}
                </p>
                <div className="text-xs text-[var(--gold)]">
                  <Sparkles size={12} className="inline mr-1" />
                  {item.traits}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              <span className="text-[var(--foreground)]">Numerology </span>
              <span className="text-gradient-gold">Services</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center mb-4">
                  <Calculator size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {service.description}
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
              <span className="text-[var(--foreground)]">Discover Your </span>
              <span className="text-gradient-gold">Numbers</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Get a comprehensive numerology analysis from {t("common.siteName")}. 
              Understand your life path, lucky numbers, and how to align your 
              name with positive vibrations.
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

