import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Bot } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5519992346425?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20as%20automa%C3%A7%C3%B5es%21";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Automação inteligente para seu negócio</span>
          </div>

          {/* Main headline */}
          <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Transforme seu</span>
            <br />
            <span className="text-gradient">atendimento com IA</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Automatize o atendimento ao cliente com chatbots inteligentes que entendem texto, áudio e imagens. Disponível 24 horas, 7 dias por semana.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver demonstração
            </Button>
          </div>

          {/* Visual element */}
          <div className="mt-20 relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative max-w-3xl mx-auto">
              {/* Chat mockup */}
              <div className="card-gradient rounded-2xl border border-border p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Syncrate AI</p>
                    <p className="text-xs text-muted-foreground">Online agora</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm">Olá! Como posso ajudar você hoje? 👋</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-primary-foreground">Quero saber mais sobre automação</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                      <p className="text-sm">Perfeito! Nossa automação utiliza IA avançada para atender seus clientes 24/7, processar pedidos e responder dúvidas automaticamente. Quer ver uma demonstração? 🚀</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 animate-float">
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
