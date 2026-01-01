"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, LOCALE_OPTIONS, Locale } from "@/contexts/LanguageContext";

interface LanguageSelectorProps {
  variant?: "default" | "compact";
}

export default function LanguageSelector({ variant = "default" }: LanguageSelectorProps) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLocale = LOCALE_OPTIONS.find((opt) => opt.value === locale);

  const handleSelect = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-1.5 transition-all duration-300
          ${variant === "compact" 
            ? "px-2 py-1 text-xs rounded border border-[var(--gold-muted)] bg-[var(--gold-muted)]/20 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10" 
            : "px-3 py-1.5 text-sm rounded-full border border-[var(--gold-muted)] bg-[var(--background-secondary)] hover:border-[var(--gold)] hover:bg-[var(--gold-muted)]"
          }
        `}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe size={variant === "compact" ? 12 : 14} className="text-[var(--gold)]" />
        <span className="text-[var(--foreground-muted)] group-hover:text-[var(--gold-light)] font-medium tracking-wide">
          {currentLocale?.value.toUpperCase()}
        </span>
        <ChevronDown 
          size={variant === "compact" ? 10 : 12} 
          className={`text-[var(--gold)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-40 bg-[var(--background-secondary)] border border-[var(--gold-muted)] rounded-lg shadow-xl overflow-hidden z-[100]"
          >
            {/* Premium header */}
            <div className="px-3 py-2 border-b border-[var(--gold-muted)] bg-[var(--background)]">
              <span className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider">
                Language
              </span>
            </div>
            
            <div className="py-1">
              {LOCALE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`
                    w-full px-3 py-2 flex items-center justify-between text-sm transition-colors
                    ${locale === option.value 
                      ? "bg-[var(--gold-muted)] text-[var(--gold)]" 
                      : "text-[var(--foreground-muted)] hover:bg-[var(--gold-muted)]/50 hover:text-[var(--foreground)]"
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-xs font-medium text-[var(--gold)] uppercase">
                      {option.value}
                    </span>
                    <span>{option.nativeLabel}</span>
                  </div>
                  {locale === option.value && (
                    <Check size={14} className="text-[var(--gold)]" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

