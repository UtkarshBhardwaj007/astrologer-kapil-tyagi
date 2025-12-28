"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Flame, CheckCircle, Sun, Moon, Star, Shield, Heart, Sparkles } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

export default function PujaPage() {
  const planetaryPujas = [
    {
      planet: "Surya (Sun)",
      icon: Sun,
      puja: "Surya Puja / Surya Graha Shanti",
      benefits: ["Leadership abilities", "Government favor", "Health and vitality", "Fame and recognition"],
      mantra: "Om Suryaya Namah",
      color: "#FFD700",
    },
    {
      planet: "Chandra (Moon)",
      icon: Moon,
      puja: "Chandra Puja / Chandra Graha Shanti",
      benefits: ["Mental peace", "Emotional balance", "Good relationships", "Creative abilities"],
      mantra: "Om Chandraya Namah",
      color: "#C0C0C0",
    },
    {
      planet: "Mangal (Mars)",
      icon: Shield,
      puja: "Mangal Puja / Manglik Dosha Nivaran",
      benefits: ["Courage and strength", "Property gains", "Marriage obstacles removal", "Victory over enemies"],
      mantra: "Om Mangalaya Namah",
      color: "#FF4040",
    },
    {
      planet: "Budh (Mercury)",
      icon: Star,
      puja: "Budh Puja / Budh Graha Shanti",
      benefits: ["Intelligence", "Communication", "Business success", "Academic excellence"],
      mantra: "Om Budhaya Namah",
      color: "#50C878",
    },
    {
      planet: "Guru (Jupiter)",
      icon: Sparkles,
      puja: "Brihaspati Puja / Guru Graha Shanti",
      benefits: ["Wisdom and knowledge", "Wealth and prosperity", "Marriage blessings", "Spiritual growth"],
      mantra: "Om Gurave Namah",
      color: "#FFD700",
    },
    {
      planet: "Shukra (Venus)",
      icon: Heart,
      puja: "Shukra Puja / Shukra Graha Shanti",
      benefits: ["Love and romance", "Luxury and comfort", "Artistic abilities", "Marital harmony"],
      mantra: "Om Shukraya Namah",
      color: "#FFC0CB",
    },
  ];

  const specialPujas = [
    {
      name: "Mahamrityunjaya Jaap",
      description: "Powerful prayer to Lord Shiva for protection from untimely death, serious illness, and accidents.",
      occasion: "Health issues, accidents, fear of death",
    },
    {
      name: "Navgraha Shanti Puja",
      description: "Worship of all nine planets to balance planetary energies and remove negative influences.",
      occasion: "General well-being, planetary afflictions",
    },
    {
      name: "Kaal Sarp Dosh Nivaran",
      description: "Remedy for Kaal Sarp Yoga when all planets are hemmed between Rahu and Ketu.",
      occasion: "Delays, obstacles, mental stress",
    },
    {
      name: "Pitra Dosh Nivaran",
      description: "Pacification of ancestral souls for removing obstacles caused by unfulfilled duties to ancestors.",
      occasion: "Family problems, progeny issues",
    },
    {
      name: "Satyanarayan Puja",
      description: "Worship of Lord Vishnu for overall prosperity, happiness, and fulfillment of wishes.",
      occasion: "New beginnings, prosperity, success",
    },
    {
      name: "Griha Pravesh Puja",
      description: "Rituals for entering a new home to invoke positive energies and blessings.",
      occasion: "Moving into new house",
    },
    {
      name: "Vivah Puja",
      description: "Wedding ceremonies and pre-wedding rituals as per Vedic traditions.",
      occasion: "Marriage ceremonies",
    },
    {
      name: "Sunderkand Path",
      description: "Recitation of Sunderkand from Ramcharitmanas for removing obstacles and divine blessings.",
      occasion: "Tuesday/Saturday, obstacle removal",
    },
  ];

  const remedies = [
    {
      type: "Mantra Remedies",
      items: [
        "Daily chanting of planetary mantras",
        "Gayatri Mantra for overall spiritual growth",
        "Specific mantras for dosha removal",
        "Beej mantras for planetary strengthening",
      ],
    },
    {
      type: "Donation Remedies",
      items: [
        "Charity on specific weekdays",
        "Feeding animals and birds",
        "Donating to the needy",
        "Offering to temples and priests",
      ],
    },
    {
      type: "Fasting Remedies",
      items: [
        "Weekly fasts for specific planets",
        "Ekadashi and Pradosh fasting",
        "Navratri and other festival fasts",
        "Specific deity worship days",
      ],
    },
    {
      type: "Gemstone & Rudraksha",
      items: [
        "Wearing prescribed gemstones",
        "Rudraksha for planetary balance",
        "Yantras for home and office",
        "Sacred thread (Kavach) wearing",
      ],
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
              <Flame size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Puja & </span>
              <span className="text-gradient-gold">Remedies</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Strengthen your planetary positions and overcome life obstacles through 
              powerful Vedic pujas, mantras, and time-tested astrological remedies.
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
                <span className="text-[var(--foreground)]">The Power of </span>
                <span className="text-gradient-gold">Vedic Remedies</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  In Vedic astrology, remedies play a crucial role in mitigating negative 
                  planetary influences and enhancing positive ones. Through pujas, mantras, 
                  donations, and other spiritual practices, we can harmonize cosmic energies 
                  in our favor.
                </p>
                <p>
                  The ancient Rishis developed these remedial measures based on deep 
                  understanding of planetary energies and their effects on human life. 
                  When performed with proper faith and procedure, these remedies can bring 
                  significant positive changes.
                </p>
                <p>
                  {SITE_CONFIG.name} provides personalized remedy recommendations based on 
                  your birth chart analysis, ensuring you receive the most effective 
                  solutions for your specific challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {remedies.map((remedy, index) => (
                <div key={index} className="card p-5">
                  <h3 className="font-[var(--font-heading)] text-sm text-[var(--gold)] mb-3">
                    {remedy.type}
                  </h3>
                  <ul className="space-y-2">
                    {remedy.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[var(--foreground-muted)]">
                        <CheckCircle size={12} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planetary Pujas */}
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
              <span className="text-[var(--foreground)]">Planetary </span>
              <span className="text-gradient-gold">Pujas</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Appease and strengthen planetary energies through dedicated worship rituals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planetaryPujas.map((puja, index) => {
              const IconComponent = puja.icon;
              return (
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
                      style={{ backgroundColor: `${puja.color}20`, border: `2px solid ${puja.color}` }}
                    >
                      <IconComponent size={24} style={{ color: puja.color }} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                        {puja.planet}
                      </h3>
                      <p className="text-sm text-[var(--gold)]">{puja.puja}</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-[var(--background)] rounded-lg text-center">
                    <p className="text-xs text-[var(--foreground-muted)] mb-1">Mantra:</p>
                    <p className="text-sm text-[var(--gold)] font-medium italic">{puja.mantra}</p>
                  </div>

                  <div className="border-t border-[var(--gold-muted)] pt-4">
                    <p className="text-xs text-[var(--foreground-muted)] mb-2">Benefits:</p>
                    <div className="flex flex-wrap gap-1">
                      {puja.benefits.map((benefit, idx) => (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Pujas */}
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
              <span className="text-[var(--foreground)]">Special </span>
              <span className="text-gradient-gold">Pujas & Rituals</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Powerful rituals for specific life situations and spiritual growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {specialPujas.map((puja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold-muted)] flex items-center justify-center flex-shrink-0">
                    <Flame size={20} className="text-[var(--gold)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                      {puja.name}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] mb-3">
                      {puja.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--gold-muted)] rounded-full">
                      <span className="text-xs text-[var(--gold)]">When: {puja.occasion}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-6 text-center">
              <span className="text-[var(--foreground)]">Our </span>
              <span className="text-gradient-gold">Process</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />

            <div className="space-y-4">
              {[
                {
                  step: "Birth Chart Analysis",
                  description: "We analyze your Kundali to identify afflicted planets and doshas requiring remedies.",
                },
                {
                  step: "Personalized Recommendation",
                  description: "Based on analysis, we suggest the most effective pujas and remedies for your situation.",
                },
                {
                  step: "Muhurat Selection",
                  description: "We identify the most auspicious date and time for performing the recommended puja.",
                },
                {
                  step: "Puja Performance",
                  description: "Pujas are performed with proper Vedic procedures by experienced priests.",
                },
                {
                  step: "Ongoing Guidance",
                  description: "We provide guidance on daily practices and follow-up remedies for continued benefits.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 card p-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--background)] flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">
                      {item.step}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">{item.description}</p>
                  </div>
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
              <span className="text-gradient-gold">Personalized Remedies</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Every individual&apos;s chart is unique, and so should be their remedies. Consult {SITE_CONFIG.name} for 
              personalized puja and remedy recommendations based on your birth chart analysis.
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

