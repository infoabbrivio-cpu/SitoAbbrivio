import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-abbrivio-ink mb-8">Prenota la tua Escursione</h1>
            <p className="text-xl text-muted-foreground">Pagina in fase di realizzazione</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;