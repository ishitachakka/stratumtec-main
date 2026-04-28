import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { CalendarPopup } from "@/components/CalendarPopup";
import { Language } from "@/lib/translations";
import { routeTable } from "@/lib/routeMap";
import { getAvailableLanguages } from "@/lib/domains";
import flagBr from "@/assets/flag-br.png";
import flagUs from "@/assets/flag-us.png";
import flagCo from "@/assets/flag-co.png";

interface DropdownNavItem {
  label: string;
  items: { label: string; href?: string }[];
}

interface SimpleNavItem {
  label: string;
  href: string;
}

type NavItem = DropdownNavItem | SimpleNavItem;

function isDropdown(item: NavItem): item is DropdownNavItem {
  return "items" in item;
}

const DropdownMenu = ({ item }: { item: DropdownNavItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-base font-medium text-stratumtec-text hover:text-stratumtec-orange transition-fast"
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 min-w-[320px] bg-popover border border-border rounded-md shadow-lg py-1 z-50">
          {item.items.map((sub) =>
            sub.href ? (
              <Link
                key={sub.label}
                to={sub.href}
                className="block w-full text-left px-4 py-2.5 text-sm text-stratumtec-text hover:bg-accent hover:text-stratumtec-orange transition-colors"
                onClick={() => setOpen(false)}
              >
                {sub.label}
              </Link>
            ) : (
              <button
                key={sub.label}
                className="block w-full text-left px-4 py-2.5 text-sm text-stratumtec-text hover:bg-accent hover:text-stratumtec-orange transition-colors"
                onClick={() => setOpen(false)}
              >
                {sub.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const { t, language, switchLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRoutes: Record<Language, { about: string; contact: string }> = {
    en: { about: routeTable.company.en, contact: routeTable.contact.en },
    pt: { about: routeTable.company.pt, contact: routeTable.contact.pt },
    es: { about: routeTable.company.es, contact: routeTable.contact.es },
  };

  const solutionLinks: Record<number, string> = {
    0: routeTable.solDataIntegration[language],
    1: routeTable.solLeadManagement[language],
    2: routeTable.solServiceAutomation[language],
    3: routeTable.solAIAgents[language],
    4: routeTable.solOmnichannel[language],
    5: routeTable.solOperationalMonitoring[language],
    6: routeTable.solSpeechAnalytics[language],
  };

  const platformLinks: Record<number, string> = {
    0: routeTable.platStratumHub[language],
    1: routeTable.platBlueMesh[language],
  };

  const serviceLinks: Record<number, string> = {
    0: routeTable.svcSystemsIntegration[language],
    1: routeTable.svcOperationalAdaptation[language],
    2: routeTable.svcOngoingOperation[language],
    3: routeTable.svcTechnicalConsulting[language],
  };

  const navigationItems: NavItem[] = [
    { label: t.nav.solutions, items: t.nav.solutionsDropdown.map((s: string, i: number) => ({ label: s, href: solutionLinks[i] })) },
    { label: t.nav.platforms, items: t.nav.platformsDropdown.map((s: string, i: number) => ({ label: s, href: platformLinks[i] })) },
    { label: t.nav.services, items: t.nav.servicesDropdown.map((s: string, i: number) => ({ label: s, href: serviceLinks[i] })) },
    { label: t.nav.about, href: navRoutes[language].about },
    { label: t.nav.contact, href: navRoutes[language].contact },
  ];

  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allLanguageOptions: { lang: Language; flag: string; alt: string }[] = [
    { lang: "en", flag: flagUs, alt: "English" },
    { lang: "pt", flag: flagBr, alt: "Português" },
    { lang: "es", flag: flagCo, alt: "Español" },
  ];

  // Filter dropdown choices based on current domain.
  // Always include the current language so the active flag still renders.
  const availableLangs = getAvailableLanguages();
  const languageOptions = allLanguageOptions.filter(
    (o) => availableLangs.includes(o.lang) || o.lang === language
  );

  const currentLang =
    allLanguageOptions.find((o) => o.lang === language) || allLanguageOptions[0];

  const handleLanguageChange = (lang: Language) => {
    switchLanguage(lang);
    setIsLangOpen(false);
  };

  // Mobile: expand/collapse state per dropdown
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to={routeTable.home[language]}
              onClick={() => {
                setIsMenuOpen(false);
                setIsLangOpen(false);
              }}
            >
              <img
                src="/lovable-uploads/2cfa7eb9-c064-42b8-b3ce-a4793be73521.png"
                alt="StratumTec"
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) =>
              isDropdown(item) ? (
                <DropdownMenu key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-base font-medium text-stratumtec-text hover:text-stratumtec-orange transition-fast relative group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-stratumtec-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 p-1.5 rounded-md hover:bg-muted transition-colors"
              >
                <img src={currentLang.flag} alt={currentLang.alt} className="w-8 h-6 object-cover rounded" />
                <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-12 bg-popover border border-border rounded-md shadow-lg py-1 z-50">
                  {languageOptions
                    .filter((o) => o.lang !== language)
                    .map((option) => (
                      <button
                        key={option.lang}
                        className="flex items-center justify-center w-full px-2 py-2 hover:bg-accent transition-colors"
                        onClick={() => handleLanguageChange(option.lang)}
                      >
                        <img src={option.flag} alt={option.alt} className="w-8 h-6 object-cover rounded" />
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <CalendarPopup
              trigger={
                <Button className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-medium px-4 py-2 md:px-6 md:py-3 text-sm md:text-base transition-fast">
                  {t.nav.scheduleCall}
                </Button>
              }
              triggerAsChild
            />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navigationItems.map((item, idx) =>
                isDropdown(item) ? (
                  <div key={item.label}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-fast"
                      onClick={() => setMobileOpenIdx(mobileOpenIdx === idx ? null : idx)}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenIdx === idx ? "rotate-180" : ""}`} />
                    </button>
                    {mobileOpenIdx === idx && (
                      <div className="pl-6 space-y-1">
                        {item.items.map((sub) =>
                          sub.href ? (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="block w-full text-left px-4 py-2 text-sm text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            <button
                              key={sub.label}
                              className="block w-full text-left px-4 py-2 text-sm text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-3 text-base font-medium text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-fast"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Mobile Language Selector */}
              <div className="flex gap-2 px-4 pt-4 border-t border-border/20">
                {languageOptions.map((option) => (
                  <button
                    key={option.lang}
                    className={`p-2 rounded-md transition-colors ${
                      language === option.lang ? "bg-accent ring-2 ring-stratumtec-orange" : "hover:bg-accent"
                    }`}
                    onClick={() => {
                      handleLanguageChange(option.lang);
                      setIsMenuOpen(false);
                    }}
                  >
                    <img src={option.flag} alt={option.alt} className="w-8 h-6 object-cover rounded" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
