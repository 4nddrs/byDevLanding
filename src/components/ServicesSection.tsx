import { Card, CardContent } from "./ui/card";
import { Globe, Smartphone, Database, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas con React, Next.js y tecnologías de última generación."
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones nativas e híbridas para iOS y Android con experiencia de usuario excepcional."
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Arquitecturas robustas y escalables con bases de datos optimizadas y APIs seguras."
    },
    {
      icon: Shield,
      title: "DevOps & Cloud",
      description: "Implementación en la nube, CI/CD y monitoreo para máxima disponibilidad."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Nuestros servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para todas tus necesidades tecnológicas,
            desde el concepto hasta el deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}