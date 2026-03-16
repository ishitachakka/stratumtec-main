import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppPlugin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the plugin after a delay when the page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim do site da Stratumtec e gostaria de saber mais sobre as soluções de Customer Experience.";
    const phoneNumber = "5511993324239";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const quickMessages = [
    {
      text: "Quero saber mais sobre as soluções",
      action: () => {
        const message = "Olá! Gostaria de saber mais sobre as soluções da Stratumtec para Customer Experience.";
        window.open(`https://wa.me/5511993324239?text=${encodeURIComponent(message)}`, "_blank");
      }
    },
    {
      text: "Solicitar uma demonstração",
      action: () => {
        const message = "Olá! Gostaria de agendar uma demonstração das soluções da Stratumtec.";
        window.open(`https://wa.me/5511993324239?text=${encodeURIComponent(message)}`, "_blank");
      }
    },
    {
      text: "Falar com um especialista",
      action: () => {
        const message = "Olá! Gostaria de falar com um especialista sobre as soluções de CX da Stratumtec.";
        window.open(`https://wa.me/5511993324239?text=${encodeURIComponent(message)}`, "_blank");
      }
    },
    {
      text: "Solicitar uma cotação",
      action: () => {
        const message = "Olá! Gostaria de solicitar uma cotação para implementação das soluções da Stratumtec.";
        window.open(`https://wa.me/5511993324239?text=${encodeURIComponent(message)}`, "_blank");
      }
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-hero border border-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">Stratumtec</div>
                <div className="text-sm text-green-100">Atendimento Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-3 text-sm text-stratumtec-text">
                Olá! 👋 Como podemos ajudar você hoje?
              </div>
              <div className="text-xs text-gray-500 mt-1 text-right">
                Stratumtec • agora
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-stratumtec-navy mb-2">
                Escolha uma opção:
              </div>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={msg.action}
                  className="w-full text-left p-3 bg-stratumtec-light hover:bg-stratumtec-orange/10 rounded-lg text-sm text-stratumtec-text hover:text-stratumtec-orange transition-colors border border-border hover:border-stratumtec-orange/30"
                >
                  {msg.text}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Abrir WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-hero flex items-center justify-center transition-all duration-300 group ${
          isOpen ? 'rotate-180' : 'hover:scale-110'
        }`}
        aria-label="Abrir chat do WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </>
        )}
      </button>

      {/* Pulse animation for first-time visitors */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-green-600/30 rounded-full animate-ping" />
      )}
    </div>
  );
};