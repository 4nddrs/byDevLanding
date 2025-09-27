import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TeamSection() {
  const team = [
    {
      name: "Nicolas Barrientos",
      role: "CEO & Founder",
      image: "/profiles/nico.jpg"
    },
    {
      name: "Andrés Menchaca",
      role: "CTO",
      image: "/profiles/andres.jpg"
    },
    {
      name: "Hugo Ballivian",
      role: "Lead Developer",
      image: "/profiles/hugo.jpg"
    },
    {
      name: "Fabiana Bilbao",
      role: "Senior Developer",
      image: "/profiles/fabi.jpg"
    },
    {
      name: "Mishel Bravo",
      role: "Frontend Developer",
      image: "/profiles/mish.jpg"
    },
    {
      name: "Laura Nuñez",
      role: "Backend Developer",
      image: "/profiles/lau.jpg"
    },
    {
      name: "Harold Ramirez",
      role: "UX/UI Designer",
      image: "/profiles/harold.jpg"
    },
    {
      name: "Dario Ortega",
      role: "DevOps Engineer",
      image: "/profiles/dario.jpg"
    }
  ];

  return (
    <section id="equipo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Nuestro equipo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales apasionados por la tecnología y comprometidos con la excelencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 mx-auto w-32 h-32">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="font-medium mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}