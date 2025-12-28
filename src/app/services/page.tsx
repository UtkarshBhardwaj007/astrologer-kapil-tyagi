"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Check, ArrowRight, ScrollText, Star, Heart, Home, Hash, Gem, Circle, Flame } from "lucide-react";
import { services, serviceHighlights } from "@/data/services";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

const iconMap: { [key: string]: React.ElementType } = {
  ScrollText,
  Star,
  Heart,
  Home,
  Hash,
  Gem,
  Circle,
  Flame,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Our </span>
              <span className="text-gradient-gold">Services</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Comprehensive astrological services to guide you through every aspect of life. 
              From birth chart analysis to personalized remedies, {SITE_CONFIG.name} offers 
              expert guidance rooted in Vedic wisdom.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {serviceHighlights.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-3xl font-[var(--font-heading)] text-[var(--gold)] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Star;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full border border-[var(--gold-muted)] flex items-center justify-center flex-shrink-0">
                      <IconComponent size={28} className="text-[var(--gold)]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-[var(--font-heading)] text-[var(--foreground)] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[var(--foreground-muted)] mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <Check size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--foreground-muted)]">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-[var(--gold)] hover:gap-3 transition-all text-sm font-medium"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="text-[var(--foreground)]">How It </span>
              <span className="text-gradient-gold">Works</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book Appointment",
                description: "Call or message to schedule a consultation at your convenient time",
              },
              {
                step: "02",
                title: "Share Details",
                description: "Provide birth details (date, time, place) for accurate analysis",
              },
              {
                step: "03",
                title: "Consultation",
                description: "Receive detailed analysis and personalized guidance",
              },
              {
                step: "04",
                title: "Follow Remedies",
                description: "Implement suggested remedies for positive transformation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-[var(--font-heading)] text-[var(--gold-muted)] mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-[var(--font-heading)] text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
              <span className="text-[var(--foreground)]">Ready to Get </span>
              <span className="text-gradient-gold">Started?</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Book a consultation with {SITE_CONFIG.name} today and take the first step 
              towards understanding your destiny and making empowered life decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-gold flex items-center gap-2">
                <Calendar size={18} />
                Book Consultation
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

