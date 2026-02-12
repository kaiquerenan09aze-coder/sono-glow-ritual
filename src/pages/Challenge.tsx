import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Bell, BellOff, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Challenge = () => {
  const [completedDays, setCompletedDays] = useState([false, false, false, false, false, false, false]);
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState("21:00");

  const toggleDay = (index: number) => {
    const newDays = [...completedDays];
    newDays[index] = !newDays[index];
    setCompletedDays(newDays);
    
    if (newDays[index]) {
      toast.success("Dia marcado como concluído! Parabéns!");
    }
  };

  const handleReminderToggle = () => {
    const newState = !reminderEnabled;
    setReminderEnabled(newState);
    if (newState) {
      if ("Notification" in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            toast.success(`Lembrete ativado para às ${reminderTime}!`);
          } else {
            toast.info("Ative as notificações do navegador para receber lembretes.");
          }
        });
      } else {
        toast.success(`Lembrete ativado para às ${reminderTime}!`);
      }
    } else {
      toast("Lembrete desativado.");
    }
  };

  const completedCount = completedDays.filter(Boolean).length;

  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Desafio 7 Noites</h1>
        <p className="text-muted-foreground">A consistência é o segredo do resultado</p>
      </div>

      {/* Reminder Card */}
      <Card className="border-none shadow-md bg-secondary/30">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {reminderEnabled ? (
                <Bell className="h-5 w-5 text-primary animate-pulse" />
              ) : (
                <BellOff className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <h3 className="font-semibold text-sm text-foreground">Lembrete do Ritual</h3>
                <p className="text-xs text-muted-foreground">Receba um aviso para iniciar seu ritual</p>
              </div>
            </div>
            <Switch checked={reminderEnabled} onCheckedChange={handleReminderToggle} />
          </div>
          {reminderEnabled && (
            <div className="flex items-center gap-2 pt-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <input
                type="time"
                value={reminderTime}
                onChange={(e) => {
                  setReminderTime(e.target.value);
                  toast.success(`Horário atualizado para ${e.target.value}`);
                }}
                className="bg-background border border-input rounded-md px-3 py-1.5 text-sm text-foreground"
              />
              <span className="text-xs text-muted-foreground">Horário do lembrete</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Progress */}
      <div className="text-center text-sm text-muted-foreground">
        {completedCount} de 7 noites concluídas
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
