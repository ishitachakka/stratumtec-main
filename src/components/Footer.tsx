import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook, ArrowUp, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";
import { routeTable } from "@/lib/routeMap";
import { getSolutions, solutionRoutes, SolutionSlug } from "@/data/solutions";
import { getPlatforms, platformRoutes, PlatformSlug } from "@/data/platforms";
import { getServices, serviceRoutes, ServiceSlug } from "@/data/services";
import { Link } from "react-router-dom";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/stratumtec" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/stratumtec" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@stratumtec" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/stratumtec" }
];

export const Footer = () => {
  const { language } = useLanguage();
  const t = pageTranslations[language].footer;
  const currentYear = new Date().getFullYear();

  const solutions = getSolutions(language).slice(0, 4);
  const platforms = getPlatforms(language);
  const services = getServices(language);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const footerLabels = {
    pt: { solutions: 'Soluções', platforms: 'Plataformas', services: 'Serviços', company: 'Empresa', content: 'Conteúdo' },
    en: { solutions: 'Solutions', platforms: 'Platforms', services: 'Services', company: 'Company', content: 'Insights' },
    es: { solutions: 'Soluciones', platforms: 'Plataformas', services: 'Servicios', company: 'Empresa', content: 'Contenido' },
  };
  const fl = footerLabels[language];

  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      <button onClick={scrollToTop} className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-elevated transition-smooth group" aria-label="Back to top">
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="container mx-auto px-4 lg:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/lovable-uploads/2cfa7eb9-c064-42b8-b3ce-a4793be73521.png" alt="StratumTec" className="h-12 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">{t.companyDesc}</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-white/80 hover:text-primary transition-colors"><Mail className="h-5 w-5 mr-3" /><a href="mailto:jomon@stratumtec.com">jomon@stratumtec.com</a></div>
              <div className="flex items-center text-white/80 hover:text-primary transition-colors"><Phone className="h-5 w-5 mr-3" /><a href={language === 'pt' ? "tel:+5511993324239" : "tel:+12397765370"}>{language === 'pt' ? "+55 11 99332-4239" : "+1 239 776 5370"}</a></div>
              <div className="flex items-start text-white/80"><MapPin className="h-5 w-5 mr-3 mt-0.5 shrink-0" /><span>{language === 'pt' ? "Alphaville, SP - Brasil" : "2355 Vanderbilt Beach Road, Suite 154-V-124, Naples, FL 34109"}</span></div>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-primary hover:text-white" aria-label={social.name}>
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-4">{fl.solutions}</h4>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.slug}><Link to={solutionRoutes[s.slug as SolutionSlug][language]} className="text-white/70 hover:text-primary transition-colors text-sm">{s.title}</Link></li>
              ))}
              <li><Link to={routeTable.solutions[language]} className="text-primary text-sm font-medium">{language === 'pt' ? 'Ver todas →' : language === 'es' ? 'Ver todas →' : 'View all →'}</Link></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-4">{fl.platforms}</h4>
            <ul className="space-y-3">
              {platforms.map((p) => (
                <li key={p.slug}><Link to={platformRoutes[p.slug as PlatformSlug][language]} className="text-white/70 hover:text-primary transition-colors text-sm">{p.name}</Link></li>
              ))}
            </ul>
            <h4 className="font-heading font-bold text-lg text-white mb-4 mt-8">{fl.services}</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}><Link to={serviceRoutes[s.slug as ServiceSlug][language]} className="text-white/70 hover:text-primary transition-colors text-sm">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company & Content */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-4">{fl.company}</h4>
            <ul className="space-y-3">
              <li><Link to={routeTable.company[language]} className="text-white/70 hover:text-primary transition-colors text-sm">{language === 'pt' ? 'Sobre nós' : language === 'es' ? 'Sobre nosotros' : 'About us'}</Link></li>
              <li><Link to={routeTable.contact[language]} className="text-white/70 hover:text-primary transition-colors text-sm">{language === 'pt' ? 'Contato' : language === 'es' ? 'Contacto' : 'Contact'}</Link></li>
            </ul>
            <h4 className="font-heading font-bold text-lg text-white mb-4 mt-8">{fl.content}</h4>
            <ul className="space-y-3">
              <li><Link to={routeTable.blog[language]} className="text-white/70 hover:text-primary transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-heading font-bold text-xl text-white mb-4">{t.newsletterTitle}</h4>
            <p className="text-white/80 mb-6">{t.newsletterDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder={t.emailPlaceholder} className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">{t.subscribe}</Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-white/70 text-sm">
              <span>© {currentYear} <strong>StratumTec</strong>. {t.copyright}</span>
              <Heart className="h-4 w-4 ml-2 text-primary" />
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to={routeTable.privacy[language]} className="text-white/70 hover:text-primary transition-colors">{t.privacy}</Link>
              <Link to={routeTable.terms[language]} className="text-white/70 hover:text-primary transition-colors">{t.terms}</Link>
              <a href="#cookies" className="text-white/70 hover:text-primary transition-colors">{t.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
