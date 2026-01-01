"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

// Import translation files
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";

export type Locale = "en" | "hi";

interface TranslationObject {
  [key: string]: TranslationValue;
}

type TranslationValue = string | number | string[] | TranslationObject | TranslationObject[];

type Translations = TranslationObject;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  tRaw: <T = TranslationValue>(key: string) => T;
  translations: Translations;
}

const translations: Record<Locale, Translations> = {
  en: en as Translations,
  hi: hi as Translations,
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
    if (savedLocale && ["en", "hi"].includes(savedLocale)) {
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

  // Helper function to get raw translation value by key
  const getTranslationValue = useCallback(
    (key: string, targetLocale: Locale): TranslationValue | undefined => {
      const keys = key.split(".");
      let value: TranslationValue = translations[targetLocale];

      for (const k of keys) {
        if (value && typeof value === "object" && !Array.isArray(value) && k in value) {
          value = value[k];
        } else {
          return undefined;
        }
      }
      return value;
    },
    []
  );

  // Translation function with nested key support (e.g., "nav.home")
  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      let value = getTranslationValue(key, locale);

      // Fallback to English if not found
      if (value === undefined) {
        value = getTranslationValue(key, "en");
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
    [locale, getTranslationValue]
  );

  // Raw translation function that returns any value type (arrays, objects, etc.)
  const tRaw = useCallback(
    <T = TranslationValue,>(key: string): T => {
      let value = getTranslationValue(key, locale);

      // Fallback to English if not found
      if (value === undefined) {
        value = getTranslationValue(key, "en");
      }

      return value as T;
    },
    [locale, getTranslationValue]
  );

  // Helper for non-hydrated state
  const getValueForKey = (key: string): TranslationValue | undefined => {
    const keys = key.split(".");
    let value: TranslationValue = translations.en;
    for (const k of keys) {
      if (value && typeof value === "object" && !Array.isArray(value) && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }
    return value;
  };

  // Prevent hydration mismatch by rendering children only after hydration
  if (!isHydrated) {
    return (
      <LanguageContext.Provider
        value={{
          locale: "en",
          setLocale,
          t: (key: string) => {
            const value = getValueForKey(key);
            return typeof value === "string" ? value : key;
          },
          tRaw: <T = TranslationValue,>(key: string): T => {
            return getValueForKey(key) as T;
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
        tRaw,
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
];
