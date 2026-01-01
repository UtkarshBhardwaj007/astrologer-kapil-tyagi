"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Award, BookOpen, Users, Star, Calendar } from "lucide-react";
import { CONTACT_INFO, getImagePath } from "@/lib/constants";
import { averageRating, yearsOfExperience, totalConsultations } from "@/data/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const credentials = [
    {
      icon: Award,
      title: t("about.credentials.experience", { years: yearsOfExperience }),
      description: t("about.credentials.experienceDesc"),
    },
    {
      icon: BookOpen,
      title: t("about.credentials.scholar"),
      description: t("about.credentials.scholarDesc"),
    },
    {
      icon: Users,
      title: t("about.credentials.consultations", { count: totalConsultations.toLocaleString() }),
      description: t("about.credentials.consultationsDesc"),
    },
    {
      icon: Star,
      title: t("about.credentials.rating", { rating: averageRating }),
      description: t("about.credentials.ratingDesc"),
    },
  ];

  const expertiseKeys = [
    "kundali", "horoscope", "marriage", "career", "numerology",
    "vastu", "gemstone", "rudraksha", "muhurat", "remedies"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-[var(--gold-muted)] rounded-lg" />
                
                {/* Image */}
                <div className="relative w-full h-full bg-[var(--background)] rounded-lg overflow-hidden border border-[var(--gold-muted)]">
                  <Image
                    src={getImagePath("/images/about-me.jpeg")}
                    alt={`${t("common.siteName")} - ${t("common.tagline")}`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-4">
                <span className="text-[var(--foreground)]">{t("about.title")} </span>
                <span className="text-gradient-gold">{t("common.siteName")}</span>
              </h1>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed mb-8">
                <p>
                  {t("about.description1", { years: yearsOfExperience })}
                </p>
                <p>
                  {t("about.description2")}
                </p>
                <p>
                  {t("about.description3")}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact/" className="btn-gold flex items-center gap-2">
                  <Calendar size={18} />
                  {t("home.hero.cta")}
                </Link>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="btn-outline-gold flex items-center gap-2"
                >
                  <Phone size={18} />
                  {t("common.callNow")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
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
              <span className="text-[var(--foreground)]">{t("about.whyChoose")} </span>
              <span className="text-gradient-gold">{t("common.siteName")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-[var(--gold-muted)] flex items-center justify-center">
                  <item.icon size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] mb-4">
                <span className="text-gradient-gold">{t("about.expertise.title")}</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <p className="text-[var(--foreground-muted)] mb-8 leading-relaxed">
                {t("about.expertise.subtitle")}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {expertiseKeys.map((key, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full flex-shrink-0" />
                    <span className="text-[var(--foreground-muted)]">{t(`about.expertise.items.${key}`)}</span>
                  </motion.div>
                ))}
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
                {t("about.philosophy.title")}
              </h3>
              <blockquote className="text-lg text-[var(--foreground)] italic leading-relaxed mb-6">
                &ldquo;{t("about.philosophy.quote")}&rdquo;
              </blockquote>
              <div className="gold-line w-full mb-6" />
              <p className="text-[var(--foreground-muted)]">
                {t("about.philosophy.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] mb-4">
              <span className="text-gradient-gold">{t("about.getInTouch")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="card p-6 text-center hover:border-[var(--gold)] transition-colors group"
              >
                <Phone size={28} className="text-[var(--gold)] mx-auto mb-3" />
                <div className="text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors">
                  {CONTACT_INFO.phone}
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="card p-6 text-center hover:border-[var(--gold)] transition-colors group"
              >
                <Mail size={28} className="text-[var(--gold)] mx-auto mb-3" />
                <div className="text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors">
                  {CONTACT_INFO.email}
                </div>
              </a>

              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 text-center hover:border-[var(--gold)] transition-colors group"
              >
                <MapPin size={28} className="text-[var(--gold)] mx-auto mb-3" />
                <div className="text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors text-sm">
                  {t("address.line2")}, {t("address.city")}
                </div>
              </a>
            </div>

            <Link href="/contact/" className="btn-gold">
              {t("about.bookConsultation")}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

