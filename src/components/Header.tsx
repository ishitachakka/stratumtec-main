import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { CalendarPopup } from "@/components/CalendarPopup";
import { Language } from "@/lib/translations";
import { routeTable, solutionAnchors, platformAnchors, serviceAnchors } from "@/lib/routeMap";
import flagBr from "@/assets/flag-br.png";
import flagUs from "@/assets/flag-us.png";
import flagCo from "@/assets/flag-co.png";

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

export const Header = () => {
  const { t, language, switchLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const solutionsBase = routeTable.solutions[language];
  const consultingBase = routeTable.consulting[language];

  const navigationItems: NavItem[] = [
    {
      label: t.nav.solutions,
      href: solutionsBase,
      dropdown: t.nav.solutionsDropdown.map((label: string, i: number) => ({
        label,
        href: `${solutionsBase}#${solutionAnchors[i]}`,
      })),
    },
    {
      label: t.nav.platforms,
      href: solutionsBase,
      dropdown: t.nav.platformsDropdown.map((label: string, i: number) => ({
        label,
        href: `${solutionsBase}#${platformAnchors[i]}`,
      })),
    },
    {
      label: t.nav.services,
      href: consultingBase,
      dropdown: t.nav.servicesDropdown.map((label: string, i: number) => ({
        label,
        href: `${consultingBase}#${serviceAnchors[i]}`,
      })),
    },
    { label: t.nav.about, href: routeTable.company[language] },
    { label: t.nav.contact, href: routeTable.contact[language] },
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languageOptions: { lang: Language; flag: string; alt: string }[] = [
    { lang: "en", flag: flagUs, alt: "English" },
    { lang: "pt", flag: flagBr, alt: "Português" },
    { lang: "es", flag: flagCo, alt: "Español" },
  ];

  const currentLang = languageOptions.find((o) => o.lang === language) || languageOptions[0];

  const handleLanguageChange = (lang: Language) => {
    switchLanguage(lang);
    setIsLangOpen(false);
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

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
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave()}
              >
                <Link
                  to={item.href}
                  className="text-base font-medium text-stratumtec-text hover:text-stratumtec-orange transition-fast relative group flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-stratumtec-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>

                {/* Desktop dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-80 bg-popover border border-border rounded-md shadow-lg py-2 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-4 py-2.5 text-sm text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-fast"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
                <ChevronDown
                  className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
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
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-fast"
                        onClick={() =>
                          setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileOpenDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileOpenDropdown === item.label && (
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="block px-4 py-2 text-sm text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-fast"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-base font-medium text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-fast"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

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
