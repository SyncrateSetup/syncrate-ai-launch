import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Plano Básico",
    subtitle: "Basic Automation Setup",
    description: "Ideal para empresas começando com automação",
    features: [
      "Chatbot personalizado para seu negócio",
      "Entendimento de texto, áudio e imagens",
      "Configuração simples e eficiente",
      "Suporte por WhatsApp",
    ],
    highlighted: false,
  },
  {
    name: "Plano Médio",
    subtitle: "Standard AI Integration",
    description: "Automação completa para atendimento ao cliente",
    features: [
      "Tudo do Plano Básico",
      "Integrações com CRM e APIs externas",
      "Ideal para delivery e agendamentos",
      "Arquitetura de sistema aprimorada",
      "Experiência personalizada do usuário",
    ],
    highlighted: true,
  },
  {
    name: "Plano Avançado",
    subtitle: "Full AI Automation Suite",
    description: "Ecossistema completo de automação",
    features: [
      "Tudo do Plano Médio",
      "Integração com Google (Sheets, Calendar, Drive)",
      "Sistema RAG com base de conhecimento",
      "Múltiplas integrações de APIs",
      "Dashboard completo de controle e analytics",
    ],
    highlighted: false,
  },
];

const Plans = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  return (
    <section id="plans" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Escolha o plano </span>
            <span className="text-gradient">ideal</span>
          </h2>
          <p className="body-lg">
            Soluções flexíveis que crescem junto com seu negócio. 
            Cada plano é personalizado para suas necessidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "card-gradient border-2 border-primary glow-primary scale-105"
                  : "card-gradient border border-border hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Mais popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="heading-md text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-primary font-medium">{plan.subtitle}</p>
              </div>

              <p className="body-md mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                className="w-full"
                size="lg"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
