import { MessageCircle, Shield, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-financial.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/573001234567"; // Variable que se puede configurar

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-trust opacity-40"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Logo placeholder */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Créditos con <span className="text-primary-lighter">Tasas Más Bajas</span><br />
            para Pensionados
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Obtén créditos de libre inversión, refinancia tus deudas actuales y recibe asesoría jurídica 
            especializada para tu pensión. <strong>Servicios diseñados para empleados públicos y pensionados.</strong>
          </p>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <TrendingDown className="w-8 h-8 text-success" />
              <span className="font-semibold">Tasas Más Bajas</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-success" />
              <span className="font-semibold">Refinanciación Segura</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-success" />
              <span className="font-semibold">Asesoría Jurídica</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <Button
              size="lg"
              variant="default"
              className="bg-success hover:bg-success/90 text-success-foreground px-8 py-6 text-lg font-semibold shadow-hero transition-smooth hover:scale-105"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="w-6 h-6" />
                <span>Consulta Gratis por WhatsApp</span>
              </a>
            </Button>
            
            <p className="text-sm text-primary-foreground/70">
              Respuesta inmediata • Sin compromiso • Asesoría personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;