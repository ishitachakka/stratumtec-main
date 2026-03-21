import { useState, type ChangeEvent, type FormEvent } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { Language } from "@/lib/translations";

const contactPageCopy: Record<Language, {
  heroTitle: string;
  heroSubtitle: string;
  talkTitle: string;
  talkSubtitle: string;
  contactCards: Array<{ title: string; content: string; description: string }>;
  careersTitle: string;
  careersSubtitle: string;
  cultureTitle: string;
  cultureDescription: string;
  benefits: string[];
  formTitle: string;
  formDescription: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    position: string;
    experience: string;
    experiencePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
  };
  toast: {
    title: string;
    description: string;
  };
}> = {
  en: {
    heroTitle: "Contact Us",
    heroSubtitle: "We’re here to help transform your customer experience.",
    talkTitle: "Get in Touch",
    talkSubtitle: "Reach out through any of our service channels.",
    contactCards: [
      { title: "Email", content: "jomon@stratumtec.com", description: "Response within 24 hours" },
      { title: "Phone", content: "+55 11 99332-4239", description: "Monday to Friday, 9am to 6pm" },
      { title: "Address", content: "Alameda Rio Negro, 503 - Cj. 2020", description: "Alphaville, SP - Brazil" },
      { title: "Business Hours", content: "Monday to Friday: 9am to 6pm", description: "" },
    ],
    careersTitle: "Work With Us",
    careersSubtitle: "Join our team and help us reshape customer experience.",
    cultureTitle: "Company Culture",
    cultureDescription: "We value innovation, collaboration, and professional growth. Our mission is to build solutions that transform customer experience and create measurable business impact.",
    benefits: [
      "Flexible remote work",
      "Structured career path",
      "Training and certifications",
      "Collaborative environment",
      "Continuous innovation",
      "Diversity and inclusion",
      "Cutting-edge technology",
    ],
    formTitle: "Send your résumé",
    formDescription: "Fill out the form below to apply and join our team.",
    labels: {
      name: "Full name *",
      email: "Email *",
      phone: "Phone",
      position: "Desired role",
      experience: "Professional experience",
      experiencePlaceholder: "Briefly describe your professional experience...",
      message: "Additional message",
      messagePlaceholder: "Tell us more about you and your motivation...",
      submit: "Send Résumé",
      submitting: "Sending...",
    },
    toast: {
      title: "Résumé sent successfully!",
      description: "We’ll get back to you soon.",
    },
  },
  pt: {
    heroTitle: "Entre em Contato",
    heroSubtitle: "Estamos aqui para ajudar você a transformar sua experiência do cliente.",
    talkTitle: "Fale Conosco",
    talkSubtitle: "Entre em contato através dos nossos canais de atendimento.",
    contactCards: [
      { title: "E-mail", content: "jomon@stratumtec.com", description: "Resposta em até 24 horas" },
      { title: "Telefone", content: "+55 11 99332-4239", description: "Segunda a sexta, 9h às 18h" },
      { title: "Endereço", content: "Alameda Rio Negro, 503 - Cj. 2020", description: "Alphaville, SP - Brasil" },
      { title: "Horário de Atendimento", content: "Segunda a Sexta: 9h às 18h", description: "" },
    ],
    careersTitle: "Trabalhe Conosco",
    careersSubtitle: "Faça parte do nosso time e ajude a revolucionar a experiência do cliente.",
    cultureTitle: "Cultura da Empresa",
    cultureDescription: "Valorizamos a inovação, colaboração e crescimento profissional. Nossa missão é criar soluções que transformem a experiência do cliente e impactem positivamente os negócios de nossos clientes.",
    benefits: [
      "Home office flexível",
      "Plano de carreira estruturado",
      "Treinamentos e certificações",
      "Ambiente colaborativo",
      "Inovação constante",
      "Diversidade e Inclusão",
      "Tecnologia de ponta",
    ],
    formTitle: "Envie seu currículo",
    formDescription: "Preencha o formulário abaixo e faça parte do nosso time.",
    labels: {
      name: "Nome completo *",
      email: "E-mail *",
      phone: "Telefone",
      position: "Cargo de interesse",
      experience: "Experiência profissional",
      experiencePlaceholder: "Descreva brevemente sua experiência profissional...",
      message: "Mensagem adicional",
      messagePlaceholder: "Conte-nos mais sobre você e suas motivações...",
      submit: "Enviar Currículo",
      submitting: "Enviando...",
    },
    toast: {
      title: "Currículo enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    },
  },
  es: {
    heroTitle: "Ponte en Contacto",
    heroSubtitle: "Estamos aquí para ayudarte a transformar la experiencia de tus clientes.",
    talkTitle: "Contáctanos",
    talkSubtitle: "Comunícate con nosotros a través de nuestros canales de atención.",
    contactCards: [
      { title: "Correo", content: "jomon@stratumtec.com", description: "Respuesta en hasta 24 horas" },
      { title: "Teléfono", content: "+55 11 99332-4239", description: "Lunes a viernes, 9h a 18h" },
      { title: "Dirección", content: "Alameda Rio Negro, 503 - Cj. 2020", description: "Alphaville, SP - Brasil" },
      { title: "Horario de Atención", content: "Lunes a Viernes: 9h a 18h", description: "" },
    ],
    careersTitle: "Trabaja con Nosotros",
    careersSubtitle: "Únete a nuestro equipo y ayúdanos a revolucionar la experiencia del cliente.",
    cultureTitle: "Cultura de la Empresa",
    cultureDescription: "Valoramos la innovación, la colaboración y el crecimiento profesional. Nuestra misión es crear soluciones que transformen la experiencia del cliente y generen impacto real en los negocios.",
    benefits: [
      "Trabajo remoto flexible",
      "Plan de carrera estructurado",
      "Capacitaciones y certificaciones",
      "Ambiente colaborativo",
      "Innovación constante",
      "Diversidad e inclusión",
      "Tecnología de punta",
    ],
    formTitle: "Envía tu currículum",
    formDescription: "Completa el formulario para aplicar y formar parte de nuestro equipo.",
    labels: {
      name: "Nombre completo *",
      email: "Correo electrónico *",
      phone: "Teléfono",
      position: "Cargo de interés",
      experience: "Experiencia profesional",
      experiencePlaceholder: "Describe brevemente tu experiencia profesional...",
      message: "Mensaje adicional",
      messagePlaceholder: "Cuéntanos más sobre ti y tus motivaciones...",
      submit: "Enviar Currículum",
      submitting: "Enviando...",
    },
    toast: {
      title: "¡Currículum enviado con éxito!",
      description: "Nos pondremos en contacto pronto.",
    },
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const copy = contactPageCopy[language];

  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCareerInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCareerForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCareerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: copy.toast.title,
        description: copy.toast.description,
      });
      setCareerForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactIcons = [Mail, Phone, MapPin, Clock];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stratumtec-navy/5 to-stratumtec-cyan/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-stratumtec-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-stratumtec-cyan/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-6 flex items-end min-h-[200px] relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {copy.heroTitle}
            </h1>
            <p className="text-xl text-white/90 mb-8">{copy.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Mail className="h-8 w-8 text-primary" />
              {copy.talkTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{copy.talkSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {copy.contactCards.map((info, index) => {
              const Icon = contactIcons[index];
              return (
                <Card key={info.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2 text-stratumtec-navy">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              {copy.careersTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{copy.careersSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  {copy.cultureTitle}
                </h3>
                <p className="text-muted-foreground mb-6">{copy.cultureDescription}</p>

                <div className="grid gap-3">
                  {copy.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 p-3 bg-background/80 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{copy.formTitle}</CardTitle>
                <CardDescription>{copy.formDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCareerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="career-name">{copy.labels.name}</Label>
                      <Input id="career-name" name="name" value={careerForm.name} onChange={handleCareerInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="career-email">{copy.labels.email}</Label>
                      <Input id="career-email" name="email" type="email" value={careerForm.email} onChange={handleCareerInputChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="career-phone">{copy.labels.phone}</Label>
                      <Input id="career-phone" name="phone" value={careerForm.phone} onChange={handleCareerInputChange} />
                    </div>
                    <div>
                      <Label htmlFor="career-position">{copy.labels.position}</Label>
                      <Input id="career-position" name="position" value={careerForm.position} onChange={handleCareerInputChange} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="career-experience">{copy.labels.experience}</Label>
                    <Textarea
                      id="career-experience"
                      name="experience"
                      value={careerForm.experience}
                      onChange={handleCareerInputChange}
                      placeholder={copy.labels.experiencePlaceholder}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="career-message">{copy.labels.message}</Label>
                    <Textarea
                      id="career-message"
                      name="message"
                      value={careerForm.message}
                      onChange={handleCareerInputChange}
                      placeholder={copy.labels.messagePlaceholder}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? copy.labels.submitting : copy.labels.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPlugin />
    </div>
  );
};

export default Contact;
