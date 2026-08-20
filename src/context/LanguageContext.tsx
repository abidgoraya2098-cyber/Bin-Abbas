import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "../types";

interface LanguageContextType {
  language: Language;
  isUrdu: boolean;
  toggleLanguage: () => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ur");

  useEffect(() => {
    const saved = localStorage.getItem("bin_abbas_hc_lang");
    if (saved === "en" || saved === "ur") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const next = language === "ur" ? "en" : "ur";
    setLanguage(next);
    localStorage.setItem("bin_abbas_hc_lang", next);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isUrdu: language === "ur",
        toggleLanguage,
        dir: language === "ur" ? "rtl" : "ltr"
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
