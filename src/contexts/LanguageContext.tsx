import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLanguageFromPath, getLocalizedPath } from '@/lib/routeMap';
import { buildCrossDomainUrl } from '@/lib/domains';

interface LanguageContextType {
  language: Language;
  switchLanguage: (lang: Language) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [language, setLanguage] = useState<Language>(getLanguageFromPath(location.pathname));

  // Keep language in sync when URL changes (back/forward, direct navigation)
  useEffect(() => {
    setLanguage(getLanguageFromPath(location.pathname));
  }, [location.pathname]);

  // Switch language AND navigate to the equivalent localized route
  const switchLanguage = (lang: Language) => {
    if (lang === language) return;
    const targetPath = getLocalizedPath(location.pathname, lang);
    // If target language lives on a different domain, do a full redirect.
    const crossDomainUrl = buildCrossDomainUrl(lang, targetPath);
    if (crossDomainUrl) {
      window.location.href = crossDomainUrl;
      return;
    }
    navigate(targetPath);
    // language state will update via the useEffect above
  };

  const value = {
    language,
    switchLanguage,
    t: translations[language],
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
