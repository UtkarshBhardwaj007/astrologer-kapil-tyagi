"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Gem, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

export default function GemstonesPage() {
  const gemstones = [
    {
      name: "Ruby",
      hindi: "Manik",
      planet: "Sun (Surya)",
      zodiac: "Leo",
      color: "#E0115F",
      benefits: ["Leadership qualities", "Vitality and energy", "Fame and recognition", "Self-confidence"],
      finger: "Ring finger",
      metal: "Gold",
    },
    {
      name: "Pearl",
      hindi: "Moti",
      planet: "Moon (Chandra)",
      zodiac: "Cancer",
      color: "#FDEEF4",
      benefits: ["Emotional balance", "Mental peace", "Good relationships", "Fertility"],
      finger: "Little finger",
      metal: "Silver",
    },
    {
      name: "Red Coral",
      hindi: "Moonga",
      planet: "Mars (Mangal)",
      zodiac: "Aries, Scorpio",
      color: "#FF4040",
      benefits: ["Courage and confidence", "Property gains", "Victory over enemies", "Physical strength"],
      finger: "Ring finger",
      metal: "Gold/Copper",
    },
    {
      name: "Emerald",
      hindi: "Panna",
      planet: "Mercury (Budh)",
      zodiac: "Gemini, Virgo",
      color: "#50C878",
      benefits: ["Intelligence", "Communication skills", "Business success", "Memory power"],
      finger: "Little finger",
      metal: "Gold",
    },
    {
      name: "Yellow Sapphire",
      hindi: "Pukhraj",
      planet: "Jupiter (Guru)",
      zodiac: "Sagittarius, Pisces",
      color: "#FFD700",
      benefits: ["Wisdom and knowledge", "Marriage prospects", "Wealth and prosperity", "Spiritual growth"],
      finger: "Index finger",
      metal: "Gold",
    },
    {
      name: "Diamond",
      hindi: "Heera",
      planet: "Venus (Shukra)",
      zodiac: "Taurus, Libra",
      color: "#B9F2FF",
      benefits: ["Luxury and comfort", "Artistic abilities", "Love and romance", "Beauty and charm"],
      finger: "Middle/Ring finger",
      metal: "Platinum/Gold",
    },
    {
      name: "Blue Sapphire",
      hindi: "Neelam",
      planet: "Saturn (Shani)",
      zodiac: "Capricorn, Aquarius",
      color: "#0F52BA",
      benefits: ["Career success", "Discipline", "Longevity", "Removes obstacles"],
      finger: "Middle finger",
      metal: "Gold/Silver",
    },
    {
      name: "Hessonite",
      hindi: "Gomed",
      planet: "Rahu",
      zodiac: "Varies by chart",
      color: "#8B4513",
      benefits: ["Protection from enemies", "Success in politics", "Clear thinking", "Removes Rahu dosha"],
      finger: "Middle finger",
      metal: "Silver",
    },
    {
      name: "Cat's Eye",
      hindi: "Lehsunia",
      planet: "Ketu",
      zodiac: "Varies by chart",
      color: "#808000",
      benefits: ["Spiritual growth", "Protection from accidents", "Hidden knowledge", "Removes Ketu dosha"],
      finger: "Little/Ring finger",
      metal: "Gold/Silver",
    },
  ];

  const guidelines = [
    {
      title: "Always consult an expert",
      description: "Gemstones should be worn only after proper birth chart analysis. Wrong gemstones can have adverse effects.",
      type: "warning",
    },
    {
      title: "Quality matters",
      description: "Only natural, untreated gemstones with good clarity provide astrological benefits.",
      type: "tip",
    },
    {
      title: "Proper energization",
      description: "Gemstones must be energized with proper mantras and worn on auspicious dates for maximum benefits.",
      type: "tip",
    },
    {
      title: "Right weight",
      description: "The weight of the gemstone should be calculated based on your body weight and birth chart.",
      type: "tip",
    },
  ];

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
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[var(--gold)] flex items-center justify-center">
              <Gem size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Gemstone </span>
              <span className="text-gradient-gold">Consultation</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Harness the cosmic energy of precious gemstones to strengthen favorable 
              planets and enhance prosperity, health, and success in your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-[var(--font-heading)] mb-4">
                <span className="text-[var(--foreground)]">The Science of </span>
                <span className="text-gradient-gold">Ratna Shastra</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  In Vedic astrology, gemstones are powerful tools that channel planetary 
                  energies. Each gemstone corresponds to a specific planet and can strengthen 
                  its positive influences in your birth chart.
                </p>
                <p>
                  The Navaratna (nine gems) system aligns with the nine celestial bodies—Sun, 
                  Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. When worn correctly, 
                  these gemstones can help overcome obstacles, enhance positive traits, and 
                  bring balance to your life.
                </p>
                <p>
                  {SITE_CONFIG.name} provides personalized gemstone recommendations based on 
                  detailed birth chart analysis, ensuring you wear the right stone that 
                  harmonizes with your planetary positions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {guidelines.map((item, index) => (
                <div
                  key={index}
                  className={`card p-4 flex items-start gap-4 ${
                    item.type === "warning" ? "border-yellow-500/50" : ""
                  }`}
                >
                  {item.type === "warning" ? (
                    <AlertTriangle size={24} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle size={24} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gemstones Grid */}
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
              <span className="text-[var(--foreground)]">The </span>
              <span className="text-gradient-gold">Navaratna</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              The nine precious gemstones representing the nine celestial bodies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gemstones.map((gem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${gem.color}30`, border: `2px solid ${gem.color}` }}
                  >
                    <Gem size={24} style={{ color: gem.color }} />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)]">
                      {gem.name}
                    </h3>
                    <p className="text-sm text-[var(--gold)]">{gem.hindi}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Planet:</span>
                    <span className="text-[var(--foreground)]">{gem.planet}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Zodiac:</span>
                    <span className="text-[var(--foreground)]">{gem.zodiac}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Finger:</span>
                    <span className="text-[var(--foreground)]">{gem.finger}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Metal:</span>
                    <span className="text-[var(--foreground)]">{gem.metal}</span>
                  </div>
                </div>

                <div className="border-t border-[var(--gold-muted)] pt-4">
                  <p className="text-xs text-[var(--foreground-muted)] mb-2">Benefits:</p>
                  <div className="flex flex-wrap gap-1">
                    {gem.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-[var(--gold-muted)] text-[var(--gold)] rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
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
              <span className="text-[var(--foreground)]">Get Your </span>
              <span className="text-gradient-gold">Personalized Recommendation</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Don&apos;t wear gemstones without expert guidance. Consult {SITE_CONFIG.name} for 
              personalized gemstone recommendations based on your birth chart analysis.
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

