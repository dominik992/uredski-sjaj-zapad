import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
