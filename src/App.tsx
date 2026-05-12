import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Article imports
import CinqueMotiviTerapia from "./pages/articles/CinqueMotiviTerapia";
import GuidaTreMeraviglie from "./pages/articles/GuidaTreMeraviglie";
import MappaSegreta from "./pages/articles/MappaSegreta";
import CosaFareTerracina from "./pages/articles/CosaFareTerracina";
import DecalogoNavigante from "./pages/articles/DecalogoNavigante";
import PrimoSoleTuffo from "./pages/articles/PrimoSoleTuffo";
import PrenotareGommonePerfetto from "./pages/articles/PrenotareGommonePerfetto";
import EscapeOrdinary from "./pages/articles/EscapeOrdinary";
import ScrivaniaPrendisole from "./pages/articles/ScrivaniaPrendisole";
import CinqueMotiviCostume from "./pages/articles/CinqueMotiviCostume";
import MasterSacs from "./pages/articles/MasterSacs";
import DietroQuinte from "./pages/articles/DietroQuinte";
import BordoTutto from "./pages/articles/BordoTutto";
import IsolaPonza from "./pages/articles/IsolaPonza";
import PalmarolaRegina from "./pages/articles/PalmarolaRegina";
import PromontorioCirceo from "./pages/articles/PromontorioCirceo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flotta" element={<Fleet />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/prenota" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Blog Articles */}
          <Route path="/blog/5-motivi-gommone-terapia" element={<CinqueMotiviTerapia />} />
          <Route path="/blog/guida-3-meraviglie-riviera" element={<GuidaTreMeraviglie />} />
          <Route path="/blog/mappa-segreta-10-calette-ponza" element={<MappaSegreta />} />
          <Route path="/blog/cosa-fare-terracina-prima-salpare" element={<CosaFareTerracina />} />
          <Route path="/blog/decalogo-perfetto-navigante" element={<DecalogoNavigante />} />
          <Route path="/blog/primo-sole-primo-tuffo-inizio-stagione" element={<PrimoSoleTuffo />} />
          <Route path="/blog/prenotare-gommone-perfetto-guida-servizi" element={<PrenotareGommonePerfetto />} />
          <Route path="/blog/escape-ordinary-mare-nuovo-viaggio" element={<EscapeOrdinary />} />
          <Route path="/blog/scrivania-prendisole-gommone-cambiare-settimana" element={<ScrivaniaPrendisole />} />
          <Route path="/blog/5-motivi-vita-meglio-costume-bagno" element={<CinqueMotiviCostume />} />
          <Route path="/blog/master-sacs-quale-gommone-scegliere" element={<MasterSacs />} />
          <Route path="/blog/dietro-quinte-prepariamo-gommoni-esperienza-perfetta" element={<DietroQuinte />} />
          <Route path="/blog/bordo-tutto-acqua-dolce-sound-comfort" element={<BordoTutto />} />
          <Route path="/blog/isola-ponza-storia-mito-5-meraviglie" element={<IsolaPonza />} />
          <Route path="/blog/palmarola-regina-mare-storia-leggende" element={<PalmarolaRegina />} />
          <Route path="/blog/promontorio-circeo-natura-mito-ulisse" element={<PromontorioCirceo />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
