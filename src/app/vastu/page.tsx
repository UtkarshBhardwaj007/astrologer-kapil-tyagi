"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Home, Compass, Sun, Wind, Droplets, TreePine, Building, CheckCircle } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

export default function VastuPage() {
  const vastuTips = [
    {
      icon: Compass,
      title: "Main Entrance",
      description: "The main entrance should ideally face North, East, or Northeast for maximum positive energy flow. Avoid South-West entrances.",
    },
    {
      icon: Sun,
      title: "Living Room",
      description: "Place the living room in the North or East direction. Ensure good natural light and ventilation for positive vibrations.",
    },
    {
      icon: Home,
      title: "Master Bedroom",
      description: "The master bedroom should be in the South-West corner. Place the bed so you sleep with your head towards South.",
    },
    {
      icon: Droplets,
      title: "Kitchen",
      description: "The kitchen should be in the South-East corner (Agni corner). The cook should face East while cooking.",
    },
    {
      icon: Wind,
      title: "Bathroom",
      description: "Bathrooms should be in the West or North-West direction. Avoid placing them in the North-East corner.",
    },
    {
      icon: Building,
      title: "Office/Study",
      description: "Home office or study room should be in the West or South-West. Face North or East while working for better concentration.",
    },
  ];

  const benefits = [
    "Improved health and well-being",
    "Enhanced prosperity and wealth",
    "Better relationships and harmony",
    "Career growth and success",
    "Mental peace and positivity",
    "Protection from negative energies",
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
              <Compass size={40} className="text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Vastu </span>
              <span className="text-gradient-gold">Shastra</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              The ancient Indian science of architecture and spatial arrangement. 
              Create harmony between your living space and the cosmic forces for 
              prosperity, health, and peace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Vastu */}
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
                <span className="text-[var(--foreground)]">What is </span>
                <span className="text-gradient-gold">Vastu Shastra?</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              
              <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  Vastu Shastra is an ancient Indian science that harmonizes architecture 
                  with nature&apos;s five elements—Earth, Water, Fire, Air, and Space. 
                  Dating back over 5,000 years, it provides guidelines for designing 
                  spaces that promote positive energy flow.
                </p>
                <p>
                  The fundamental principle of Vastu is that the directions and placement 
                  of rooms, furniture, and objects affect the energy of a space, which in 
                  turn influences the health, prosperity, and happiness of its occupants.
                </p>
                <p>
                  {SITE_CONFIG.name} provides expert Vastu consultation for homes, offices, 
                  and commercial spaces. Our practical remedies work without requiring 
                  major structural changes, making Vastu accessible to everyone.
                </p>
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
                Benefits of Vastu
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-[var(--gold)] flex-shrink-0" />
                    <span className="text-[var(--foreground)]">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vastu Tips */}
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
              <span className="text-[var(--foreground)]">Essential Vastu </span>
              <span className="text-gradient-gold">Tips</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Simple guidelines to bring positive energy into your home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vastuTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--gold-muted)] flex items-center justify-center mb-4">
                  <tip.icon size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Elements */}
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
              <span className="text-[var(--foreground)]">The Five </span>
              <span className="text-gradient-gold">Elements</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-6" />
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Vastu is based on the balance of Pancha Mahabhuta (Five Great Elements)
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Earth", hindi: "Prithvi", direction: "SW", color: "#8B4513" },
              { name: "Water", hindi: "Jal", direction: "NE", color: "#4169E1" },
              { name: "Fire", hindi: "Agni", direction: "SE", color: "#FF4500" },
              { name: "Air", hindi: "Vayu", direction: "NW", color: "#87CEEB" },
              { name: "Space", hindi: "Akash", direction: "Center", color: "#9370DB" },
            ].map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${element.color}20`, border: `2px solid ${element.color}` }}
                >
                  <span className="text-2xl font-[var(--font-heading)]" style={{ color: element.color }}>
                    {element.name[0]}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[var(--foreground)] mb-1">
                  {element.name}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">{element.hindi}</p>
                <p className="text-xs text-[var(--gold)] mt-2">Direction: {element.direction}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">Get Expert </span>
              <span className="text-gradient-gold">Vastu Consultation</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              {SITE_CONFIG.name} provides personalized Vastu consultation for your home, 
              office, or business. Get practical remedies without major structural changes.
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

