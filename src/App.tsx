import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Home2 from "./pages/Home2.tsx";
import Home3 from "./pages/Home3.tsx";
import Home4 from "./pages/Home4.tsx";
import Home1 from "./pages/Home1.tsx";
import KittingToolkits from "./pages/KittingToolkits.tsx";
import Kitting1 from "./pages/Kitting1.tsx";
import Kitting2 from "./pages/Kitting2.tsx";

import Certifications from "./pages/Certifications.tsx";
import GovernmentContracting from "./pages/GovernmentContracting.tsx";
import Industries from "./pages/Industries.tsx";
import RfidFod from "./pages/RfidFod.tsx";
import ComplianceLogistics from "./pages/ComplianceLogistics.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home4 />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/old" element={<Index />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/home4" element={<Home4 />} />
          <Route path="/kitting-toolkits" element={<KittingToolkits />} />
          <Route path="/kitting1" element={<Kitting1 />} />
          <Route path="/kitting2" element={<Kitting2 />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/government-contracting" element={<GovernmentContracting />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/rfid-fod" element={<RfidFod />} />
          <Route path="/compliance-logistics" element={<ComplianceLogistics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
