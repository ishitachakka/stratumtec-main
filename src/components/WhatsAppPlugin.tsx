import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const whatsappCopy = {
  en: {
    onlineSupport: "Online Support",
    greeting: "Hello! 👋 How can we help you today?",
    now: "now",
    chooseOption: "Choose an option:",
    openWhatsApp: "Open WhatsApp",
    ariaLabel: "Open WhatsApp chat",
    quickMessages: [
      { text: "I want to learn more about the solutions", message: "Hello! I'd like to learn more about StratumTec's Customer Experience solutions." },
      { text: "Request a demonstration", message: "Hello! I'd like to schedule a demonstration of StratumTec's solutions." },
      { text: "Talk to a specialist", message: "Hello! I'd like to speak with a specialist about StratumTec's CX solutions." },
      { text: "Request a quote", message: "Hello! I'd like to request a quote for implementing StratumTec's solutions." },
    ],
    defaultMessage: "Hello! I came from the StratumTec website and would like to learn more about Customer Experience solutions.",
  },
  pt: {
    onlineSupport: "Atendimento Online",
    greeting: "Olá! 👋 Como podemos ajudar você hoje?",
    now: "agora",
    chooseOption: "Escolha uma opção:",
    openWhatsApp: "Abrir WhatsApp",
    ariaLabel: "Abrir chat do WhatsApp",
    quickMessages: [
      { text: "Quero saber mais sobre as soluções", message: "Olá! Gostaria de saber mais sobre as soluções da StratumTec para Customer Experience." },
      { text: "Solicitar uma demonstração", message: "Olá! Gostaria de agendar uma demonstração das soluções da StratumTec." },
      { text: "Falar com um especialista", message: "Olá! Gostaria de falar com um especialista sobre as soluções de CX da StratumTec." },
      { text: "Solicitar uma cotação", message: "Olá! Gostaria de solicitar uma cotação para implementação das soluções da StratumTec." },
    ],
    defaultMessage: "Olá! Vim do site da StratumTec e gostaria de saber mais sobre as soluções de Customer Experience.",
  },
  es: {
    onlineSupport: "Atención en Línea",
    greeting: "¡Hola! 👋 ¿Cómo podemos ayudarle hoy?",
    now: "ahora",
    chooseOption: "Elija una opción:",
    openWhatsApp: "Abrir WhatsApp",
    ariaLabel: "Abrir chat de WhatsApp",
    quickMessages: [
      { text: "Quiero saber más sobre las soluciones", message: "¡Hola! Me gustaría saber más sobre las soluciones de Customer Experience de StratumTec." },
      { text: "Solicitar una demostración", message: "¡Hola! Me gustaría agendar una demostración de las soluciones de StratumTec." },
      { text: "Hablar con un especialista", message: "¡Hola! Me gustaría hablar con un especialista sobre las soluciones de CX de StratumTec." },
      { text: "Solicitar una cotización", message: "¡Hola! Me gustaría solicitar una cotización para la implementación de las soluciones de StratumTec." },
    ],
    defaultMessage: "¡Hola! Vine del sitio web de StratumTec y me gustaría saber más sobre las soluciones de Customer Experience.",
  },
};

const PHONE = "5511912635196";

export const WhatsAppPlugin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const copy = whatsappCopy[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWA = (message: string) => {
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank");
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-hero border border-border overflow-hidden animate-scale-in">
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">StratumTec</div>
                <div className="text-sm text-green-100">{copy.onlineSupport}</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-3 text-sm text-stratumtec-text">
                {copy.greeting}
              </div>
              <div className="text-xs text-gray-500 mt-1 text-right">
                StratumTec • {copy.now}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-stratumtec-navy mb-2">{copy.chooseOption}</div>
              {copy.quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => openWA(msg.message)}
                  className="w-full text-left p-3 bg-stratumtec-light hover:bg-stratumtec-orange/10 rounded-lg text-sm text-stratumtec-text hover:text-stratumtec-orange transition-colors border border-border hover:border-stratumtec-orange/30"
                >
                  {msg.text}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <Button onClick={() => openWA(copy.defaultMessage)} className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Send className="h-4 w-4 mr-2" />
                {copy.openWhatsApp}
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-hero flex items-center justify-center transition-all duration-300 group ${isOpen ? 'rotate-180' : 'hover:scale-110'}`}
        aria-label={copy.ariaLabel}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </>
        )}
      </button>

      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-green-600/30 rounded-full animate-ping pointer-events-none" />
      )}
    </div>
  );
};
