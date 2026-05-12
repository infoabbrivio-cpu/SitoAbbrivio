import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 bg-abbrivio-orange/5">
        <div className="container mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-abbrivio-ink mb-6 text-center">FAQ</h1>
          <p className="text-xl text-center text-muted-foreground mb-8">
            Tutto quello che ti stai chiedendo prima di mollare gli ormeggi 🚤🌊
          </p>
          
          <div className="space-y-4 text-left">
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">1. Devo avere la patente nautica?</h3>
              <p className="text-muted-foreground">
                Nope. Da ABBRIVIO lo skipper è sempre incluso: tu ti godi il mare, lui/lei si occupa di rotta, ancoraggi e ormeggi.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">2. Che differenza fa avere lo skipper?</h3>
              <p className="text-muted-foreground">
                Tutta. Significa che non devi preoccuparti di nulla: non ti perdi nei dettagli tecnici, non rischi con il meteo, e soprattutto scopri i posti più belli grazie a chi il mare lo conosce davvero.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">3. Posso personalizzare l'itinerario?</h3>
              <p className="text-muted-foreground">
                Certo! Non abbiamo pacchetti rigidi: decidi se vuoi tuffarti nelle grotte del Circeo, prendere il sole a Palmarola, fare un aperitivo al tramonto a Ponza… oppure semplicemente un giretto di un paio d'ore con tuffo e drink vista mare.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">4. Quanto dura un'escursione?</h3>
              <p className="text-muted-foreground">
                Da un paio d'ore (giusto il tempo per un brindisi al tramonto e un tuffo rinfrescante) fino a una giornata intera o una mini-crociera di più giorni. A te la scelta.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">5. Cosa devo portare a bordo?</h3>
              <p className="text-muted-foreground mb-2">Consigliatissimo portare:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>acqua extra (fidati, il sole picchia! ☀️)</li>
                <li>cappellino</li>
                <li>crema solare</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Per il resto ci pensiamo noi: musica, relax e avventura sono già inclusi.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">6. E se il tempo è brutto?</h3>
              <p className="text-muted-foreground">
                Siamo gente di mare: niente rischi inutili. In caso di condizioni meteo non sicure, spostiamo o rimborsiamo. Relax e sicurezza prima di tutto.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">7. Posso portare da mangiare e bere?</h3>
              <p className="text-muted-foreground">
                Assolutamente sì! Puoi portare il tuo picnic oppure chiedere a noi di organizzarti un aperitivo vista tramonto direttamente a bordo.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">8. Quante persone possono salire sul gommone?</h3>
              <p className="text-muted-foreground">
                Dipende dal gommone che scegliamo insieme, ma in generale c'è spazio per piccoli gruppi di amici o coppie che vogliono vivere un'esperienza privata.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-abbrivio-ink mb-2">9. Perché ABBRIVIO?</h3>
              <p className="text-muted-foreground">
                Perché non affitti un mezzo, vivi un'esperienza. Skipper incluso, itinerari su misura, cordialità e quella sensazione di libertà che ti resta addosso anche quando torni a terra.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;