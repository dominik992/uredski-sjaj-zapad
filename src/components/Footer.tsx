import { Building2 } from "lucide-react";
import Logo from "@/../public/uredski-sjaj-zapad.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={Logo} alt="Uredski Sjaj Zapad" className="w-6 h-6 object-contain" />
                <span className="text-lg font-bold text-foreground">Uredski Sjaj Zapad</span>
              </div>
              <p className="text-muted-foreground">
                Specijalizirani za profesionalno čišćenje uredskih i poslovnih prostora.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Usluge</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Redovno čišćenje ureda</li>
                <li>Dubinsko čišćenje</li>
                <li>Čišćenje konferencijskih dvorana</li>
                <li>Održavanje sanitarija</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Kontakt</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>+385 91 526 5248</li>
                <li>uredskisjajzapad@gmail.com</li>
                <li>Pon-Pet: 06:00 - 22:00</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 text-center border-t border-border">
            <p className="text-muted-foreground">
              © 2025 Uredski Sjaj Zapad. Sva prava pridržana. Specijalizirani za čišćenje poslovnih prostora i ureda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
