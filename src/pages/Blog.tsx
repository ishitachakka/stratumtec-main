import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured: boolean;
  slug: string;
};

const blogPostsByLanguage: Record<Language, BlogPost[]> = {
  en: [
    {
      id: 1,
      title: "The Future of AI in Customer Experience",
      excerpt: "How Artificial Intelligence is changing how companies engage customers with more personalized and efficient journeys.",
      category: "Artificial Intelligence",
      readTime: "8 min",
      date: "Jan 15, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      slug: "/blog/futuro-ia-cx",
    },
    {
      id: 2,
      title: "Intelligent Automation: Reducing Costs and Boosting Efficiency",
      excerpt: "Learn how to implement automation strategies that turn manual tasks into smart, self-optimizing workflows.",
      category: "Automation",
      readTime: "6 min",
      date: "Jan 12, 2024",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/automacao-inteligente",
    },
    {
      id: 3,
      title: "Omnichannel Integration: Unifying the Customer Experience",
      excerpt: "Best practices for building a consistent customer experience across every communication channel.",
      category: "Omnichannel",
      readTime: "10 min",
      date: "Jan 08, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/integracao-omnichannel",
    },
    {
      id: 4,
      title: "CX Metrics That Actually Matter in 2024",
      excerpt: "A practical guide to the most relevant metrics for measuring and optimizing customer experience today.",
      category: "Analytics",
      readTime: "7 min",
      date: "Jan 05, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/metricas-cx-2024",
    },
    {
      id: 5,
      title: "Chatbots vs Human Support: Finding the Right Balance",
      excerpt: "How to blend automation efficiency with human empathy to create outstanding customer experiences.",
      category: "Artificial Intelligence",
      readTime: "9 min",
      date: "Jan 02, 2024",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/chatbots-vs-humano",
    },
    {
      id: 7,
      title: "Digital Transformation in CX: Complete 2024 Guide",
      excerpt: "How to execute customer-centric digital transformation strategies across technology, process, and culture.",
      category: "Digital Transformation",
      readTime: "12 min",
      date: "Dec 20, 2023",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/transformacao-digital-cx",
    },
    {
      id: 8,
      title: "Voice Analytics: The Power of Voice Data in Support",
      excerpt: "See how voice analytics can reveal emotions, satisfaction patterns, and opportunities for service improvement.",
      category: "Artificial Intelligence",
      readTime: "9 min",
      date: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/voice-analytics",
    },
  ],
  pt: [
    {
      id: 1,
      title: "O Futuro da IA no Customer Experience",
      excerpt: "Como a Inteligência Artificial está revolucionando a forma como as empresas se relacionam com seus clientes, criando experiências mais personalizadas e eficientes.",
      category: "Inteligência Artificial",
      readTime: "8 min",
      date: "15 Jan 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      slug: "/blog/futuro-ia-cx",
    },
    {
      id: 2,
      title: "Automação Inteligente: Reduzindo Custos e Aumentando Eficiência",
      excerpt: "Descubra como implementar soluções de automação que transformam processos manuais em workflows inteligentes e auto-otimizados.",
      category: "Automação",
      readTime: "6 min",
      date: "12 Jan 2024",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/automacao-inteligente",
    },
    {
      id: 3,
      title: "Integração Omnichannel: Unificando a Experiência do Cliente",
      excerpt: "As melhores práticas para criar uma experiência consistente em todos os canais de comunicação da sua empresa.",
      category: "Omnichannel",
      readTime: "10 min",
      date: "08 Jan 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/integracao-omnichannel",
    },
    {
      id: 4,
      title: "Métricas de CX que Realmente Importam em 2024",
      excerpt: "Um guia completo sobre as métricas mais importantes para medir e otimizar a experiência do cliente no cenário atual.",
      category: "Analytics",
      readTime: "7 min",
      date: "05 Jan 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/metricas-cx-2024",
    },
    {
      id: 5,
      title: "Chatbots vs. Atendimento Humano: Encontrando o Equilíbrio Perfeito",
      excerpt: "Como combinar a eficiência da automação com o toque humano para criar experiências excepcionais.",
      category: "Inteligência Artificial",
      readTime: "9 min",
      date: "02 Jan 2024",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/chatbots-vs-humano",
    },
    {
      id: 7,
      title: "Transformação Digital no CX: Guia Completo para 2024",
      excerpt: "Como implementar estratégias de transformação digital centradas na experiência do cliente, envolvendo tecnologia, processos e cultura organizacional.",
      category: "Transformação Digital",
      readTime: "12 min",
      date: "20 Dez 2023",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/transformacao-digital-cx",
    },
    {
      id: 8,
      title: "Voice Analytics: O Poder da Análise de Voz no Atendimento",
      excerpt: "Descubra como a análise de voz pode revolucionar o atendimento ao cliente, fornecendo insights sobre emoções e oportunidades de melhoria.",
      category: "Inteligência Artificial",
      readTime: "9 min",
      date: "15 Dez 2023",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/voice-analytics",
    },
  ],
  es: [
    {
      id: 1,
      title: "El Futuro de la IA en Customer Experience",
      excerpt: "Cómo la Inteligencia Artificial está transformando la forma en que las empresas se relacionan con sus clientes.",
      category: "Inteligencia Artificial",
      readTime: "8 min",
      date: "15 Ene 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      slug: "/blog/futuro-ia-cx",
    },
    {
      id: 2,
      title: "Automatización Inteligente: Reduciendo Costos y Aumentando Eficiencia",
      excerpt: "Descubre cómo implementar soluciones de automatización que convierten procesos manuales en flujos inteligentes.",
      category: "Automatización",
      readTime: "6 min",
      date: "12 Ene 2024",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/automacao-inteligente",
    },
    {
      id: 3,
      title: "Integración Omnicanal: Unificando la Experiencia del Cliente",
      excerpt: "Mejores prácticas para crear una experiencia consistente en todos los canales de comunicación.",
      category: "Omnicanal",
      readTime: "10 min",
      date: "08 Ene 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/integracao-omnichannel",
    },
    {
      id: 4,
      title: "Métricas de CX que Realmente Importan en 2024",
      excerpt: "Una guía completa sobre las métricas más relevantes para medir y optimizar la experiencia del cliente.",
      category: "Analytics",
      readTime: "7 min",
      date: "05 Ene 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/metricas-cx-2024",
    },
    {
      id: 5,
      title: "Chatbots vs. Atención Humana: Encontrando el Equilibrio Perfecto",
      excerpt: "Cómo combinar la eficiencia de la automatización con el toque humano para ofrecer experiencias excepcionales.",
      category: "Inteligencia Artificial",
      readTime: "9 min",
      date: "02 Ene 2024",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/chatbots-vs-humano",
    },
    {
      id: 7,
      title: "Transformación Digital en CX: Guía Completa 2024",
      excerpt: "Cómo implementar estrategias de transformación digital centradas en la experiencia del cliente.",
      category: "Transformación Digital",
      readTime: "12 min",
      date: "20 Dic 2023",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/transformacao-digital-cx",
    },
    {
      id: 8,
      title: "Voice Analytics: El Poder del Análisis de Voz en la Atención",
      excerpt: "Descubre cómo el análisis de voz puede revelar emociones y oportunidades para mejorar la atención al cliente.",
      category: "Inteligencia Artificial",
      readTime: "9 min",
      date: "15 Dic 2023",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "/blog/voice-analytics",
    },
  ],
};

