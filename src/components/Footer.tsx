import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Facebook,
  ArrowUp,
  Heart
} from "lucide-react";

const footerSections = [
  {
    title: "Empresa",
    links: [
      { name: "Sobre nós", href: "#empresa" },
      { name: "Nossa história", href: "#empresa" },
      { name: "Equipe", href: "#empresa" },
      { name: "Carreiras", href: "#carreiras" }
    ]
  },
  {
    title: "Soluções",
    links: [
      { name: "NCS Technology", href: "#solucoes" },
      { name: "BlueMesh IA", href: "#solucoes" },
      { name: "Data Analytics", href: "#solucoes" },
      { name: "Automação IA", href: "#solucoes" }
    ]
  },
  {
    title: "Conteúdos",
    links: [
      { name: "Blog", href: "#conteudo" },
      { name: "Webinars", href: "#conteudo" },
      { name: "Cases de Sucesso", href: "#conteudo" },
      { name: "Downloads", href: "#conteudo" }
    ]
  },
  {
    title: "Suporte",
    links: [
      { name: "Central de Ajuda", href: "#suporte" },
      { name: "Documentação", href: "#suporte" },
      { name: "Status do Sistema", href: "#suporte" },
      { name: "Contato", href: "#contato" }
    ]
  }
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/stratumtec", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/stratumtec", color: "hover:text-pink-600" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@stratumtec", color: "hover:text-red-600" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/stratumtec", color: "hover:text-blue-700" }
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stratumtec-navy text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white p-3 rounded-full shadow-elevated transition-smooth group"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="container mx-auto px-4 lg:px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/2cfa7eb9-c064-42b8-b3ce-a4793be73521.png"
                alt="stratumtec" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                A <strong>stratumtec</strong> oferece soluções inteligentes em Customer Experience, conectando tecnologia avançada e inovação para criar experiências excepcionais.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/80 hover:text-stratumtec-orange transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                <a href="mailto:sales@stratumtec.com">sales@stratumtec.com</a>
              </div>
              <div className="flex items-center text-white/80 hover:text-stratumtec-orange transition-colors">
                <Phone className="h-5 w-5 mr-3" />
                <a href="tel:+5511993324239">+55 11 99332-4239</a>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Alphaville, SP - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-stratumtec-orange ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-heading font-bold text-lg text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-stratumtec-orange transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-heading font-bold text-xl text-white mb-4">
              Mantenha-se atualizado
            </h4>
            <p className="text-white/80 mb-6">
              Receba insights exclusivos sobre Customer Experience e as últimas tendências em tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-stratumtec-orange focus:border-transparent"
              />
              <Button className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-6 py-3">
                Assinar
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-white/70 text-sm">
              <span>© {currentYear} <strong>stratumtec</strong>. Todos os direitos reservados.</span>
              <Heart className="h-4 w-4 mx-2 text-stratumtec-orange" />
              <span>Feito com paixão por tecnologia</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacidade" className="text-white/70 hover:text-stratumtec-orange transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-white/70 hover:text-stratumtec-orange transition-colors">
                Termos de Uso
              </a>
              <a href="#cookies" className="text-white/70 hover:text-stratumtec-orange transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Awards/Certifications */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xs text-white/50 text-center">
              <div className="font-semibold mb-1">ISO 27001</div>
              <div>Certificado</div>
            </div>
            <div className="text-xs text-white/50 text-center">
              <div className="font-semibold mb-1">AWS Partner</div>
              <div>Advanced Tier</div>
            </div>
            <div className="text-xs text-white/50 text-center">
              <div className="font-semibold mb-1">Microsoft Gold</div>
              <div>Partner</div>
            </div>
            <div className="text-xs text-white/50 text-center">
              <div className="font-semibold mb-1">Salesforce</div>
              <div>Certified</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};