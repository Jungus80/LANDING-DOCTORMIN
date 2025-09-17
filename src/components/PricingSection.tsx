import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Zap } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Gratuito",
      price: "$0",
      period: "para siempre",
      description: "Perfecto para estudiantes y profesionales que quieren probar DoctorMind",
      features: [
        "5 consultas por día",
        "Acceso a fuentes básicas",
        "Respuestas en menos de 5 segundos",
        "Soporte por email",
        "Historial de consultas (7 días)"
      ],
      cta: "Comenzar gratis",
      popular: false,
      color: "border-border"
    },
    {
      name: "Profesional",
      price: "$29",
      period: "por mes",
      description: "Ideal para médicos y profesionales de la salud en práctica activa",
      features: [
        "Consultas ilimitadas",
        "Acceso a todas las fuentes científicas",
        "Respuestas en menos de 3 segundos",
        "Soporte prioritario",
        "Historial completo de consultas",
        "Exportar respuestas a PDF",
        "Integración con sistemas hospitalarios"
      ],
      cta: "Comenzar prueba gratuita",
      popular: true,
      color: "border-primary"
    },
    {
      name: "Institucional",
      price: "Personalizado",
      period: "contactar ventas",
      description: "Para hospitales, clínicas y organizaciones de salud",
      features: [
        "Todo lo del plan Profesional",
        "API personalizada",
        "Integración con sistemas existentes",
        "Soporte dedicado 24/7",
        "Entrenamiento personalizado",
        "SLA garantizado",
        "Análisis de uso y reportes"
      ],
      cta: "Contactar ventas",
      popular: false,
      color: "border-border"
    }
  ];

  return (
    <section id="planes" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Planes y precios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades profesionales
          </p>
        </div>

        {/* Pricing Tabs */}
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="monthly">Mensual</TabsTrigger>
              <TabsTrigger value="yearly">Anual (20% descuento)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative border-2 ${plan.color} ${plan.popular ? 'shadow-xl scale-105' : 'shadow-lg'} transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Más popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-foreground">
                      {plan.name}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </div>
                      <div className="text-muted-foreground">
                        {plan.period}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {plan.cta}
                      {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const yearlyPrice = plan.price === "$0" ? "$0" : 
                  plan.price === "Personalizado" ? "Personalizado" : 
                  `$${Math.round(parseInt(plan.price.replace('$', '')) * 12 * 0.8)}`;
                
                return (
                  <Card 
                    key={index} 
                    className={`relative border-2 ${plan.color} ${plan.popular ? 'shadow-xl scale-105' : 'shadow-lg'} transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          Más popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl text-foreground">
                        {plan.name}
                      </CardTitle>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-foreground">
                          {yearlyPrice}
                        </div>
                        <div className="text-muted-foreground">
                          {plan.price === "$0" ? "para siempre" : 
                           plan.price === "Personalizado" ? "contactar ventas" : "por año"}
                        </div>
                        {plan.price !== "$0" && plan.price !== "Personalizado" && (
                          <div className="text-sm text-green-600 font-medium">
                            Ahorra 20% vs mensual
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        {plan.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        {plan.cta}
                        {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Todos los planes incluyen acceso a nuestras fuentes científicas verificadas
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ PubMed</span>
            <span>✓ OMS</span>
            <span>✓ Revistas médicas</span>
            <span>✓ Bases de datos especializadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

