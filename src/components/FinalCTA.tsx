import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5519992346425?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20as%20automa%C3%A7%C3%B5es%21";
const DEMO_WHATSAPP_URL = "https://wa.me/5511989869871?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o";

const FinalCTA = () => {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Pronto para automatizar </span>
            <span className="text-gradient">seu negócio?</span>
          </h2>
          
          <p className="body-lg mb-10">
            Junte-se a empresas que já transformaram seu atendimento com IA. 
            Comece hoje e veja resultados em dias, não meses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => window.open(DEMO_WHATSAPP_URL, "_blank")}>
              Agendar demonstração
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
