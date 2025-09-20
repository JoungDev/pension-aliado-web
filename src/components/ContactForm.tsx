import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    interes: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validaciones básicas
    if (!formData.nombre || !formData.telefono || !formData.interes) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Aquí iría la integración con el backend
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Nos pondremos en contacto contigo muy pronto.",
        className: "bg-success text-success-foreground"
      });

      // Resetear formulario
      setFormData({
        nombre: "",
        telefono: "",
        interes: "",
        mensaje: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solicita tu Consulta Gratuita
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Déjanos tus datos y te contactaremos para una asesoría personalizada sin compromiso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Formulario de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-sm font-semibold">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    placeholder="Escribe tu nombre completo"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-sm font-semibold">
                    Teléfono/WhatsApp *
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    placeholder="Ej: 300 123 4567"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="interes" className="text-sm font-semibold">
                    ¿En qué estás interesado? *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("interes", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credito">Crédito de Libre Inversión</SelectItem>
                      <SelectItem value="refinanciacion">Refinanciación/Compra de Cartera</SelectItem>
                      <SelectItem value="reliquidacion">Reliquidación de Pensión</SelectItem>
                      <SelectItem value="obtencion">Obtener mi Pensión</SelectItem>
                      <SelectItem value="ambos">Servicios Financieros y Jurídicos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-sm font-semibold">
                    Cuéntanos tu situación (opcional)
                  </Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange("mensaje", e.target.value)}
                    placeholder="Describe brevemente tu situación o qué necesitas"
                    className="mt-1 h-24"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-semibold transition-smooth"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Consulta Gratuita"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario aceptas nuestro tratamiento de datos personales según la Ley 1581 de 2012
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Más de 10 años de experiencia</h4>
                    <p className="text-muted-foreground">Especialistas en el sector público y pensionados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Tasas preferenciales garantizadas</h4>
                    <p className="text-muted-foreground">Las mejores condiciones del mercado para tu perfil</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Asesoría integral gratuita</h4>
                    <p className="text-muted-foreground">Evaluación completa sin compromisos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Otros medios de contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>WhatsApp: (300) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>contacto@ejemplo.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;