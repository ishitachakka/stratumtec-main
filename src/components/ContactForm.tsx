import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";

export const ContactForm = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = pageTranslations[language].contactForm;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", subject: "", message: "" });

  const contactInfo = [
    { icon: Mail, title: t.email, content: "jomon@stratumtec.com", link: "mailto:jomon@stratumtec.com" },
    { icon: Phone, title: t.phone, content: t.phoneValue, link: t.phoneLink },
    { icon: MapPin, title: t.address, content: t.addressValue, link: "#" },
    { icon: Clock, title: t.hours, content: t.hoursValue, subContent: t.hoursDetail, link: "#" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({ title: t.successTitle, description: t.successDesc, action: <CheckCircle className="h-4 w-4 text-green-600" /> });
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    } catch {
      toast({ title: t.errorTitle, description: t.errorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-stratumtec-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16" id="vamos-conversar">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-navy mb-6">{t.headerTitle}</h2>
          <p className="text-xl text-stratumtec-text max-w-3xl mx-auto leading-relaxed">{t.headerSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy mb-6">{t.contactUs}</h3>
              <p className="text-lg text-stratumtec-text mb-8 leading-relaxed">{t.contactDesc}</p>
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
                          <div className="font-heading font-semibold text-stratumtec-navy mb-1">{info.title}</div>
                          <div className="text-stratumtec-text">{info.content}</div>
                          {(info as any).subContent && <div className="text-stratumtec-text text-sm">{(info as any).subContent}</div>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="space-y-4">
              <Card className="border-0 shadow-card bg-white">
                <CardContent className="p-6">
                  <h4 className="font-heading font-bold text-stratumtec-navy mb-2">{t.quickResponse}</h4>
                  <p className="text-stratumtec-text mb-4">{t.quickResponseDesc}</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open("https://wa.me/5511912635196", "_blank")}>
                    <Phone className="h-4 w-4 mr-2" />WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-elevated bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-stratumtec-navy">{t.requestQuote}</CardTitle>
                <CardDescription className="text-stratumtec-text">{t.formDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-stratumtec-navy font-medium">{t.fullName} *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder={t.fullNamePlaceholder} required className="border-border focus:ring-stratumtec-orange" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-stratumtec-navy font-medium">{t.emailLabel} *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder={t.emailPlaceholder} required className="border-border focus:ring-stratumtec-orange" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-stratumtec-navy font-medium">{t.company} *</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder={t.companyPlaceholder} required className="border-border focus:ring-stratumtec-orange" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-stratumtec-navy font-medium">{t.phone}</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder={t.phonePlaceholder} className="border-border focus:ring-stratumtec-orange" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-stratumtec-navy font-medium">{t.subject} *</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder={t.subjectPlaceholder} required className="border-border focus:ring-stratumtec-orange" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-stratumtec-navy font-medium">{t.message} *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder={t.messagePlaceholder} rows={5} required className="border-border focus:ring-stratumtec-orange resize-none" />
                  </div>
                  <Button type="submit" className="w-full bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-semibold py-3 text-lg transition-smooth" disabled={isSubmitting}>
                    {isSubmitting ? (<><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />{t.sending}</>) : (<><Send className="h-5 w-5 mr-2" />{t.sendMessage}</>)}
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
