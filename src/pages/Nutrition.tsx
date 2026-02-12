import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const Nutrition = () => {
  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Nutrição Noturna</h1>
        <p className="text-muted-foreground">O que consumir e o que evitar</p>
      </div>

      <Tabs defaultValue="drinks" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="drinks">Bebidas & Chás</TabsTrigger>
          <TabsTrigger value="food">Alimentos Proibidos</TabsTrigger>
        </TabsList>

        <TabsContent value="drinks" className="space-y-4">
          <Card className="bg-purple-50 border-none">
            <CardHeader>
              <CardTitle className="text-lg text-purple-900 flex items-center gap-2">
                🍹 Shot Metabólico (Receita Principal)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-purple-800">
                <p><strong>Ingredientes:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>50ml de água morna</li>
                  <li>1/2 limão espremido</li>
                  <li>1 pitada de cúrcuma</li>
                  <li>10 gotas de própolis</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg text-xs text-muted-foreground">
                <strong>Como tomar:</strong> 30 minutos antes de dormir. Ajuda a desinflamar e preparar o fígado.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                🫖 Chás Seca Gordura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl">🌼</span>
                  <div>
                    <strong className="text-foreground block">Camomila + Mulungu</strong>
                    <span className="text-sm text-muted-foreground">Para ansiedade extrema e insônia.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <strong className="text-foreground block">Melissa (Erva-cidreira)</strong>
                    <span className="text-sm text-muted-foreground">Reduz o cortisol (estresse).</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="food" className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-red-50 text-red-800 rounded-lg border border-red-100">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">Estes alimentos elevam a insulina e bloqueiam o GH (hormônio do crescimento) que queima gordura.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Doces", icon: "🍰" },
              { name: "Massas", icon: "🍝" },
              { name: "Refrigerante", icon: "🥤" },
              { name: "Café", icon: "☕" },
              { name: "Frituras", icon: "🍟" },
              { name: "Álcool", icon: "🍷" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:bg-red-50 transition-colors border-none shadow-sm">
                <CardContent className="p-4">
                  <span className="text-3xl block mb-2 grayscale opacity-70">{item.icon}</span>
                  <span className="font-medium text-sm text-muted-foreground">{item.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Nutrition;
