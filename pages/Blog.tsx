import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ponzaPalmarolaImg from "@/assets/Ponza_Palmarola_e_Circeo_blog.jpg";
import gommoneImg from "@/assets/gommone.jpg";
import decalogoImg from "@/assets/10_cose_gommone.jpg";
import tuffoImg from "@/assets/tuffo_gommone.jpg";
import ponzaImg from "@/assets/Ponza.webp";
import palmarolaCoverImg from "@/assets/palmarola_cover.jpg";
import circeoCoverImg from "@/assets/circeo_cover.png";
import preparareImg from "@/assets/preparare_gommone.jpg";
import terracinaCoverImg from "@/assets/terracina_cover.jpg";
import escapeMareImg from "@/assets/esperienze_mare.webp";
import gommoneGitaImg from "@/assets/gommone_gita.jpg";
import calaAcquaImg from "@/assets/cala_acqua.jpg";
import gommonePerfettoImg from "@/assets/gommone_perfetto.jpg";
import costumeImg from "@/assets/vita_costume_bagno.png";
import gommoneCambioImg from "@/assets/gommone_cambio.jpg";
import tramontoImg from "@/assets/tramonto_gommone.jpg";

const Blog = () => {
  const latestArticles = [
    {
      title: "Ponza, Palmarola, Circeo: la nostra guida alle 3 meraviglie della Riviera",
      slug: "guida-3-meraviglie-riviera",
      category: "Avventure",
      image: ponzaPalmarolaImg
    },
    {
      title: "Decalogo del perfetto navigante: 10 cose da sapere prima di salire a bordo",
      slug: "decalogo-perfetto-navigante",
      category: "Navigare",
      image: decalogoImg
    },
    {
      title: "Escape the ordinary: perché le esperienze in mare sono il nuovo viaggio",
      slug: "escape-ordinary-mare-nuovo-viaggio",
      category: "Lifestyle",
      image: escapeMareImg
    },
    {
      title: "Quale gommone scegliere per la tua avventura?",
      slug: "master-sacs-quale-gommone-scegliere",
      category: "Mezzi",
      image: gommoneImg
    }
  ];

  const sections = {
    "Storie": [
      {
        title: "5 motivi per cui la gita in gommone è la terapia che non sapevi di volere",
        slug: "5-motivi-gommone-terapia",
        image: gommoneGitaImg
      }
    ],
    "Avventure": [
      {
        title: "Ponza, Palmarola, Circeo: la nostra guida alle 3 meraviglie della Riviera",
        slug: "guida-3-meraviglie-riviera",
        image: ponzaPalmarolaImg
      },
      {
        title: "La mappa definitiva delle 7 calette più belle di Ponza e Palmarola e come raggiungerle in gommone",
        slug: "mappa-segreta-10-calette-ponza",
        image: calaAcquaImg
      },
      {
        title: "Non solo mare: cosa fare e vedere a Terracina prima di salpare",
        slug: "cosa-fare-terracina-prima-salpare",
        image: terracinaCoverImg
      }
    ],
    "Navigare": [
      {
        title: "Decalogo del perfetto navigante: 10 cose da sapere prima di salire a bordo",
        slug: "decalogo-perfetto-navigante",
        image: decalogoImg
      },
      {
        title: "Dal primo sole al primo tuffo: come vivere al meglio l'inizio della stagione",
        slug: "primo-sole-primo-tuffo-inizio-stagione",
        image: tuffoImg
      },
      {
        title: "Prenotare il gommone perfetto: la guida ai nostri servizi passo dopo passo",
        slug: "prenotare-gommone-perfetto-guida-servizi",
        image: gommonePerfettoImg
      }
    ],
    "Lifestyle": [
      {
        title: "Escape the ordinary: perché le esperienze in mare sono il nuovo viaggio",
        slug: "escape-ordinary-mare-nuovo-viaggio",
        image: escapeMareImg
      },
      {
        title: "Dalla scrivania al prendisole: come un giorno in gommone può cambiare la tua settimana",
        slug: "scrivania-prendisole-gommone-cambiare-settimana",
        image: gommoneCambioImg
      },
      {
        title: "I 5 motivi per cui la vita è meglio in costume da bagno",
        slug: "5-motivi-vita-meglio-costume-bagno",
        image: costumeImg
      }
    ],
    "Mezzi": [
      {
        title: "Quale gommone scegliere per la tua avventura?",
        slug: "master-sacs-quale-gommone-scegliere",
        image: gommoneImg
      },
      {
        title: "Dietro le quinte: come prepariamo i nostri gommoni per garantirti un'esperienza perfetta",
        slug: "dietro-quinte-prepariamo-gommoni-esperienza-perfetta",
        image: preparareImg
      },
      {
        title: "A bordo c'è tutto: dall'acqua dolce al tuo sound preferito, i nostri comfort",
        slug: "bordo-tutto-acqua-dolce-sound-comfort",
        image: tramontoImg
      }
    ],
    "Luoghi": [
      {
        title: "L'isola di Ponza: storia, mito e le 5 meraviglie da non perdere",
        slug: "isola-ponza-storia-mito-5-meraviglie",
        image: ponzaImg
      },
      {
        title: "Palmarola, la regina del mare: la sua storia e le sue leggende",
        slug: "palmarola-regina-mare-storia-leggende",
        image: palmarolaCoverImg
      },
      {
        title: "Il promontorio del Circeo tra natura e mito: l'avventura di Ulisse",
        slug: "promontorio-circeo-natura-mito-ulisse",
        image: circeoCoverImg
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-abbrivio-orange/10 to-blue-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-abbrivio-ink mb-4">
              Blog di Abbrivio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Storie, consigli e avventure dal mare della Riviera di Ulisse
            </p>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-abbrivio-ink mb-8 text-center">
            Ultimi Articoli
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {latestArticles.map((article, index) => (
              <Link 
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-400 to-blue-600">
                  <img 
                    src={article.image || `https://images.unsplash.com/photo-${1544551763 + index}-46a013bb70d5?q=80&w=800&auto=format&fit=crop`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-abbrivio-orange font-medium mb-2">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-semibold text-abbrivio-ink group-hover:text-abbrivio-orange transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {Object.entries(sections).map(([sectionName, articles]) => (
        <section key={sectionName} className="py-12 bg-abbrivio-orange/5">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-abbrivio-ink mb-8 text-center">
              {sectionName}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Link 
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-400 to-blue-600">
                    <img 
                      src={(article as any).image || `https://images.unsplash.com/photo-${1544551763 + index}-46a013bb70d5?q=80&w=800&auto=format&fit=crop`}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-abbrivio-ink group-hover:text-abbrivio-orange transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Blog;