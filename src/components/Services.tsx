import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Layers, Users, Trash2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Redovno čišćenje ureda",
      description: "Svakodnevno održavanje čistoće uredskih prostora prema vašem rasporedu i potrebama."
    },
    {
      icon: Layers,
      title: "Dubinsko čišćenje radnih prostora",
      description: "Temeljito čišćenje svih površina, podova i opreme u vašim uredima i radnim prostorijama."
    },
    {
      icon: Users,
      title: "Čišćenje konferencijskih dvorana",
      description: "Održavanje zajedničkih prostora i dvorana za sastanke u besprijekornom stanju."
    },
    {
      icon: Trash2,
      title: "Održavanje sanitarnih čvorova",
      description: "Redovno pražnjenje koševa i detaljno čišćenje sanitarnih prostorija u vašem uredu."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-slide-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
              Naše usluge
            </h2>
            <p className="text-lg text-muted-foreground">
              Sveobuhvatne usluge čišćenja za uredske i poslovne prostore
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 mb-4 bg-office-blue-light rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
