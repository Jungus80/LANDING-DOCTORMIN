import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Poppins, Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export function CTASection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl w-6xl border-4 border-transparent">
        <div className=" mx-auto text-center space-y-12">
          {/* Main CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2  text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Únete a la revolución médica
              </div>
              
              <h2 className={`text-4xl lg:text-5xl regular text-foreground ${instrumentSerif.className}`}>
                Únete a la nueva era de la{" "}
                <span className="text-primary">investigación médica</span>{" "}
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Más de 10,000 profesionales de la salud ya confían en DoctorMind.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <Button size="lg" className={`${instrumentSerif.className} rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-6`}>
                Comienza Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

     
        </div>
      </div>
    </section>
  );
}

