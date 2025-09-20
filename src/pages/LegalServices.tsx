import { ArrowLeft, Scale, FileText, MessageCircle, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const LegalServices = () => {
  const whatsappUrl = "https://wa.me/573001234567";

  return (
    <div className="min-h-screen bg-gradient-trust">
      {/* Header */}
      <header className="py-6 bg-trust-navy">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" asChild>
              <a href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-trust-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <Scale className="w-20 h-20 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios Jurídicos Especializados
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Asesoría legal experta en pensiones. Hacemos valer tus derechos y recuperamos el dinero que te corresponde.
          </p>
          <Button
            size="lg"
            className="bg-success hover:bg-success/90 text-success-foreground shadow-hero"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Consulta Jurídica Gratuita</span>
            </a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Reliquidación de Pensión */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-trust-blue mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Reliquidación de Pensión</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ¿Tu pensión fue mal calculada? Recupera el dinero que te corresponde
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">¿Cuándo aplica la reliquidación?</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Tiempo cotizado mal contabilizado por la entidad",
                    "Salarios base de liquidación incorrectos",
                    "Semanas cotizadas no reconocidas",
                    "Errores en el cálculo del IBL (Ingreso Base de Liquidación)",
                    "Bonificaciones o primas no incluidas",
                    "Tiempo de servicio público no reconocido"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-trust-blue mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-trust-light rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">¡Importante!</h4>
                  <p className="text-muted-foreground">
                    Si tu pensión fue reconocida hace menos de 3 años, tienes derecho a solicitar 
                    la reliquidación. Podemos revisar tu caso gratuitamente.
                  </p>
                </div>
              </div>

              <Card className="shadow-card bg-gradient-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Ejemplo Real de Reliquidación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground">Caso de María González</p>
                    <p className="text-lg">Maestra jubilada - 32 años de servicio</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-destructive/10 rounded p-3">
                      <p className="text-sm text-muted-foreground">Pensión Original</p>
                      <p className="text-xl font-bold text-destructive">$1,850,000</p>
                    </div>
                    <div className="bg-success/10 rounded p-3">
                      <p className="text-sm text-muted-foreground">Pensión Corregida</p>
                      <p className="text-xl font-bold text-success">$2,430,000</p>
                    </div>
                  </div>

                  <div className="text-center bg-success/5 rounded p-4">
                    <p className="text-sm text-muted-foreground">Aumento mensual</p>
                    <p className="text-2xl font-bold text-success">+$580,000</p>
                    <p className="text-sm text-muted-foreground">Retroactivo recuperado: $18,560,000</p>
                  </div>

                  <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Revisar mi Pensión
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Obtención de Pensión */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <FileText className="w-16 h-16 text-trust-blue mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Obtención de Pensión</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Te acompañamos en todo el proceso para conseguir tu pensión
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Análisis de Requisitos",
                  icon: <Scale className="w-12 h-12 text-trust-blue" />,
                  description: "Evaluamos tu historia laboral completa",
                  steps: [
                    "Revisión de semanas cotizadas",
                    "Verificación de edad cumplida",
                    "Análisis de diferentes regímenes",
                    "Identificación de faltantes"
                  ]
                },
                {
                  title: "Gestión de Documentos",
                  icon: <FileText className="w-12 h-12 text-trust-blue" />,
                  description: "Obtenemos toda la documentación necesaria",
                  steps: [
                    "Certificaciones laborales",
                    "Historias laborales completas",
                    "Documentos de identidad",
                    "Comprobantes de cotización"
                  ]
                },
                {
                  title: "Seguimiento Completo",
                  icon: <Clock className="w-12 h-12 text-trust-blue" />,
                  description: "Acompañamiento hasta obtener tu pensión",
                  steps: [
                    "Radicación de solicitud",
                    "Seguimiento en entidades",
                    "Respuesta a requerimientos",
                    "Reconocimiento final"
                  ]
                }
              ].map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-hero transition-smooth text-center">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left">
                      {service.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-trust-blue rounded-full mt-2"></div>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Preguntas Frecuentes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cuánto cuesta la asesoría jurídica?",
                  answer: "La primera consulta es completamente gratuita. Solo cobramos cuando recuperamos dinero para ti o cuando obtienes tu pensión."
                },
                {
                  question: "¿Cuánto tiempo toma el proceso de reliquidación?",
                  answer: "El proceso varía entre 3 a 8 meses dependiendo de la entidad pensional y la complejidad del caso."
                },
                {
                  question: "¿Qué documentos necesito para iniciar?",
                  answer: "Cédula, resolución de pensión (si la tienes), últimos desprendibles de pago y cualquier documento laboral que tengas."
                },
                {
                  question: "¿Puedo perder mi pensión actual?",
                  answer: "No, nunca. El proceso de reliquidación solo puede mejorar tu situación actual, nunca empeorarla."
                }
              ].map((faq, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto shadow-hero bg-trust-navy text-white">
              <CardContent className="p-12">
                <Scale className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">¿Listo para hacer valer tus derechos?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  No dejes que el tiempo pase. Muchos pensionados han recuperado millones de pesos 
                  que les correspondían. Tu caso podría ser el próximo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-success hover:bg-success/90 text-success-foreground px-8"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Consulta Jurídica Inmediata</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-trust-navy"
                    asChild
                  >
                    <a href="/#contacto">
                      <FileText className="w-5 h-5 mr-2" />
                      Enviar mi Caso por Formulario
                    </a>
                  </Button>
                </div>
                <p className="text-sm mt-4 opacity-70">
                  Primera consulta 100% gratuita • Sin compromiso • Respuesta en 24 horas
                </p>
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

export default LegalServices;