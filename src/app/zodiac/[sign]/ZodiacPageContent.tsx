"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Heart, Briefcase, Activity, Lightbulb, ArrowLeft, ArrowRight } from "lucide-react";
import type { ZodiacSign } from "@/data/zodiac-signs";
import { zodiacSigns } from "@/data/zodiac-signs";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

interface ZodiacPageContentProps {
  sign: ZodiacSign;
}

export default function ZodiacPageContent({ sign }: ZodiacPageContentProps) {
  const currentIndex = zodiacSigns.findIndex((s) => s.id === sign.id);
  const prevSign = zodiacSigns[(currentIndex - 1 + 12) % 12];
  const nextSign = zodiacSigns[(currentIndex + 1) % 12];

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
            {/* Symbol */}
            <div className="text-8xl mb-6">{sign.symbol}</div>
            
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-4">
              <span className="text-gradient-gold">{sign.name}</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-6">
              {sign.dateRange}
            </p>
            <div className="gold-line w-24 mx-auto mb-8" />

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Element", value: sign.element },
                { label: "Ruling Planet", value: sign.rulingPlanet },
                { label: "Quality", value: sign.quality },
                { label: "Lucky Day", value: sign.luckyDay },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="card p-4"
                >
                  <div className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="font-[var(--font-heading)] text-[var(--gold)]">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-[var(--font-heading)] mb-4">
                  <span className="text-[var(--foreground)]">About </span>
                  <span className="text-gradient-gold">{sign.name}</span>
                </h2>
                <div className="gold-line-left w-16 mb-6" />
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {sign.overview}
                </p>
              </motion.div>

              {/* Personality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-[var(--font-heading)] mb-4">
                  <span className="text-[var(--foreground)]">Personality </span>
                  <span className="text-gradient-gold">Traits</span>
                </h2>
                <div className="gold-line-left w-16 mb-6" />
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                  {sign.personality}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="font-[var(--font-heading)] text-[var(--gold)] mb-4">Strengths</h3>
                    <ul className="space-y-2">
                      {sign.strengths.map((strength, index) => (
                        <li key={index} className="flex items-center gap-2 text-[var(--foreground-muted)]">
                          <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card p-6">
                    <h3 className="font-[var(--font-heading)] text-[var(--gold)] mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {sign.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-center gap-2 text-[var(--foreground-muted)]">
                          <div className="w-1.5 h-1.5 bg-[var(--gold-muted)] rounded-full" />
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Career */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-[var(--gold)]" size={24} />
                  <h2 className="text-2xl font-[var(--font-heading)] text-[var(--foreground)]">
                    Career & Finance
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {sign.career}
                </p>
              </motion.div>

              {/* Love */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-[var(--gold)]" size={24} />
                  <h2 className="text-2xl font-[var(--font-heading)] text-[var(--foreground)]">
                    Love & Relationships
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                  {sign.love}
                </p>
                <div>
                  <span className="text-sm text-[var(--foreground-muted)]">Best Compatibility: </span>
                  <span className="text-[var(--gold)]">{sign.compatibility.join(", ")}</span>
                </div>
              </motion.div>

              {/* Health */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="text-[var(--gold)]" size={24} />
                  <h2 className="text-2xl font-[var(--font-heading)] text-[var(--foreground)]">
                    Health & Wellness
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {sign.health}
                </p>
              </motion.div>

              {/* Tip */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-6 bg-gradient-to-br from-[var(--gold-muted)] to-transparent border-[var(--gold)]"
              >
                <div className="flex items-start gap-4">
                  <Lightbulb className="text-[var(--gold)] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--gold)] mb-2">
                      Pro Tip for {sign.name}
                    </h3>
                    <p className="text-[var(--foreground)] leading-relaxed">
                      {sign.tip}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Lucky Elements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-6 sticky top-32"
              >
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-6">
                  Lucky Elements
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Color", value: sign.luckyColor },
                    { label: "Number", value: sign.luckyNumber },
                    { label: "Day", value: sign.luckyDay },
                    { label: "Gemstone", value: sign.luckyGemstone },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-[var(--gold-muted)]">
                      <span className="text-[var(--foreground-muted)]">{item.label}</span>
                      <span className="text-[var(--gold)] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <Link href="/contact/" className="btn-gold w-full flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Get Personal Reading
                  </Link>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="btn-outline-gold w-full flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link
              href={`/zodiac/${prevSign.id}/`}
              className="card p-4 flex items-center gap-3 hover:border-[var(--gold)] transition-colors group"
            >
              <ArrowLeft size={20} className="text-[var(--gold)]" />
              <div>
                <div className="text-xs text-[var(--foreground-muted)]">Previous</div>
                <div className="font-[var(--font-heading)] text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors">
                  {prevSign.symbol} {prevSign.name}
                </div>
              </div>
            </Link>

            <Link
              href={`/zodiac/${nextSign.id}/`}
              className="card p-4 flex items-center gap-3 hover:border-[var(--gold)] transition-colors group"
            >
              <div className="text-right">
                <div className="text-xs text-[var(--foreground-muted)]">Next</div>
                <div className="font-[var(--font-heading)] text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors">
                  {nextSign.name} {nextSign.symbol}
                </div>
              </div>
              <ArrowRight size={20} className="text-[var(--gold)]" />
            </Link>
          </div>
        </div>
      </section>

      {/* All Signs */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">Explore All </span>
              <span className="text-gradient-gold">Zodiac Signs</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
            {zodiacSigns.map((s) => (
              <Link
                key={s.id}
                href={`/zodiac/${s.id}/`}
                className={`card p-3 text-center hover:border-[var(--gold)] transition-all ${
                  s.id === sign.id ? "border-[var(--gold)] bg-[var(--gold-muted)]" : ""
                }`}
              >
                <div className="text-2xl mb-1">{s.symbol}</div>
                <div className="text-xs text-[var(--foreground-muted)]">{s.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

