import { Building2, ShieldCheck, Clock } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl text-foreground">
            O nama
          </h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Specijalizirani smo isključivo za čišćenje poslovnih prostora i ureda. 
            Naš fokus na uredskim prostorima omogućava nam da pružimo vrhunsku uslugu 
            prilagođenu potrebama modernih poslovnih okruženja.
          </p>
          
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">Profesionalnost</h3>
              <p className="text-muted-foreground">
                Stručno obučen tim za čišćenje uredskih i poslovnih prostora
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">Pouzdanost</h3>
              <p className="text-muted-foreground">
                Diskrecija i pažnja prema vašem poslovnom okruženju
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">Fleksibilnost</h3>
              <p className="text-muted-foreground">
                Prilagođeni termini - prije ili poslije radnog vremena
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
