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
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/futuro-ia-cx" element={<FuturoIACX />} />
          <Route path="/en/blog/:slug" element={<BlogPost />} />
          <Route path="/es/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
