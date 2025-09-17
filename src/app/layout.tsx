import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoctorMind - Tu asistente de IA médica con fuentes verificadas",
  description: "Encuentra respuestas confiables en segundos, basadas en evidencia científica de PubMed, OMS y revistas médicas. Para médicos e investigadores de la salud.",
  keywords: "inteligencia artificial médica, IA médica, PubMed, OMS, medicina, investigación médica, diagnóstico médico",
  authors: [{ name: "DoctorMind" }],
  openGraph: {
    title: "DoctorMind - Tu asistente de IA médica",
    description: "Encuentra respuestas confiables en segundos, basadas en evidencia científica",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        {/* Background with radial gradient */}
       
        
        {children}
      </body>
    </html>
  );
}
