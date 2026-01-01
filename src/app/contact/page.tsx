"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import VisitingCard from "@/components/VisitingCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
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
              <span className="text-gradient-gold">{t("contact.title")}</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("contact.subtitle")}
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
                <span className="text-gradient-gold">{t("contact.info.title")}</span>
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
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">{t("contact.info.phone")}</h3>
                    <p className="text-[var(--gold)] text-lg">{CONTACT_INFO.phone}</p>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">
                      {t("contact.info.phoneDesc")}
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
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">{t("contact.info.whatsapp")}</h3>
                    <p className="text-[var(--gold)] text-lg">{t("contact.info.chatWithUs")}</p>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">
                      {t("contact.info.whatsappDesc")}
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
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">{t("contact.info.email")}</h3>
                    <p className="text-[var(--gold)] text-lg">{CONTACT_INFO.email}</p>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">
                      {t("contact.info.emailDesc")}
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
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">{t("contact.info.address")}</h3>
                    <p className="text-[var(--foreground-muted)] leading-relaxed">
                      {t("address.line1")}<br />
                      {t("address.line2")}<br />
                      {t("address.city")}, {t("address.pincode")}<br />
                      {t("address.country")}
                    </p>
                  </div>
                </a>

                {/* Timing */}
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-2">{t("contact.info.hours")}</h3>
                    <div className="space-y-2 text-[var(--foreground-muted)]">
                      <div>
                        <span className="text-[var(--gold)] text-sm font-medium">{t("contact.info.consultationHours")}:</span><br />
                        {CONTACT_INFO.consultationHours}
                      </div>
                      <div>
                        <span className="text-[var(--gold)] text-sm font-medium">{t("contact.info.callingHours")}:</span><br />
                        {CONTACT_INFO.callingHours}
                      </div>
                      <p className="text-sm">{t("common.mondayToSunday")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Card, Map & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Visiting Card */}
              <div className="card p-6 bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background)]">
                <h3 className="text-xl font-[var(--font-heading)] text-center mb-4">
                  <span className="text-gradient-gold">{t("contact.businessCard")}</span>
                </h3>
                <VisitingCard />
              </div>

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
                    {t("common.getDirections")}
                  </a>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="card p-8 text-center bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background)]">
                <h3 className="text-2xl font-[var(--font-heading)] mb-4">
                  <span className="text-gradient-gold">{t("contact.quickBooking.title")}</span>
                </h3>
                <p className="text-[var(--foreground-muted)] mb-6">
                  {t("contact.quickBooking.subtitle")}
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="btn-gold w-full flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    {t("contact.quickBooking.callNow")}: {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full flex items-center justify-center gap-2 !border-[#25D366] !text-[#25D366] hover:!bg-[#25D366] hover:!text-white"
                  >
                    <MessageCircle size={18} />
                    {t("contact.quickBooking.whatsappMessage")}
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
              <span className="text-gradient-gold">{t("contact.prepare.title")}</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              {t("contact.prepare.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: t("contact.prepare.dateOfBirth"), description: t("contact.prepare.dateOfBirthDesc") },
              { title: t("contact.prepare.timeOfBirth"), description: t("contact.prepare.timeOfBirthDesc") },
              { title: t("contact.prepare.placeOfBirth"), description: t("contact.prepare.placeOfBirthDesc") },
              { title: t("contact.prepare.currentIssues"), description: t("contact.prepare.currentIssuesDesc") },
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

