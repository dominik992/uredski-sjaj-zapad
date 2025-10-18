import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl text-primary-foreground drop-shadow-lg">
          Specijalizirani za čišćenje ureda
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-md">
          Vaš ured uvijek besprijekoran
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToContact}
          className="animate-scale-in"
        >
          Zatražite ponudu
        </Button>
      </div>
    </section>
  );
};

export default Hero;
