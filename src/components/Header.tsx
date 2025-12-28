"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ScrollText, Star, Heart, Home, Hash, Gem, Circle, Flame } from "lucide-react";
import { NAV_LINKS, ZODIAC_NAV_LINKS, CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";

const services = [
  { name: "Kundali", icon: ScrollText, href: "/kundali/" },
  { name: "Horoscope", icon: Star, href: "/zodiac/aries/" },
  { name: "Marriage", icon: Heart, href: "/marriage/" },
  { name: "Vastu", icon: Home, href: "/vastu/" },
  { name: "Numerology", icon: Hash, href: "/numerology/" },
  { name: "Gemstones", icon: Gem, href: "/gemstones/" },
  { name: "Rudraksha", icon: Circle, href: "/rudraksha/" },
  { name: "Puja", icon: Flame, href: "/puja/" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isZodiacOpen, setIsZodiacOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--gold-muted)]">
      {/* Top Bar */}
      <div className="bg-[var(--background-secondary)] py-2.5 hidden md:block overflow-hidden">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
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
                    {service.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
          >
            <Phone size={14} />
            <span>{CONTACT_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-xl font-bold font-[var(--font-heading)] group-hover:bg-[var(--gold)] group-hover:text-[var(--background)] transition-all">
              KT
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-[var(--font-heading)] text-gradient-gold tracking-wider">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-xs text-[var(--foreground-muted)] tracking-widest uppercase">
                Astrologer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setIsZodiacOpen(true)}
                  onMouseLeave={() => setIsZodiacOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-[var(--font-heading)] text-sm tracking-wider uppercase">
                    {link.label}
                    <ChevronDown size={14} />
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
                            {zodiac.label}
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
                  {link.label}
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
              <span className="hidden xl:inline">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[var(--gold)] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                link.hasDropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setIsZodiacOpen(!isZodiacOpen)}
                      className="flex items-center justify-between w-full py-2 text-[var(--foreground)] font-[var(--font-heading)] tracking-wider uppercase"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isZodiacOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isZodiacOpen && (
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
                              {zodiac.label}
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
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-[var(--gold-muted)]">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  <span>Call {CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
