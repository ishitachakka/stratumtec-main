import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLanguageFromPath, getLocalizedPath } from '@/lib/routeMap';
import { buildCrossDomainUrl, getCurrentDomain, getDefaultLanguageForDomain } from '@/lib/domains';

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

  // Domain-first language detection.
  // On dedicated language domains (e.g. stratumtec.com.co → Spanish) the domain
  // ALWAYS wins over URL path or any previously stored preference. We compute
  // this synchronously in the useState initializer so the very first render
  // already uses the correct language — no flicker.
  const [language, setLanguage] = useState<Language>(() => {
    const domain = getCurrentDomain();
    // Clear any stale stored language on dedicated-language domains so that
    // legacy values from earlier visits can never override the domain.
    if (typeof window !== 'undefined' && domain === 'spanish') {
      try {
        window.localStorage.removeItem('language');
        window.localStorage.removeItem('preferredLanguage');
        window.localStorage.removeItem('i18nextLng');
      } catch { /* ignore storage errors */ }
      return getDefaultLanguageForDomain();
    }
    return getLanguageFromPath(location.pathname);
  });

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
