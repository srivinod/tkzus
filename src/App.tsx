
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, createContext, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FloatingEnquiryForm from "./components/FloatingEnquiryForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobApplication from "./pages/JobApplication";
import NotFound from "./pages/NotFound";
import MachineLearning from "./pages/service-details/MachineLearning";
import NaturalLanguageProcessing from "./pages/service-details/NaturalLanguageProcessing";
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Create context to manage the form dialog state
export const AppContext = createContext({
  openGetStartedForm: () => {},
});

// ScrollToTop component to handle scroll position on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior when route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}

const AppContent = () => {
  const [getStartedFormOpen, setGetStartedFormOpen] = useState(false);

  const openGetStartedForm = () => {
    setGetStartedFormOpen(true);
  };

  return (
    <AppContext.Provider value={{ openGetStartedForm }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/machine-learning" element={<MachineLearning />} />
            <Route path="/services/natural-language-processing" element={<NaturalLanguageProcessing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/job/:jobId" element={<JobApplication />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        
        {/* Show FloatingWhatsApp only on the home page */}
        {window.location.pathname === '/' && <FloatingWhatsApp phoneNumber="1234567890" />}
        
        <ScrollToTopButton />
        {/* Only show FloatingEnquiryForm on pages other than Home */}
        {window.location.pathname !== '/' && <FloatingEnquiryForm />}
      </div>
    </AppContext.Provider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