const blogUiCopy: Record<Language, {
  heroPrefix: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  all: string;
  featured: string;
  readFull: string;
  readMore: string;
  readTimeSuffix: string;
  noResultsTitle: string;
  noResultsDescription: string;
  clearFilters: string;
}> = {
  en: {
    heroPrefix: "Future CX",
    heroSubtitle: "Exploring what’s next in Customer Experience: insights, innovation, and trends shaping tomorrow.",
    searchPlaceholder: "Search articles...",
    all: "All",
    featured: "Featured",
    readFull: "Read Full Article",
    readMore: "Read More",
    noResultsTitle: "No articles found",
    noResultsDescription: "Try adjusting your filters or search terms.",
    clearFilters: "Clear Filters",
  },
  pt: {
    heroPrefix: "CX do Futuro",
    heroSubtitle: "Explorando o amanhã do Customer Experience: insights, inovações e tendências que estão moldando o futuro.",
    searchPlaceholder: "Buscar artigos...",
    all: "Todos",
    featured: "Destaque",
    readFull: "Ler Artigo Completo",
    readMore: "Ler Mais",
    noResultsTitle: "Nenhum artigo encontrado",
    noResultsDescription: "Tente ajustar os filtros ou termos de busca.",
    clearFilters: "Limpar Filtros",
  },
  es: {
    heroPrefix: "CX del Futuro",
    heroSubtitle: "Explorando el futuro del Customer Experience: insights, innovación y tendencias que están transformando el mercado.",
    searchPlaceholder: "Buscar artículos...",
    all: "Todos",
    featured: "Destacado",
    readFull: "Leer Artículo Completo",
    readMore: "Leer Más",
    noResultsTitle: "No se encontraron artículos",
    noResultsDescription: "Intenta ajustar los filtros o términos de búsqueda.",
    clearFilters: "Limpiar Filtros",
  },
};

