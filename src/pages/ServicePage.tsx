import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { Button } from "@/components/ui/button";
import { CalendarPopup } from "@/components/CalendarPopup";
import { ArrowRight, CheckCircle, AlertTriangle, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getServiceBySlug } from "@/data/services";
import { routeTable } from "@/lib/routeMap";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const service = getServiceBySlug(language, slug || '');

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-heading font-bold text-secondary">Page not found</h1>
          <Link to={routeTable.services[language]} className="text-primary mt-4 inline-block">← Back</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const labels = {
    pt: { challenges: 'Principais desafios resolvidos', approach: 'Abordagem Stratumtec', results: 'Resultados esperados', backTo: '← Voltar aos Serviços' },
    en: { challenges: 'Key challenges solved', approach: 'Stratumtec approach', results: 'Expected results', backTo: '← Back to Services' },
    es: { challenges: 'Principales desafíos resueltos', approach: 'Enfoque Stratumtec', results: 'Resultados esperados', backTo: '← Volver a Servicios' },
  };
  const l = labels[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-28 pb-16 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20">
          <div className="container mx-auto px-4 lg:px-6">
            <Link to={routeTable.services[language]} className="text-white/70 hover:text-white text-sm mb-6 inline-block transition-colors">
              {l.backTo}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 !text-white" style={{ color: 'white' }}>
              {service.title}
            </h1>
            <p className="text-xl text-white/85 max-w-3xl leading-relaxed">{service.institutionalDescription}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <h2 className="text-lg font-heading font-bold text-secondary">{l.challenges}</h2>
                </div>
                <ul className="space-y-3">
                  {service.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                  </div>
                  <h2 className="text-lg font-heading font-bold text-secondary">{l.approach}</h2>
                </div>
                <ul className="space-y-3">
                  {service.approach.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-heading font-bold text-secondary">{l.results}</h2>
                </div>
                <ul className="space-y-3">
                  {service.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-16">
              <CalendarPopup
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg">
                    {service.cta}
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

export default ServicePage;
