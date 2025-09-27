import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-8 h-8 rounded-lg"
          />

          <span className="font-medium">byDev</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#equipo" className="text-muted-foreground hover:text-foreground transition-colors">
            Equipo
          </a>
          <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>
        
        <a href="#contacto">
          <Button>Contáctanos</Button>
        </a>
      </div>
    </header>
  );
}