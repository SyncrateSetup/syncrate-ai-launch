import { Truck, Calendar, Headphones, TrendingUp, ArrowRight } from "lucide-react";

const workflows = [
  {
    icon: Truck,
    title: "Automação de Delivery",
    description: "Receba pedidos, confirme endereços e acompanhe entregas automaticamente.",
  },
  {
    icon: Calendar,
    title: "Agendamento de Serviços",
    description: "Clientes agendam horários diretamente pelo chat, sem intervenção manual.",
  },
  {
    icon: Headphones,
    title: "Suporte ao Cliente",
    description: "Responda dúvidas frequentes e resolva problemas 24 horas por dia.",
  },
  {
    icon: TrendingUp,
    title: "Qualificação de Leads",
    description: "Identifique e qualifique potenciais clientes automaticamente.",
  },
];

const Workflows = () => {
  return (
    <section id="workflows" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-lg mb-6">
              <span className="text-foreground">Workflows </span>
              <span className="text-gradient">prontos para usar</span>
            </h2>
            <p className="body-lg mb-8">
              Soluções pré-construídas e testadas que você pode implementar rapidamente. 
              Personalize conforme suas necessidades e comece a automatizar em dias, não meses.
            </p>
            
            <div className="flex items-center gap-2 text-primary font-medium cursor-pointer group">
              <span>Ver todas as soluções</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {workflows.map((workflow, index) => (
              <div
                key={workflow.title}
                className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <workflow.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{workflow.title}</h3>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflows;
