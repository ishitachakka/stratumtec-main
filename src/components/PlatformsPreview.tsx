import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Headphones, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/data/homeContent";
import { getPlatforms } from "@/data/platforms";
import { platformRoutes, PlatformSlug } from "@/data/platforms";
import { routeTable } from "@/lib/routeMap";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = { Headphones, Brain };

export const PlatformsPreview = () => {
  const { language } = useLanguage();
  const t = homeContent[language].platformsPreview;
  const platforms = getPlatforms(language);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-12 text-center">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {platforms.map((platform) => {
            const Icon = iconMap[platform.icon] || Headphones;
            return (
              <Link key={platform.slug} to={platformRoutes[platform.slug as PlatformSlug][language]}>
                <Card className="p-8 h-full group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/30">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{platform.tagline}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'pt' ? 'Saiba mais' : language === 'es' ? 'Más información' : 'Learn more'}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link to={routeTable.platforms[language]}>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              {t.viewProducts} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
