import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import ScrollRevealCard from "@/components/ScrollRevealCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ventoteneImage from "@/assets/ventotene-tuffo.jpg";
import palmarolaZannoneImage from "@/assets/palmarola-zannone.jpg";
import ponzaPalmароlaImage from "@/assets/ponza-palmarola.jpg";
import ponzaZannoneImage from "@/assets/ponza-zannone.jpg";
import crocieraMultiGiorniImage from "@/assets/crociera-multi-giorni.jpg";
import aperitivoTramontoImage from "@/assets/aperitivo-tramonto.png";
import promontorioCirceoImage from "@/assets/promontorio-circeo.png";
import master7MetriImage from "@/assets/master-7-metri.jpg";
import sacs8MetriImage from "@/assets/sacs-8-metri.jpg";
import esciInFlottigiaImage from "@/assets/esci-in-flottiglia.jpg";
import ponzaDaPalmароlaImage from "@/assets/ponza-da-palmarola.jpg";
import arkos537Image from "@/assets/arkos-537.png";
import clubman24Image from "@/assets/clubman-24.png";
const Index = () => {
  const location = useLocation();
  useEffect(() => {
    // Handle scroll to section when navigating with hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);
  return <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section className="bg-background">
        <GoogleReviews />
      </section>
      
      <section id="esperienze" className="py-12 bg-abbrivio-orange/5">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-abbrivio-ink mb-4">6 esperienze uniche per vivere la Riviera di Ulisse</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Scegli la tua preferita!</p>
          </div>
          
          {/* Mosaico Itinerari con animazioni premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Ponza & Palmarola */}
            <ScrollRevealCard delay={0} direction="left" className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <img src={ponzaPalmароlaImage} alt="Ponza & Palmarola - Acque cristalline e formazioni rocciose" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center drop-shadow-lg">Ponza & Palmarola</h3>
                  <p className="text-white text-sm text-center drop-shadow-lg mt-1">Le perle del Mediterraneo</p>
                </div>
              </div>
            </ScrollRevealCard>

            {/* Ventotene */}
            <ScrollRevealCard delay={80} direction="right" className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-400 to-emerald-600 relative">
                <img src={ventoteneImage} alt="Ventotene - Tuffo in acque cristalline" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center drop-shadow-lg">Esplora Ventotene</h3>
                  <p className="text-white text-sm text-center drop-shadow-lg mt-1">Storia e mare blu cobalto</p>
                </div>
              </div>
            </ScrollRevealCard>

            {/* Ponza e Zannone */}
            <ScrollRevealCard delay={160} direction="left" className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan-400 to-cyan-600 relative">
                <img src={ponzaZannoneImage} alt="Ponza e Zannone - Gommone con persone che fanno il bagno" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center drop-shadow-lg">Ponza & Zannone</h3>
                  <p className="text-white text-sm text-center drop-shadow-lg mt-1">Calette segrete e natura</p>
                </div>
              </div>
            </ScrollRevealCard>

            {/* Promontorio del Circeo */}
            <ScrollRevealCard delay={120} direction="right" className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-400 to-orange-600 relative">
                <img src={promontorioCirceoImage} alt="Promontorio del Circeo - Tuffo in mare cristallino" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center drop-shadow-lg">Promontorio del Circeo</h3>
                  <p className="text-white text-sm text-center drop-shadow-lg mt-1">Miti e Grotte della Maga Circe</p>
                </div>
              </div>
            </ScrollRevealCard>

            {/* Crociera di più giorni */}
            <ScrollRevealCard delay={200} direction="left" className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-400 to-purple-600 relative">
                <img src={crocieraMultiGiorniImage} alt="Crociera di più giorni - Persone che si rilassano su materassini in mare cristallino" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center drop-shadow-lg">Crociera di più giorni</h3>
                  <p className="text-white text-sm text-center drop-shadow-lg mt-1">Un'avventura senza confini</p>
                </div>
              </div>
            </ScrollRevealCard>

            {/* Aperitivo */}
            <ScrollRevealCard delay={280} direction="right" className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-400 to-pink-600 relative">
                <img src={aperitivoTramontoImage} alt="Aperitivo al tramonto - Brindisi in gommone al tramonto" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center drop-shadow-lg">Aperitivo al Tramonto</h3>
                  <p className="text-white text-sm text-center drop-shadow-lg mt-1">Quando il sole si tuffa nel mare</p>
                </div>
              </div>
            </ScrollRevealCard>
          </div>

          <div className="text-center">
            <Button asChild>
              <Link to="/prenota">Prenota ora</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="fleet" className="py-12 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-abbrivio-ink mb-4">La nostra Flotta</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">I nostri gommoni sono più di un semplice mezzo: sono la chiave per la tua vacanza da sogno in mare.

          </p>
            <p className="text-lg text-muted-foreground leading-relaxed">

Che tu stia pianificando un'avventura con gli amici o una giornata di puro relax, troverai la soluzione perfetta per le tue esigenze.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {/* Arkos 5,4 metri */}
            <ScrollRevealCard delay={0} direction="left" className="bg-card rounded-xl overflow-hidden shadow-lg w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-400 to-amber-600 relative overflow-hidden group">
                <img src={arkos537Image} alt="Arkos 5,4 metri - Barca senza patente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">Arkos 5,4 metri</h3>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground leading-relaxed">Si può portare senza patente! Con i suoi "40 CV" è ideale per mezze giornate o giornate intere al promontorio del Circeo o a Terracina. Capienza massima 6 persone.</p>
              </div>
            </ScrollRevealCard>

            {/* Master 7 metri */}
            <ScrollRevealCard delay={80} direction="right" className="bg-card rounded-xl overflow-hidden shadow-lg w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan-400 to-cyan-600 relative overflow-hidden group">
                <img src={master7MetriImage} alt="Master 7 metri - Gommone Master in mare cristallino" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">Master 7 metri</h3>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground leading-relaxed">Comodissimo per gruppi fino a 6 persone, è il mezzo perfetto per condividere risate, tuffi e momenti indimenticabili con le persone che ami di più.</p>
                <p className="text-muted-foreground leading-relaxed mt-2">La scelta giusta per chi cerca un'esperienza di navigazione vivace e divertente.</p>
              </div>
            </ScrollRevealCard>

            {/* Joker Boat 7,5 metri */}
            <ScrollRevealCard delay={160} direction="left" className="bg-card rounded-xl overflow-hidden shadow-lg w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden group">
                <img src={clubman24Image} alt="Joker Boat 7,5 metri - Gommone Clubman con bagno" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">Joker Boat 7,5 metri</h3>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground leading-relaxed">Il Gommone con anche il bagno! Comodità senza eguali sia per confort che per tenuta del mare. Ideale fino a 7 persone.</p>
              </div>
            </ScrollRevealCard>

            {/* Sacs 8 metri */}
            <ScrollRevealCard delay={120} direction="right" className="bg-card rounded-xl overflow-hidden shadow-lg w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden group">
                <img src={sacs8MetriImage} alt="Sacs 8 metri - Gommone Sacs ormeggiato al porto" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">Sacs 8 metri</h3>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground leading-relaxed">Con una capienza di assolutà comodità fino a 8 persone, offre tutto lo spazio e il comfort per una giornata di sole, bagni e risate.</p>
                <p className="text-muted-foreground leading-relaxed mt-2">Ideale Per chi vuole condividere momenti indimenticabili con amici e famiglia.</p>
              </div>
            </ScrollRevealCard>

            {/* Esci in Flottiglia */}
            <ScrollRevealCard delay={200} direction="left" className="bg-card rounded-xl overflow-hidden shadow-lg w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden group">
                <img src={esciInFlottigiaImage} alt="Esci in Flottiglia - Gommoni in flottiglia con persone che si divertono" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">Esci in Flottiglia</h3>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground leading-relaxed">Vuoi condividere l'avventura con un gruppo fino a 15 persone, creando ricordi che dureranno per sempre? Esci in flottiglia con entrambi i gommoni e sarà una giornata super!</p>
              </div>
            </ScrollRevealCard>
          </div>

          <div className="text-center">
            <Button asChild>
              <Link to="/flotta">Scopri la nostra flotta</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="services" className="py-12 bg-abbrivio-orange/5 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${ponzaDaPalmароlaImage})`
      }}>
          <div className="absolute inset-0 bg-white/30"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">I nostri Servizi</h2>
          <p className="text-lg text-gray-900 font-semibold leading-relaxed mb-6 text-left max-w-3xl mx-auto whitespace-pre-line">
            Siamo pronti a farti vivere il mare in modalità WOW! Scegli l'esperienza su misura, perfetta per te: - Noleggio con skipper per le Isole Pontine (Ponza, Palmarola, Ventotene): la magia è a un tuffo di distanza; - Esplorazioni al Circeo: il promontorio non è mai stato così vicino; - Aperitivi al tramonto: il finale perfetto per la tua giornata; - Transfer VIP per le isole: il tuo viaggio, le tue regole. Noleggia il gommone in esclusiva o prenota il tuo posto. Il mare ti aspetta.{"\n\n"}
            Scegli l'esperienza perfetta per te:{"\n"}
            - noleggio con skipper per le Isole Pontine (Ponza, Palmarola, Ventotene);{"\n"}
            - esplorazioni del Circeo;{"\n"}
            - aperitivi al tramonto con stuzzichini e bollicine;{"\n"}
            - transfer VIP rapidi e su misura.{"\n\n"}
            Noleggia il gommone in esclusiva o prenota il tuo posto.{"\n"}
            Il mare ti aspetta.
          </p>
          <div className="text-center">
            <Button asChild>
              <Link to="/servizi">Scopri i nostri servizi</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="about" className="py-12 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-abbrivio-ink mb-8 text-center">Chi siamo</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">Siamo ABBRIVIO: La tua avventura in mare.</p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Nasciamo dalla <strong>passione per il mare</strong> e dal desiderio di condividere con te la magia delle Isole Pontine. Da Terracina, ti accompagniamo in un'<strong>esperienza unica e personalizzata</strong> a bordo dei nostri gommoni, pensata per farti vivere un'indimenticabile giornata di libertà e divertimento.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-center text-lg">Con noi non noleggi solo un gommone: scopri la sicurezza di avere a bordo uno skipper esperto e la libertà di creare il tuo itinerario ideale.
            <br />
            <br />
            Non rimandare: <strong>prenota ora</strong> la tua giornata in mare.</p>
            
            <div className="text-center mt-8">
              <Button asChild>
                <Link to="/chi-siamo">Scopri di più su di noi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="faq" className="py-8 bg-abbrivio-orange/5">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-abbrivio-ink mb-6 text-center">FAQ</h2>
          <p className="text-xl text-center text-muted-foreground mb-8">
            Le domande più frequenti sui nostri servizi
          </p>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto -space-y-2">
            <AccordionItem value="item-1" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Devo avere la patente nautica?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Da ABBRIVIO lo skipper è sempre incluso: tu ti godi il mare, lui/lei si occupa di rotta, ancoraggi e ormeggi.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Che differenza fa avere lo skipper?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tutta. Significa che non devi preoccuparti di nulla: non ti perdi nei dettagli tecnici, non rischi con il meteo, e soprattutto scopri i posti più belli grazie a chi il mare lo conosce davvero.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Posso personalizzare l'itinerario?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Certo! Non abbiamo pacchetti rigidi: decidi se vuoi tuffarti nelle grotte del Circeo, prendere il sole a Palmarola, fare un aperitivo al tramonto a Ponza… oppure semplicemente un giretto di un paio d'ore con tuffo e drink vista mare.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Quanto dura un'escursione?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Da un paio d'ore (giusto il tempo per un brindisi al tramonto e un tuffo rinfrescante) fino a una giornata intera o una mini-crociera di più giorni. A te la scelta.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Cosa devo portare a bordo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">Consigliatissimo portare:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>acqua extra (fidati, il sole picchia! ☀️)</li>
                  <li>cappellino</li>
                  <li>crema solare</li>
                </ul>
                <p className="mt-2">Per il resto ci pensiamo noi: musica, relax e avventura sono già inclusi.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                E se il tempo è brutto?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Siamo gente di mare: niente rischi inutili. In caso di condizioni meteo non sicure, spostiamo o rimborsiamo. Relax e sicurezza prima di tutto.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Posso portare da mangiare e bere?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Assolutamente sì! Puoi portare il tuo picnic oppure chiedere a noi di organizzarti un aperitivo vista tramonto direttamente a bordo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Quante persone possono salire sul gommone?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Dipende dal gommone che scegliamo insieme, ma in generale c'è spazio per piccoli gruppi di amici o coppie che vogliono vivere un'esperienza privata.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9" className="bg-secondary/30 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold text-abbrivio-ink hover:no-underline text-left">
                Perché ABBRIVIO?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Perché non affitti un mezzo, vivi un'esperienza. Skipper incluso, itinerari su misura, cordialità e quella sensazione di libertà che ti resta addosso anche quando torni a terra.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;