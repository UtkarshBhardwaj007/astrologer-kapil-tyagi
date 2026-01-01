"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

interface VisitingCardProps {
  interactive?: boolean;
}

// Premium warm color palette: cream, off-white, red, orange, brown, yellow
const colors = {
  // Background tones
  cream: "#FDF6E3",
  offWhite: "#FAF3E0",
  warmWhite: "#FFFBF0",
  
  // Accent colors
  deepRed: "#8B0000",
  burgundy: "#722F37",
  rust: "#A0522D",
  orange: "#CD5C00",
  amber: "#D4A017",
  gold: "#B8860B",
  brown: "#5D3A1A",
  
  // Text colors
  darkBrown: "#3D2314",
  richBrown: "#4A2C17",
};

export default function VisitingCard({ interactive = true }: VisitingCardProps) {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Clean container without aura effects */}
      <div className="relative p-4">
        {/* Card Container - maintains 3.5:2 aspect ratio */}
        <div
          className={`relative w-full aspect-[3.5/2] ${interactive ? "cursor-pointer" : ""}`}
          style={{ perspective: "1200px" }}
          onMouseEnter={() => interactive && setIsFlipped(true)}
          onMouseLeave={() => interactive && setIsFlipped(false)}
          onClick={() => interactive && setIsFlipped(!isFlipped)}
        >
          {/* Inner container that rotates */}
          <motion.div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateY: isFlipped ? 180 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {/* ===== FRONT SIDE ===== */}
            <div
              className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div 
                className="w-full h-full relative"
                style={{
                  background: `linear-gradient(145deg, ${colors.warmWhite} 0%, ${colors.cream} 50%, ${colors.offWhite} 100%)`,
                }}
              >
                {/* Premium double border */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `2px solid ${colors.burgundy}`,
                  }}
                />
                <div 
                  className="absolute inset-[4px] rounded-lg"
                  style={{
                    border: `1px solid ${colors.amber}`,
                    opacity: 0.6,
                  }}
                />
                
                {/* Corner flourishes - lines only, no dots */}
                <div className="absolute top-3 left-3 w-6 h-6">
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute top-0 left-0 h-full w-[2px]" style={{ background: `linear-gradient(180deg, ${colors.burgundy}, transparent)` }} />
                </div>
                <div className="absolute top-3 right-3 w-6 h-6">
                  <div className="absolute top-0 right-0 w-full h-[2px]" style={{ background: `linear-gradient(270deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute top-0 right-0 h-full w-[2px]" style={{ background: `linear-gradient(180deg, ${colors.burgundy}, transparent)` }} />
                </div>
                <div className="absolute bottom-3 left-3 w-6 h-6">
                  <div className="absolute bottom-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute bottom-0 left-0 h-full w-[2px]" style={{ background: `linear-gradient(0deg, ${colors.burgundy}, transparent)` }} />
                </div>
                <div className="absolute bottom-3 right-3 w-6 h-6">
                  <div className="absolute bottom-0 right-0 w-full h-[2px]" style={{ background: `linear-gradient(270deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute bottom-0 right-0 h-full w-[2px]" style={{ background: `linear-gradient(0deg, ${colors.burgundy}, transparent)` }} />
                </div>
                
                {/* Content */}
                <div className="relative w-full h-full flex flex-col items-center justify-center py-4 px-4">
                  {/* Center content */}
                  <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-3" style={{ color: colors.deepRed }}>
                      <Logo size={52} />
                    </div>
                    
                    {/* Name */}
                    <h2 
                      className="font-[var(--font-heading)] text-sm md:text-base tracking-[0.15em] text-center font-semibold"
                      style={{ color: colors.darkBrown }}
                    >
                      {t("common.siteName").toUpperCase()}
                    </h2>
                    
                    {/* Primary Tagline */}
                    <p 
                      className="text-[9px] md:text-[10px] mt-1.5 tracking-[0.12em] italic font-medium"
                      style={{ color: colors.burgundy }}
                    >
                      {t("visitingCard.tagline")}
                    </p>
                    
                    {/* Elegant divider */}
                    <div className="flex items-center gap-3 mt-4">
                      <div 
                        className="w-12 h-[1.5px]"
                        style={{ background: `linear-gradient(90deg, transparent, ${colors.amber})` }}
                      />
                      <div 
                        className="w-2 h-2 rotate-45"
                        style={{ background: colors.amber }}
                      />
                      <div 
                        className="w-12 h-[1.5px]"
                        style={{ background: `linear-gradient(90deg, ${colors.amber}, transparent)` }}
                      />
                    </div>
                    
                    {/* Secondary Tagline */}
                    <p 
                      className="text-[7px] md:text-[8px] tracking-[0.2em] mt-4 font-medium"
                      style={{ color: colors.rust }}
                    >
                      {t("visitingCard.secondaryTagline")}
                    </p>
                  </div>
                  
                  {/* Hover hint */}
                  {interactive && (
                    <p 
                      className="text-[6px] tracking-wider uppercase mt-3 absolute bottom-3"
                      style={{ color: colors.brown, opacity: 0.5 }}
                    >
                      {t("common.hoverToViewDetails")}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ===== BACK SIDE ===== */}
            <div
              className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
              style={{ 
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <div 
                className="w-full h-full relative"
                style={{
                  background: `linear-gradient(145deg, ${colors.cream} 0%, ${colors.offWhite} 50%, ${colors.warmWhite} 100%)`,
                }}
              >
                {/* Premium border */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `2px solid ${colors.burgundy}`,
                  }}
                />
                <div 
                  className="absolute inset-[4px] rounded-lg"
                  style={{
                    border: `1px solid ${colors.amber}`,
                    opacity: 0.6,
                  }}
                />
                
                {/* Corner flourishes - lines only */}
                <div className="absolute top-3 left-3 w-4 h-4">
                  <div className="absolute top-0 left-0 w-full h-[1.5px]" style={{ background: `linear-gradient(90deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute top-0 left-0 h-full w-[1.5px]" style={{ background: `linear-gradient(180deg, ${colors.burgundy}, transparent)` }} />
                </div>
                <div className="absolute top-3 right-3 w-4 h-4">
                  <div className="absolute top-0 right-0 w-full h-[1.5px]" style={{ background: `linear-gradient(270deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute top-0 right-0 h-full w-[1.5px]" style={{ background: `linear-gradient(180deg, ${colors.burgundy}, transparent)` }} />
                </div>
                <div className="absolute bottom-3 left-3 w-4 h-4">
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px]" style={{ background: `linear-gradient(90deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute bottom-0 left-0 h-full w-[1.5px]" style={{ background: `linear-gradient(0deg, ${colors.burgundy}, transparent)` }} />
                </div>
                <div className="absolute bottom-3 right-3 w-4 h-4">
                  <div className="absolute bottom-0 right-0 w-full h-[1.5px]" style={{ background: `linear-gradient(270deg, ${colors.burgundy}, transparent)` }} />
                  <div className="absolute bottom-0 right-0 h-full w-[1.5px]" style={{ background: `linear-gradient(0deg, ${colors.burgundy}, transparent)` }} />
                </div>
                
                {/* Content */}
                <div className="relative w-full h-full p-5 flex flex-col justify-center">
                  {/* Contact Details */}
                  <div className="space-y-2.5">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone size={14} style={{ color: colors.burgundy }} />
                      <span className="text-xs font-medium" style={{ color: colors.darkBrown }}>{CONTACT_INFO.phone}</span>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <Mail size={14} style={{ color: colors.burgundy }} />
                      <span className="text-xs font-medium" style={{ color: colors.darkBrown }}>{CONTACT_INFO.email}</span>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin size={14} style={{ color: colors.burgundy }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-[11px] leading-relaxed" style={{ color: colors.darkBrown }}>
                        {t("address.line1")}, {t("address.line2")}<br />
                        {t("address.city")} - {t("address.pincode")}
                      </span>
                    </div>
                    
                    {/* Elegant divider */}
                    <div 
                      className="w-full h-[1px] my-1"
                      style={{ background: `linear-gradient(90deg, transparent, ${colors.amber}, transparent)` }}
                    />
                    
                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock size={14} style={{ color: colors.burgundy }} className="mt-0.5 flex-shrink-0" />
                      <div className="text-[11px] leading-relaxed" style={{ color: colors.darkBrown }}>
                        <div><span style={{ color: colors.rust }} className="font-medium">{t("visitingCard.consultation")}:</span> 10AM - 9PM IST</div>
                        <div><span style={{ color: colors.rust }} className="font-medium">{t("visitingCard.calling")}:</span> 10AM - 6PM IST</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
