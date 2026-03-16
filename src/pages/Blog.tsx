import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight, TrendingUp, Brain, Zap, Search, Filter, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "O Futuro da IA no Customer Experience",
    excerpt: "Como a Inteligência Artificial está revolucionando a forma como as empresas se relacionam com seus clientes, criando experiências mais personalizadas e eficientes.",
    category: "Inteligência Artificial",
    readTime: "8 min",
    date: "15 Jan 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    slug: "/blog/futuro-ia-cx"
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
    slug: "/blog/automacao-inteligente"
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
    slug: "/blog/integracao-omnichannel"
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
    slug: "/blog/metricas-cx-2024"
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
    slug: "/blog/chatbots-vs-humano"
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
    slug: "/blog/transformacao-digital-cx"
  },
  {
    id: 8,
    title: "Voice Analytics: O Poder da Análise de Voz no Atendimento",
    excerpt: "Descubra como a análise de voz pode revolucionar o atendimento ao cliente, fornecendo insights profundos sobre emoções, satisfação e oportunidades de melhoria.",
    category: "Inteligência Artificial",
    readTime: "9 min",
    date: "15 Dez 2023",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    slug: "/blog/voice-analytics"
  }
];

const categories = [
  { name: "Todos", color: "bg-slate-100 text-slate-600" },
  { name: "Inteligência Artificial", icon: Brain, color: "bg-stratumtec-orange/10 text-stratumtec-orange" },
  { name: "Automação", icon: Zap, color: "bg-stratumtec-navy/10 text-stratumtec-navy" },
  { name: "Omnichannel", icon: TrendingUp, color: "bg-stratumtec-cyan/10 text-stratumtec-cyan" },
  { name: "Analytics", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
  { name: "Transformação Digital", icon: Settings, color: "bg-green-100 text-green-600" }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const getCategoryStyle = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "bg-gray-100 text-gray-600";
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-stratumtec-navy/5 to-stratumtec-cyan/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-stratumtec-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-stratumtec-cyan/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-6 flex items-end min-h-[200px] relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              <span className="text-stratumtec-orange">CX do Futuro</span>: <strong>stratumtec</strong>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explorando o amanhã do Customer Experience: insights, inovações e tendências que estão moldando o futuro da experiência do cliente
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={selectedCategory === category.name ? 
                    "bg-stratumtec-orange hover:bg-stratumtec-orange/90" : 
                    "hover:bg-stratumtec-orange/10"
                  }
                >
                  {category.icon && <category.icon className="h-4 w-4 mr-2" />}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <Card className="overflow-hidden border-0 shadow-elevated bg-gradient-to-br from-white to-stratumtec-light/30">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-stratumtec-orange text-white font-medium">
                        Destaque
                      </Badge>
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
                    
                    <p className="text-lg text-stratumtec-text mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-stratumtec-text space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <div>{featuredPost.readTime} de leitura</div>
                      </div>
                    </div>
                    
                    <Button asChild className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white w-fit group">
                      <Link to={featuredPost.slug}>
                        Ler Artigo Completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Regular Posts Grid */}
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
                        Ler Mais
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-stratumtec-navy mb-4">
                Nenhum artigo encontrado
              </h3>
              <p className="text-stratumtec-text mb-6">
                Tente ajustar os filtros ou termos de busca
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchTerm("");
                }}
                className="bg-stratumtec-orange hover:bg-stratumtec-orange/90"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-stratumtec-light/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-card">
              <h3 className="text-2xl font-heading font-bold text-stratumtec-navy mb-4">
                Quer receber nossos insights?
              </h3>
              <p className="text-stratumtec-text mb-6">
                Assine nossa newsletter e fique por dentro das últimas tendências em CX e tecnologia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1"
                />
                <Button className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white">
                  Assinar
                </Button>
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