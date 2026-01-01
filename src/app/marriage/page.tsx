"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Heart, CheckCircle, AlertTriangle, Star, Shield, Users } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MarriagePage() {
  const { t } = useLanguage();
  const gunMilan = [
    { name: "Varna", points: 1, description: "Spiritual compatibility and ego levels" },
    { name: "Vashya", points: 2, description: "Mutual attraction and control in relationship" },
    { name: "Tara", points: 3, description: "Birth star compatibility and destiny" },
    { name: "Yoni", points: 4, description: "Physical and sexual compatibility" },
    { name: "Graha Maitri", points: 5, description: "Mental compatibility and friendship" },
    { name: "Gana", points: 6, description: "Temperament and nature compatibility" },
    { name: "Bhakoot", points: 7, description: "Love, family welfare, and finance" },
    { name: "Nadi", points: 8, description: "Health and genetic compatibility" },
  ];

  const doshas = [
    {
      name: "Manglik Dosha",
      description: "When Mars is placed in certain houses (1st, 4th, 7th, 8th, or 12th), it creates Manglik Dosha which can cause delays in marriage or marital discord.",
      remedies: ["Mangal Shanti Puja", "Kumbh Vivah ritual", "Wearing Red Coral", "Chanting Mangal mantras"],
    },
    {
      name: "Nadi Dosha",
      description: "When both partners have the same Nadi (Adi, Madhya, or Antya), it indicates potential health issues for progeny.",
      remedies: ["Nadi Dosha Nivaran Puja", "Mahamrityunjaya Jaap", "Donating gold", "Specific charity rituals"],
    },
    {
      name: "Bhakoot Dosha",
      description: "Unfavorable moon sign combinations between partners can lead to financial problems or lack of mutual understanding.",
      remedies: ["Planetary remedies", "Gemstone therapy", "Specific mantras", "Charitable acts"],
    },
  ];

  const services = [
    {
      icon: Heart,
      title: "Gun Milan Analysis",
      description: "Complete 36-point matching with detailed interpretation of each Kuta",
    },
    {
      icon: Shield,
      title: "Dosha Detection",
      description: "Identification of Manglik, Nadi, and other marriage-affecting doshas",
    },
    {
      icon: Star,
      title: "Muhurat Selection",
      description: "Auspicious date and time selection for engagement and wedding",
    },
    {
      icon: Users,
      title: "Compatibility Report",
      description: "Comprehensive report on emotional, physical, and financial compatibility",
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
              <Heart size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Marriage </span>
              <span className="text-gradient-gold">Compatibility</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Ensure a harmonious and prosperous married life through comprehensive 
              Kundali matching and compatibility analysis based on Vedic astrology principles.
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
                <span className="text-[var(--foreground)]">The Art of </span>
                <span className="text-gradient-gold">Kundali Matching</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  In Vedic tradition, marriage is considered a sacred union of two souls. 
                  Kundali matching, also known as Horoscope matching or Gun Milan, is the 
                  time-tested method to assess compatibility between prospective partners.
                </p>
                <p>
                  The system evaluates 36 points (Gunas) across 8 different aspects of life, 
                  providing a comprehensive view of how well two individuals will complement 
                  each other in marriage. A score of 18 or above is generally considered 
                  favorable for marriage.
                </p>
                <p>
                  {t("common.siteName")} provides detailed Kundali matching analysis that goes 
                  beyond just the point score, examining planetary positions, doshas, and 
                  providing practical remedies when needed.
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
              {services.map((service, index) => (
                <div key={index} className="card p-5 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-[var(--gold-muted)] flex items-center justify-center">
                    <service.icon size={24} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm text-[var(--foreground)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gun Milan Section */}
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
              <span className="text-[var(--foreground)]">Ashta </span>
              <span className="text-gradient-gold">Kuta</span>
              <span className="text-[var(--foreground)]"> System</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              The eight aspects of compatibility that make up the 36-point Gun Milan system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gunMilan.map((kuta, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--gold-muted)] flex items-center justify-center">
                  <span className="text-xl font-[var(--font-heading)] text-[var(--gold)]">
                    {kuta.points}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                  {kuta.name}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {kuta.description}
                </p>
                <div className="mt-3 text-xs text-[var(--gold)]">
                  Max {kuta.points} point{kuta.points > 1 ? "s" : ""}
                </div>
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
            <div className="inline-flex items-center gap-2 bg-[var(--gold-muted)] px-6 py-3 rounded-full">
              <CheckCircle size={20} className="text-[var(--gold)]" />
              <span className="text-[var(--foreground)]">
                Total Points: <span className="text-[var(--gold)] font-bold">36</span> | 
                Minimum Required: <span className="text-[var(--gold)] font-bold">18</span>
              </span>
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
              <span className="text-[var(--foreground)]">Marriage </span>
              <span className="text-gradient-gold">Doshas</span>
              <span className="text-[var(--foreground)]"> & Remedies</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Understanding common astrological afflictions and their remedies for a harmonious married life
            </p>
          </motion.div>

          <div className="space-y-6">
            {doshas.map((dosha, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={24} className="text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-2">
                      {dosha.name}
                    </h3>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      {dosha.description}
                    </p>
                    <div className="border-t border-[var(--gold-muted)] pt-4">
                      <p className="text-sm text-[var(--gold)] mb-2">Remedies:</p>
                      <div className="flex flex-wrap gap-2">
                        {dosha.remedies.map((remedy, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-[var(--gold-muted)] text-[var(--foreground)] rounded-full"
                          >
                            {remedy}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <span className="text-[var(--foreground)]">Important </span>
              <span className="text-gradient-gold">Tips</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />

            <div className="space-y-4">
              {[
                "Gun Milan score is important but not the only factor—planetary positions and Dasha periods should also be analyzed.",
                "A low score doesn&apos;t mean marriage should be avoided; proper remedies can mitigate negative effects.",
                "Both horoscopes should be analyzed for overall life prospects, not just compatibility.",
                "Muhurat (auspicious timing) selection is equally important for a successful married life.",
                "Post-marriage, periodic consultations can help navigate challenging planetary periods together.",
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
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
              <span className="text-[var(--foreground)]">Get Your </span>
              <span className="text-gradient-gold">Compatibility Analysis</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Take the first step towards a harmonious married life. Consult {t("common.siteName")} for 
              comprehensive Kundali matching and expert guidance on marriage compatibility.
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

