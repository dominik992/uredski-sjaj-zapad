import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Greška",
        description: "Molimo popunite sva obavezna polja",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    const subject = "Novi upit s weba - Uredski Sjaj Zapad";
    try {
      const body = `Ime: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\n\nPoruka:\n${formData.message}`;
      const mailto = `mailto:info@uredskisjajzapad.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      toast({
        title: "Otvoren email klijent",
        description: "Pošaljite poruku iz vašeg mail klijenta.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center animate-slide-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
              Kontaktirajte nas
            </h2>
            <p className="text-lg text-muted-foreground">
              Rezervirajte termin čišćenja vašeg ureda
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 bg-card rounded-lg shadow-soft">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">Telefon</h3>
                    <p className="text-muted-foreground">+385 91 526 5248</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg shadow-soft">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">info@uredskisjajzapad.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg shadow-soft">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">Radno vrijeme</h3>
                    <p className="text-muted-foreground">
                      Ponedjeljak - Petak: 06:00 - 22:00<br />
                      Subota: 08:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <Input
                  placeholder="Vaše ime *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email adresa *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Vaša poruka - navedite veličinu uredskog prostora i željeni termin *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] bg-card"
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Slanje..." : "Pošaljite upit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
