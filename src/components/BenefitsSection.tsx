import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Shield, 
  Globe, 
  TrendingUp,
  Users,
  BookOpen,
  Zap,
  CheckCircle
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Respuestas instantáneas",
      description: "Obtén respuestas médicas en segundos, no horas. Ahorra tiempo valioso en tu práctica clínica."
    },
    {
      icon: Shield,
      title: "Fuentes verificadas",
      description: "Todas las respuestas provienen de fuentes científicas confiables como PubMed, OMS y revistas médicas."
    },
    {
      icon: Globe,
      title: "Acceso global",
      description: "Consulta información médica actualizada desde cualquier lugar, en cualquier momento."
    },
    {
      icon: TrendingUp,
      title: "Mejora continua",
      description: "Nuestro sistema aprende y mejora constantemente para ofrecerte las mejores respuestas."
    }
  ];

 

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-6xl text-foreground font-serif">
            Beneficios clave de DoctorMind
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La herramienta que todo profesional de la salud necesita para tomar decisiones informadas
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-6 border-transparent py-0 rounded-2xl shadow-lg md:hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 bg-background ">
                <CardContent className="text-center justify-center items-center flex   w-[100%] h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-background  rounded-t-2xl">
                  <div className="w-20 h-20 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-transparent shadow">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                
                </CardContent>
                <div className=" space-y-2 px-4 pb-12">
                    <h3 className="text-3xl text-foreground font-serif">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
    
      </div>
    </section>
  );
}
