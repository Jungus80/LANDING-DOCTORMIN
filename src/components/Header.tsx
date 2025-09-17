"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full   border border-white/20 bg-white/10  backdrop-filter backdrop-blur-lg font-serif">
      <div className="container mx-auto px-60">
        <div className="flex h-16 items-center justify-between ">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#technologies"
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Technologies
            </a>
            <a
              href="#products"
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Products
            </a>
          </nav>

          {/* Logo - Centered */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
            </div>
            <span className="text-2xl font-bold text-foreground font-serif">DoctorMind</span>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#team"
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Team
            </a>
            <a
              href="#pricing"
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Pricing
            </a>
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="flex flex-col space-y-4 py-4">
              <a
                href="#about"
                className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#technologies"
                className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technologies
              </a>
              <a
                href="#products"
                className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#team"
                className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#pricing"
                className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <Button className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-lg mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
