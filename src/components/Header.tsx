import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { CalendarPopup } from "@/components/CalendarPopup";
import { Language } from "@/lib/translations";
import { routeTable } from "@/lib/routeMap";
import { getSolutions } from "@/data/solutions";
import { getPlatforms } from "@/data/platforms";
import { getServices } from "@/data/services";
import { solutionRoutes, SolutionSlug } from "@/data/solutions";
import { platformRoutes, PlatformSlug } from "@/data/platforms";
import { serviceRoutes, ServiceSlug } from "@/data/services";
import flagBr from "@/assets/flag-br.png";
import flagUs from "@/assets/flag-us.png";
import flagCo from "@/assets/flag-co.png";

interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdown {
  label: string;
  items: MegaMenuItem[];
  href?: string; // link for the parent itself (overview page)
}

export const Header = () => {
  const { t, language, switchLanguage } = useLanguage();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  const navLabels: Record<Language, { solutions: string; platforms: string; services: string; about: string; content: string; contact: string }> = {
    pt: { solutions: 'Soluções', platforms: 'Plataformas', services: 'Serviços', about: 'Sobre', content: 'Conteúdo', contact: 'Contato' },
    en: { solutions: 'Solutions', platforms: 'Platforms', services: 'Services', about: 'About', content: 'Insights', contact: 'Contact' },
    es: { solutions: 'Soluciones', platforms: 'Plataformas', services: 'Servicios', about: 'Empresa', content: 'Contenido', contact: 'Contacto' },
  };
  const labels = navLabels[language];

  const solutions = getSolutions(language);
  const platforms = getPlatforms(language);
  const services = getServices(language);

  const dropdowns: NavDropdown[] = [
    {
      label: labels.solutions,
      href: routeTable.solutions[language],
      items: solutions.map(s => ({
        label: s.shortDescription,
        href: solutionRoutes[s.slug as SolutionSlug][language],
      })),
    },
    {
      label: labels.platforms,
      href: routeTable.platforms[language],
      items: platforms.map(p => ({
        label: p.name,
        href: platformRoutes[p.slug as PlatformSlug][language],
        description: p.tagline,
      })),
    },
    {
      label: labels.services,
      href: routeTable.services[language],
      items: services.map(s => ({
        label: s.title,
        href: serviceRoutes[s.slug as ServiceSlug][language],
        description: s.shortDescription,
      })),
    },
  ];

  const simpleLinks = [
    { label: labels.about, href: routeTable.company[language] },
    { label: labels.content, href: routeTable.blog[language] },
    { label: labels.contact, href: routeTable.contact[language] },
  ];

  // Language dropdown
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageOptions: { lang: Language; flag: string; alt: string }[] = [
    { lang: 'en', flag: flagUs, alt: 'English' },
    { lang: 'pt', flag: flagBr, alt: 'Português' },
    { lang: 'es', flag: flagCo, alt: 'Español' },
  ];
  const currentLang = languageOptions.find(o => o.lang === language) || languageOptions[0];

  const handleLanguageChange = (lang: Language) => {
    switchLanguage(lang);
    setIsLangOpen(false);
  };

  const handleDropdownEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  // Mobile accordion state
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to={routeTable.home[language]}
              onClick={() => { setIsMenuOpen(false); setIsLangOpen(false); }}
            >
              <img
                src="/lovable-uploads/2cfa7eb9-c064-42b8-b3ce-a4793be73521.png"
                alt="StratumTec"
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Dropdown menus */}
            {dropdowns.map((dd) => (
              <div
                key={dd.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(dd.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center text-base font-medium text-foreground hover:text-primary transition-fast"
                  onClick={() => dd.href && navigate(dd.href)}
                >
                  {dd.label}
                  <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${openDropdown === dd.label ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === dd.label && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                    onMouseEnter={() => handleDropdownEnter(dd.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="bg-popover border border-border rounded-xl shadow-elevated p-4 min-w-[320px] max-w-[520px]">
                      <div className={`grid gap-1 ${dd.items.length > 4 ? 'grid-cols-1' : 'grid-cols-1'}`}>
                        {dd.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                      {dd.href && (
                        <div className="border-t border-border mt-2 pt-2">
                          <Link
                            to={dd.href}
                            className="block px-3 py-2 text-sm font-medium text-primary hover:bg-muted rounded-lg transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {labels.solutions === dd.label ? (language === 'pt' ? 'Ver todas →' : language === 'es' ? 'Ver todas →' : 'View all →')
                              : language === 'pt' ? 'Ver todos →' : language === 'es' ? 'Ver todos →' : 'View all →'}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Simple links */}
            {simpleLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-base font-medium text-foreground hover:text-primary transition-fast relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
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
                <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-12 bg-popover border border-border rounded-md shadow-lg py-1 z-50">
                  {languageOptions.filter(o => o.lang !== language).map((option) => (
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
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 md:px-6 md:py-3 text-sm md:text-base transition-fast">
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
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md max-h-[80vh] overflow-y-auto">
            <div className="py-4 space-y-1">
              {/* Dropdown sections */}
              {dropdowns.map((dd) => (
                <div key={dd.label}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-fast"
                    onClick={() => setMobileOpen(mobileOpen === dd.label ? null : dd.label)}
                  >
                    {dd.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpen === dd.label ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileOpen === dd.label && (
                    <div className="pl-6 pb-2 space-y-1">
                      {dd.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Simple links */}
              {simpleLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-fast"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="flex gap-2 px-4 pt-4 border-t border-border/20">
                {languageOptions.map((option) => (
                  <button
                    key={option.lang}
                    className={`p-2 rounded-md transition-colors ${
                      language === option.lang ? 'bg-accent ring-2 ring-primary' : 'hover:bg-accent'
                    }`}
                    onClick={() => { handleLanguageChange(option.lang); setIsMenuOpen(false); }}
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
