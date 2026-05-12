import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    // Simple parallax effect - add scale animation to hero images
    const images = document.querySelectorAll('.hero-bg-image');
    images.forEach((img, i) => {
      setTimeout(() => {
        img.classList.add('parallax-scale');
      }, 300 * i);
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="home" className="relative min-h-[66vh] flex items-center text-white">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hero-bg-video"
          poster="https://images.unsplash.com/photo-1550952289-d3fa9a1b0d1b?q=80&w=1600&auto=format&fit=crop"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img 
            src="https://images.unsplash.com/photo-1550952289-d3fa9a1b0d1b?q=80&w=1600&auto=format&fit=crop" 
            alt="Gommone in mare" 
            className="hero-bg-image"
          />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Non è un giro in gommone, è un'esperienza da raccontare!
          </h1>
          <p className="text-lg md:text-xl opacity-95 mb-6 leading-relaxed">
            Abbrivio ti porta a Ponza, Palmarola e lungo il Circeo con mezzi curati, 
            briefing chiaro e attenzioni che ti fanno sentire ospite speciale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="abbrivio" 
              size="abbrivio"
              onClick={() => scrollToSection('booking')}
              className="text-lg"
            >
              Prenota ora su WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('fleet')}
      >
        <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <ChevronDown size={24} />
        </div>
      </div>
    </main>
  );
};

export default Hero;