import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. María González",
      role: "Cardióloga",
      hospital: "Hospital General de Madrid",
      image: "/api/placeholder/40/40",
      content: "DoctorMind ha revolucionado mi práctica clínica. Las respuestas son precisas, rápidas y siempre con referencias científicas. Es como tener un colega experto disponible 24/7.",
      rating: 5,
      specialty: "Cardiología"
    },
    {
      name: "Dr. Carlos Rodríguez",
      role: "Investigador Clínico",
      hospital: "Instituto de Investigación Biomédica",
      image: "/api/placeholder/40/40",
      content: "Para mis investigaciones, DoctorMind es invaluable. Me ayuda a encontrar estudios relevantes y mantener actualizada mi base de conocimiento científico.",
      rating: 5,
      specialty: "Investigación"
    },
    {
      name: "Dra. Ana Martínez",
      role: "Médico Internista",
      hospital: "Clínica San Rafael",
      image: "/api/placeholder/40/40",
      content: "Como médico general, necesito acceso rápido a información especializada. DoctorMind me da esa información de forma confiable y estructurada.",
      rating: 5,
      specialty: "Medicina Interna"
    },
    {
      name: "Dr. Luis Fernández",
      role: "Pediatra",
      hospital: "Hospital Infantil",
      image: "/api/placeholder/40/40",
      content: "La precisión de DoctorMind en pediatría es excepcional. Me ayuda con diagnósticos complejos y protocolos de tratamiento actualizados.",
      rating: 5,
      specialty: "Pediatría"
    },
    {
      name: "Dra. Carmen López",
      role: "Neuróloga",
      hospital: "Centro Neurológico Avanzado",
      image: "/api/placeholder/40/40",
      content: "En neurología, la información cambia constantemente. DoctorMind me mantiene actualizada con las últimas investigaciones y tratamientos.",
      rating: 5,
      specialty: "Neurología"
    },
    {
      name: "Dr. Miguel Torres",
      role: "Estudiante de Medicina",
      hospital: "Universidad de Medicina",
      image: "/api/placeholder/40/40",
      content: "Como estudiante, DoctorMind me ayuda a entender conceptos complejos y prepararme para exámenes con información actualizada y confiable.",
      rating: 5,
      specialty: "Estudiante"
    }
  ];

  const institutions = [
    { name: "Hospital General", logo: "/api/placeholder/120/60" },
    { name: "Clínica San Rafael", logo: "/api/placeholder/120/60" },
    { name: "Instituto Biomédico", logo: "/api/placeholder/120/60" },
    { name: "Hospital Infantil", logo: "/api/placeholder/120/60" },
    { name: "Centro Neurológico", logo: "/api/placeholder/120/60" },
    { name: "Universidad de Medicina", logo: "/api/placeholder/120/60" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Testimonios de profesionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo DoctorMind está transformando la práctica médica
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-start">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.hospital}
                    </div>
                  </div>
                </div>

                {/* Specialty Badge */}
                <div className="flex justify-end">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.specialty}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Institutions Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Confiado por instituciones líderes
            </h3>
            <p className="text-muted-foreground">
              Hospitales, clínicas y universidades que confían en DoctorMind
            </p>
          </div>

          {/* Institution Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {institutions.map((institution, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="h-16 w-full bg-background/50 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">
                    {institution.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Instituciones</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Países</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Consultas mensuales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

