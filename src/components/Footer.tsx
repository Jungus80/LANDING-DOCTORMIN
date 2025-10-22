import { Separator } from "@/components/ui/separator";
import Image from "next/image";



export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { name: "Privacidad", href: "#privacy" },
      { name: "Términos", href: "#terms" },
      { name: "Cookies", href: "#cookies" },
      { name: "Seguridad", href: "#security" }
    ]
  };

  return (
    <footer id="contacto" className=" ">
      <div className="container mx-auto my-10 p-8 bg-muted/70 w-6xl rounded-3xl">
        {/* Main Footer Content */}
        <div className="py-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
               <Image src="/logo.png" alt="logo" width={32} height={32} />
              </div>
              <span className="text-xl font-bold text-foreground">DoctorMind</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Tu asistente de inteligencia artificial médica con fuentes verificadas. 
              Transformando la práctica médica con tecnología de vanguardia.
            </p>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} DoctorMind. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Aviso legal:</strong> DoctorMind no reemplaza el criterio médico profesional. 
              Es un asistente de apoyo que proporciona información basada en evidencia científica. 
              Siempre consulte con un profesional de la salud calificado para diagnósticos y tratamientos médicos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

