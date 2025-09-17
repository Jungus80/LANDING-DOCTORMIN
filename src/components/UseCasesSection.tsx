import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Microscope, 
  GraduationCap,
  Heart,
  Brain,
  Activity
} from "lucide-react";

export function UseCasesSection() {
  const useCases = [
    {
      icon: Stethoscope,
      title: "Médicos Clínicos",
      description: "Diagnóstico rápido y apoyo en la toma de decisiones clínicas basadas en evidencia.",
      features: ["Diagnóstico diferencial", "Protocolos de tratamiento", "Interacciones medicamentosas"],
      badge: "Más popular",
      color: "bg-blue-500/10 text-blue-700 border-blue-200"
    },
    {
      icon: Microscope,
      title: "Investigadores",
      description: "Revisión de literatura y análisis de estudios científicos para investigación médica.",
      features: ["Revisión sistemática", "Meta-análisis", "Tendencias de investigación"],
      badge: "Investigación",
      color: "bg-green-500/10 text-green-700 border-green-200"
    },
    {
      icon: GraduationCap,
      title: "Estudiantes de Medicina",
      description: "Apoyo académico y preparación para exámenes con información actualizada.",
      features: ["Preparación de exámenes", "Casos clínicos", "Farmacología"],
      badge: "Educación",
      color: "bg-purple-500/10 text-purple-700 border-purple-200"
    }
  ];

  const specialties = [
    { icon: Heart, name: "Cardiología" },
    { icon: Brain, name: "Neurología" },
    { icon: Activity, name: "Medicina Interna" },
    { icon: Stethoscope, name: "Pediatría" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Casos de uso para cada profesional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DoctorMind se adapta a las necesidades específicas de cada tipo de profesional de la salud
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={useCase.color}>
                      {useCase.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      Funcionalidades clave:
                    </h4>
                    <ul className="space-y-1">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specialties Section */}
    
      </div>
    </section>
  );
}

