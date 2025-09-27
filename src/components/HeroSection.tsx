import { Button } from "./ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo animado */}
<motion.img
  src="/logotrans.png"
  alt="Logo"
  style={{
    width: "200px",  // ancho que quieras
    height: "200px", // alto que quieras
    margin: "0 auto 2rem auto", // centrado y margen inferior
  }}
  initial={{ scale: 0, rotate: -180, opacity: 0 }}
  animate={{ scale: 1, rotate: 0, opacity: 1 }}
  transition={{ duration: 1, type: "spring" }}
/>






          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            Soluciones de software
            <span className="text-muted-foreground block">que transforman</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desarrollamos aplicaciones modernas y escalables que impulsan el
            crecimiento de tu negocio con tecnología de vanguardia.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="group">
              Comenzar proyecto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Ver nuestro trabajo
            </Button>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Desarrollo ágil</h3>
              <p className="text-sm text-muted-foreground text-center">
                Metodologías modernas para entrega rápida
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Alto rendimiento</h3>
              <p className="text-sm text-muted-foreground text-center">
                Aplicaciones optimizadas y escalables
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Equipo experto</h3>
              <p className="text-sm text-muted-foreground text-center">
                Desarrolladores senior especializados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
