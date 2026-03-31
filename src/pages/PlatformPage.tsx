import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { Button } from "@/components/ui/button";
import { CalendarPopup } from "@/components/CalendarPopup";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPlatformBySlug } from "@/data/platforms";
import { routeTable } from "@/lib/routeMap";
import { Link } from "react-router-dom";

const PlatformPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const platform = getPlatformBySlug(language, slug || '');

  if (!platform) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-heading font-bold text-secondary">
            {language === 'pt' ? 'Página não encontrada' : language === 'es' ? 'Página no encontrada' : 'Page not found'}
          </h1>
          <Link to={routeTable.platforms[language]} className="text-primary mt-4 inline-block">
            {language === 'pt' ? '← Voltar' : language === 'es' ? '← Volver' : '← Back'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const labels = {
    pt: { capabilities: 'Principais capacidades', useCases: 'Onde é utilizado', backTo: '← Voltar às Plataformas' },
    en: { capabilities: 'Key capabilities', useCases: 'Where it is used', backTo: '← Back to Platforms' },
    es: { capabilities: 'Principales capacidades', useCases: 'Dónde se aplica', backTo: '← Volver a Plataformas' },
  };
  const l = labels[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20">
          <div className="container mx-auto px-4 lg:px-6">
            <Link to={routeTable.platforms[language]} className="text-white/70 hover:text-white text-sm mb-6 inline-block transition-colors animate-fade-in">
              {l.backTo}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 !text-white animate-fade-in" style={{ color: 'white' }}>
              {platform.name}
            </h1>
            <p className="text-xl text-white/85 max-w-3xl mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {platform.tagline}
            </p>
            <p className="text-lg text-white/70 max-w-4xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {platform.institutionalDescription}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-heading font-bold text-secondary mb-8">{l.capabilities}</h2>
                <ul className="space-y-4">
                  {platform.capabilities.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-secondary mb-8">{l.useCases}</h2>
                <ul className="space-y-4">
                  {platform.useCases.map((u, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-16">
              <CalendarPopup
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg">
                    {platform.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                }
                triggerAsChild
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppPlugin />
    </div>
  );
};

export default PlatformPage;
