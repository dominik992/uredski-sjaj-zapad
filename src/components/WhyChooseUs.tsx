import { CheckCircle2 } from "lucide-react";
import conferenceImage from "@/assets/conference-room.jpg";

const WhyChooseUs = () => {
  const benefits = [
    "Isključiva specijalizacija za uredske prostore",
    "Fleksibilno radno vrijeme - prije ili nakon radnog dana",
    "Diskretan i profesionalan pristup",
    "Iskusni tim stručnjaka za čišćenje poslovnih prostora",
    "Korištenje profesionalne opreme i ekoloških sredstava",
    "Prilagođeni paketi usluga za vaš ured"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl text-foreground animate-slide-up">
            Zašto odabrati nas
          </h2>
          
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4 animate-fade-in">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-card-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src={conferenceImage} 
                alt="Besprijekorno čista konferencijska dvorana u uredskom prostoru" 
                className="rounded-lg shadow-large w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
