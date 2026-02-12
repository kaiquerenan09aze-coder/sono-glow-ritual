import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Moon, PhoneOff, CupSoda } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Ritual = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Desconexão Digital",
      description: "Ative o modo noturno do celular e deixe-o longe da cama. A luz azul bloqueia a melatonina.",
      icon: <PhoneOff className="h-12 w-12 text-primary" />,
      action: "Já desconectei"
    },
    {
      title: "Bebida Metabólica",
      description: "Prepare seu chá ou shot noturno. Beba devagar e sinta o corpo relaxar.",
      icon: <CupSoda className="h-12 w-12 text-primary" />,
      action: "Bebida tomada"
    },
    {
      title: "Ambiente Perfeito",
      description: "Apague todas as luzes. Se necessário, use uma máscara de dormir. O breu total é essencial.",
      icon: <Moon className="h-12 w-12 text-primary" />,
      action: "Quarto pronto"
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success("Ritual concluído! Boa noite de sono reparador.");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] justify-between pb-20 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-2xl font-bold text-primary">Ritual Guiado</h1>
        <p className="text-muted-foreground">Siga os passos para ativar a queima noturna</p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-secondary to-background rounded-full flex items-center justify-center p-8 shadow-inner mb-8 animate-float">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-2xl shadow-lg">
                {steps[currentStep].icon}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{steps[currentStep].title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {steps[currentStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-2 mb-4">
          {steps.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 w-2 rounded-full transition-colors ${idx === currentStep ? 'bg-primary' : 'bg-secondary'}`}
            />
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="w-full text-lg h-14 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]" 
          onClick={handleNext}
        >
          {currentStep === steps.length - 1 ? (
            <span className="flex items-center gap-2">Concluir Ritual <CheckCircle2 className="h-5 w-5" /></span>
          ) : (
            <span className="flex items-center gap-2">{steps[currentStep].action} <ChevronRight className="h-5 w-5" /></span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Ritual;
