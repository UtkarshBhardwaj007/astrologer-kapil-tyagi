"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ZodiacCard from "@/components/ZodiacCard";
import { services } from "@/data/services";
import { zodiacSigns } from "@/data/zodiac-signs";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { averageRating, totalReviews, yearsOfExperience, totalConsultations, countriesServed } from "@/data/testimonials";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
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
              <span className="text-[var(--foreground)]">Our </span>
              <span className="text-gradient-gold">Services</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-4" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Comprehensive astrological services to guide you through life&apos;s journey. 
              From birth chart analysis to gemstone recommendations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
          >
            <Link href="/services/" className="btn-outline-gold inline-flex items-center gap-2">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Zodiac Signs Section */}
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
              <span className="text-[var(--foreground)]">Explore Your </span>
              <span className="text-gradient-gold">Zodiac Sign</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-4" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Discover insights about your personality, compatibility, career prospects, 
              and more based on your zodiac sign.
            </p>
          </motion.div>

          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4">
            {zodiacSigns.map((sign, index) => (
              <ZodiacCard key={sign.id} sign={sign} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-[var(--background-secondary)] particles-bg">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] mb-6">
                <span className="text-[var(--foreground)]">Meet </span>
                <span className="text-gradient-gold">{SITE_CONFIG.name}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  With over {yearsOfExperience} years of dedicated practice in Vedic astrology, {SITE_CONFIG.name} 
                  has guided thousands of individuals on their life paths. His expertise spans 
                  across horoscope reading, kundali analysis, numerology, vastu shastra, and 
                  gemstone consultation.
                </p>
                <p>
                  Based in Rohini, Delhi, he combines ancient Vedic wisdom with practical 
                  modern solutions to help clients navigate life&apos;s challenges in career, 
                  relationships, health, and personal growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/about/" className="btn-gold">
                  Learn More About Me
                </Link>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="btn-outline-gold flex items-center gap-2"
                >
                  <Phone size={16} />
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: `${yearsOfExperience}+`, label: "Years of Experience" },
                  { number: `${(totalConsultations / 1000).toFixed(0)}K+`, label: "Consultations Done" },
                  { number: String(averageRating), label: "Average Rating" },
                  { number: `${countriesServed}+`, label: "Countries Served" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card p-5 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-[var(--font-heading)] text-[var(--gold)] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-[var(--foreground-muted)]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Global Reach Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-4 card p-4 bg-gradient-to-r from-[var(--primary-muted)] to-[var(--gold-muted)] border-[var(--gold)]"
              >
                <div className="flex items-center justify-center gap-3 text-center">
                  <span className="text-2xl">🌍</span>
                  <span className="text-[var(--foreground)] font-[var(--font-heading)] tracking-wide">
                    Trusted by clients in <span className="text-[var(--gold)]">{countriesServed}+ countries</span> worldwide
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              <span className="text-[var(--foreground)]">Client </span>
              <span className="text-gradient-gold">Testimonials</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-4" />
            <div className="flex items-center justify-center gap-2 text-[var(--foreground-muted)]">
              <Star size={20} className="text-[var(--gold)]" fill="var(--gold)" />
              <span>{averageRating} rating from {totalReviews}+ reviews</span>
            </div>
          </motion.div>

          <TestimonialCarousel />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link href="/reviews/" className="btn-outline-gold inline-flex items-center gap-2">
              Read All Reviews
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border border-[var(--gold-muted)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-[var(--gold-muted)] rounded-full translate-x-1/2 translate-y-1/2 opacity-10" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Ready to </span>
              <span className="text-gradient-gold">Transform Your Life?</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Book a personalized consultation with {SITE_CONFIG.name} and get 
              clarity on your life path, career, relationships, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-gold">
                Book Consultation Now
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="btn-outline-gold flex items-center gap-2"
              >
                <Phone size={18} />
                Call {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
