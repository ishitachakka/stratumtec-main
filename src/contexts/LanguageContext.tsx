import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';
import { useLocation } from 'react-router-dom';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider = ({ children, defaultLanguage = 'en' }: LanguageProviderProps) => {
  const location = useLocation();
  
  const ptRoutes = ['/empresa', '/solucoes', '/consultoria', '/contato', '/blog/futuro-ia-cx'];
  const getLanguageFromPath = (pathname: string): Language => {
    if (pathname.startsWith('/pt') || ptRoutes.some(r => pathname === r)) return 'pt';
    if (pathname.startsWith('/es')) return 'es';
    return defaultLanguage;
  };

  const [language, setLanguage] = useState<Language>(getLanguageFromPath(location.pathname));

  useEffect(() => {
    setLanguage(getLanguageFromPath(location.pathname));
  }, [location.pathname]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
