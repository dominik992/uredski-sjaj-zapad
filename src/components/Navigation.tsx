import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Uredski Sjaj Zapad</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              O nama
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Usluge
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Zašto mi
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
            >
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
