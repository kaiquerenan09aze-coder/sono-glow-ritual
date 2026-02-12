import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Challenge = () => {
  const [completedDays, setCompletedDays] = useState([true, true, true, false, false, false, false]);

  const toggleDay = (index: number) => {
    const newDays = [...completedDays];
    newDays[index] = !newDays[index];
    setCompletedDays(newDays);
    
    if (newDays[index]) {
      toast.success("Dia marcado como concluído! Parabéns!");
    }
  };

  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Desafio 7 Noites</h1>
        <p className="text-muted-foreground">A consistência é o segredo do resultado</p>
      </div>

      <div className="grid gap-4">
        {completedDays.map((isCompleted, index) => (
          <Card 
            key={index} 
            className={`transition-all cursor-pointer ${
              isCompleted 
                ? 'bg-primary border-primary text-primary-foreground' 
                : 'hover:bg-secondary/20'
            }`}
            onClick={() => toggleDay(index)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${
                  isCompleted ? 'bg-white text-primary border-white' : 'border-muted-foreground text-transparent'
                }`}>
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`font-bold ${isCompleted ? 'text-white' : 'text-foreground'}`}>
                    Noite {index + 1}
                  </h3>
                  <p className={`text-sm ${isCompleted ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {isCompleted ? 'Ritual concluído' : 'Pendente'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Challenge;
