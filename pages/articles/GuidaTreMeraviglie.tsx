import ArticleTemplate from "./ArticleTemplate";
import ponzaPalmarolaCirceo from "@/assets/Ponza_Palmarola_e_Circeo.jpg";
import palmarolaImg from "@/assets/palmarola.webp";
import circeoImg from "@/assets/circeo.png";
import terracinaImg from "@/assets/terracina.jpg";

const GuidaTreMeraviglie = () => {
  return (
    <ArticleTemplate 
      title="Ponza, Palmarola, Circeo: la nostra guida alle 3 meraviglie della Riviera"
      category="Avventure"
      heroImage={ponzaPalmarolaCirceo}
    >
      <p>
        Amici esploratori, amanti del bello, della vita che sa di sale, siete pronti a segnare sulla mappa la vostra prossima avventura?<br /><br />
        Oggi vi portiamo con noi in un viaggio indimenticabile lungo un tratto di costa che è pura magia, dove mito, storia e una natura mozzafiato si fondono: la nostra guida alle 3 meraviglie della Riviera: <strong>Ponza, Palmarola e il Circeo</strong>.
      </p>

      <p>
        Preparatevi a sognare a occhi aperti, perché stiamo per svelarvi i segreti di queste destinazioni iconiche, perfette per una fuga dalla routine, un weekend romantico o un'avventura con la vostra crew.<br /><br />
        Che siate in cerca di calette nascoste, di borghi marinari autentici o di panorami leggendari, qui troverete pane per i vostri denti (e occhi!).
      </p>

      <p>
        E un piccolo spoiler: per vivere appieno la magia di questi luoghi, c'è un mezzo che si rivela il vostro migliore alleato... ma ne parleremo più avanti!<br /><br />
        Ora, concentratevi sulla bellezza che vi aspetta.
      </p>

      <h2 className="!text-[24px] !font-bold">1. Ponza: Il Gioiello Tirrenico e le sue Grotte Segrete</h2>

      <p>
        Cominciamo dalla regina delle Isole Ponziane, un vero capolavoro di colori, storia e vita pulsante: <strong>Ponza</strong>. Quest'isola, con le sue case pastello abbarbicate sulle colline, il suo porticciolo animato e le sue acque di un blu accecante, è una calamita per chi cerca autenticità e bellezza senza filtri.
      </p>

      <h3>Cosa non potete assolutamente perdervi a Ponza?<br /><br /></h3>

      <ul>
        <li><strong>Le Grotte di Pilato:</strong> Un complesso archeologico romano scavato nella roccia, un tempo utilizzato come vivaio di murene. Oggi, sono un vero spettacolo, con cunicoli e piscine naturali che invitano a un tuffo rinfrescante e suggestivo. Un salto indietro nel tempo con vista mare.<br /><br /></li>
        <li><strong>Chiaia di Luna:</strong> La spiaggia più iconica dell'isola, famosa per la sua imponente parete di tufo bianco a strapiombo sul mare. Sebbene l'accesso via terra sia interdetto, la sua bellezza è indescrivibile se ammirata dal mare, in tutta la sua maestosità.<br /><br /></li>
        <li><strong>Frontone:</strong> Una spiaggia vivace, perfetta per chi cerca un po' di movimento. Qui l'atmosfera è sempre allegra, con musica e aperitivi che si protraggono fino al tramonto, creando un'esperienza balneare dinamica.<br /><br /></li>
        <li><strong>Cala Feola e le Piscine Naturali:</strong> Situate sul versante ovest dell'isola, queste piscine naturali scavate nella roccia sono un paradiso per gli amanti dello snorkeling e delle acque tranquille. Ideali per famiglie o per chi desidera un bagno in tutta calma.<br /><br /></li>
        <li><strong>Il Borgo di Ponza Porto:</strong> Perdersi tra i vicoli colorati del centro storico è un'esperienza a sé. Tra boutique artigianali, ristorantini che servono pesce freschissimo e caffè con vista mare, il borgo è il cuore pulsante dell'isola, animato a tutte le ore.<br /><br /></li>
        <li><strong>Cala dell'Acqua e Cala Core:</strong> Due delle tante calette nascoste che costellano l'isola. Spesso raggiungibili solo via mare, offrono angoli di paradiso incontaminato, dove la privacy e la bellezza della natura sono assolute.</li>
      </ul>

      <p>
        Ponza è un'isola da esplorare lentamente, lasciandosi sorprendere ad ogni curva, ad ogni scorcio. Un vero e proprio concentrato di bellezza mediterranea che vi ruberà il cuore.
      </p>

      <h2 className="!text-[24px] !font-bold">2. Palmarola: L'Eden Incontaminato e le sue Meraviglie Selvagge</h2>

      <img 
        src={palmarolaImg} 
        alt="" 
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <p>
        A poche miglia da Ponza, emerge dalle acque un'altra meraviglia, un paradiso incontaminato e selvaggio che vi lascerà senza fiato: <strong>Palmarola</strong>. Spesso definita la "sorella selvaggia" di Ponza, è una riserva naturale protetta dove la natura è la vera protagonista e il tempo sembra essersi fermato. Qui, la mano dell'uomo è quasi assente, lasciando spazio a un ecosistema marino e terrestre di rara bellezza.
      </p>

      <h3>Cosa ti aspetta in questo angolo di paradiso?</h3>

      <ul>
        <li><strong>Le Cattedrali:</strong> Imponenti faraglioni di roccia scolpiti dal vento e dal mare, che si ergono maestosi dall'acqua, creando un paesaggio quasi surreale. Le loro forme ricordano antiche architetture, e al tramonto si tingono di colori spettacolari.<br /><br /></li>
        <li><strong>Cala del Porto:</strong> L'unica insenatura dove si trovano alcune suggestive case grotta scavate nella roccia. Un luogo unico per una sosta e per ammirare le acque cristalline che lambiscono la piccola spiaggia de la Maga Circe.<br /><br /></li>
        <li><strong>Le Grotte Marine:</strong> Palmarola è un vero e proprio labirinto di grotte e anfratti marini. La Grotta di Mezzoggiorno, con i suoi incredibili giochi di luce che filtrano dall'alto, è un'esperienza da non perdere. Ogni grotta racchiude un mondo di colori e misteri.<br /><br /></li>
        <li><strong>Acque Cristalline e Fondali Ricchi:</strong> Ovunque tu decida di fare un tuffo, sarai immerso in acque di una trasparenza incredibile, con fondali ricchi di vita marina. Un vero paradiso per lo snorkeling, dove i pesci sembrano danzare tra le rocce sommerse.<br /><br /></li>
      </ul>

      <p>
        Palmarola è un invito alla contemplazione, alla scoperta e al rispetto della natura. Un luogo dove staccare la spina e riconnettersi con la bellezza primordiale.
      </p>

      <h2 className="!text-[24px] !font-bold">3. Il Circeo: Tra Miti, Storia e Panorami Leggendari</h2>

      <img 
        src={circeoImg} 
        alt="" 
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <p>
        La nostra esplorazione non si ferma alle isole, ma continua sulla terraferma, lungo un promontorio leggendario che si affaccia maestoso sul Tirreno: <strong>il Circeo</strong>. Qui, il mito di Ulisse e della Maga Circe si intreccia con una natura rigogliosa e una costa frastagliata che regala panorami da cartolina.
      </p>

      <h3>Cosa scoprire in questo angolo di storia e natura?</h3>

      <ul>
        <li><strong>Il Promontorio e il Monte Circeo:</strong> Dominato dall'imponente Monte Circeo, che si erge a picco sul mare. Il suo profilo è inconfondibile, e le sue pareti rocciose nascondono grotte e insenature affascinanti.</li>
        <li><strong>Grotta della Maga Circe:</strong> La più famosa delle grotte, leggendaria dimora della maga che incantò Ulisse. Un luogo suggestivo e pieno di mistero, dove la storia e la fantasia si fondono.</li>
        <li><strong>Grotta delle Capre:</strong> Un'altra meraviglia naturale, accessibile principalmente via mare, che offre scorci mozzafiato e un'atmosfera selvaggia.</li>
        <li><strong>Il Faro di Capo Circeo:</strong> Un punto panoramico incredibile, da cui ammirare tramonti spettacolari che tingono il mare e il cielo di mille colori, con la vista che si estende fino alle isole.</li>
        <li><strong>Le Batterie di Punta Rossa:</strong> Un incantevole tratto di mare riparato dove i colori delle acque sono magnifici e invitano ad una lunga sosta in questa meraviglia.</li>
      </ul>

      <p>
        Il Circeo è un mix esplosivo di natura selvaggia, storia millenaria e panorami da sogno. Un luogo dove ogni angolo racconta una storia.
      </p>

      <img 
        src={terracinaImg} 
        alt="" 
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <h2>Partenza da Terracina: La Tua Porta per l'Avventura!</h2>

      <p>
        Per vivere al meglio tutte queste meraviglie, c'è un punto di partenza strategico e super comodo: la vivace città di <strong>Terracina</strong>. Con il suo porto attivo e la sua posizione centrale, Terracina è la base ideale per salpare verso le Isole Ponziane e per esplorare la costa del Circeo.
      </p>

      <p>
        Da Terracina, potrete comodamente raggiungere Ponza e Palmarola in giornata, ottimizzando i tempi e godendovi al massimo ogni istante di queste gemme del Tirreno. Per il Circeo, l'esplorazione può durare una giornata intera o anche solo mezza giornata, a seconda delle vostre preferenze e del tempo a disposizione.
      </p>

      <h2>La Scelta Top per Esplorare: Il Gommone con Skipper</h2>

      <p>
        E veniamo al vostro alleato segreto per un'esperienza indimenticabile: <strong>l'esplorazione in gommone con uno skipper esperto</strong>.
      </p>

      <p>
        Immaginate di navigare in totale libertà, senza lo stress di dover pensare a rotte, ancoraggi o alla gestione dell'imbarcazione. Con uno skipper a bordo, voi dovrete solo pensare a godervi il viaggio. Questi esperti del mare conoscono ogni caletta nascosta, ogni grotta segreta, i punti migliori per i tuffi e le storie più affascinanti del luogo. Vi porteranno lontano dalla folla, in angoli di paradiso inaccessibili ad altri mezzi, garantendovi sicurezza, relax e un divertimento senza pari.
      </p>

      <p>
        Che si tratti di un tour tra le isole o di un'esplorazione rilassata lungo la costa del Circeo, il gommone è il mezzo ideale per la sua agilità, la sua capacità di avvicinarsi alla costa e la libertà che offre.
      </p>

      <div className="bg-abbrivio-orange/10 rounded-lg p-8 my-12 border-l-4 border-abbrivio-orange">
        <p className="text-xl font-semibold text-abbrivio-ink mb-4">
          Pronto per la tua avventura?
        </p>
        <p className="text-gray-700 mb-0">
          Prenota ora la tua esperienza in gommone con Abbrivio e scopri le meraviglie della Riviera come non le hai mai viste prima. Ti aspettiamo a Terracina per salpare insieme verso il paradiso!
        </p>
        <a 
          href="https://wa.me/393342977881?text=Ciao!%20Vorrei%20prenotare%20un%27escursione%20alle%203%20meraviglie%20della%20Riviera" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-4"
        >
          👉 Contattaci su WhatsApp
        </a>
      </div>
    </ArticleTemplate>
  );
};

export default GuidaTreMeraviglie;