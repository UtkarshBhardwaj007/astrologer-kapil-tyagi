"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
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
              <span className="text-[var(--foreground)]">Book an </span>
              <span className="text-gradient-gold">Appointment</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Ready to explore your destiny? Get in touch with {SITE_CONFIG.name} 
              for a personalized consultation. We&apos;re here to guide you on your life journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-[var(--font-heading)] mb-6">
                <span className="text-[var(--foreground)]">Contact </span>
                <span className="text-gradient-gold">Information</span>
              </h2>
              <div className="gold-line-left w-16 mb-8" />

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="card p-6 flex items-start gap-4 hover:border-[var(--gold)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold-muted)]">
                    <Phone size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">Phone</h3>
                    <p className="text-[var(--gold)] text-lg">{CONTACT_INFO.phone}</p>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">
                      Available for calls and WhatsApp
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 flex items-start gap-4 hover:border-[var(--gold)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold-muted)]">
                    <MessageCircle size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">WhatsApp</h3>
                    <p className="text-[var(--gold)] text-lg">Chat with us</p>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">
                      Quick responses for queries and bookings
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="card p-6 flex items-start gap-4 hover:border-[var(--gold)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold-muted)]">
                    <Mail size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">Email</h3>
                    <p className="text-[var(--gold)] text-lg">{CONTACT_INFO.email}</p>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">
                      For detailed queries and documents
                    </p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 flex items-start gap-4 hover:border-[var(--gold)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold-muted)]">
                    <MapPin size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">Address</h3>
                    <p className="text-[var(--foreground-muted)] leading-relaxed">
                      {CONTACT_INFO.address.line1}<br />
                      {CONTACT_INFO.address.line2}<br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.pincode}<br />
                      {CONTACT_INFO.address.country}
                    </p>
                  </div>
                </a>

                {/* Timing */}
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-2">Hours</h3>
                    <div className="space-y-2 text-[var(--foreground-muted)]">
                      <div>
                        <span className="text-[var(--gold)] text-sm font-medium">Consultation Hours:</span><br />
                        {CONTACT_INFO.consultationHours}
                      </div>
                      <div>
                        <span className="text-[var(--gold)] text-sm font-medium">Calling Hours:</span><br />
                        {CONTACT_INFO.callingHours}
                      </div>
                      <p className="text-sm">Monday - Sunday</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Map & QR */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Embed */}
              <div className="card overflow-hidden">
                <div className="aspect-video bg-[var(--background)] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.7234567890123!2d77.1082165!3d28.7016145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8332f3e5e3%3A0xb198f816a44d0460!2sAstrologer%20Kapil%20Tyagi!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full flex items-center justify-center gap-2"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="card p-8 text-center bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background)]">
                <h3 className="text-2xl font-[var(--font-heading)] mb-4">
                  <span className="text-[var(--foreground)]">Quick </span>
                  <span className="text-gradient-gold">Booking</span>
                </h3>
                <p className="text-[var(--foreground-muted)] mb-6">
                  For fastest response, call or WhatsApp directly
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="btn-gold w-full flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Now: {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full flex items-center justify-center gap-2 !border-[#25D366] !text-[#25D366] hover:!bg-[#25D366] hover:!text-white"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Message
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Required Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">What to </span>
              <span className="text-gradient-gold">Prepare</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              For an accurate reading, please have the following information ready 
              before your consultation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Date of Birth", description: "Exact date (DD/MM/YYYY)" },
              { title: "Time of Birth", description: "As accurate as possible" },
              { title: "Place of Birth", description: "City and country" },
              { title: "Current Issues", description: "Topics you want to discuss" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl font-[var(--font-heading)] text-[var(--gold)] mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">
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
    </>
  );
}

