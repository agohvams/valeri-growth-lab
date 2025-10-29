import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Delivery from "./pages/Delivery";
import Returns from "./pages/Returns";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainability";
import StudentDiscount from "./pages/StudentDiscount";
import KickstarterPitch from "./pages/KickstarterPitch";
import InvestorPitch from "./pages/InvestorPitch";
import GrowthLoanPitch from "./pages/GrowthLoanPitch";
import SauceBranding from "./pages/SauceBranding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/student-discount" element={<StudentDiscount />} />
          <Route path="/kickstarter-pitch" element={<KickstarterPitch />} />
          <Route path="/investor-pitch" element={<InvestorPitch />} />
          <Route path="/growth-loan-pitch" element={<GrowthLoanPitch />} />
          <Route path="/sauce-branding" element={<SauceBranding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