const categoryStyles = [
  "bg-slate-100 text-slate-600",
  "bg-stratumtec-orange/10 text-stratumtec-orange",
  "bg-stratumtec-navy/10 text-stratumtec-navy",
  "bg-stratumtec-cyan/10 text-stratumtec-cyan",
  "bg-purple-100 text-purple-600",
  "bg-green-100 text-green-600",
];

const Blog = () => {
  const { language, t } = useLanguage();
  const ui = blogUiCopy[language];
  const blogPosts = blogPostsByLanguage[language];

  const categories = [ui.all, ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const [selectedCategory, setSelectedCategory] = useState(ui.all);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSelectedCategory(ui.all);
    setSearchTerm("");
  }, [ui.all]);

  const getCategoryStyle = (categoryName: string) => {
    const categoryIndex = categories.indexOf(categoryName);
    return categoryStyles[categoryIndex] ?? "bg-gray-100 text-gray-600";
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === ui.all || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stratumtec-navy/5 to-stratumtec-cyan/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-stratumtec-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-stratumtec-cyan/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-6 flex items-end min-h-[200px] relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              <span className="text-stratumtec-orange">{ui.heroPrefix}</span>: <strong>stratumtec</strong>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">{ui.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={ui.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-stratumtec-orange hover:bg-stratumtec-orange/90" : "hover:bg-stratumtec-orange/10"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          {featuredPost && (
            <div className="mb-16">
              <Card className="overflow-hidden border-0 shadow-elevated bg-gradient-to-br from-white to-stratumtec-light/30">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-stratumtec-orange text-white font-medium">{ui.featured}</Badge>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <Badge variant="secondary" className={getCategoryStyle(featuredPost.category)}>
                        {featuredPost.category}
                      </Badge>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-stratumtec-text mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-stratumtec-text space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <div>
                          {featuredPost.readTime} {t.blog.readMore === "Read More" ? "read" : language === "es" ? "de lectura" : "de leitura"}
                        </div>
                      </div>
                    </div>

                    <Button asChild className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white w-fit group">
                      <Link to={featuredPost.slug}>
                        {ui.readFull}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-smooth cursor-pointer">
                  <Link to={post.slug}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className={getCategoryStyle(post.category)}>
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-heading text-stratumtec-navy group-hover:text-stratumtec-orange transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>

                      <CardDescription className="text-stratumtec-text leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-stratumtec-text mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div>{post.readTime}</div>
                      </div>

                      <Button variant="ghost" className="w-full text-white bg-stratumtec-navy hover:bg-stratumtec-navy/90 group/btn">
                        {ui.readMore}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-stratumtec-navy mb-4">{ui.noResultsTitle}</h3>
              <p className="text-stratumtec-text mb-6">{ui.noResultsDescription}</p>
              <Button
                onClick={() => {
                  setSelectedCategory(ui.all);
                  setSearchTerm("");
                }}
                className="bg-stratumtec-orange hover:bg-stratumtec-orange/90"
              >
                {ui.clearFilters}
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-stratumtec-light/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-card">
              <h3 className="text-2xl font-heading font-bold text-stratumtec-navy mb-4">{t.blog.newsletterTitle}</h3>
              <p className="text-stratumtec-text mb-6">{t.blog.newsletterSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder={t.footer.newsletter.placeholder} className="flex-1" />
                <Button className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white">{t.blog.subscribe}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPlugin />
    </div>
  );
};

export default Blog;
