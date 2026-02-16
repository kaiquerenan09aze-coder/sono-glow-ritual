import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Moon, Star, Trophy, ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-night.jpg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={heroImage} 
            alt="Night sky" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-2 text-primary-foreground/80">
            <Moon className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Ritual da Noite</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Boa noite, Julia
          </h1>
          <p className="mb-6 max-w-md text-lg text-primary-foreground/90">
            Pronta para ativar seu metabolismo enquanto dorme? Seu corpo queima gordura no sono profundo.
          </p>
          <Link to="/ritual">
            <Button size="lg" variant="secondary" className="font-semibold gap-2 shadow-lg hover:scale-105 transition-transform">
              <PlayCircle className="h-5 w-5" />
              Iniciar Ritual Noturno
            </Button>
          </Link>
        </div>
      </div>

      {/* Progress Section */}
      <Card className="border-none shadow-md bg-white/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <h2 className="font-semibold text-foreground">Seu Progresso</h2>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Dia 0 de 7</span>
          </div>
          <Progress value={0} className="h-3 bg-secondary" />
          <p className="mt-2 text-xs text-muted-foreground text-center">
            Comece seu primeiro ritual noturno hoje!
          </p>
        </CardContent>
      </Card>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/nutrition">
          <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-purple-50">
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-white shadow-sm">
                <span className="text-2xl">🍵</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Chás & Bebidas</h3>
                <p className="text-xs text-muted-foreground">Receitas seca-barriga</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/hormones">
          <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-pink-50">
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-white shadow-sm">
                <span className="text-2xl">🧬</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Hormônios</h3>
                <p className="text-xs text-muted-foreground">Aprenda como funciona</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Motivation Card */}
      <Card className="bg-gradient-to-r from-primary to-purple-800 text-white border-none shadow-lg">
        <CardContent className="p-6 flex items-start gap-4">
          <div className="p-2 bg-white/10 rounded-lg">
            <Star className="h-6 w-6 text-yellow-300 fill-yellow-300 animate-pulse" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Dica da Noite</h3>
            <p className="text-sm text-primary-foreground/90">
              Evite luzes azuis (celular/TV) 1 hora antes de dormir para não bloquear a melatonina.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
