import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-8 h-8 rounded-lg"
              />

              <span className="font-medium">byDev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando ideas en soluciones de software excepcionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Apps Móviles</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Backend & APIs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">DevOps & Cloud</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contacto@techcorp.com" className="hover:underline">
                  contacto@bydev.com
                </a>
              </li>
              <li>
                <a href="tel:+59162650020" className="hover:underline">
                  +591 62650020
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/mpNLpaFMyjtax3kb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Cochabamba, Bolivia
                </a>
              </li>
            </ul>

          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 byDev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}