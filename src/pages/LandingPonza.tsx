import { Link } from "react-router-dom";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import ScrollRevealCard from "@/components/ScrollRevealCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Importiamo le immagini che hai già a disposizione
import ponzaPalmароlaImage from "@/assets/ponza-palmarola.jpg";
import master7MetriImage from "@/assets/master-7-metri.jpg";
import sacs8MetriImage from "@/assets/sacs-8-metri.jpg";

const LandingPonza = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* HEADER MINIMALE PER LE ADS (Senza menu, solo Logo e CTA) */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-6">
          <Link to="/" className="text-2xl font-bold text-abbrivio-ink">
            ABBRIVIO
          </Link>
          <Button asChild>
            <Link to="/prenota">Prenota Ora</Link>
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 flex items-center justify-center min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ponzaPalmароlaImage} 
            alt="Escursione a Ponza in Gommone" 
            className="w-full h-full object-cover"
          />
          {/* Overlay scuro per far leggere bene il testo bianco */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Scopri Ponza e Palmarola in Gommone
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md font-medium">
            Vivi un'esperienza indimenticabile: acque cristalline, calette segrete e zero stress. Skipper e carburante possono essere inclusi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/prenota">Verifica Disponibilità</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - Recensioni */}
      <section className="bg-background py-8">
        <div className="container mx-auto max-w-6xl px-6 text-center mb-4">
          <p className="text-lg font-semibold text-abbrivio-ink">Scelti da centinaia di avventurieri soddisfatti</p>
        </div>
        <GoogleReviews />
      </section>

      {/* PERCHÈ SCEGLIERCI (Vantaggi) */}
      <section className="py-16 bg-abbrivio-orange/5">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-abbrivio-ink mb-4">La tua giornata perfetta in Mare</h2>
            <p className="text-lg text-muted-foreground">Tutto quello che serve per farti vivere un'esperienza in totale relax.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-abbrivio-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⚓️</div>
              <h3 className="text-xl font-bold text-abbrivio-ink mb-2">Skipper Esperto</h3>
              <p className="text-muted-foreground">Nessuna patente nautica richiesta. Affidati a chi conosce le isole come le proprie tasche.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-abbrivio-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🗺️</div>
              <h3 className="text-xl font-bold text-abbrivio-ink mb-2">Itinerari su Misura</h3>
              <p className="text-muted-foreground">Decidi tu il ritmo: più tempo per lo snorkeling, o un tour completo delle calette più belle.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-abbrivio-navy/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🥂</div>
              <h3 className="text-xl font-bold text-abbrivio-ink mb-2">Comfort Assoluto</h3>
              <p className="text-muted-foreground">Gommoni spaziosi, musica, tendalino per l'ombra e possibilità di aperitivo a bordo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* I MEZZI IDEALI PER PONZA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-abbrivio-ink mb-4">I Gommoni ideali per questa rotta</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* Master 7 metri */}
            <ScrollRevealCard delay={0} direction="left" className="bg-card rounded-xl overflow-hidden shadow-lg w-full md:w-[calc(50%-12px)] transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-[4/3] relative overflow-hidden group">
                <img src={master7MetriImage} alt="Master 7 metri" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">Master 7 metri</h3>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground">Comodissimo per gruppi fino a 6 persone, perfetto per la traversata fino a Ponza in modo rapido e divertente.</p>
              </div>
            </ScrollRevealCard>

            {/* Sacs 8 metri */}
            <ScrollRevealCard delay={100} direction="right" className="bg-card rounded-xl overflow-hidden shadow-lg w-full md:w-[calc(50%-12px)] transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-[4/3] relative overflow-hidden group">
                <img src={sacs8MetriImage} alt="Sacs 8 metri" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">Sacs 8 metri</h3>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground">Il massimo del comfort. Fino a 8 persone con spazi enormi per prendere il sole e godersi la giornata alle isole.</p>
              </div>
            </ScrollRevealCard>
          </div>
        </div>
      </section>

      {/* FAQ SPECIFICHE PER LA LANDING */}
      <section className="py-16 bg-abbrivio-orange/5">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-abbrivio-ink mb-8 text-center">Domande Frequenti</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto -space-y-2">
            <AccordionItem value="item-1" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Da dove si parte per andare a Ponza?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Partiamo comodamente dal porto di Terracina. La navigazione verso le Isole Pontine è rapida e piacevole a bordo dei nostri gommoni.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Cosa è incluso nel prezzo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Il noleggio del gommone in esclusiva per te e il tuo gruppo. Il costo dello skipper e del carburante varia in base all'itinerario scelto e ti verrà comunicato in fase di preventivo con la massima trasparenza.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/prenota">Prenota la tua escursione</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER STANDARD */}
      <Footer />
    </div>
  );
};

export default LandingPonza;
