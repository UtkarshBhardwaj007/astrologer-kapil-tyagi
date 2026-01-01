"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Briefcase, TrendingUp, Building, Users, Target, Award, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CareerPage() {
  const { t } = useLanguage();
  const careerAspects = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Identify the best periods for promotions, salary hikes, and career advancement based on your planetary transits.",
    },
    {
      icon: Building,
      title: "Business Success",
      description: "Get insights on starting a new business, expanding operations, or making strategic investments.",
    },
    {
      icon: Users,
      title: "Partnership Analysis",
      description: "Evaluate business partnership compatibility and identify potential challenges or synergies.",
    },
    {
      icon: Target,
      title: "Job Changes",
      description: "Find the most auspicious timing for job interviews, resignations, and new beginnings.",
    },
    {
      icon: Award,
      title: "Professional Recognition",
      description: "Understand when you're likely to receive awards, recognition, or important opportunities.",
    },
    {
      icon: Briefcase,
      title: "Career Path Selection",
      description: "Discover which career fields align best with your birth chart and natural talents.",
    },
  ];

  const benefits = [
    "Identify your ideal career path based on planetary positions",
    "Know the best time for job changes or starting a business",
    "Understand financial cycles and wealth accumulation periods",
    "Remedies for career obstacles and delays",
    "Partnership compatibility for business ventures",
    "Guidance on investment and financial decisions",
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
              <Briefcase size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Career & </span>
              <span className="text-gradient-gold">Business Advice</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Make informed career and business decisions with expert astrological guidance. 
              Understand the cosmic influences on your professional life and time your 
              important moves for maximum success.
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
                <span className="text-[var(--foreground)]">Astrological </span>
                <span className="text-gradient-gold">Career Guidance</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  Your birth chart holds the key to understanding your professional potential 
                  and the best paths to success. The 10th house (Karma Bhava) and its lord, 
                  along with planets like Saturn, Sun, and Mercury, reveal important insights 
                  about your career trajectory.
                </p>
                <p>
                  {t("common.siteName")} analyzes your complete horoscope to provide actionable 
                  advice on career choices, business ventures, timing of important decisions, 
                  and remedies for any obstacles you may face in your professional life.
                </p>
                <p>
                  Whether you&apos;re a job seeker, entrepreneur, or established professional, 
                  our career astrology consultation helps you align your actions with 
                  favorable planetary periods for optimal results.
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
                What You&apos;ll Gain
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
              <span className="text-[var(--foreground)]">Areas of </span>
              <span className="text-gradient-gold">Consultation</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Comprehensive career and business guidance covering all aspects of your professional life
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
                  {aspect.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                  {aspect.description}
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
              <span className="text-[var(--foreground)]">Key Planetary </span>
              <span className="text-gradient-gold">Influences</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Understanding which planets influence different aspects of your career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { planet: "Sun", influence: "Authority, Leadership, Government Jobs", color: "#ff6b2c" },
              { planet: "Saturn", influence: "Hard Work, Discipline, Long-term Success", color: "#6b7280" },
              { planet: "Mercury", influence: "Business, Communication, Trading", color: "#10b981" },
              { planet: "Jupiter", influence: "Teaching, Finance, Expansion", color: "#ffc107" },
            ].map((item, index) => (
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
                  style={{ backgroundColor: `${item.color}20`, border: `2px solid ${item.color}` }}
                >
                  <span className="text-2xl font-[var(--font-heading)]" style={{ color: item.color }}>
                    {item.planet[0]}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-2">
                  {item.planet}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">{item.influence}</p>
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
              <span className="text-[var(--foreground)]">Get Expert </span>
              <span className="text-gradient-gold">Career Guidance</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {t("common.siteName")} provides personalized career and business consultation 
              based on your unique birth chart. Take the right decisions at the right time.
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

