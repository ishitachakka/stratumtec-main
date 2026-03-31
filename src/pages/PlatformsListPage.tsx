import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Headphones, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPlatforms } from "@/data/platforms";
import { platformRoutes, PlatformSlug } from "@/data/platforms";
import { CalendarPopup } from "@/components/CalendarPopup";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = { Headphones, Brain };

const PlatformsListPage = () => {
  const { language } = useLanguage();
  const platforms = getPlatforms(language);

  const labels = {
    pt: { title: 'Plataformas', subtitle: 'Plataformas desenvolvidas para escalar sua operação', cta: 'Fale com um especialista' },
    en: { title: 'Platforms', subtitle: 'Platforms built to scale your operation', cta: 'Talk to an expert' },
    es: { title: 'Plataformas', subtitle: 'Plataformas desarrolladas para escalar su operación', cta: 'Hable con un especialista' },
  };
  const l = labels[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-28 pb-16 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20">
          <div className="container mx-auto px-4 lg:px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 !text-white" style={{ color: 'white' }}>{l.title}</h1>
            <p className="text-xl text-white/85 max-w-3xl">{l.subtitle}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {platforms.map((p) => {
                const Icon = iconMap[p.icon] || Headphones;
                return (
                  <Link key={p.slug} to={platformRoutes[p.slug as PlatformSlug][language]}>
                    <Card className="p-8 h-full group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-secondary group-hover:text-primary transition-colors mb-2">{p.name}</h3>
                          <p className="text-muted-foreground mb-4">{p.tagline}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{p.institutionalDescription}</p>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center text-primary text-sm font-medium">
                        {language === 'pt' ? 'Saiba mais' : language === 'es' ? 'Saber más' : 'Learn more'} <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
            <div className="text-center">
              <CalendarPopup
                trigger={<Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg">{l.cta} <ArrowRight className="ml-2 h-5 w-5" /></Button>}
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

export default PlatformsListPage;
