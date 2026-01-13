import { Bot, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatDemo = () => {
  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Demo chat */}
          <div className="order-2 lg:order-1">
            <div className="card-gradient rounded-2xl border border-border p-6 shadow-2xl max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Syncrate Demo</p>
                  <p className="text-xs text-muted-foreground">Experimente agora</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6 min-h-[200px]">
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 max-w-[280px]">
                    <p className="text-sm">Olá! 👋 Sou o assistente da Syncrate. Posso mostrar como funciona nossa automação. O que você gostaria de saber?</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3">
                    <p className="text-sm text-muted-foreground italic">Experimente perguntar sobre:</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Como funciona a automação?</li>
                      <li>• Quais integrações vocês oferecem?</li>
                      <li>• Como começar?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div className="flex gap-2">
                <div className="flex-1 bg-secondary rounded-xl px-4 py-3 text-sm text-muted-foreground border border-border">
                  Digite sua mensagem...
                </div>
                <Button size="icon" className="rounded-xl h-auto aspect-square">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Demonstração interativa</span>
            </div>

            <h2 className="heading-lg mb-6">
              <span className="text-foreground">Experimente nossa </span>
              <span className="text-gradient">IA em ação</span>
            </h2>
            
            <p className="body-lg mb-8">
              Interaja com nosso chatbot de demonstração e veja como a automação 
              pode transformar seu atendimento. Sem compromisso, sem cadastro.
            </p>

            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">Disponível 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm">Resposta instantânea</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
