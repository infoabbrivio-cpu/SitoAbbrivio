import Header from "@/components/Header";
import Footer from "@/components/Footer";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-abbrivio-ink mb-8">Chi siamo</h1>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">Navigare da Terracina, con il vento tra i capelli e quella sensazione di libertà che solo il mare sa dare.</p>
            
            <p className="text-lg leading-relaxed">È da questa passione profonda che nasce <strong>ABBRIVIO</strong>.</p>
            
            <p className="text-lg leading-relaxed">L'idea è semplice: non volevamo tenere per noi la bellezza e la magia del mare delle Isole Pontine.</p>
            
            <p className="text-lg leading-relaxed">Ricordiamo ancora la prima volta a Ponza: l'acqua incredibilmente trasparente, le calette nascoste, il tramonto indimenticabile.</p>
            
            <p className="text-lg leading-relaxed">Quell'esperienza ci ha convinti che dovevamo offrire a chiunque la possibilità di vivere la stessa emozione.</p>
            
            <p className="text-lg leading-relaxed">Ecco perché con <strong>ABBRIVIO</strong> non noleggi solo un gommone.</p>
            
            <p className="text-lg leading-relaxed"><strong>Ti offriamo un'esperienza pensata su misura per te</strong>, guidata da skipper esperti e in massima sicurezza.</p>
            
            <ul className="text-lg leading-relaxed space-y-4 list-disc pl-6">
              <li>
                <strong>Sicurezza e professionalità</strong>: Mettiamo la tua tranquillità al primo posto.
                
                <p className="mt-2">I nostri gommoni sono sottoposti a continui controlli e dotati di tutte le attrezzature di sicurezza.</p>
                
                <p className="mt-2">A bordo, i nostri skipper sono professionisti qualificati, pronti a garantire una navigazione serena e senza preoccupazioni.</p>
              </li>
              
              <li>
                <strong>Esperienza su misura</strong>: Dimentica i pacchetti standard.
                
                <p className="mt-2">Che tu voglia esplorare calette segrete, fare snorkeling in acque cristalline, brindare al tramonto o semplicemente lasciarti cullare dalle onde, noi siamo qui per realizzare il tuo desiderio.</p>
                
                <p className="mt-2">Raccontaci la tua idea di giornata perfetta e noi la trasformeremo in realtà.</p>
              </li>
              
              <li>
                <strong>Libertà totale</strong>: Lascia a terra lo stress, le notifiche e la routine.
                
                <p className="mt-2">Sali a bordo e riconnettiti con la natura e con te stesso.</p>
              </li>
            </ul>
            
            <p className="text-lg leading-relaxed"><strong>ABBRIVIO</strong> non è solo un servizio, è il momento in cui molli gli ormeggi e inizi davvero a vivere.</p>
            
            <p className="text-lg leading-relaxed">L'avventura ti aspetta!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;