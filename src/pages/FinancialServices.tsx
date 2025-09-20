import { ArrowLeft, CreditCard, TrendingDown, DollarSign, Calculator, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const FinancialServices = () => {
  const whatsappUrl = "https://wa.me/573001234567";

  return (
    <div className="min-h-screen bg-gradient-trust">
      {/* Header */}
      <header className="py-6 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-light/20" asChild>
              <a href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios Financieros Especializados
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Obtén los mejores créditos y refinancia tus deudas con tasas preferenciales. 
            Diseñado especialmente para pensionados y empleados del sector público.
          </p>
          <Button
            size="lg"
            className="bg-success hover:bg-success/90 text-success-foreground shadow-hero"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Solicita tu Pre-aprobación</span>
            </a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Créditos de Libre Inversión */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <CreditCard className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Créditos de Libre Inversión</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                El dinero que necesitas con las mejores condiciones del mercado
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Características del Crédito</h3>
                <ul className="space-y-4">
                  {[
                    "Tasas desde 0.8% mensual (las más bajas del mercado)",
                    "Montos desde $2,000,000 hasta $200,000,000",
                    "Plazo hasta 120 meses (10 años)",
                    "Aprobación en 24-48 horas",
                    "Sin codeudor para montos menores",
                    "Desembolso inmediato una vez aprobado"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="shadow-card bg-gradient-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Ejemplo de Crédito</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Monto</p>
                      <p className="text-2xl font-bold text-primary">$20,000,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tasa</p>
                      <p className="text-2xl font-bold text-success">0.9% mensual</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Plazo</p>
                      <p className="text-2xl font-bold">60 meses</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cuota mensual</p>
                      <p className="text-2xl font-bold text-primary">$425,000</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Solicitar este Crédito
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Refinanciación */}
          <div>
            <div className="text-center mb-12">
              <TrendingDown className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Refinanciación y Compra de Cartera</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reduce drásticamente los intereses de tus deudas actuales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Crédito Hipotecario",
                  description: "Compramos tu crédito hipotecario actual y lo refinanciamos con mejores condiciones",
                  benefits: [
                    "Reducción de tasa hasta 3 puntos",
                    "Ampliación del plazo si lo necesitas",
                    "Trámite rápido y seguro",
                    "Sin penalidades por prepago"
                  ]
                },
                {
                  title: "Crédito de Vehículo",
                  description: "Refinancia tu crédito vehicular y ahorra miles de pesos en intereses",
                  benefits: [
                    "Tasas más bajas garantizadas", 
                    "Conserva tu vehículo",
                    "Reducción inmediata de cuota",
                    "Proceso 100% digital"
                  ]
                },
                {
                  title: "Crédito de Libranza",
                  description: "Mejoramos las condiciones de tu crédito por libranza actual",
                  benefits: [
                    "Menor descuento por nómina",
                    "Tasas preferenciales",
                    "Unificación de deudas",
                    "Mayor liquidez mensual"
                  ]
                },
                {
                  title: "Crédito de Libre Inversión",
                  description: "Refinancia tus créditos de consumo y tarjetas de crédito",
                  benefits: [
                    "Una sola cuota mensual",
                    "Intereses mucho más bajos",
                    "Liberación de codeudores",
                    "Mejor capacidad de pago"
                  ]
                }
              ].map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-hero transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Evaluar mi Caso
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto shadow-hero bg-primary text-primary-foreground">
              <CardContent className="p-12">
                <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">¿Listo para ahorrar en intereses?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Nuestros asesores financieros están listos para evaluar tu caso sin compromiso. 
                  Obtén una pre-aprobación inmediata y descubre cuánto puedes ahorrar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-success hover:bg-success/90 text-success-foreground px-8"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp: Consulta Inmediata</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    asChild
                  >
                    <a href="/#contacto">
                      <Calculator className="w-5 h-5 mr-2" />
                      Simulador de Crédito
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default FinancialServices;