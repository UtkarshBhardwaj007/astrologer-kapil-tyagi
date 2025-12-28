"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Circle, CheckCircle, AlertTriangle, Sparkles } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

export default function RudrakshaPage() {
  const rudrakshaTypes = [
    {
      mukhi: "1 Mukhi",
      deity: "Lord Shiva",
      planet: "Sun",
      benefits: ["Supreme consciousness", "Spiritual enlightenment", "Liberation (Moksha)", "Leadership abilities"],
      rarity: "Extremely Rare",
      color: "#FFD700",
    },
    {
      mukhi: "2 Mukhi",
      deity: "Ardhanarishvara",
      planet: "Moon",
      benefits: ["Harmonious relationships", "Emotional balance", "Unity and partnership", "Mental peace"],
      rarity: "Rare",
      color: "#C0C0C0",
    },
    {
      mukhi: "3 Mukhi",
      deity: "Agni (Fire God)",
      planet: "Mars",
      benefits: ["Removes past karma", "Boosts confidence", "Success in endeavors", "Energy and vitality"],
      rarity: "Available",
      color: "#FF6347",
    },
    {
      mukhi: "4 Mukhi",
      deity: "Lord Brahma",
      planet: "Mercury",
      benefits: ["Knowledge and wisdom", "Communication skills", "Academic success", "Creative abilities"],
      rarity: "Available",
      color: "#50C878",
    },
    {
      mukhi: "5 Mukhi",
      deity: "Kalagni Rudra",
      planet: "Jupiter",
      benefits: ["Health and well-being", "Spiritual growth", "Peace of mind", "Blood pressure control"],
      rarity: "Common",
      color: "#87CEEB",
    },
    {
      mukhi: "6 Mukhi",
      deity: "Lord Kartikeya",
      planet: "Venus",
      benefits: ["Wisdom and learning", "Willpower", "Grounding energy", "Focus and concentration"],
      rarity: "Available",
      color: "#DDA0DD",
    },
    {
      mukhi: "7 Mukhi",
      deity: "Goddess Lakshmi",
      planet: "Saturn",
      benefits: ["Wealth and prosperity", "Good fortune", "Career growth", "Financial stability"],
      rarity: "Available",
      color: "#FFD700",
    },
    {
      mukhi: "8 Mukhi",
      deity: "Lord Ganesha",
      planet: "Rahu",
      benefits: ["Removes obstacles", "Success in ventures", "Wisdom", "Protection from negativity"],
      rarity: "Rare",
      color: "#8B4513",
    },
    {
      mukhi: "9 Mukhi",
      deity: "Goddess Durga",
      planet: "Ketu",
      benefits: ["Energy and power", "Fearlessness", "Dynamic personality", "Spiritual advancement"],
      rarity: "Rare",
      color: "#800000",
    },
    {
      mukhi: "10 Mukhi",
      deity: "Lord Vishnu",
      planet: "All planets",
      benefits: ["Protection from evil", "Peace and security", "Removes negative energies", "Overall well-being"],
      rarity: "Rare",
      color: "#4169E1",
    },
    {
      mukhi: "11 Mukhi",
      deity: "Hanuman",
      planet: "All planets",
      benefits: ["Protection and courage", "Meditation power", "Yogic powers", "Adventure and wisdom"],
      rarity: "Rare",
      color: "#FF4500",
    },
    {
      mukhi: "12 Mukhi",
      deity: "Lord Surya",
      planet: "Sun",
      benefits: ["Radiance and brilliance", "Leadership", "Administrative abilities", "Self-confidence"],
      rarity: "Very Rare",
      color: "#FFA500",
    },
  ];

  const guidelines = [
    {
      title: "Authenticity is crucial",
      description: "Always purchase Rudraksha from trusted sources. Fake beads provide no benefits and may have negative effects.",
      type: "warning",
    },
    {
      title: "Proper energization",
      description: "Rudraksha must be energized with proper mantras and rituals before wearing for maximum benefits.",
      type: "tip",
    },
    {
      title: "Wearing instructions",
      description: "Wear Rudraksha in contact with skin, preferably on Monday. Remove during sleep and impure activities.",
      type: "tip",
    },
    {
      title: "Consult before wearing",
      description: "Different Mukhi Rudrakshas suit different individuals based on their birth chart. Always consult an expert.",
      type: "warning",
    },
  ];

  const benefits = [
    "Reduces stress and anxiety",
    "Controls blood pressure",
    "Enhances concentration",
    "Provides electromagnetic protection",
    "Balances chakras",
    "Promotes spiritual growth",
    "Protects from negative energies",
    "Improves overall health",
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
              <Circle size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Rudraksha </span>
              <span className="text-gradient-gold">Consultation</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Experience the divine blessings of sacred Rudraksha beads. Select the right 
              Rudraksha based on your planetary positions for spiritual growth and protection.
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
                <span className="text-[var(--foreground)]">The Sacred </span>
                <span className="text-gradient-gold">Rudraksha</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  Rudraksha, meaning &quot;Tears of Lord Shiva,&quot; are sacred seeds from the 
                  Elaeocarpus ganitrus tree. These powerful beads have been revered for 
                  thousands of years for their spiritual and healing properties.
                </p>
                <p>
                  Each Rudraksha bead has a specific number of faces or &quot;Mukhis,&quot; ranging 
                  from 1 to 21. Each type is associated with different deities, planets, 
                  and benefits. The number of Mukhis determines which planetary energies 
                  the bead can harness.
                </p>
                <p>
                  {SITE_CONFIG.name} provides expert guidance on selecting the right Rudraksha 
                  based on your birth chart, ensuring you receive maximum spiritual and 
                  material benefits from these sacred beads.
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

      {/* Benefits Section */}
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
              <span className="text-[var(--foreground)]">Benefits of </span>
              <span className="text-gradient-gold">Rudraksha</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card p-4 text-center"
              >
                <Sparkles size={20} className="text-[var(--gold)] mx-auto mb-2" />
                <p className="text-sm text-[var(--foreground)]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rudraksha Types Grid */}
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
              <span className="text-[var(--foreground)]">Types of </span>
              <span className="text-gradient-gold">Rudraksha</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Each Mukhi Rudraksha has unique properties and benefits based on its ruling deity and planet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rudrakshaTypes.map((rudraksha, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${rudraksha.color}20`, border: `2px solid ${rudraksha.color}` }}
                  >
                    <Circle size={24} style={{ color: rudraksha.color }} />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)]">
                      {rudraksha.mukhi}
                    </h3>
                    <p className="text-sm text-[var(--gold)]">{rudraksha.deity}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Planet:</span>
                    <span className="text-[var(--foreground)]">{rudraksha.planet}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Availability:</span>
                    <span className="text-[var(--foreground)]">{rudraksha.rarity}</span>
                  </div>
                </div>

                <div className="border-t border-[var(--gold-muted)] pt-4">
                  <p className="text-xs text-[var(--foreground-muted)] mb-2">Benefits:</p>
                  <div className="flex flex-wrap gap-1">
                    {rudraksha.benefits.map((benefit, idx) => (
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

      {/* How to Wear Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-6 text-center">
              <span className="text-[var(--foreground)]">How to Wear </span>
              <span className="text-gradient-gold">Rudraksha</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />

            <div className="space-y-4">
              {[
                "Purify the Rudraksha by washing it with Gangajal or pure water and milk.",
                "Energize it by chanting the appropriate mantra 108 times.",
                "Wear it on a Monday morning during Shukla Paksha for best results.",
                "String the Rudraksha in silk, wool, or gold/silver thread.",
                "Wear it touching your skin for maximum benefits.",
                "Remove during sleep, bathing, and visiting impure places.",
                "Regularly clean and re-energize your Rudraksha every 6 months.",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--gold)] text-[var(--background)] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-[var(--foreground-muted)]">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              <span className="text-gradient-gold">Rudraksha Recommendation</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Wearing the wrong Rudraksha can have adverse effects. Consult {SITE_CONFIG.name} for 
              personalized Rudraksha recommendations based on your birth chart analysis.
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

