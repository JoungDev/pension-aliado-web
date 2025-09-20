import { Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-trust-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8" />
              <span className="text-xl font-bold">Créditos & Asesoría</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Servicios financieros y jurídicos especializados para pensionados y empleados del sector público en Colombia.
            </p>
          </div>

          {/* Enlaces importantes */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Servicios</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="/financiero" className="hover:text-white transition-colors">Créditos de Libre Inversión</a></li>
              <li><a href="/financiero" className="hover:text-white transition-colors">Refinanciación de Deudas</a></li>
              <li><a href="/juridico" className="hover:text-white transition-colors">Reliquidación de Pensión</a></li>
              <li><a href="/juridico" className="hover:text-white transition-colors">Obtención de Pensión</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-2 text-white/80">
              <li>WhatsApp: (300) 123-4567</li>
              <li>Email: contacto@ejemplo.com</li>
              <li>Bogotá, Colombia</li>
              <li>Atención: Lun - Vie 8AM - 6PM</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 mt-8 pt-8">
          {/* Aviso legal */}
          <div className="mb-4">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong>Aviso Legal:</strong> Tratamiento de datos personales según Ley 1581 de 2012 (Colombia). 
              La información suministrada será utilizada exclusivamente para brindar asesoría financiera y jurídica. 
              Nos reservamos el derecho de verificar la información proporcionada.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <span>© {currentYear} Créditos & Asesoría Pensionados.</span>
              <span>Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para pensionados colombianos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;