import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-abbrivio-ink mb-6">I nostri Servizi</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Siamo gente di mare, e la nostra missione è farti vivere il meglio che questo angolo di paradiso ha da offrire. Con noi, non si tratta solo di noleggio, ma di creare l'esperienza perfetta, su misura per la tua voglia di evasione.
            </p>
          </div>

          <div className="space-y-12">
            {/* Noleggio con Skipper alle Isole Pontine */}
            <section className="bg-secondary/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-abbrivio-ink mb-4">Noleggio con Skipper alle Isole Pontine: la magia è a un tuffo di distanza</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dimentica le guide turistiche: ti portiamo a Ponza, Palmarola e Ventotene con i nostri skipper, che conoscono ogni grotta segreta e ogni caletta nascosta. L'escursione tipo dura un'intera giornata, dalle 9:00 alle 18:00, per darti tutto il tempo di esplorare e rilassarti. Ma se hai esigenze speciali, nessun problema! Offriamo il noleggio in esclusiva con itinerario e orari completamente personalizzabili. Che tu voglia viaggiare in gruppo o vivere un'esperienza più intima, puoi prenotare l'intero gommone o un posto singolo per unirti a un'altra avventura.
              </p>
            </section>

            {/* Escursioni al Circeo */}
            <section className="bg-abbrivio-orange/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-abbrivio-ink mb-4">Escursioni al Circeo: il promontorio non è mai stato così vicino</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Naviga verso uno dei luoghi più iconici della nostra costa. Offriamo escursioni sia di mezza giornata che di giornata intera per farti scoprire le meraviglie del promontorio del Circeo. Potrai ammirare paesaggi mozzafiato, tuffarti in acque cristalline e scoprire angoli di pura bellezza, con la libertà che solo un gommone può darti.
              </p>
            </section>

            {/* Aperitivo al tramonto */}
            <section className="bg-secondary/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-abbrivio-ink mb-4">Aperitivo al tramonto: il finale perfetto per la tua giornata</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cosa c'è di meglio di un tramonto sul mare? Un aperitivo al tramonto, ovviamente! Salpa con noi per due ore di pura magia. Metti la tua playlist preferita, lasciati cullare dalle onde e goditi un aperitivo a base di stuzzichini e bollicine fresche. E per chiudere in bellezza, non può mancare un'ultima, indimenticabile, sosta bagno al calar del sole.
              </p>
            </section>

            {/* Transfer VIP */}
            <section className="bg-abbrivio-orange/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-abbrivio-ink mb-4">Transfer VIP per le isole: il tuo viaggio, le tue regole</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Il tempo è prezioso, e lo sappiamo. Per questo, abbiamo pensato a un servizio di transfer esclusivo e flessibile. Se hai fretta di raggiungere l'isola o vuoi un viaggio senza pensieri, salta a bordo. Ci accorderemo su orario e itinerario, per garantirti un arrivo senza stress e in perfetto stile VIP.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;