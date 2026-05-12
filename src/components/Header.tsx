import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImage from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Esperienze", path: "/#esperienze" },
    { label: "Flotta", path: "/#fleet" },
    { label: "Blog", path: "/blog" },
    { label: "Servizi", path: "/#services" },
    { label: "Chi siamo", path: "/#about" },
    { label: "FAQ", path: "/#faq" },
  ];

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-abbrivio-border z-50">
      <div className="container mx-auto max-w-6xl px-6">
        <nav className="flex justify-between items-center py-3">
          <div className="brand">
            <img 
              className="h-12 w-auto" 
              src={logoImage} 
              alt="Abbrivio — Gommone Experience" 
            />
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-abbrivio-orange">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <Button
                      key={item.path}
                      variant="ghost"
                      className="justify-start text-lg text-abbrivio-orange font-semibold hover:text-abbrivio-orange/80"
                      asChild
                    >
                      <Link to={item.path}>{item.label}</Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant="link" 
                className="text-abbrivio-orange font-semibold hover:text-abbrivio-orange/80"
                asChild
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;