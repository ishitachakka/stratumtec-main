import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";

const postMeta = [
  { readTime: "8 min", date: "15 Jan 2024", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", featured: true, slug: "/blog/futuro-ia-cx" },
  { readTime: "6 min", date: "12 Jan 2024", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", featured: false },
  { readTime: "10 min", date: "08 Jan 2024", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", featured: false },
  { readTime: "7 min", date: "05 Jan 2024", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", featured: false }
];

const categoryColors: Record<string, string> = {};

export const BlogSection = () => {
  const { language } = useLanguage();
  const t = pageTranslations[language].blogSection;

  const posts = t.posts.map((post, i) => ({ ...post, ...postMeta[i] }));
  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <section id="conteudo" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-navy mb-6">{t.title}</h2>
          <p className="text-xl text-stratumtec-text max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        {featuredPosts.map((post) => (
          <div key={post.slug} className="mb-16">
            <Card className="overflow-hidden border-0 shadow-elevated bg-gradient-to-br from-white to-stratumtec-light/30">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4"><Badge className="bg-stratumtec-orange text-white font-medium">{t.featured}</Badge></div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4"><Badge variant="secondary">{post.category}</Badge></div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy mb-4 leading-tight">{post.title}</h3>
                  <p className="text-lg text-stratumtec-text mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-stratumtec-text space-x-4 mb-6">
                    <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{post.date}</div>
                    <div>{post.readTime} {t.readTime}</div>
                  </div>
                  <Button asChild className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white w-fit group">
                    <Link to={post.slug!}>{t.readFullArticle}<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, i) => (
            <Card key={i} className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-smooth cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4"><Badge variant="secondary">{post.category}</Badge></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading text-stratumtec-navy group-hover:text-stratumtec-orange transition-colors line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="text-stratumtec-text leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-stratumtec-text mb-4">
                  <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{post.date}</div>
                  <div>{post.readTime}</div>
                </div>
                <Button variant="ghost" className="w-full text-white bg-stratumtec-navy hover:bg-stratumtec-navy/90 group/btn">
                  {t.readMore}<ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-stratumtec-light rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-stratumtec-navy mb-4">{t.newsletterTitle}</h3>
            <p className="text-stratumtec-text mb-6">{t.newsletterDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder={t.emailPlaceholder} className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-stratumtec-orange" />
              <Button className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-6 py-3">{t.subscribe}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
