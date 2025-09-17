"use client"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Poppins, Instrument_Serif } from "next/font/google";
import { useState, useRef} from "react";
import Textarea from 'react-textarea-autosize'
import { Rocket, ArrowUp, ChevronDown, MessageCirclePlus, Square, Sparkles, Paperclip, Mic, Search, Globe, Lightbulb, Network } from 'lucide-react'
import { cn } from "@/lib/utils";

interface ChatPanelProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  socketError: string | null
  isLoading: boolean
  // messages: AIMessage[]
  // setMessages: (messages: AIMessage[]) => void
  query?: string
  stop: () => void
  append: (message: any) => void
  /** Whether to show the scroll to bottom button */
  showScrollToBottomButton: boolean
  /** Reference to the scroll container */
  scrollContainerRef: React.RefObject<HTMLDivElement>
  chatId: string // Añadir chatId
}

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export function HeroSection({
  handleInputChange,
  handleSubmit,
  isLoading,
  socketError,
  query,
  stop,
  append,
  showScrollToBottomButton,
  scrollContainerRef,
  chatId
}: ChatPanelProps) {
  const [input, setInput] = useState("");
  const [showEmptyScreen, setShowEmptyScreen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const isFirstRender = useRef(true)
  const [isComposing, setIsComposing] = useState(false) // Composition state
  const [enterDisabled, setEnterDisabled] = useState(false) /// Estado para el modo activo
 

  const handleCompositionStart = () => setIsComposing(true)

  const handleCompositionEnd = () => {
    setIsComposing(false)
    setEnterDisabled(true)
    setTimeout(() => {
      setEnterDisabled(false)
    }, 300)
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center  overflow-hidden">
      {/* Animated Grid Pattern Background */}

      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
      

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl text-foreground">
              <span className={`block ${poppins.className} font-medium py-4`}>Agente de investigación</span>
              <span className={` text-4xl lg:text-6xl italic text-primary ${instrumentSerif.className}`}>Medica con IA</span>
            </h1>
            <p className={`text-2xl text-muted-foreground  mx-auto ${instrumentSerif.className}`}>
              Transforma la información médica en decisiones confiables
            </p>
          </div>

          <form
        onSubmit={handleSubmit} // Cambiar a handleSocketSubmit
        className={' w-full mx-auto relativ max-w-2xl'}
      >
     

        {/* Enhanced Input Container */}
        <div className="relative group px-2 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div
            className={cn(
              "relative bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-300 shadow-2xl transition-all duration-300",
              isFocused && "shadow-3xl ring-2 ring-teal-500/20",
            )}
          >
            <div className="p-2 sm:px-3 sm:pb-3 sm:pt-0">
              <div>
                <div  className={"relative pb-3"}>
                  <div className="flex items-start">
                    <div className="flex-1 relative">
                      <Textarea
                        ref={inputRef}
                        name="input"
                        rows={1}
                        maxRows={6}
                        tabIndex={0}
                        onCompositionStart={handleCompositionStart}
                        onCompositionEnd={handleCompositionEnd}
                        placeholder="Ask about symptoms, medications, or medical conditions..."
                        spellCheck={false}
                        value={input}
                        disabled={isLoading} // Usar estado del socket
                        onFocus={() => {
                          setIsFocused(true)
                          setShowEmptyScreen(true)
                        }}
                        onBlur={() => {
                          setIsFocused(false)
                          setShowEmptyScreen(false)
                        }}
                        className={cn(
                          "resize-none text-base sm:text-base bg-transparent placeholder:text-gray-500 w-full disabled:cursor-not-allowed disabled:opacity-50",
                          "px-2 ",
                          "sm:min-h-[0px] min-h-[0px] sm:py-4 py-3",
                          "placeholder:font-normal placeholder:opacity-80",
                          "text-gray-900 dark:text-gray-100",
                          "transition-all duration-200 ease-in-out",
                          "selection:bg-teal-100 selection:text-teal-900",
                          "focus-visible:outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 focus:shadow-none",
                          "border-none outline-none focus:outline-none focus:ring-0 focus:border-none resize-none text-base"
                        )}
                        onChange={e => {
                          handleInputChange(e)
                          setShowEmptyScreen(e.target.value.length === 0)
                        }}
                        onKeyDown={e => {
                          if (
                            e.key === 'Enter' &&
                            !e.shiftKey &&
                            !isComposing &&
                            !enterDisabled
                          ) {
                            if (input.trim().length === 0) {
                              e.preventDefault()
                              return
                            }
                            e.preventDefault()
                            handleSubmit(e as any) // Usar handleSocketSubmit
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced Controls */}
                <div className="flex items-center justify-end">

         

                  <div className="flex items-center  gap-2">
                    <Button
                      type={isLoading ? 'button' : 'submit'}
                      size="icon"
                      onClick={isLoading ? stop : undefined}
                      disabled={
                        (input.length === 0 && !isLoading)
                      }
                      className={cn(
                        "rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0",
                        input.trim() && !isLoading && "hover:scale-110",
                        (input.length === 0 || isLoading) && "opacity-50 cursor-not-allowed",
                        (isLoading) && "animate-pulse"
                      )}
                    >
                      {isLoading ? <Square className="h-3 w-3 sm:h-4 sm:w-4" /> : <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    

      
      
      </form>

          {/* CTA Button */}
          <div className="pt-4">
            <RainbowButton 
              size="lg" 
              className="text-lg px-8 py-4"
            >
              Try 14 days free
              <Rocket className="ml-2 h-5 w-5" />
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
