"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";
import { CONTACT_INFO } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

interface VisitingCardProps {
  interactive?: boolean;
}

// Elite Red & Gold color palette - premium and luxurious
const colors = {
  // Rich dark backgrounds
  richBlack: "#0D0A0B",
  darkMaroon: "#1A0A0D",
  deepBurgundy: "#2D0F16",
  
  // Premium reds
  imperialRed: "#C41E3A",
  crimson: "#9B1B30",
  rubyRed: "#A91B0D",
  
  // Luxurious golds
  brilliantGold: "#FFD700",
  richGold: "#D4AF37",
  champagneGold: "#F7E7CE",
  antiqueGold: "#CFB53B",
  
  // Accent metallics
  roseGold: "#B76E79",
  bronze: "#CD7F32",
  
  // Text
  ivory: "#FFFFF0",
  pearl: "#F5F5F0",
};

export default function VisitingCard({ interactive = true }: VisitingCardProps) {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Premium glow effect container */}
      <div className="relative p-4">
        {/* Ambient glow */}
        <div 
          className="absolute inset-0 blur-2xl opacity-40 rounded-3xl"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.richGold}30 0%, ${colors.imperialRed}20 50%, transparent 70%)`,
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
              style={{ 
                backfaceVisibility: "hidden",
                boxShadow: `0 10px 40px -10px ${colors.richBlack}80, 0 0 20px ${colors.richGold}20`,
              }}
            >
              <div 
                className="w-full h-full relative"
                style={{
                  background: `linear-gradient(145deg, ${colors.darkMaroon} 0%, ${colors.richBlack} 40%, ${colors.deepBurgundy} 100%)`,
                }}
              >
                {/* Shimmering overlay */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(125deg, transparent 0%, ${colors.richGold}15 25%, transparent 50%, ${colors.brilliantGold}10 75%, transparent 100%)`,
                  }}
                />
                
                {/* Premium gold double border */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `2px solid ${colors.richGold}`,
                    boxShadow: `inset 0 0 20px ${colors.richGold}15`,
                  }}
                />
                <div 
                  className="absolute inset-[5px] rounded-lg"
                  style={{
                    border: `1px solid ${colors.antiqueGold}40`,
                  }}
                />
                
                {/* Corner flourishes - elegant gold lines */}
                <div className="absolute top-3 left-3 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                  <div className="absolute top-0 left-0 h-full w-[2px]" style={{ background: `linear-gradient(180deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                </div>
                <div className="absolute top-3 right-3 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-[2px]" style={{ background: `linear-gradient(270deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                  <div className="absolute top-0 right-0 h-full w-[2px]" style={{ background: `linear-gradient(180deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                </div>
                <div className="absolute bottom-3 left-3 w-8 h-8">
                  <div className="absolute bottom-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                  <div className="absolute bottom-0 left-0 h-full w-[2px]" style={{ background: `linear-gradient(0deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-full h-[2px]" style={{ background: `linear-gradient(270deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                  <div className="absolute bottom-0 right-0 h-full w-[2px]" style={{ background: `linear-gradient(0deg, ${colors.brilliantGold}, ${colors.richGold}50, transparent)` }} />
                </div>
                
                {/* Content */}
                <div className="relative w-full h-full flex flex-col items-center justify-center py-4 px-4">
                  {/* Center content */}
                  <div className="flex flex-col items-center">
                    {/* Logo with golden glow */}
                    <div 
                      className="mb-3"
                      style={{ 
                        color: colors.richGold,
                        filter: `drop-shadow(0 0 8px ${colors.richGold}50)`,
                      }}
                    >
                      <Logo size={52} />
                    </div>
                    
                    {/* Name with gold gradient text */}
                    <h2 
                      className="font-[var(--font-heading)] text-sm md:text-base tracking-[0.18em] text-center font-bold"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.champagneGold} 0%, ${colors.brilliantGold} 50%, ${colors.antiqueGold} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: `0 0 30px ${colors.richGold}30`,
                      }}
                    >
                      {t("common.siteName").toUpperCase()}
                    </h2>
                    
                    {/* Primary Tagline */}
                    <p 
                      className="text-[9px] md:text-[10px] mt-1.5 tracking-[0.12em] italic font-medium"
                      style={{ color: colors.roseGold }}
                    >
                      {t("visitingCard.tagline")}
                    </p>
                    
                    {/* Elegant gold divider */}
                    <div className="flex items-center gap-3 mt-4">
                      <div 
                        className="w-14 h-[1.5px]"
                        style={{ background: `linear-gradient(90deg, transparent, ${colors.richGold})` }}
                      />
                      <div 
                        className="w-2.5 h-2.5 rotate-45"
                        style={{ 
                          background: `linear-gradient(135deg, ${colors.brilliantGold}, ${colors.antiqueGold})`,
                          boxShadow: `0 0 6px ${colors.brilliantGold}60`,
                        }}
                      />
                      <div 
                        className="w-14 h-[1.5px]"
                        style={{ background: `linear-gradient(90deg, ${colors.richGold}, transparent)` }}
                      />
                    </div>
                    
                    {/* Secondary Tagline */}
                    <p 
                      className="text-[7px] md:text-[8px] tracking-[0.2em] mt-4 font-medium uppercase"
                      style={{ color: colors.bronze }}
                    >
                      {t("visitingCard.secondaryTagline")}
                    </p>
                  </div>
                  
                  {/* Hover hint */}
                  {interactive && (
                    <p 
                      className="text-[6px] tracking-wider uppercase mt-3 absolute bottom-3"
                      style={{ color: colors.antiqueGold, opacity: 0.5 }}
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
                transform: "rotateY(180deg)",
                boxShadow: `0 10px 40px -10px ${colors.richBlack}80, 0 0 20px ${colors.richGold}20`,
              }}
            >
              <div 
                className="w-full h-full relative"
                style={{
                  background: `linear-gradient(145deg, ${colors.deepBurgundy} 0%, ${colors.richBlack} 50%, ${colors.darkMaroon} 100%)`,
                }}
              >
                {/* Shimmering overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(125deg, transparent 0%, ${colors.richGold}15 30%, transparent 60%, ${colors.brilliantGold}10 80%, transparent 100%)`,
                  }}
                />
                
                {/* Premium gold border */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `2px solid ${colors.richGold}`,
                    boxShadow: `inset 0 0 20px ${colors.richGold}15`,
                  }}
                />
                <div 
                  className="absolute inset-[5px] rounded-lg"
                  style={{
                    border: `1px solid ${colors.antiqueGold}40`,
                  }}
                />
                
                {/* Corner flourishes */}
                <div className="absolute top-3 left-3 w-5 h-5">
                  <div className="absolute top-0 left-0 w-full h-[1.5px]" style={{ background: `linear-gradient(90deg, ${colors.brilliantGold}, transparent)` }} />
                  <div className="absolute top-0 left-0 h-full w-[1.5px]" style={{ background: `linear-gradient(180deg, ${colors.brilliantGold}, transparent)` }} />
                </div>
                <div className="absolute top-3 right-3 w-5 h-5">
                  <div className="absolute top-0 right-0 w-full h-[1.5px]" style={{ background: `linear-gradient(270deg, ${colors.brilliantGold}, transparent)` }} />
                  <div className="absolute top-0 right-0 h-full w-[1.5px]" style={{ background: `linear-gradient(180deg, ${colors.brilliantGold}, transparent)` }} />
                </div>
                <div className="absolute bottom-3 left-3 w-5 h-5">
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px]" style={{ background: `linear-gradient(90deg, ${colors.brilliantGold}, transparent)` }} />
                  <div className="absolute bottom-0 left-0 h-full w-[1.5px]" style={{ background: `linear-gradient(0deg, ${colors.brilliantGold}, transparent)` }} />
                </div>
                <div className="absolute bottom-3 right-3 w-5 h-5">
                  <div className="absolute bottom-0 right-0 w-full h-[1.5px]" style={{ background: `linear-gradient(270deg, ${colors.brilliantGold}, transparent)` }} />
                  <div className="absolute bottom-0 right-0 h-full w-[1.5px]" style={{ background: `linear-gradient(0deg, ${colors.brilliantGold}, transparent)` }} />
                </div>
                
                {/* Content - Two column layout */}
                <div className="relative w-full h-full p-4 flex">
                  {/* Left side - Contact Details */}
                  <div className="flex-1 flex flex-col justify-center pr-3 space-y-2">
                    {/* Phone */}
                    <div className="flex items-center gap-2.5">
                      <Phone size={12} style={{ color: colors.richGold }} />
                      <span className="text-[10px] font-medium" style={{ color: colors.pearl }}>{CONTACT_INFO.phone}</span>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-2.5">
                      <Mail size={12} style={{ color: colors.richGold }} />
                      <span className="text-[10px] font-medium" style={{ color: colors.pearl }}>{CONTACT_INFO.email}</span>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                      <MapPin size={12} style={{ color: colors.richGold }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-[9px] leading-relaxed" style={{ color: colors.champagneGold }}>
                        {t("address.line1")}, {t("address.line2")}<br />
                        {t("address.city")} - {t("address.pincode")}
                      </span>
                    </div>
                    
                    {/* Elegant divider */}
                    <div 
                      className="w-full h-[1px]"
                      style={{ background: `linear-gradient(90deg, ${colors.richGold}, ${colors.antiqueGold}50, transparent)` }}
                    />
                    
                    {/* Hours */}
                    <div className="flex items-start gap-2.5">
                      <Clock size={12} style={{ color: colors.richGold }} className="mt-0.5 flex-shrink-0" />
                      <div className="text-[9px] leading-relaxed" style={{ color: colors.champagneGold }}>
                        <div><span style={{ color: colors.brilliantGold }} className="font-medium">{t("visitingCard.consultation")}:</span> 10AM - 9PM</div>
                        <div><span style={{ color: colors.brilliantGold }} className="font-medium">{t("visitingCard.calling")}:</span> 10AM - 6PM</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vertical separator */}
                  <div 
                    className="w-[1px] h-full my-auto"
                    style={{ 
                      background: `linear-gradient(180deg, transparent, ${colors.richGold}60, ${colors.antiqueGold}40, transparent)`,
                    }}
                  />
                  
                  {/* Right side - QR Code */}
                  <div className="flex flex-col items-center justify-center pl-3" style={{ width: "38%" }}>
                    {/* QR Code container with premium styling */}
                    <div 
                      className="relative rounded-lg p-1.5 bg-white"
                      style={{
                        boxShadow: `0 0 15px ${colors.richGold}30, inset 0 0 5px ${colors.antiqueGold}20`,
                        border: `1px solid ${colors.richGold}60`,
                      }}
                    >
                      <Image
                        src="/images/directions.jpeg"
                        alt="Scan for directions"
                        width={72}
                        height={72}
                        className="rounded"
                        style={{ display: "block" }}
                      />
                    </div>
                    
                    {/* QR Code label */}
                    <div className="flex items-center gap-1 mt-2">
                      <Navigation size={8} style={{ color: colors.richGold }} />
                      <span 
                        className="text-[7px] tracking-wider uppercase font-medium"
                        style={{ color: colors.antiqueGold }}
                      >
                        {t("visitingCard.scanForDirections") || "Scan for Directions"}
                      </span>
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
