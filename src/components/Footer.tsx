import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import syncrateLogo from "@/assets/syncrate-logo.jpg";

const WHATSAPP_URL = "https://wa.me/5519992346425?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20as%20automa%C3%A7%C3%B5es%21";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={syncrateLogo} alt="Syncrate" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-semibold text-lg text-foreground">Syncrate</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            Inteligência aplicada ao atendimento.
          </p>

          {/* CTA Button */}
          <Button variant="default" size="sm" onClick={handleWhatsApp}>
            <MessageCircle className="w-4 h-4" />
            Chamar no WhatsApp
          </Button>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syncrate. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
