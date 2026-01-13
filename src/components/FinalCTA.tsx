import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
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
            <Button variant="heroOutline" size="xl">
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
