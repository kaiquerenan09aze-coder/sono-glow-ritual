import { Link, useLocation } from "react-router-dom";
import { Home, Moon, Coffee, CalendarCheck } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: <Home className="h-6 w-6" />, label: "Início", path: "/" },
    { icon: <Moon className="h-6 w-6" />, label: "Ritual", path: "/ritual" },
    { icon: <Coffee className="h-6 w-6" />, label: "Nutrição", path: "/nutrition" },
    { icon: <CalendarCheck className="h-6 w-6" />, label: "Desafio", path: "/challenge" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/40 shadow-lg z-50 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary/70"
              }`}
            >
              <div className={`p-1 rounded-full transition-transform ${isActive ? "bg-secondary/50 scale-110" : ""}`}>
                {item.icon}
              </div>
              <span className="text-[10px] uppercase tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
