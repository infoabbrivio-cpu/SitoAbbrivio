import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Anchor, Users, Music, Droplets, Sun } from "lucide-react";

const Fleet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-abbrivio-ink mb-6">La nostra Flotta</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La nostra flotta non è solo un insieme di gommoni, ma la tua chiave per l'avventura. Ogni mezzo è scelto e preparato con cura per offrirti il massimo del comfort, della sicurezza e, soprattutto, del divertimento. Che tu voglia viaggiare in gruppo o goderti una giornata in tranquillità, abbiamo l'opzione perfetta per te.
            </p>
          </div>

          <div className="space-y-8">
            {/* Sacs 8 metri */}
            <div className="rounded-2xl border border-border/40 bg-card shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <div className="bg-abbrivio-orange/10 px-8 py-5 flex items-center gap-3 border-b border-border/30">
                <Anchor className="w-6 h-6 text-abbrivio-orange" />
                <h2 className="text-2xl md:text-3xl font-bold text-abbrivio-ink">Sacs 8 metri</h2>
                <span className="ml-auto text-sm font-medium text-abbrivio-orange bg-abbrivio-orange/10 px-3 py-1 rounded-full">Ammiraglia</span>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Users className="w-4 h-4" /> Max 10 persone</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Music className="w-4 h-4" /> Stereo</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Droplets className="w-4 h-4" /> Doccetta</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Sun className="w-4 h-4" /> Tendalino</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Se ami gli spazi aperti e vuoi condividere l'esperienza con i tuoi compagni di viaggio, questo è il mezzo che fa per te. Con i suoi 8 metri, il nostro Sacs accoglie comodamente fino a 10 persone. È l'ideale per i gruppi di amici o le famiglie numerose che non vogliono rinunciare a nulla.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A bordo trovi tutto ciò che serve per una giornata epica: un potente stereo per le playlist perfette, una grande ghiacciaia Igloo per tenere al fresco bevande e snack, una comoda doccetta con acqua dolce per rinfrescarti dopo un tuffo, ampi prendisole per rilassarti sotto il sole e un pratico tendalino per ripararti nelle ore più calde.
                </p>
              </div>
            </div>

            {/* Joker Boat Clubman */}
            <div className="rounded-2xl border border-border/40 bg-card shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <div className="bg-abbrivio-orange/10 px-8 py-5 flex items-center gap-3 border-b border-border/30">
                <Anchor className="w-6 h-6 text-abbrivio-orange" />
                <h2 className="text-2xl md:text-3xl font-bold text-abbrivio-ink">Joker Boat Clubman 7.5 metri</h2>
                <span className="ml-auto text-sm font-medium text-abbrivio-orange bg-abbrivio-orange/10 px-3 py-1 rounded-full">Premium</span>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Users className="w-4 h-4" /> Max 7 persone</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full">🚻 Bagno a bordo</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Droplets className="w-4 h-4" /> Doccetta</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Sun className="w-4 h-4" /> Tendalino</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il Joker Boat Clubman da 7.5 metri è il gommone che unisce stile, comfort e prestazioni di alto livello. Dotato di bagno a bordo e capace di ospitare fino a 7 persone, è la scelta ideale per chi non vuole scendere a compromessi e desidera un'esperienza di navigazione premium.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Con le sue linee eleganti e la sua stabilità in mare, il Clubman è perfetto per le escursioni più lunghe verso le Isole Pontine o per una giornata di lusso lungo il promontorio del Circeo. A bordo trovi tutti i comfort che cerchi: dalla doccetta con acqua dolce al prendisole generoso, dal tendalino alla ghiacciaia.
                </p>
              </div>
            </div>

            {/* Master 7 metri */}
            <div className="rounded-2xl border border-border/40 bg-card shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <div className="bg-abbrivio-orange/10 px-8 py-5 flex items-center gap-3 border-b border-border/30">
                <Anchor className="w-6 h-6 text-abbrivio-orange" />
                <h2 className="text-2xl md:text-3xl font-bold text-abbrivio-ink">Master 7 metri</h2>
                <span className="ml-auto text-sm font-medium text-abbrivio-orange bg-abbrivio-orange/10 px-3 py-1 rounded-full">Versatile</span>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Users className="w-4 h-4" /> Max 6 persone</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Music className="w-4 h-4" /> Audio</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Droplets className="w-4 h-4" /> Doccetta</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Sun className="w-4 h-4" /> Tendalino</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il nostro gommone Master da 7 metri è lo spazio perfetto per goderti il mare in compagnia, senza rinunciare a nulla. È la scelta ideale per gruppi di amici, famiglie e per tutti coloro che cercano un mezzo agile, ma spazioso, che sappia adattarsi a ogni esigenza.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Anche qui, l'allestimento è pensato per il tuo comfort: un sistema audio di qualità per la tua musica, una ghiacciaia per i tuoi drink preferiti, una doccetta per una rapida sciacquata, un prendisole dove stendersi e godersi la brezza e un tendalino per creare la tua zona d'ombra personale.
                </p>
              </div>
            </div>

            {/* Arkos 5.4 metri */}
            <div className="rounded-2xl border border-border/40 bg-card shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <div className="bg-abbrivio-orange/10 px-8 py-5 flex items-center gap-3 border-b border-border/30">
                <Anchor className="w-6 h-6 text-abbrivio-orange" />
                <h2 className="text-2xl md:text-3xl font-bold text-abbrivio-ink">Arkos 5.4 metri</h2>
                <span className="ml-auto text-sm font-medium text-abbrivio-orange bg-abbrivio-orange/10 px-3 py-1 rounded-full">Senza patente</span>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full"><Users className="w-4 h-4" /> Max 6 persone</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full">⚓ 40 CV</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/40 px-3 py-1 rounded-full">🪪 No patente</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  L'Arkos 5.4 è la barca perfetta per chi vuole vivere il mare in totale autonomia, senza bisogno di patente nautica. Con il suo motore da 40 CV e una capacità fino a 6 persone, è ideale per coppie, piccoli gruppi di amici o famiglie che desiderano esplorare la costa in libertà.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Compatto ma sorprendentemente spazioso, l'Arkos ti permette di raggiungere calette nascoste, fare il bagno in acque cristalline e goderti una giornata di mare senza vincoli. È la porta d'ingresso perfetta per chi si avvicina alla navigazione per la prima volta.
                </p>
              </div>
            </div>

            {/* Uscite in flottiglia */}
            <div className="rounded-2xl border border-border/40 bg-card shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <div className="bg-abbrivio-orange/10 px-8 py-5 flex items-center gap-3 border-b border-border/30">
                <Users className="w-6 h-6 text-abbrivio-orange" />
                <h2 className="text-2xl md:text-3xl font-bold text-abbrivio-ink">Uscite in Flottiglia</h2>
                <span className="ml-auto text-sm font-medium text-abbrivio-orange bg-abbrivio-orange/10 px-3 py-1 rounded-full">Gruppi</span>
              </div>
              <div className="p-8 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Siete un gruppo numeroso? Nessun problema! Organizziamo uscite in flottiglia facendo salpare più gommoni della nostra flotta, per garantire al tuo gruppo il massimo della libertà e del divertimento in mare. Perfetto per comitive, addii al celibato, team building aziendali o semplicemente per vivere il mare in grande compagnia.
                </p>
                <p className="text-xl font-semibold text-abbrivio-ink">
                  Qualunque sia la tua scelta, preparati a salire a bordo. L'unica cosa che ti chiediamo è di portare la tua voglia di esplorare e il tuo spirito libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fleet;