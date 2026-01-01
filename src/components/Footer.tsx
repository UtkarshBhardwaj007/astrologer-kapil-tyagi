import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { CONTACT_INFO, SOCIAL_LINKS, FOOTER_LINKS, SITE_CONFIG, ZODIAC_NAV_LINKS } from "@/lib/constants";
import { yearsOfExperience } from "@/data/testimonials";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--gold-muted)] py-8">
      {/* Main Footer */}
      <div className="container pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[var(--primary)]">
                <Logo size={56} />
              </div>
              <div>
                <h3 className="text-lg font-[var(--font-heading)] text-gradient-gold tracking-wider leading-tight">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] tracking-widest uppercase">
                  Vedic Astrology
                </p>
              </div>
            </div>
            <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
              Renowned Vedic astrologer with over {yearsOfExperience} years of experience providing guidance in astrology, 
              numerology, vastu shastra, and gemstone consultation.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold-muted)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[var(--gold-muted)] transition-all"
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold-muted)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[var(--gold-muted)] transition-all"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold-muted)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[var(--gold-muted)] transition-all"
                aria-label="YouTube"
              >
                <SiYoutube size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold-muted)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[var(--gold-muted)] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg mb-6 text-[var(--gold)] tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zodiac Signs */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg mb-6 text-[var(--gold)] tracking-wider">
              Zodiac Signs
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {ZODIAC_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg mb-6 text-[var(--gold)] tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-[var(--foreground-muted)] hover:text-[var(--gold)] transition-colors group"
                >
                  <Phone size={18} className="text-[var(--gold)] mt-1 flex-shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 text-[var(--foreground-muted)] hover:text-[var(--gold)] transition-colors group"
                >
                  <Mail size={18} className="text-[var(--gold)] mt-1 flex-shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[var(--foreground-muted)] hover:text-[var(--gold)] transition-colors group"
                >
                  <MapPin size={18} className="text-[var(--gold)] mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">
                    {CONTACT_INFO.address.line1}<br />
                    {CONTACT_INFO.address.line2}<br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.pincode}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--gold-muted)]">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--foreground-muted)]">
          <p>
            © {currentYear} {SITE_CONFIG.title}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact/" className="hover:text-[var(--gold)] transition-colors">
              Contact
            </Link>
            <Link href="/about/" className="hover:text-[var(--gold)] transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
