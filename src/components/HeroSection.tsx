"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Star, Calendar } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { serviceHighlights } from "@/data/services";
import { averageRating, yearsOfExperience } from "@/data/testimonials";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center particles-bg overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background-secondary)] to-[var(--background)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[var(--gold-muted)] rounded-full opacity-20" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border border-[var(--gold-muted)] rounded-full opacity-10" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[var(--gold-muted)] px-4 py-2 rounded-full mb-6"
            >
              <Star size={16} className="text-[var(--gold)]" fill="var(--gold)" />
              <span className="text-sm text-[var(--gold)] font-medium">
                {averageRating} Rating • {yearsOfExperience}+ Years Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] mb-6 leading-tight"
            >
              <span className="text-[var(--foreground)]">Discover Your </span>
              <span className="text-gradient-gold">Destiny</span>
              <br />
              <span className="text-[var(--foreground)]">with </span>
              <span className="text-gradient-gold">{SITE_CONFIG.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-[var(--foreground-muted)] mb-8 max-w-lg leading-relaxed"
            >
              {SITE_CONFIG.tagline}. Get personalized Vedic astrology readings, 
              numerology insights, vastu consultation, and gemstone recommendations 
              to guide your life journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link href="/contact/" className="btn-gold flex items-center gap-2">
                <Calendar size={18} />
                Book Consultation
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="btn-outline-gold flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {serviceHighlights.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-[var(--font-heading)] text-[var(--gold)] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-[var(--gold-muted)] rounded-lg" />
              <div className="absolute -inset-8 border border-[var(--gold-muted)] rounded-lg opacity-50" />
              
              {/* Image */}
              <div className="relative w-full h-full bg-[var(--background-secondary)] rounded-lg overflow-hidden border border-[var(--gold-muted)]">
                <Image
                  src="/images/homepage2.jpg"
                  alt={`${SITE_CONFIG.name} - Vedic Astrologer`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -left-4 bg-[var(--gold)] text-[var(--background)] px-6 py-3 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Star size={20} fill="currentColor" />
                  <div>
                    <div className="font-[var(--font-heading)] font-bold">{yearsOfExperience}+ Years</div>
                    <div className="text-xs opacity-80">Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

