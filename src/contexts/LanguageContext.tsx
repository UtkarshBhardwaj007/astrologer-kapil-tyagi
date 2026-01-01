"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

// Import translation files
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";
import de from "@/locales/de.json";

export type Locale = "en" | "hi" | "de";

interface Translations {
  [key: string]: string | Translations;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  translations: Translations;
}

const translations: Record<Locale, Translations> = {
  en: en as Translations,
  hi: hi as Translations,
  de: de as Translations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preferred-language";

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (savedLocale && ["en", "hi", "de"].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
    setIsHydrated(true);
  }, []);

  // Update localStorage and html lang attribute when locale changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale;
    }
  }, [locale, isHydrated]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  // Translation function with nested key support (e.g., "nav.home")
  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const keys = key.split(".");
      let value: string | Translations = translations[locale];

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          // Fallback to English if key not found
          let fallback: string | Translations = translations.en;
          for (const fk of keys) {
            if (fallback && typeof fallback === "object" && fk in fallback) {
              fallback = fallback[fk];
            } else {
              return key; // Return key if not found in fallback either
            }
          }
          value = fallback;
          break;
        }
      }

      if (typeof value !== "string") {
        return key; // Return key if final value is not a string
      }

      // Replace parameters like {years}, {count}, etc.
      if (params) {
        let result = value;
        for (const [paramKey, paramValue] of Object.entries(params)) {
          result = result.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(paramValue));
        }
        return result;
      }

      return value;
    },
    [locale]
  );

  // Prevent hydration mismatch by rendering children only after hydration
  if (!isHydrated) {
    return (
      <LanguageContext.Provider
        value={{
          locale: "en",
          setLocale,
          t: (key: string) => {
            const keys = key.split(".");
            let value: string | Translations = translations.en;
            for (const k of keys) {
              if (value && typeof value === "object" && k in value) {
                value = value[k];
              } else {
                return key;
              }
            }
            return typeof value === "string" ? value : key;
          },
          translations: translations.en,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        translations: translations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Export locale options for use in components
export const LOCALE_OPTIONS: { value: Locale; label: string; nativeLabel: string }[] = [
  { value: "en", label: "English", nativeLabel: "English" },
  { value: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { value: "de", label: "German", nativeLabel: "Deutsch" },
];

