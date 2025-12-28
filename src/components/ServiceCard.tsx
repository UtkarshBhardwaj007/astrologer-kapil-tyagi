"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ScrollText, Star, Heart, Home, Hash, Gem, Circle, Flame } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: { [key: string]: React.ElementType } = {
  ScrollText,
  Star,
  Heart,
  Home,
  Hash,
  Gem,
  Circle,
  Flame,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={service.href} className="block h-full">
        <div className="card p-6 h-full group cursor-pointer">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full border border-[var(--gold-muted)] flex items-center justify-center mb-4 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold-muted)] transition-all">
            <IconComponent size={24} className="text-[var(--gold)]" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-[var(--font-heading)] text-[var(--foreground)] mb-3 group-hover:text-[var(--gold)] transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[var(--foreground-muted)] mb-4 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Link */}
          <div className="flex items-center gap-2 text-[var(--gold)] text-sm font-medium group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

