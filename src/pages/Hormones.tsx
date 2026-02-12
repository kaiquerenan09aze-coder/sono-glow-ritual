import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Info } from "lucide-react";

const Hormones = () => {
  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Hormônios do Sono</h1>
        <p className="text-muted-foreground">Entenda a ciência do emagrecimento noturno</p>
      </div>

      <Card className="border-l-4 border-l-primary shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🌙</span> Melatonina
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Conhecida como o hormônio do sono, ela não só ajuda a dormir, mas também estimula a queima de gordura marrom. Quanto melhor seu sono, mais gordura você queima.
          </p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-destructive shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚡</span> Cortisol
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            O hormônio do estresse. Se estiver alto à noite, ele bloqueia a queima de gordura e aumenta a fome no dia seguinte. Nosso objetivo é baixá-lo antes de dormir.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-secondary/30 border-none">
        <CardHeader>
          <CardTitle className="text-lg">Checklist Hormonal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            "Dormir antes das 23h",
            "Quarto totalmente escuro",
            "Temperatura amena (entre 18°C e 22°C)",
            "Jantar leve 3h antes de deitar"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <Check className="h-3 w-3" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Hormones;
