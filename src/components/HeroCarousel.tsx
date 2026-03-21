import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarPopup } from "@/components/CalendarPopup";
import { useNavigate } from "react-router-dom";

const backgroundGradients = [
  "bg-gradient-to-br from-stratumtec-cyan via-stratumtec-navy/80 to-stratumtec-orange/30",
  "bg-gradient-to-br from-stratumtec-navy via-stratumtec-navy/90 to-stratumtec-orange/20",
  "bg-gradient-to-br from-stratumtec-orange via-stratumtec-navy/70 to-stratumtec-cyan/25",
  "bg-gradient-to-br from-stratumtec-navy/90 via-stratumtec-cyan/30 to-stratumtec-orange",
  "bg-gradient-to-br from-stratumtec-navy via-stratumtec-orange/40 to-stratumtec-cyan/20",
];

export const HeroCarousel = () => {
  const { t } = useLanguage();
  const slides = t.carousel.slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
          }`}
        >
          <div className={`relative h-full ${backgroundGradients[index] || backgroundGradients[0]}`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-4xl">
                  <div className="mb-6">
                    <h2 className="subtitle text-white/90 mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                    <Button 
                      size="lg"
                      className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-semibold px-8 py-4 text-lg transition-smooth group"
                      onClick={() => { window.location.href = "/solucoes"; }}
                    >
                      {slide.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <CalendarPopup
                      trigger={
                        <Button 
                          variant="navy"
                          size="lg"
                          className="font-semibold px-8 py-4 text-lg"
                        >
                          {slide.ctaSecondary}
                        </Button>
                      }
                      triggerAsChild
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-smooth group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-smooth group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide ? 'bg-stratumtec-orange' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-stratumtec-orange transition-all duration-75 ease-linear"
          style={{ width: isAutoPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : '0%' }}
        />
      </div>
    </section>
  );
};
