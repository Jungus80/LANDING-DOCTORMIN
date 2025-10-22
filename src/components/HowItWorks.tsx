"use client"
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { useState, useEffect, useRef } from "react";

export function HowItWorks() {
  const [inputAnimation, setInputAnimation] = useState(null);
  const [busquedaAnimation, setBusquedaAnimation] = useState(null);
  const [respuestaAnimation, setRespuestaAnimation] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Cargar animaciones solo cuando la sección es visible
    const loadAnimations = async () => {
      try {
        const [inputRes, busquedaRes, respuestaRes] = await Promise.all([
          fetch('/Input.json'),
          fetch('/busqueda.json'),
          fetch('/respuesta.json')
        ]);

        const [inputData, busquedaData, respuestaData] = await Promise.all([
          inputRes.json(),
          busquedaRes.json(),
          respuestaRes.json()
        ]);

        setInputAnimation(inputData);
        setBusquedaAnimation(busquedaData);
        setRespuestaAnimation(respuestaData);
      } catch (error) {
        console.error('Error loading Lottie animations:', error);
      }
    };

    loadAnimations();
  }, [isVisible]);

  const steps = [
    {
      step: "1",
      title: "Ingresa tu consulta médica",
      description: "Escribe tu pregunta médica de forma natural, como si hablaras con un colega experto.",
      cta: "Comenzar ahora",
      position: "right",
      lottie: inputAnimation
    },
    {
      step: "2", 
      title: "IA busca en fuentes científicas",
      description: "Nuestro sistema consulta automáticamente PubMed, OMS y revistas médicas especializadas.",
      cta: "Ver fuentes",
      position: "left",
      lottie: busquedaAnimation
    },
    {
      step: "3",
      title: "Obtén respuestas confiables",
      description: "Recibe respuestas estructuradas con referencias científicas y evidencia de respaldo.",
      cta: "Ver ejemplos",
      position: "right", 
      lottie: respuestaAnimation
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      {/* Grid pattern background */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl lg:text-6xl  text-gray-900 font-serif">
            Cómo funciona DoctorMind
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos simples para obtener respuestas médicas confiables y basadas en evidencia
          </p>
        </div>

        <div className="space-y-16 bg-background">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
              step.position === 'left' ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Lottie Animation */}
              <div className="flex-1 max-w-xl border-2 border-primary rounded-3xl">
                <div className="w-full h-80  rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
                  {step.lottie ? (
                    <Lottie 
                      animationData={step.lottie}
                      loop={true}
                      autoplay={isVisible}
                      style={{ width: '100%', height: '100%' }}
                      className="absolute inset-0"
                      rendererSettings={{
                        preserveAspectRatio: 'xMidYMid slice',
                        progressiveLoad: true,
                        hideOnTransparent: true
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-gray-500">Cargando animación...</div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 max-w-lg">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide bg-white rounded-3xl shadow py-2 px-4">
                      Paso {step.step}
                    </span>
                    <h3 className="text-5xl  text-gray-900 mt-5 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <Button size="lg" className="bg-primary text-white px-8 py-6 rounded-xl text-lg font-serif ">
                    {step.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
