import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/573001234567";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-success hover:bg-success/90 shadow-float transition-bounce hover:scale-110 animate-pulse"
        asChild
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          title="Consulta gratis por WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;