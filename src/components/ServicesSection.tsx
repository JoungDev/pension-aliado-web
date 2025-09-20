import { CreditCard, TrendingDown, Scale, FileText, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const whatsappUrl = "https://wa.me/573001234567";

  const financialServices = [
    {
      icon: <CreditCard className="w-12 h-12 text-primary" />,
      title: "Créditos de Libre Inversión",
      description: "Obtén el dinero que necesitas con las tasas más competitivas del mercado. Especialmente diseñado para pensionados y empleados públicos.",
      benefits: ["Tasas desde 0.8% mensual", "Hasta 120 cuotas", "Aprobación rápida"]
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-primary" />,
      title: "Refinanciación y Compra de Cartera",
      description: "Reduce tus intereses actuales. Compramos tu cartera de crédito hipotecario, vehículo, libranza o libre inversión.",
      benefits: ["Reducción hasta 50% en intereses", "Una sola cuota mensual", "Liberación de codeudores"]
    }
  ];

  const legalServices = [
    {
      icon: <Scale className="w-12 h-12 text-trust-blue" />,
      title: "Reliquidación de Pensión",
      description: "¿Tu pensión fue mal calculada? Te ayudamos a revisar y corregir el cálculo para que recibas lo que realmente te corresponde.",
      benefits: ["Revisión gratuita", "Recupera dinero retroactivo", "Aumento en mesada pensional"]
    },
    {
      icon: <FileText className="w-12 h-12 text-trust-blue" />,
      title: "Obtención de Pensión",
      description: "Acompañamiento integral para conseguir tu pensión. Revisamos tu historia laboral y te guiamos en todo el proceso.",
      benefits: ["Análisis de requisitos", "Gestión de documentos", "Seguimiento completo"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-4">
        {/* Financial Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicios Financieros
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones financieras diseñadas especialmente para pensionados y empleados del sector público
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {financialServices.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href="/financiero">Ver Más Detalles</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-card transition-smooth hover:scale-105"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Consultar Servicios Financieros</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Legal Services */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicios Jurídicos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Asesoría legal especializada en pensiones para hacer valer tus derechos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {legalServices.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-trust-blue rounded-full"></div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white transition-smooth"
                    asChild
                  >
                    <a href="/juridico">Ver Más Detalles</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-trust-blue hover:bg-trust-blue/90 text-white shadow-card transition-smooth hover:scale-105"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Consultar Servicios Jurídicos</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;