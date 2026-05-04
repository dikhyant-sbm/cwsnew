import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Methodology from "./pages/Methodology.tsx";
import AgencyPartners from "./pages/AgencyPartners.tsx";
import Resources from "./pages/Resources.tsx";
import RequestAudit from "./pages/RequestAudit.tsx";
import Services from "./pages/Services.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import JobBoardAISearch from "./pages/case-studies/JobBoardAISearch.tsx";
import AISearchOptimization from "./pages/AISearchOptimization.tsx";
import EmbeddingLevelGEO from "./pages/resources/EmbeddingLevelGEO.tsx";
import About from "./pages/About.tsx";
import Careers from "./pages/Careers.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/agency-partners" element={<AgencyPartners />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/request-audit" element={<RequestAudit />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/job-board-ai-search" element={<JobBoardAISearch />} />
            <Route path="/ai-search-optimization" element={<AISearchOptimization />} />
            <Route path="/resources/embedding-level-geo" element={<EmbeddingLevelGEO />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
