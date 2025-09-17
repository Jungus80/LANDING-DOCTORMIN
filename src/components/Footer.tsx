import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  X, 
  Linkedin, 
  Github,
  Facebook,
  Instagram
} from "lucide-react";



export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Acerca de", href: "#about" },
      { name: "Nuestro equipo", href: "#team" },
      { name: "Carreras", href: "#careers" },
      { name: "Prensa", href: "#press" }
    ],
    product: [
      { name: "Características", href: "#features" },
      { name: "Precios", href: "#planes" },
      { name: "API", href: "#api" },
      { name: "Integraciones", href: "#integrations" }
    ],
    resources: [
      { name: "Documentación", href: "#docs" },
      { name: "Centro de ayuda", href: "#help" },
      { name: "Blog", href: "#blog" },
      { name: "Webinars", href: "#webinars" }
    ],
    legal: [
      { name: "Privacidad", href: "#privacy" },
      { name: "Términos", href: "#terms" },
      { name: "Cookies", href: "#cookies" },
      { name: "Seguridad", href: "#security" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer id="contacto" className=" ">
      <div className="container mx-auto my-10 p-8 bg-muted/70 w-6xl rounded-3xl">
        {/* Main Footer Content */}
        <div className="py-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">DoctorMind</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Tu asistente de inteligencia artificial médica con fuentes verificadas. 
                Transformando la práctica médica con tecnología de vanguardia.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>contacto@doctormind.ai</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10"
                      asChild
                    >
                      <a href={social.href} aria-label={social.name}>
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Producto</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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

