import { Button } from "@/components/ui/button";
import { ArrowRight, Database, TrendingUp, Zap, Bot, Network, Monitor, Mic } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/data/homeContent";
import { getSolutions } from "@/data/solutions";
import { solutionRoutes, SolutionSlug } from "@/data/solutions";
import { routeTable } from "@/lib/routeMap";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = {
  Database, TrendingUp, Zap, Bot, Network, Monitor, Mic,
};

export const SolutionsOverview = () => {
  const { language } = useLanguage();
  const t = homeContent[language].solutionsOverview;
  const solutions = getSolutions(language);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-12 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {solutions.map((solution) => {
            const Icon = iconMap[solution.icon] || Database;
            return (
              <Link
                key={solution.slug}
                to={solutionRoutes[solution.slug as SolutionSlug][language]}
                className="group flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {solution.shortDescription}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link to={routeTable.solutions[language]}>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
