import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Home2 from "./pages/Home2.tsx";
import Home3 from "./pages/Home3.tsx";
import Home4 from "./pages/Home4.tsx";
import GS1 from "./pages/GS1.tsx";
import GSF1 from "./pages/GSF1.tsx";
import GSF2 from "./pages/GSF2.tsx";
import GSF3 from "./pages/GSF3.tsx";
import GSF4 from "./pages/GSF4.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/home4" element={<Home4 />} />
          <Route path="/gs1" element={<GS1 />} />
          <Route path="/gsf1" element={<GSF1 />} />
          <Route path="/gsf2" element={<GSF2 />} />
          <Route path="/gsf3" element={<GSF3 />} />
          <Route path="/gsf4" element={<GSF4 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
