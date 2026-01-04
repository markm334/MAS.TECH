import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import MobileBottomNav from "./components/MobileBottomNav";
import DignityAssistant from "./components/DignityAssistant";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Story from "./pages/Story";
import Impact from "./pages/Impact";
import Roadmap from "./pages/Roadmap";
import Invest from "./pages/Invest";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import ExploreTech from "./pages/ExploreTech";
import RequestAccess from "./pages/RequestAccess";
import Caregiver from "./pages/Caregiver";
import RequestDemo from "./pages/RequestDemo";
import Investors from "./pages/partners/Investors";
import HealthcarePartners from "./pages/partners/HealthcarePartners";
import Researchers from "./pages/partners/Researchers";
import NGOs from "./pages/partners/NGOs";
import Government from "./pages/partners/Government";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/story" element={<Story />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/explore-tech" element={<ExploreTech />} />
        <Route path="/request-access" element={<RequestAccess />} />
        <Route path="/caregiver" element={<Caregiver />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/investors" element={<Investors />} />
        <Route path="/partners/healthcare" element={<HealthcarePartners />} />
        <Route path="/partners/researchers" element={<Researchers />} />
        <Route path="/partners/ngos" element={<NGOs />} />
        <Route path="/partners/government" element={<Government />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
        <MobileBottomNav />
        <DignityAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
