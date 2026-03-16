import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    content: "sales@stratumtec.com",
    link: "mailto:sales@stratumtec.com"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "+55 11 99332-4239",
    link: "tel:+5511993324239"
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Alphaville, SP - Brasil",
    link: "#"
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg. a Sex",
    subContent: "das 9h às 18h",
    link: "#"
  }
];

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Em uma implementação real, aqui você enviaria os dados para contato@stratumtec.com
      console.log("Form data:", formData);
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
        action: <CheckCircle className="h-4 w-4 text-green-600" />
      });

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-stratumtec-light">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16" id="vamos-conversar">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-navy mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-stratumtec-text max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos transformar a experiência do cliente da sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy mb-6">
                Fale conosco
              </h3>
              <p className="text-lg text-stratumtec-text mb-8 leading-relaxed">
                Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução perfeita para os desafios do seu negócio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-smooth group cursor-pointer bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-stratumtec-orange/10 rounded-lg flex items-center justify-center group-hover:bg-stratumtec-orange group-hover:text-white transition-colors">
                          <IconComponent className="h-6 w-6 text-stratumtec-orange group-hover:text-white" />
                        </div>
                        <div>
                          <div className="font-heading font-semibold text-stratumtec-navy mb-1">
                            {info.title}
                          </div>
                          <div className="text-stratumtec-text">
                            {info.content}
                          </div>
                          {(info as any).subContent && (
                            <div className="text-stratumtec-text text-sm">
                              {(info as any).subContent}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Cards */}
            <div className="space-y-4">
              <Card className="border-0 shadow-card bg-white">
                <CardContent className="p-6">
                  <h4 className="font-heading font-bold text-stratumtec-navy mb-2">
                    Precisa de uma resposta rápida?
                  </h4>
                  <p className="text-stratumtec-text mb-4">
                    Entre em contato via WhatsApp e fale direto com nossos especialistas.
                  </p>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      window.open("https://wa.me/5511993324239?text=Olá! Gostaria de falar com um especialista da Stratumtec.", "_blank");
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-elevated bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-stratumtec-navy">
                  Solicitar Cotação
                </CardTitle>
                <CardDescription className="text-stratumtec-text">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-stratumtec-navy font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="border-border focus:ring-stratumtec-orange"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-stratumtec-navy font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="border-border focus:ring-stratumtec-orange"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-stratumtec-navy font-medium">
                        Empresa *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da empresa"
                        required
                        className="border-border focus:ring-stratumtec-orange"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-stratumtec-navy font-medium">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="border-border focus:ring-stratumtec-orange"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-stratumtec-navy font-medium">
                      Assunto *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Como podemos ajudar?"
                      required
                      className="border-border focus:ring-stratumtec-orange"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-stratumtec-navy font-medium">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={5}
                      required
                      className="border-border focus:ring-stratumtec-orange resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-semibold py-3 text-lg transition-smooth"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};