import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import English from "./pages/English";
import Spanish from "./pages/Spanish";
import Company from "./pages/Company";
import Solutions from "./pages/Solutions";
import Consultoria from "./pages/Consultoria";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FuturoIACX from "./pages/blog/FuturoIACX";
import DataIntegration from "./pages/solutions/DataIntegration";
import LeadManagement from "./pages/solutions/LeadManagement";
import ServiceAutomation from "./pages/solutions/ServiceAutomation";
import AIAgents from "./pages/solutions/AIAgents";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <LanguageProvider>
          <Routes>
          <Route path="/" element={<English />} />
          <Route path="/pt" element={<Index />} />
          <Route path="/en" element={<English />} />
          <Route path="/es" element={<Spanish />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/en/company" element={<Company />} />
          <Route path="/es/empresa" element={<Company />} />
           <Route path="/solucoes" element={<Solutions />} />
           <Route path="/en/solutions" element={<Solutions />} />
           <Route path="/es/soluciones" element={<Solutions />} />
           <Route path="/consultoria" element={<Consultoria />} />
           <Route path="/en/consulting" element={<Consultoria />} />
           <Route path="/es/consultoria" element={<Consultoria />} />
           <Route path="/contato" element={<Contact />} />
           <Route path="/en/contact" element={<Contact />} />
           <Route path="/es/contacto" element={<Contact />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/en/blog" element={<Blog />} />
           <Route path="/es/blog" element={<Blog />} />
           <Route path="/blog/:slug" element={<BlogPost />} />
           <Route path="/blog/futuro-ia-cx" element={<FuturoIACX />} />
           <Route path="/solucoes/integracao-dados" element={<DataIntegration />} />
           <Route path="/en/solutions/data-integration" element={<DataIntegration />} />
           <Route path="/es/soluciones/integracion-datos" element={<DataIntegration />} />
           <Route path="/solucoes/gestao-leads" element={<LeadManagement />} />
           <Route path="/en/solutions/lead-management" element={<LeadManagement />} />
           <Route path="/es/soluciones/gestion-leads" element={<LeadManagement />} />
           <Route path="/solucoes/automacao-atendimento" element={<ServiceAutomation />} />
           <Route path="/en/solutions/service-automation" element={<ServiceAutomation />} />
           <Route path="/es/soluciones/automatizacion-atencion" element={<ServiceAutomation />} />
           <Route path="/solucoes/agentes-ia" element={<AIAgents />} />
           <Route path="/en/solutions/ai-agents" element={<AIAgents />} />
           <Route path="/es/soluciones/agentes-ia" element={<AIAgents />} />
           <Route path="/en/blog/:slug" element={<BlogPost />} />
           <Route path="/es/blog/:slug" element={<BlogPost />} />
           <Route path="/pt/privacidade" element={<PrivacyPolicy />} />
           <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/es/privacidad" element={<PrivacyPolicy />} />
           <Route path="/pt/termos-de-uso" element={<TermsOfUse />} />
           <Route path="/en/terms-of-use" element={<TermsOfUse />} />
           <Route path="/es/condiciones-de-uso" element={<TermsOfUse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
