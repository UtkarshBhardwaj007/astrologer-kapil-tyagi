"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Heart, Home, Car, Plane, GraduationCap, Building, Sparkles, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MahuratPage() {
  const { t } = useLanguage();
  const mahuratTypes = [
    {
      icon: Heart,
      title: "Marriage Muhurat",
      description: "Find the most auspicious date and time for wedding ceremonies to ensure a blessed and harmonious married life.",
    },
    {
      icon: Home,
      title: "Griha Pravesh",
      description: "Select the perfect time for entering your new home to invite positive energies and prosperity.",
    },
    {
      icon: Building,
      title: "Business Inauguration",
      description: "Launch your business venture at an auspicious time to attract success, growth, and prosperity.",
    },
    {
      icon: Car,
      title: "Vehicle Purchase",
      description: "Choose the right muhurat for buying a new vehicle to ensure safety and avoid accidents.",
    },
    {
      icon: Plane,
      title: "Travel Muhurat",
      description: "Plan important journeys during favorable planetary alignments for safe and successful travels.",
    },
    {
      icon: GraduationCap,
      title: "Education & Exams",
      description: "Start new courses or appear for important exams during auspicious times for better results.",
    },
  ];

  const benefits = [
    "Aligns your actions with favorable cosmic energies",
    "Increases chances of success and positive outcomes",
    "Avoids inauspicious planetary combinations",
    "Brings blessings and divine support for new beginnings",
    "Reduces obstacles and ensures smoother proceedings",
    "Creates lasting positive impressions for important events",
  ];

  const considerations = [
    { title: "Tithi", description: "Lunar day that determines the nature of the event" },
    { title: "Nakshatra", description: "Moon's constellation influencing the outcome" },
    { title: "Yoga", description: "Combination of Sun and Moon positions" },
    { title: "Karana", description: "Half of a Tithi with specific influences" },
    { title: "Vara", description: "Day of the week and its ruling planet" },
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
              <Calendar size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Muhurat </span>
              <span className="text-gradient-gold">Advice</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Begin your important life events at the most auspicious moments. 
              The ancient science of Muhurat helps you align your actions with 
              favorable cosmic energies for success and prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Muhurat */}
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
                <span className="text-[var(--foreground)]">What is </span>
                <span className="text-gradient-gold">Muhurat?</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  Muhurat (also spelled Mahurat or Muhurta) is the auspicious time 
                  calculated according to Vedic astrology for starting important 
                  activities. It is based on the positions of planets, lunar day (Tithi), 
                  constellation (Nakshatra), and other astrological factors.
                </p>
                <p>
                  In Vedic tradition, it is believed that beginning any significant 
                  event during an auspicious Muhurat ensures success, removes obstacles, 
                  and brings divine blessings. This ancient practice has been followed 
                  for thousands of years across India.
                </p>
                <p>
                  {t("common.siteName")} calculates personalized Muhurats considering your 
                  individual birth chart along with the general auspicious timings, 
                  ensuring the selected time is favorable specifically for you.
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
              <h3 className="text-2xl font-[var(--font-heading)] text-[var(--gold)] mb-6">
                Benefits of Muhurat
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
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
              <span className="text-[var(--foreground)]">Types of </span>
              <span className="text-gradient-gold">Muhurat</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              We provide auspicious timing for all important life events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mahuratTypes.map((muhurat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center mb-4">
                  <muhurat.icon size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-3">
                  {muhurat.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                  {muhurat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Panchang Elements */}
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
              <span className="text-[var(--foreground)]">Five Elements of </span>
              <span className="text-gradient-gold">Panchang</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Muhurat is calculated considering these five essential elements of the Hindu calendar
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {considerations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--gold-muted)] flex items-center justify-center">
                  <Sparkles size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--foreground-muted)]">{item.description}</p>
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
              <span className="text-[var(--foreground)]">Get Your </span>
              <span className="text-gradient-gold">Personalized Muhurat</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("common.siteName")} provides personalized Muhurat selection considering 
              your birth chart for maximum auspiciousness. Start your important 
              events at the perfect cosmic moment.
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

