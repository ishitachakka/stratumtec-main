import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarPopup } from "@/components/CalendarPopup";
import { CheckCircle, AlertTriangle, Target, TrendingUp, ArrowRight } from "lucide-react";

interface SolutionPageContent {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  challengesTitle: string;
  challenges: string[];
  approachTitle: string;
  approach: string[];
  resultsTitle: string;
  results: string[];
  cta: string;
}

interface SolutionPageTemplateProps {
  content: SolutionPageContent;
}

export const SolutionPageTemplate = ({ content }: SolutionPageTemplateProps) => {
  useEffect(() => {
    document.title = content.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", content.seoDescription);
  }, [content.seoTitle, content.seoDescription]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stratumtec-light via-background to-stratumtec-light/30">
      <Header />

      <section className="pt-32 pb-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-stratumtec-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-stratumtec-cyan/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10 flex items-end min-h-[200px]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {content.h1}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          {/* Key Challenges */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy">
                {content.challengesTitle}
              </h2>
            </div>
            <ul className="space-y-4">
              {content.challenges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stratumtec-orange rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-lg text-stratumtec-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stratumtec Approach */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-stratumtec-navy/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-stratumtec-navy" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy">
                {content.approachTitle}
              </h2>
            </div>
            <ul className="space-y-4">
              {content.approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-stratumtec-cyan mt-1 flex-shrink-0" />
                  <span className="text-lg text-stratumtec-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Results */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-stratumtec-orange/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-stratumtec-orange" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy">
                {content.resultsTitle}
              </h2>
            </div>
            <ul className="space-y-4">
              {content.results.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-stratumtec-orange mt-1 flex-shrink-0" />
                  <span className="text-lg text-stratumtec-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stratumtec-navy/95 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <CalendarPopup
            trigger={
              <Button size="lg" className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-8 py-4 text-lg group">
                {content.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            }
            triggerAsChild
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
