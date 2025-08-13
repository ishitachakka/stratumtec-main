import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { CalendarPopup } from "@/components/CalendarPopup";
import flagBr from "@/assets/flag-br.png";
import flagUs from "@/assets/flag-us.png";
import flagEs from "@/assets/flag-es.png";

export const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLanguageRoute = () => {
    if (location.pathname === '/en') return 'en';
    if (location.pathname === '/es') return 'es';
    return 'pt';
  };

  const navigationItems = [
    { label: t.nav.company, href: "/empresa" },
    { label: t.nav.solutions, href: "/solucoes" },
    { label: t.nav.consulting, href: "/consultoria" },
    { label: t.nav.content, href: "/blog" },
    { label: t.nav.contact, href: "/contato" },
  ];

  const languageOptions = [
    { route: '/', flag: flagBr, alt: 'Português' },
    { route: '/en', flag: flagUs, alt: 'English' },
    { route: '/es', flag: flagEs, alt: 'Español' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/2cfa7eb9-c064-42b8-b3ce-a4793be73521.png" 
                alt="stratumtec" 
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-stratumtec-text hover:text-stratumtec-orange transition-fast relative group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-stratumtec-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
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
              ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              {languageOptions.map((option) => (
                <Link
                  key={option.route}
                  to={option.route}
                  className={`p-1 rounded-md transition-colors ${
                    getLanguageRoute() === option.route.replace('/', '') || (option.route === '/' && getLanguageRoute() === 'pt')
                      ? 'bg-stratumtec-orange/20' 
                      : 'hover:bg-stratumtec-light/20'
                  }`}
                  title={option.alt}
                >
                  <img 
                    src={option.flag} 
                    alt={option.alt}
                    className="w-6 h-4 object-cover rounded-sm"
                  />
                </Link>
              ))}
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
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-stratumtec-text hover:text-stratumtec-orange hover:bg-muted transition-fast"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
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
              ))}
              
              {/* Mobile Language Selector */}
              <div className="flex items-center justify-center space-x-3 pt-4 border-t border-stratumtec-light/20">
                {languageOptions.map((option) => (
                  <Link
                    key={option.route}
                    to={option.route}
                    className={`p-2 rounded-md transition-colors ${
                      getLanguageRoute() === option.route.replace('/', '') || (option.route === '/' && getLanguageRoute() === 'pt')
                        ? 'bg-stratumtec-orange/20' 
                        : 'hover:bg-stratumtec-light/20'
                    }`}
                    title={option.alt}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img 
                      src={option.flag} 
                      alt={option.alt}
                      className="w-6 h-4 object-cover rounded-sm"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};