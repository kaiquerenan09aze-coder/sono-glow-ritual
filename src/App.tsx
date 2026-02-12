import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Dashboard from "@/pages/Dashboard";
import Ritual from "@/pages/Ritual";
import Nutrition from "@/pages/Nutrition";
import Challenge from "@/pages/Challenge";
import Hormones from "@/pages/Hormones";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground font-sans antialiased flex justify-center bg-muted/30">
          <div className="w-full max-w-md min-h-screen bg-white shadow-2xl relative flex flex-col">
            <main className="flex-1 p-4 sm:p-6 overflow-y-auto scrollbar-hide">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ritual" element={<Ritual />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/challenge" element={<Challenge />} />
                <Route path="/hormones" element={<Hormones />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Navigation />
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
