import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Users, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    t
  } = useLanguage();
  const {
    toast
  } = useToast();
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleCareerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setCareerForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Currículo enviado com sucesso!",
        description: "Entraremos em contato em breve."
      });
      setCareerForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };
  const contactInfo = [{
    icon: Mail,
    title: "E-mail",
    content: "sales@stratumtec.com",
    description: "Resposta em até 24 horas"
  }, {
    icon: Phone,
    title: "Telefone",
    content: "+55 11 99332-4239",
    description: "Segunda a sexta, 9h às 18h"
  }, {
    icon: MapPin,
    title: "Endereço",
    content: "Alameda Rio Negro, 503 - Cj. 2020",
    description: "Alphaville, SP - Brasil"
  }, {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 9h às 18h",
    description: ""
  }];
  const benefits = ["Home office flexível", "Plano de carreira estruturado", "Treinamentos e certificações", "Ambiente colaborativo", "Inovação constante", "Diversidade e Inclusão", "Tecnologia de ponta"];
  return <div className="min-h-screen bg-background">
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
              Entre em Contato
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Estamos aqui para ajudar você a transformar sua experiência do cliente
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Mail className="h-8 w-8 text-primary" />
              Fale Conosco
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato através dos nossos canais de atendimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`font-medium mb-2 ${
                    info.title === "E-mail" || info.title === "Telefone" || info.title === "Endereço" || info.title === "Horário de Atendimento"
                      ? "text-stratumtec-navy" 
                      : ""
                  }`}>
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Career Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Trabalhe Conosco
            </h2>
            <p className="text-lg text-muted-foreground">
              Faça parte do nosso time e ajude a revolucionar a experiência do cliente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Company Culture */}
            <div>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Cultura da Empresa
                </h3>
                <p className="text-muted-foreground mb-6">
                  Valorizamos a inovação, colaboração e crescimento profissional. 
                  Nossa missão é criar soluções que transformem a experiência do cliente 
                  e impactem positivamente os negócios de nossos clientes.
                </p>
                
                <div className="grid gap-3">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3 p-3 bg-background/80 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Career Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envie seu currículo</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e faça parte do nosso time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCareerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="career-name">Nome completo *</Label>
                      <Input id="career-name" name="name" value={careerForm.name} onChange={handleCareerInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="career-email">E-mail *</Label>
                      <Input id="career-email" name="email" type="email" value={careerForm.email} onChange={handleCareerInputChange} required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="career-phone">Telefone</Label>
                      <Input id="career-phone" name="phone" value={careerForm.phone} onChange={handleCareerInputChange} />
                    </div>
                    <div>
                      <Label htmlFor="career-position">Cargo de interesse</Label>
                      <Input id="career-position" name="position" value={careerForm.position} onChange={handleCareerInputChange} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="career-experience">Experiência profissional</Label>
                    <Textarea id="career-experience" name="experience" value={careerForm.experience} onChange={handleCareerInputChange} placeholder="Descreva brevemente sua experiência profissional..." className="min-h-[100px]" />
                  </div>

                  <div>
                    <Label htmlFor="career-message">Mensagem adicional</Label>
                    <Textarea id="career-message" name="message" value={careerForm.message} onChange={handleCareerInputChange} placeholder="Conte-nos mais sobre você e suas motivações..." className="min-h-[100px]" />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Currículo"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPlugin />
    </div>;
};
export default Contact;