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

// New color palette: red, orange, brown, yellow, black
const colors = {
  primary: "#E85A00", // Deep orange
  primaryLight: "#FF8C00", // Bright orange
  secondary: "#8B4513", // Saddle brown
  highlight: "#FFB347", // Warm yellow/orange
  accent: "#CD5C00", // Burnt orange
  brown: "#5D3A1A", // Rich brown
};

export default function VisitingCard({ interactive = true }: VisitingCardProps) {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Premium Aura Container */}
      <div className="relative p-6">
        {/* Outer glow layers - Premium warm tone */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-40 blur-2xl"
          style={{
            background: `radial-gradient(ellipse at center, rgba(232, 90, 0, 0.4) 0%, transparent 70%)`,
          }}
        />
        <div 
          className="absolute inset-2 rounded-xl opacity-30 blur-xl"
          style={{
            background: `radial-gradient(ellipse at center, rgba(255, 140, 0, 0.3) 0%, transparent 60%)`,
          }}
        />
        
        {/* Animated shimmer effect */}
        <motion.div 
          className="absolute inset-4 rounded-lg opacity-20"
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(255, 179, 71, 0.3) 50%, transparent 70%)`,
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

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
              className="absolute inset-0 rounded-xl overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div 
                className="w-full h-full relative"
                style={{
                  background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 30%, #080808 70%, #050505 100%)",
                }}
              >
                {/* Subtle metallic sheen */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(232, 90, 0, 0.08) 50%, transparent 100%)`,
                  }}
                />
                
                {/* Radial glow behind logo */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at center 40%, rgba(255, 140, 0, 0.15) 0%, transparent 50%)`,
                  }}
                />
                
                {/* Premium double border with gradient */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `1.5px solid ${colors.primary}`,
                    opacity: 0.7,
                  }}
                />
                <div 
                  className="absolute inset-[3px] rounded-lg"
                  style={{
                    border: `0.5px solid ${colors.secondary}`,
                    opacity: 0.4,
                  }}
                />
                
                {/* Corner flourishes */}
                <div className="absolute top-2 left-2 w-4 h-4">
                  <div className="absolute top-0 left-0 w-full h-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute top-0 left-0 h-full w-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute top-0 left-0 w-1 h-1 rounded-full opacity-60" style={{ background: colors.highlight }} />
                </div>
                <div className="absolute top-2 right-2 w-4 h-4">
                  <div className="absolute top-0 right-0 w-full h-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute top-0 right-0 h-full w-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute top-0 right-0 w-1 h-1 rounded-full opacity-60" style={{ background: colors.highlight }} />
                </div>
                <div className="absolute bottom-2 left-2 w-4 h-4">
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute bottom-0 left-0 h-full w-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute bottom-0 left-0 w-1 h-1 rounded-full opacity-60" style={{ background: colors.highlight }} />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4">
                  <div className="absolute bottom-0 right-0 w-full h-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute bottom-0 right-0 h-full w-[1.5px] opacity-50" style={{ background: colors.primary }} />
                  <div className="absolute bottom-0 right-0 w-1 h-1 rounded-full opacity-60" style={{ background: colors.highlight }} />
                </div>
                
                {/* Content */}
                <div className="relative w-full h-full flex flex-col items-center justify-center py-4 px-4">
                  {/* Center content */}
                  <div className="flex flex-col items-center">
                    {/* Logo with glow ring */}
                    <div className="relative mb-3">
                      {/* Outer glow ring */}
                      <div 
                        className="absolute inset-[-12px] rounded-full"
                        style={{
                          background: `radial-gradient(circle, rgba(232, 90, 0, 0.15) 0%, transparent 70%)`,
                        }}
                      />
                      <div 
                        style={{
                          color: colors.primary,
                          filter: `drop-shadow(0 0 10px rgba(232, 90, 0, 0.4))`,
                        }}
                      >
                        <Logo size={52} />
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h2 
                      className="font-[var(--font-heading)] text-sm md:text-base tracking-[0.12em] text-center"
                      style={{
                        background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary}, ${colors.highlight})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {t("common.siteName").toUpperCase()}
                    </h2>
                    
                    {/* Primary Tagline */}
                    <p 
                      className="text-[9px] md:text-[10px] mt-1.5 tracking-[0.15em] italic"
                      style={{ color: `rgba(255, 140, 0, 0.85)` }}
                    >
                      {t("visitingCard.tagline")}
                    </p>
                    
                    {/* Divider with diamond */}
                    <div className="flex items-center gap-2 mt-4">
                      <div 
                        className="w-14 h-px"
                        style={{ background: `linear-gradient(90deg, transparent, ${colors.primary}80)` }}
                      />
                      <div 
                        className="w-1.5 h-1.5 rotate-45"
                        style={{ background: colors.highlight, opacity: 0.8 }}
                      />
                      <div 
                        className="w-14 h-px"
                        style={{ background: `linear-gradient(90deg, ${colors.primary}80, transparent)` }}
                      />
                    </div>
                    
                    {/* Secondary Tagline */}
                    <p 
                      className="text-[7px] md:text-[8px] tracking-[0.2em] mt-4"
                      style={{ color: `rgba(255, 179, 71, 0.65)` }}
                    >
                      {t("visitingCard.secondaryTagline")}
                    </p>
                  </div>
                  
                  {/* Hover hint */}
                  {interactive && (
                    <p 
                      className="text-[6px] tracking-wider uppercase mt-3 absolute bottom-3"
                      style={{ color: "rgba(160, 160, 160, 0.35)" }}
                    >
                      {t("common.hoverToViewDetails")}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ===== BACK SIDE ===== */}
            <div
              className="absolute inset-0 rounded-xl overflow-hidden"
              style={{ 
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <div 
                className="w-full h-full relative"
                style={{
                  background: "linear-gradient(145deg, #0d0d0d 0%, #0a0a0a 50%, #080808 100%)",
                }}
              >
                {/* Subtle metallic sheen */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(225deg, transparent 0%, rgba(232, 90, 0, 0.08) 50%, transparent 100%)`,
                  }}
                />
                
                {/* Premium border */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `1.5px solid rgba(232, 90, 0, 0.6)`,
                  }}
                />
                <div 
                  className="absolute inset-[3px] rounded-lg"
                  style={{
                    border: `0.5px solid rgba(139, 69, 19, 0.3)`,
                  }}
                />
                
                {/* Corner flourishes */}
                <div className="absolute top-2 left-2 w-3 h-3">
                  <div className="absolute top-0 left-0 w-full h-px opacity-30" style={{ background: colors.primary }} />
                  <div className="absolute top-0 left-0 h-full w-px opacity-30" style={{ background: colors.primary }} />
                </div>
                <div className="absolute top-2 right-2 w-3 h-3">
                  <div className="absolute top-0 right-0 w-full h-px opacity-30" style={{ background: colors.primary }} />
                  <div className="absolute top-0 right-0 h-full w-px opacity-30" style={{ background: colors.primary }} />
                </div>
                <div className="absolute bottom-2 left-2 w-3 h-3">
                  <div className="absolute bottom-0 left-0 w-full h-px opacity-30" style={{ background: colors.primary }} />
                  <div className="absolute bottom-0 left-0 h-full w-px opacity-30" style={{ background: colors.primary }} />
                </div>
                <div className="absolute bottom-2 right-2 w-3 h-3">
                  <div className="absolute bottom-0 right-0 w-full h-px opacity-30" style={{ background: colors.primary }} />
                  <div className="absolute bottom-0 right-0 h-full w-px opacity-30" style={{ background: colors.primary }} />
                </div>
                
                {/* Content */}
                <div className="relative w-full h-full p-4 flex flex-col justify-center">
                  {/* Contact Details */}
                  <div className="space-y-2 text-sm">
                    {/* Phone */}
                    <div className="flex items-center gap-2.5">
                      <Phone size={12} style={{ color: colors.primary }} />
                      <span className="text-xs" style={{ color: "#e8e8e8" }}>{CONTACT_INFO.phone}</span>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-2.5">
                      <Mail size={12} style={{ color: colors.primary }} />
                      <span className="text-xs" style={{ color: "#e8e8e8" }}>{CONTACT_INFO.email}</span>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                      <MapPin size={12} style={{ color: colors.primary }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-[10px] leading-relaxed" style={{ color: "#e8e8e8" }}>
                        {t("address.line1")}, {t("address.line2")}<br />
                        {t("address.city")} - {t("address.pincode")}
                      </span>
                    </div>
                    
                    {/* Divider */}
                    <div 
                      className="w-full h-px"
                      style={{ background: `rgba(232, 90, 0, 0.25)` }}
                    />
                    
                    {/* Hours */}
                    <div className="flex items-start gap-2.5">
                      <Clock size={12} style={{ color: colors.primary }} className="mt-0.5 flex-shrink-0" />
                      <div className="text-[10px] leading-relaxed" style={{ color: "#e8e8e8" }}>
                        <div><span style={{ color: colors.primaryLight }}>{t("visitingCard.consultation")}:</span> 10AM - 9PM IST</div>
                        <div><span style={{ color: colors.primaryLight }}>{t("visitingCard.calling")}:</span> 10AM - 6PM IST</div>
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
