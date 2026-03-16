import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ana Paula Santos",
    position: "Diretora de CX",
    company: "TechCorp Brasil",
    content: "A Stratumtec transformou completamente nossa experiência do cliente. Com as soluções de IA implementadas, aumentamos nossa satisfação do cliente em 85% e reduzimos o tempo de resposta em 70%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    position: "CEO",
    company: "Inovação Digital Ltda",
    content: "A integração omnichannel da BlueMesh foi um divisor de águas. Agora temos uma visão 360° do cliente e conseguimos personalizar cada interação. O ROI foi visível em apenas 3 meses.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Mariana Costa",
    position: "Head de Operações",
    company: "RetailMax",
    content: "As soluções de automação inteligente da Stratumtec otimizaram nossos processos internos. Conseguimos reduzir custos operacionais em 40% mantendo a qualidade do atendimento.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Roberto Silva",
    position: "Diretor de TI",
    company: "FinanceGroup",
    content: "O suporte técnico e a expertise da equipe Stratumtec são excepcionais. Implementaram nossa solução de Customer Analytics em tempo recorde, superando todas as expectativas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stratumtec-navy to-stratumtec-navy/90">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conheça as histórias de sucesso de empresas que transformaram sua experiência do cliente com nossas soluções
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <Quote className="h-12 w-12 text-stratumtec-orange" />
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-stratumtec-orange fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-stratumtec-orange"
                        />
                        <div className="text-left">
                          <div className="font-heading font-bold text-lg text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-stratumtec-orange font-medium">
                            {testimonial.position}
                          </div>
                          <div className="text-white/70 text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-stratumtec-orange scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-2">
              98%
            </div>
            <div className="text-white/90 text-sm md:text-base">
              Satisfação dos Clientes
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-2">
              85%
            </div>
            <div className="text-white/90 text-sm md:text-base">
              Melhoria em CX
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-2">
              70%
            </div>
            <div className="text-white/90 text-sm md:text-base">
              Redução de Custos
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-2">
              3x
            </div>
            <div className="text-white/90 text-sm md:text-base">
              ROI Médio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};