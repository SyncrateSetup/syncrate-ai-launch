import { Bot, Clock, Cpu, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Atendimento automatizado que entende contexto, responde perguntas e resolve problemas.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Seu atendimento nunca para. Clientes atendidos a qualquer hora, qualquer dia.",
  },
  {
    icon: Cpu,
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e libere sua equipe para o que realmente importa.",
  },
  {
    icon: BarChart3,
    title: "Escala sem Limites",
    description: "Atenda centenas de clientes simultaneamente sem perder qualidade.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Inteligência aplicada ao </span>
            <span className="text-gradient">atendimento</span>
          </h2>
          <p className="body-lg">
            A Syncrate desenvolve sistemas de automação e chatbots com inteligência artificial 
            para transformar a forma como seu negócio atende clientes e gerencia processos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-md mb-3 text-foreground">{feature.title}</h3>
              <p className="body-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
