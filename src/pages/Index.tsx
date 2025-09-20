import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <ContactForm />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
