import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GoogleTranslate from "@/components/GoogleTranslate";
import Index from "./pages/Index";
import ComputerShop from "./pages/shop/ComputerShop";
import PhoneShop from "./pages/shop/PhoneShop";
import HomeShop from "./pages/shop/HomeShop";
import About from "./pages/About";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Terms from "./pages/policies/Terms";
import Shipping from "./pages/policies/Shipping";
import Returns from "./pages/policies/Returns";
import Privacy from "./pages/policies/Privacy";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const AppContent = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop/computer" element={<ComputerShop />} />
      <Route path="/shop/phone" element={<PhoneShop />} />
      <Route path="/shop/home" element={<HomeShop />} />
      <Route path="/about" element={<About />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policies/terms" element={<Terms />} />
      <Route path="/policies/shipping" element={<Shipping />} />
      <Route path="/policies/returns" element={<Returns />} />
      <Route path="/policies/privacy" element={<Privacy />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GoogleTranslate />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
