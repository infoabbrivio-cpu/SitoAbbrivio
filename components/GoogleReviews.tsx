import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Tipi per le recensioni
interface Review {
  author_name: string;
  rating: number;
  text: string;
  date: string; // formato leggibile es. "Dicembre 2024"
  profile_photo_url?: string;
}

// Place ID per il link alle recensioni Google
const PLACE_ID = "ChIJ795NTWpD84oRm0kMkwRbmBg";

// CONFIGURAZIONE RECENSIONI MANUALI
// Modifica qui le tue recensioni personalizzate (massimo 10)
const MANUAL_REVIEWS: Review[] = [{
  author_name: "Lorenzo Bonaldo",
  rating: 5,
  text: "Organizzazione perfetta, persone cordiali e super disponibili per ogni cosa. Consiglio vivamente...",
  date: "Agosto 2025"
}, {
  author_name: "Alessio Gentile",
  rating: 5,
  text: "Esperienza indimenticabile a Palmarola e Ponza! Abbiamo trascorso una giornata meravigliosa con Marco alla guida! È stato tutto perfetto...",
  date: "Agosto 2025"
}, {
  author_name: "Elisa Malinconico",
  rating: 5,
  text: "Esperienza bellissima e sicuramente da rifare!! Lo skipper è stato veramente gentile e super disponibile!",
  date: "Luglio 2025"
}, {
  author_name: "Isabella Mirto",
  rating: 5,
  text: "Esperienza stupenda, è il secondo anno che ci affidiamo a questa compagnia e ci siamo trovati benissimo.",
  date: "Agosto 2025"
}, {
  author_name: "Giorgio Grenga",
  rating: 5,
  text: "È stato un viaggio tranquillo, il giro tra le isole è stato molto divertente, e il gommone è ben equipaggiato...",
  date: "Luglio 2025"
}];

// Configurazione rating generale (modifica questi valori)
const OVERALL_RATING = 5.0;
const TOTAL_REVIEWS = 20;
const GoogleReviews = () => {
  const renderStars = (rating: number) => {
    const rounded = Math.round(rating);
    return Array.from({
      length: 5
    }, (_, i) => <Star key={i} className={`w-4 h-4 ${i < rounded ? "fill-current text-primary" : "text-muted-foreground/40"}`} />);
  };
  return <section className="py-12 bg-secondary/20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-abbrivio-ink mb-3">Cosa dicono i nostri ospiti</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">{renderStars(OVERALL_RATING)}</div>
            <span className="text-xl font-semibold text-abbrivio-ink">
              {OVERALL_RATING.toFixed(1)}
            </span>
            <span className="text-muted-foreground">• Basato su {TOTAL_REVIEWS} recensioni Google</span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3">
          {MANUAL_REVIEWS.map((review, index) => <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  {review.profile_photo_url && <img src={review.profile_photo_url} alt={`Foto profilo di ${review.author_name}`} className="w-8 h-8 rounded-full" loading="lazy" />}
                  <div>
                    <h4 className="font-semibold text-abbrivio-ink text-sm">
                      {review.author_name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-4">
                  {review.text}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {MANUAL_REVIEWS.map((review, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                  <Card className="border-none shadow-lg h-full">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        {review.profile_photo_url && <img src={review.profile_photo_url} alt={`Foto profilo di ${review.author_name}`} className="w-10 h-10 rounded-full" loading="lazy" />}
                        <div>
                          <h4 className="font-semibold text-abbrivio-ink">
                            {review.author_name}
                          </h4>
                          <div className="flex items-center gap-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {review.text}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="text-center mt-6">
          <a href="https://maps.app.goo.gl/sWBtwT3gSqGRj4pX8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
            Leggi tutte le recensioni su Google
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};
export default GoogleReviews;