import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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
    featured: false
  },
  {
    id: 3,
    title: "Integração Omnichannel: Unificando a Experiência do Cliente",
    excerpt: "As melhores práticas para criar uma experiência consistente em todos os canais de comunicação da sua empresa.",
    category: "Omnichannel",
    readTime: "10 min",
    date: "08 Jan 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Métricas de CX que Realmente Importam em 2024",
    excerpt: "Um guia completo sobre as métricas mais importantes para medir e otimizar a experiência do cliente no cenário atual.",
    category: "Analytics",
    readTime: "7 min",
    date: "05 Jan 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

const categories = [
  { name: "Inteligência Artificial", icon: Brain, color: "bg-stratumtec-orange/10 text-stratumtec-orange" },
  { name: "Automação", icon: Zap, color: "bg-stratumtec-navy/10 text-stratumtec-navy" },
  { name: "Omnichannel", icon: TrendingUp, color: "bg-stratumtec-cyan/10 text-stratumtec-cyan" },
  { name: "Analytics", icon: TrendingUp, color: "bg-purple-100 text-purple-600" }
];

export const BlogSection = () => {
  const getCategoryStyle = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "bg-gray-100 text-gray-600";
  };

  return (
    <section id="conteudo" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-navy mb-6">
            Insights & Tendências
          </h2>
          <p className="text-xl text-stratumtec-text max-w-3xl mx-auto leading-relaxed">
            Mantenha-se atualizado com as últimas tendências em Customer Experience, tecnologia e inovação
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="mb-16">
            <Card className="overflow-hidden border-0 shadow-elevated bg-gradient-to-br from-white to-stratumtec-light/30">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={post.image}
                    alt={post.title}
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
                    <Badge variant="secondary" className={getCategoryStyle(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-lg text-stratumtec-text mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-stratumtec-text space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div>{post.readTime} de leitura</div>
                    </div>
                  </div>
                  
                  <Button asChild className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white w-fit group">
                    <Link to={post.slug}>
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-smooth cursor-pointer">
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
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-stratumtec-light rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-stratumtec-navy mb-4">
              Quer receber nossos insights?
            </h3>
            <p className="text-stratumtec-text mb-6">
              Assine nossa newsletter e fique por dentro das últimas tendências em CX e tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-stratumtec-orange"
              />
              <Button className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-6 py-3">
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};