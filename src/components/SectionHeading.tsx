"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center" : ""}
    >
      <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] mb-4">
        <span className="text-[var(--foreground)]">{title} </span>
        <span className="text-gradient-gold">{highlight}</span>
      </h2>
      <div className={`${centered ? "gold-line w-24 mx-auto" : "gold-line-left w-16"} mb-4`} />
      {subtitle && (
        <p className={`text-[var(--foreground-muted)] ${centered ? "max-w-2xl mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

