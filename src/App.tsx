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
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FuturoIACX from "./pages/blog/FuturoIACX";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";
import SolutionsListPage from "./pages/SolutionsListPage";
import SolutionPage from "./pages/SolutionPage";
import PlatformsListPage from "./pages/PlatformsListPage";
import PlatformPage from "./pages/PlatformPage";
import ServicesListPage from "./pages/ServicesListPage";
import ServicePage from "./pages/ServicePage";

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
            {/* Home */}
            <Route path="/" element={<English />} />
            <Route path="/pt" element={<Index />} />
            <Route path="/en" element={<English />} />
            <Route path="/es" element={<Spanish />} />

            {/* Company / About */}
            <Route path="/pt/empresa" element={<Company />} />
            <Route path="/en/company" element={<Company />} />
            <Route path="/es/empresa" element={<Company />} />
            {/* Legacy */}
            <Route path="/empresa" element={<Company />} />

            {/* Solutions list */}
            <Route path="/pt/solucoes" element={<SolutionsListPage />} />
            <Route path="/en/solutions" element={<SolutionsListPage />} />
            <Route path="/es/soluciones" element={<SolutionsListPage />} />
            <Route path="/solucoes" element={<SolutionsListPage />} />

            {/* Individual solutions */}
            <Route path="/pt/solucoes/:slug" element={<SolutionPage />} />
            <Route path="/en/solutions/:slug" element={<SolutionPage />} />
            <Route path="/es/soluciones/:slug" element={<SolutionPage />} />

            {/* Platforms list */}
            <Route path="/pt/plataformas" element={<PlatformsListPage />} />
            <Route path="/en/platforms" element={<PlatformsListPage />} />
            <Route path="/es/plataformas" element={<PlatformsListPage />} />

            {/* Individual platforms */}
            <Route path="/pt/plataformas/:slug" element={<PlatformPage />} />
            <Route path="/en/platforms/:slug" element={<PlatformPage />} />
            <Route path="/es/plataformas/:slug" element={<PlatformPage />} />

            {/* Services list */}
            <Route path="/pt/servicos" element={<ServicesListPage />} />
            <Route path="/en/services" element={<ServicesListPage />} />
            <Route path="/es/servicios" element={<ServicesListPage />} />

            {/* Individual services */}
            <Route path="/pt/servicos/:slug" element={<ServicePage />} />
            <Route path="/en/services/:slug" element={<ServicePage />} />
            <Route path="/es/servicios/:slug" element={<ServicePage />} />

            {/* Contact */}
            <Route path="/pt/contato" element={<Contact />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/es/contacto" element={<Contact />} />
            <Route path="/contato" element={<Contact />} />

            {/* Blog */}
            <Route path="/pt/blog" element={<Blog />} />
            <Route path="/en/blog" element={<Blog />} />
            <Route path="/es/blog" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/futuro-ia-cx" element={<FuturoIACX />} />
            <Route path="/en/blog/:slug" element={<BlogPost />} />
            <Route path="/es/blog/:slug" element={<BlogPost />} />
            <Route path="/pt/blog/:slug" element={<BlogPost />} />

            {/* Legal */}
            <Route path="/pt/privacidade" element={<PrivacyPolicy />} />
            <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/es/privacidad" element={<PrivacyPolicy />} />
            <Route path="/pt/termos-de-uso" element={<TermsOfUse />} />
            <Route path="/en/terms-of-use" element={<TermsOfUse />} />
            <Route path="/es/condiciones-de-uso" element={<TermsOfUse />} />

            {/* Legacy redirects */}
            <Route path="/consultoria" element={<ServicesListPage />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
