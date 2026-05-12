import ArticleTemplate from "./ArticleTemplate";
import gommoneImg from "@/assets/gommone.jpg";

const MasterSacs = () => {
  return (
    <ArticleTemplate 
      title="Quale gommone scegliere per la tua avventura?"
      category="Mezzi"
      heroImage={gommoneImg}
    >
      <p className="lead">
        Il richiamo del mare, il profilo del Monte Circeo che si staglia all'orizzonte e quella voglia irrefrenabile di tuffarsi nel blu cobalto delle Isole Pontine. Organizzare un'uscita in mare è il sogno di ogni estate, ma per trasformare una semplice giornata in un'esperienza memorabile, la scelta del mezzo è fondamentale.
      </p>

      <p>
        Che tu stia pianificando una fuga romantica o un'escursione adrenalinica con gli amici, capire quale gommone scegliere per la tua avventura è il primo passo per navigare senza pensieri.
      </p>

      <h2>La libertà a portata di mano: barca senza patente al Circeo</h2>

      <p>
        Se non hai la patente nautica ma non vuoi rinunciare al piacere di essere tu il capitano, la soluzione ideale è il noleggio di una barca senza patente, tecnicamente si chiama locazione.
      </p>

      <p>
        Queste imbarcazioni sono progettate per essere estremamente maneggevoli e sicure, ideali per chi vuole esplorare il sottocosta del Circeo. È la scelta perfetta per le coppie o le piccole famiglie che desiderano intimità e relax. Potrai navigare a ritmo lento, ammirando la maestosità della Grotta delle Capre, un anfratto leggendario dove la roccia sembra raccontare storie millenarie, o fermarti per un bagno rigenerante dove l'acqua è più cristallina.
      </p>

      <h2>Noleggio gommone per Ponza e Palmarola: potenza e comfort con skipper</h2>

      <p>
        Quando l'obiettivo si sposta verso l'orizzonte e le mete diventano Ponza e Palmarola, il gioco si fa serio. Per affrontare la traversata in totale sicurezza e godersi ogni istante senza lo stress della navigazione o dell'ancoraggio, la scelta ricade inevitabilmente sui gommoni dai 150 ai 300 cv con skipper.
      </p>

      <h3>Perché scegliere un gommone con skipper?</h3>

      <ul>
        <li><strong>Potenza e Velocità:</strong> Con motorizzazioni che variano dai 150 ai 300 cavalli, queste unità permettono di raggiungere le isole in tempi brevi, massimizzando il tempo a disposizione per i bagni e l'esplorazione.</li>
        <li><strong>Zero Stress:</strong> La gestione delle correnti, del meteo e delle delicate manovre d'ormeggio nelle calette più affollate è affidata a professionisti esperti.</li>
        <li><strong>Conoscenza del Territorio:</strong> Uno skipper non è solo un conducente, ma una guida che ti porterà nei punti meno battuti, lontano dal turismo di massa.</li>
      </ul>

      <p>
        Il noleggio gommone per Ponza ti permetterà di ammirare la celebre spiaggia di Chiaia di Luna da una prospettiva privilegiata, o di navigare sotto i maestosi Faraglioni di Palmarola, giganti di roccia che emergono dal mare come guardiani dell'isola.
      </p>

      <h2>Sicurezza e Serietà: il nostro marchio di fabbrica</h2>

      <p>
        In mare la bellezza è nulla senza la sicurezza. La nostra flotta è composta da mezzi, costantemente revisionati e dotati di ogni comfort di bordo (ampi prendisole, tendalini per l'ombra, scalette di risalita comode).
      </p>

      <p>
        Quello che ci distingue nel panorama del noleggio al Circeo è la serietà e la cura dei dettagli. Sappiamo che la tua vacanza è preziosa, per questo garantiamo puntualità, assistenza continua e imbarcazioni in condizioni eccellenti. La nostra missione è prenderci cura dei dettagli tecnici affinché tu debba pensare solo a quale crema solare spalmare.
      </p>

      <h2>Guida rapida alla scelta</h2>

      <p>
        Per aiutarti a decidere, ecco un piccolo schema basato sulle tue esigenze:
      </p>

      <ul>
        <li><strong>Coppia o Famiglia (4-5 persone) per esplorazione locale:</strong> Scegli la barca senza patente. Facilità d'uso e autonomia totale per esplorare le grotte del Circeo.</li>
        <li><strong>Gruppo (fino a 8-10 persone) per Ponza o Palmarola:</strong> Punta sul gommone da 150 fino a 300 cv con skipper. Ottimo rapporto tra spazio, velocità e comfort.</li>
      </ul>

      <p>
        Per sapere esattamente cosa fa al caso tuo: chiamaci o scrivici!
      </p>

      <h2>Prenota ora la tua avventura pontina</h2>

      <p>
        Il mare tra il Circeo, Ponza e Palmarola ti aspetta. Non rischiare di restare a terra o di scegliere un mezzo non adatto alle tue esigenze. La nostra esperienza è al tuo servizio per consigliarti l'opzione migliore e garantirti una giornata indimenticabile.
      </p>

      <p>
        Vuoi conoscere la disponibilità per le tue date o ricevere un preventivo personalizzato?
      </p>

      <div className="bg-abbrivio-orange/10 rounded-lg p-8 text-center my-8">
        <p className="text-xl text-abbrivio-ink font-medium mb-4">
          👉 Contattaci subito su WhatsApp
        </p>
        <p className="text-muted-foreground mb-6">
          La tua prossima grande avventura inizia con un semplice messaggio. Ci vediamo in banchina!
        </p>
        <a 
          href="https://wa.me/393342977881?text=Ciao!%20Vorrei%20info%20sulla%20scelta%20del%20gommone%20perfetto" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </ArticleTemplate>
  );
};

export default MasterSacs;
