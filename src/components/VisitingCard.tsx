"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

interface VisitingCardProps {
  interactive?: boolean;
}

export default function VisitingCard({ interactive = true }: VisitingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Premium Aura Container */}
      <div className="relative p-6">
        {/* Outer glow layers - Amex Black style */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-40 blur-2xl"
          style={{
            background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.4) 0%, transparent 70%)",
          }}
        />
        <div 
          className="absolute inset-2 rounded-xl opacity-30 blur-xl"
          style={{
            background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.3) 0%, transparent 60%)",
          }}
        />
        
        {/* Animated shimmer effect */}
        <motion.div 
          className="absolute inset-4 rounded-lg opacity-20"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.3) 50%, transparent 70%)",
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
              ease: [0.23, 1, 0.32, 1], // Premium easing
            }}
          >
            {/* Front Side */}
            <div
              className="absolute inset-0 rounded-xl overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Card background with subtle texture */}
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
                    background: "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)",
                  }}
                />
                
                {/* Premium gold border */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: "1px solid rgba(212, 175, 55, 0.6)",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.5), 0 0 1px rgba(212, 175, 55, 0.5)",
                  }}
                />
                
                {/* Content */}
                <div className="relative w-full h-full p-6 flex flex-col justify-center items-center">
                  {/* Logo with subtle glow */}
                  <div 
                    className="text-[var(--gold)] mb-3"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))",
                    }}
                  >
                    <Logo size={52} />
                  </div>
                  
                  {/* Name with embossed effect */}
                  <h2 
                    className="font-[var(--font-heading)] text-lg md:text-xl tracking-[0.15em] text-center"
                    style={{
                      color: "#d4af37",
                      textShadow: "0 0 20px rgba(212, 175, 55, 0.2)",
                    }}
                  >
                    {SITE_CONFIG.name}
                  </h2>
                  
                  {/* Tagline */}
                  <p 
                    className="text-xs mt-2 tracking-[0.25em] uppercase"
                    style={{ color: "rgba(212, 175, 55, 0.7)" }}
                  >
                    Vedic Astrologer
                  </p>
                  
                  {/* Elegant divider */}
                  <div 
                    className="w-20 h-px mt-4"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)",
                    }}
                  />
                  
                  {/* Hover hint */}
                  {interactive && (
                    <p 
                      className="absolute bottom-3 text-[9px] tracking-wider uppercase"
                      style={{ color: "rgba(160, 160, 160, 0.4)" }}
                    >
                      Hover to view details
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Back Side */}
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
                    background: "linear-gradient(225deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)",
                  }}
                />
                
                {/* Premium gold border */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: "1px solid rgba(212, 175, 55, 0.6)",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.5), 0 0 1px rgba(212, 175, 55, 0.5)",
                  }}
                />
                
                {/* Content */}
                <div className="relative w-full h-full p-5 flex flex-col justify-center">
                  {/* Contact Details */}
                  <div className="space-y-2.5 text-sm">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone size={13} style={{ color: "#d4af37" }} />
                      <span style={{ color: "#e8e8e8" }}>{CONTACT_INFO.phone}</span>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <Mail size={13} style={{ color: "#d4af37" }} />
                      <span style={{ color: "#e8e8e8" }}>{CONTACT_INFO.email}</span>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin size={13} style={{ color: "#d4af37" }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-xs leading-relaxed" style={{ color: "#e8e8e8" }}>
                        {CONTACT_INFO.address.line1}, {CONTACT_INFO.address.line2}<br />
                        {CONTACT_INFO.address.city} - {CONTACT_INFO.address.pincode}
                      </span>
                    </div>
                    
                    {/* Divider */}
                    <div 
                      className="w-full h-px my-1"
                      style={{ background: "rgba(212, 175, 55, 0.2)" }}
                    />
                    
                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock size={13} style={{ color: "#d4af37" }} className="mt-0.5 flex-shrink-0" />
                      <div className="text-xs leading-relaxed" style={{ color: "#e8e8e8" }}>
                        <div><span style={{ color: "#d4af37" }}>Consultation:</span> 10AM - 9PM</div>
                        <div><span style={{ color: "#d4af37" }}>Calling:</span> 10AM - 6PM</div>
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
