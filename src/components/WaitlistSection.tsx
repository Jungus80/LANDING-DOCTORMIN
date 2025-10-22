"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Mail, User, Briefcase, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { motion } from "framer-motion";
import { z } from "zod";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

// Schema de validación con Zod
const waitlistSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre es demasiado largo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras y espacios"),
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Email inválido")
    .toLowerCase(),
  profession: z
    .string()
    .min(1, "Selecciona tu profesión"),
  comments: z
    .string()
    .max(500, "El comentario no puede exceder 500 caracteres")
    .optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function WaitlistSection() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    profession: "",
    comments: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  const professions = [
    "Médico General",
    "Especialista",
    "Residente",
    "Estudiante de Medicina",
    "Enfermero/a",
    "Investigador/a",
    "Otro profesional de la salud",
  ];

  const validateForm = () => {
    try {
      waitlistSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0].toString()] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setErrors({ email: result.error });
        } else {
          setServerError(result.error || 'Error al registrar. Intenta nuevamente.');
        }
        return;
      }

      // Éxito
      setIsSubmitted(true);
      
      // Reset después de 5 segundos
      setTimeout(() => {
        setFormData({ name: "", email: "", profession: "", comments: "" });
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setServerError('Error de conexión. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validación en tiempo real del campo específico
    if (errors[name]) {
      try {
        const fieldSchema = waitlistSchema.shape[name as keyof typeof waitlistSchema.shape];
        if (fieldSchema) {
          fieldSchema.parse(value);
          setErrors((prev) => ({ ...prev, [name]: "" }));
        }
      } catch (error) {
        if (error instanceof z.ZodError ) {  {/* eslint-disable-line */}
          setErrors((prev) => ({ ...prev, [name]: error.message }));
        }
      }
    }
    setServerError("");
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Validar el campo al perder el foco
    try {
      const fieldSchema = waitlistSchema.shape[name as keyof typeof waitlistSchema.shape];
      if (fieldSchema) {
        fieldSchema.parse(value);
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [name]: error.message }));
      }
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
            >
              <Sparkles className="text-primary mr-1.5 h-4 w-4 animate-pulse" />
              Acceso Anticipado
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl lg:text-5xl font-regular text-foreground ${instrumentSerif.className}`}
          >
            Únete a la{" "}
            <span className="text-primary">lista de espera</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Sé de los primeros en acceder a DoctorMind y revoluciona tu práctica médica con IA de última generación
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 via-background to-background">
            <CardContent className="p-8">
              {/* Error del servidor */}
              {serverError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{serverError}</p>
                </div>
              )}

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                  <h3 className={`text-2xl font-regular text-foreground ${instrumentSerif.className}`}>
                    ¡Bienvenido a la lista de espera!
                  </h3>
                  <p className="text-muted-foreground">
                    Te contactaremos pronto con acceso exclusivo
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <User className="h-4 w-4 text-primary" />
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="Dr. Juan Pérez"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      Email profesional
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Profession Select */}
                  <div className="space-y-2">
                    <label
                      htmlFor="profession"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <Briefcase className="h-4 w-4 text-primary" />
                      Profesión
                    </label>
                    <select
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.profession ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <option value="">Selecciona tu profesión</option>
                      {professions.map((profession) => (
                        <option key={profession} value={profession}>
                          {profession}
                        </option>
                      ))}
                    </select>
                    {errors.profession && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.profession}
                      </p>
                    )}
                  </div>

                  {/* Comments Textarea */}
                  <div className="space-y-2">
                    <label
                      htmlFor="comments"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4 text-primary" />
                      ¿Qué esperas de DoctorMind? (Opcional)
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.comments ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="Comparte tus expectativas o casos de uso específicos..."
                    />
                    {errors.comments && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.comments}
                      </p>
                    )}
                    {formData.comments && (
                      <p className="text-xs text-muted-foreground text-right">
                        {formData.comments.length}/500 caracteres
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className={`w-full ${instrumentSerif.className} rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? "Registrando..." : "Unirse a Waitlist"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  {/* Trust Indicators */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Acceso anticipado garantizado</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Sin costo durante el periodo beta</span>
                    </div>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Únete a más de <span className="text-primary font-semibold">10,000+</span> profesionales de la salud en lista de espera
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Acceso prioritario
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Descuentos exclusivos
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Soporte dedicado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}