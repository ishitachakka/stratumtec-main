import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, RefreshCw, Shield, Compass } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/data/homeContent";
import { getServices } from "@/data/services";
import { serviceRoutes, ServiceSlug } from "@/data/services";
import { routeTable } from "@/lib/routeMap";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = { Plug, RefreshCw, Shield, Compass };

export const ServicesPreview = () => {
  const { language } = useLanguage();
  const t = homeContent[language].servicesPreview;
  const services = getServices(language);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Plug;
            return (
              <Link
                key={service.slug}
                to={serviceRoutes[service.slug as ServiceSlug][language]}
                className="group text-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-6 w-6 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-base font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link to={routeTable.services[language]}>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              {t.viewServices} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
