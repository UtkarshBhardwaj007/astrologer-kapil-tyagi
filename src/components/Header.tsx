"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ScrollText, Heart, Home, Hash, Gem, Flame, Briefcase, Calendar } from "lucide-react";
import { NAV_LINKS, ZODIAC_NAV_LINKS, CONTACT_INFO, SITE_CONFIG, SERVICE_NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

// Service keys for translation lookup
const serviceKeys = [
  { key: "kundali", icon: ScrollText, href: "/kundali/" },
  { key: "career", icon: Briefcase, href: "/career/" },
  { key: "muhurat", icon: Calendar, href: "/mahurat/" },
  { key: "marriage", icon: Heart, href: "/marriage/" },
  { key: "vastu", icon: Home, href: "/vastu/" },
  { key: "numerology", icon: Hash, href: "/numerology/" },
  { key: "gemstones", icon: Gem, href: "/gemstones/" },
  { key: "puja", icon: Flame, href: "/puja/" },
];

// Navigation label keys for translation
const navLabelKeys: Record<string, string> = {
  "Home": "nav.home",
  "About": "nav.about",
  "Services": "nav.services",
  "Zodiac Signs": "nav.zodiacSigns",
  "Reviews": "nav.reviews",
  "Book Appointment": "nav.bookAppointment",
};

// Service nav label keys
const serviceNavLabelKeys: Record<string, string> = {
  "All Services": "nav.allServices",
  "Kundali Making": "services.kundali.title",
  "Career & Business": "services.career.title",
  "Muhurat Advice": "services.muhurat.title",
  "Marriage Matching": "services.marriage.title",
  "Vastu Shastra": "services.vastu.title",
  "Numerology": "services.numerology.title",
  "Gemstones": "services.gemstones.title",
};

// Zodiac sign keys for translation
const zodiacKeys: Record<string, string> = {
  "Aries": "zodiac.aries",
  "Taurus": "zodiac.taurus",
  "Gemini": "zodiac.gemini",
  "Cancer": "zodiac.cancer",
  "Leo": "zodiac.leo",
  "Virgo": "zodiac.virgo",
  "Libra": "zodiac.libra",
  "Scorpio": "zodiac.scorpio",
  "Sagittarius": "zodiac.sagittarius",
  "Capricorn": "zodiac.capricorn",
  "Aquarius": "zodiac.aquarius",
  "Pisces": "zodiac.pisces",
};

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isZodiacOpen, setIsZodiacOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileZodiacOpen, setMobileZodiacOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--gold-muted)]">
      {/* Top Bar */}
      <div className="bg-[var(--background-secondary)] py-2.5 hidden md:block relative z-20">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            {serviceKeys.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={service.href}
                  className="group relative flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--gold-muted)] bg-[var(--gold-muted)]/20 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all duration-300"
                >
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/5 blur-sm transition-all duration-300" />
                  <service.icon size={12} className="text-[var(--gold)] relative z-10" />
                  <span className="text-[var(--foreground-muted)] group-hover:text-[var(--gold-light)] transition-colors duration-300 text-xs font-medium tracking-wide relative z-10">
                    {t(`services.${service.key}.name`)}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector variant="compact" />
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
            >
              <Phone size={14} />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-[var(--gold)] group-hover:brightness-125 group-hover:scale-105 transition-all duration-300">
              <Logo size={48} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-[var(--font-heading)] text-gradient-gold tracking-wider leading-tight">
                {t("common.siteName")}
              </h1>
              <p className="text-xs text-[var(--foreground-muted)] tracking-widest uppercase">
                {t("common.tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) =>
              link.hasDropdown && link.dropdownType === "services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-[var(--font-heading)] text-sm tracking-wider uppercase">
                    {t(navLabelKeys[link.label] || link.label)}
                    <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-[var(--background-secondary)] border border-[var(--gold-muted)] rounded-lg shadow-xl py-2"
                      >
                        {SERVICE_NAV_LINKS.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm hover:bg-[var(--gold-muted)] hover:text-[var(--gold)] transition-colors"
                          >
                            {t(serviceNavLabelKeys[service.label] || service.label)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.hasDropdown && link.dropdownType === "zodiac" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setIsZodiacOpen(true)}
                  onMouseLeave={() => setIsZodiacOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-[var(--font-heading)] text-sm tracking-wider uppercase">
                    {t(navLabelKeys[link.label] || link.label)}
                    <ChevronDown size={14} className={`transition-transform ${isZodiacOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isZodiacOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-[var(--background-secondary)] border border-[var(--gold-muted)] rounded-lg shadow-xl py-2"
                      >
                        {ZODIAC_NAV_LINKS.map((zodiac) => (
                          <Link
                            key={zodiac.href}
                            href={zodiac.href}
                            className="block px-4 py-2 text-sm hover:bg-[var(--gold-muted)] hover:text-[var(--gold)] transition-colors"
                          >
                            {t(zodiacKeys[zodiac.label] || zodiac.label)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-[var(--font-heading)] text-sm tracking-wider uppercase"
                >
                  {t(navLabelKeys[link.label] || link.label)}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="btn-gold flex items-center gap-2"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">{t("common.callNow")}</span>
            </a>
          </div>

          {/* Mobile Menu Button and Language Selector */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector variant="compact" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--gold)] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--background-secondary)] border-t border-[var(--gold-muted)]"
          >
            <div className="container py-4 space-y-4">
              {NAV_LINKS.map((link) =>
                link.hasDropdown && link.dropdownType === "services" ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full py-2 text-[var(--foreground)] font-[var(--font-heading)] tracking-wider uppercase"
                    >
                      {t(navLabelKeys[link.label] || link.label)}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {SERVICE_NAV_LINKS.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block py-1 text-sm text-[var(--foreground-muted)] hover:text-[var(--gold)]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {t(serviceNavLabelKeys[service.label] || service.label)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.hasDropdown && link.dropdownType === "zodiac" ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileZodiacOpen(!mobileZodiacOpen)}
                      className="flex items-center justify-between w-full py-2 text-[var(--foreground)] font-[var(--font-heading)] tracking-wider uppercase"
                    >
                      {t(navLabelKeys[link.label] || link.label)}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileZodiacOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileZodiacOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {ZODIAC_NAV_LINKS.map((zodiac) => (
                            <Link
                              key={zodiac.href}
                              href={zodiac.href}
                              className="block py-1 text-sm text-[var(--foreground-muted)] hover:text-[var(--gold)]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {t(zodiacKeys[zodiac.label] || zodiac.label)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-[var(--foreground)] hover:text-[var(--gold)] font-[var(--font-heading)] tracking-wider uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(navLabelKeys[link.label] || link.label)}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-[var(--gold-muted)]">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  <span>{t("home.cta.call")} {CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
