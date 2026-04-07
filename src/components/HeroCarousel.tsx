import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarPopup } from "@/components/CalendarPopup";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backgroundGradients = [
  "bg-gradient-to-br from-stratumtec-cyan via-stratumtec-navy/80 to-stratumtec-orange/30",
  "bg-gradient-to-br from-stratumtec-navy via-stratumtec-navy/90 to-stratumtec-orange/20",
  "bg-gradient-to-br from-stratumtec-orange via-stratumtec-navy/70 to-stratumtec-cyan/25",
  "bg-gradient-to-br from-stratumtec-navy/90 via-stratumtec-cyan/30 to-stratumtec-orange",
  "bg-gradient-to-br from-stratumtec-navy via-stratumtec-orange/40 to-stratumtec-cyan/20",
];

export const HeroCarousel = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const slides = t.carousel.slides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className={`relative h-full ${backgroundGradients[currentSlide] || backgroundGradients[0]}`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-4xl">
                  <div className="mb-6">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="subtitle text-white/90 mb-2"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.h2>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
                    >
                      {slides[currentSlide].title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button 
                      size="lg"
                      className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-semibold px-8 py-4 text-lg transition-smooth group"
                      onClick={() => { navigate((slides[currentSlide] as any).link || "/"); }}
                    >
                      {slides[currentSlide].ctaText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <CalendarPopup
                      trigger={
                        <Button 
                          variant="navy"
                          size="lg"
                          className="font-semibold px-8 py-4 text-lg"
                        >
                          {slides[currentSlide].ctaSecondary}
                        </Button>
                      }
                      triggerAsChild
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
