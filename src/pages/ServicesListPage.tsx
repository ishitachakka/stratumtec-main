import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, RefreshCw, Shield, Compass } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getServices } from "@/data/services";
import { serviceRoutes, ServiceSlug } from "@/data/services";
import { CalendarPopup } from "@/components/CalendarPopup";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = { Plug, RefreshCw, Shield, Compass };

const ServicesListPage = () => {
  const { language } = useLanguage();
  const services = getServices(language);

  const labels = {
    pt: { title: 'Serviços', subtitle: 'Do diagnóstico à sustentação: serviços que acompanham toda a jornada', cta: 'Fale com um especialista' },
    en: { title: 'Services', subtitle: 'From diagnosis to ongoing support: services that cover the entire journey', cta: 'Talk to an expert' },
    es: { title: 'Servicios', subtitle: 'Del diagnóstico a la sustentación: servicios que acompañan toda la jornada', cta: 'Hable con un especialista' },
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
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
              {services.map((s) => {
                const Icon = iconMap[s.icon] || Plug;
                return (
                  <Link key={s.slug} to={serviceRoutes[s.slug as ServiceSlug][language]} className="group">
                    <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all flex items-start gap-5">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-6 w-6 text-secondary group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-secondary group-hover:text-primary transition-colors mb-1">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
                    </div>
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

export default ServicesListPage;
