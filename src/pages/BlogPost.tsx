import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface BlogPostProps {
  title?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  date?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  relatedPosts?: Array<{
    title: string;
    excerpt: string;
    slug: string;
    category: string;
    readTime: string;
  }>;
}

export default function BlogPost({
  title = "Título do Post",
  excerpt = "Resumo do artigo que será exibido como preview...",
  content = "Conteúdo completo do artigo será inserido aqui...",
  author = "Equipe Stratumtec",
  date = "15 de Janeiro, 2024",
  readTime = "8 min de leitura",
  category = "Customer Experience",
  tags = ["CX", "IA", "Inovação"],
  relatedPosts = []
}: BlogPostProps) {
  const { t } = useLanguage();
  const { slug } = useParams();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const defaultRelatedPosts = [
    {
      title: "O Futuro da Inteligência Artificial no Atendimento ao Cliente",
      excerpt: "Como a IA está revolucionando a experiência do cliente...",
      slug: "futuro-ia-atendimento",
      category: "Tecnologia",
      readTime: "6 min"
    },
    {
      title: "Métricas Essenciais de Customer Experience",
      excerpt: "Descubra as principais métricas para medir sucesso em CX...",
      slug: "metricas-cx",
      category: "Analytics",
      readTime: "5 min"
    },
    {
      title: "Tendências em Omnichannel para 2024",
      excerpt: "As principais tendências que moldarão o omnichannel...",
      slug: "tendencias-omnichannel-2024",
      category: "Estratégia",
      readTime: "7 min"
    }
  ];

  const postsToShow = relatedPosts.length > 0 ? relatedPosts : defaultRelatedPosts;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-6 mb-8">
          <Link 
            to="/#conteudo" 
            className="inline-flex items-center text-stratumtec-orange hover:text-stratumtec-orange/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.blog.backToBlog || "Voltar ao Blog"}
          </Link>
        </div>

        <article className="container mx-auto px-4 lg:px-6 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-stratumtec-orange/10 text-stratumtec-orange">
                {category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-stratumtec-dark mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2 text-stratumtec-orange hover:text-stratumtec-orange/80"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt={title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-muted-foreground leading-relaxed space-y-6">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-stratumtec-dark mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-stratumtec-orange/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="mb-16 bg-stratumtec-light/5 border-stratumtec-orange/20">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <TrendingUp className="w-12 h-12 text-stratumtec-orange mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-stratumtec-dark mb-4">
                Pronto para transformar sua experiência do cliente?
              </h3>
              <p className="text-muted-foreground mb-6">
                Descubra como nossas soluções podem revolucionar seu atendimento
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Li o artigo sobre Customer Experience e gostaria de conhecer as soluções da Stratumtec.", "_blank")}
                className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-medium px-8 py-3"
              >
                Agendar Consulta Gratuita
              </Button>
            </CardContent>
          </Card>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-stratumtec-light/5">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-stratumtec-dark mb-4">
                  Artigos Relacionados
                </h2>
                <p className="text-muted-foreground">
                  Continue explorando nossos insights sobre Customer Experience
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {postsToShow.map((post, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge variant="secondary" className="bg-stratumtec-orange/10 text-stratumtec-orange">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-stratumtec-dark mb-3 group-hover:text-stratumtec-orange transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-stratumtec-orange hover:text-stratumtec-orange/80">
                          Ler mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}