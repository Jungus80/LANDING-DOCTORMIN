import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { BenefitsSection } from "@/components/BenefitsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WaitlistSection } from "@/components/WaitlistSection";

import { CTASection } from "@/components/CTASection";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
           <AnimatedGridPattern
        width={150}
        height={150}
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className=" inset-x-0 inset-y-[-30%] h-[200%] text-secondary"
      />
{/* 
         <button className="cursor-pointer   group relative    text-sm px-4 py-3 rounded-medium bg-primary transition-all duration-200 ease-in-out shadow hover:shadow-lg ">
   
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative inline-block overflow-hidden">
          <span className=" text-amber-50 block transition-transform duration-300 group-hover:-translate-y-full">
            Contact Us
          </span>
          <span className=" text-amber-50 absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Contact Us
          </span>
        </span>
        
        <svg className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45" viewBox="0 0 24 24">
          <circle fill="currentColor" r={11} cy={12} cx={12} />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="black" d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5" />
        </svg>
      </div>
    </button> */}
      <Header />
      
      
        <HeroSection />
 
        <HowItWorks />
        <BenefitsSection />
      
        <WaitlistSection />
      
        <CTASection />
      
      <Footer />
    </div>
  );
}
