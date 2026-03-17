import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Career Plug AI" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about">
            <div className={`text-sm font-medium transition-colors cursor-pointer ${
              isActive("/about") 
                ? "text-primary font-semibold border-b-2 border-primary pb-0.5" 
                : "hover:text-primary text-foreground"
            }`}>About</div>
          </Link>
          <Link href="/professionals">
            <div className={`text-sm font-medium transition-colors cursor-pointer ${
              isActive("/professionals") 
                ? "text-primary font-semibold border-b-2 border-primary pb-0.5" 
                : "hover:text-primary text-foreground"
            }`}>For Professionals</div>
          </Link>
          <Link href="/sponsorship">
            <div className={`text-sm font-medium transition-colors cursor-pointer ${
              isActive("/sponsorship") 
                ? "text-primary font-semibold border-b-2 border-primary pb-0.5" 
                : "hover:text-primary text-foreground"
            }`}>Sponsorship</div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/auth">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link href="/auth?signup=true">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            <Link href="/about">
              <div className={`text-sm font-medium cursor-pointer ${
                isActive("/about") 
                  ? "text-primary font-semibold" 
                  : "hover:text-primary text-foreground"
              }`}>About</div>
            </Link>
            <Link href="/professionals">
              <div className={`text-sm font-medium cursor-pointer ${
                isActive("/professionals") 
                  ? "text-primary font-semibold" 
                  : "hover:text-primary text-foreground"
              }`}>For Professionals</div>
            </Link>
            <Link href="/sponsorship">
              <div className={`text-sm font-medium cursor-pointer ${
                isActive("/sponsorship") 
                  ? "text-primary font-semibold" 
                  : "hover:text-primary text-foreground"
              }`}>Sponsorship</div>
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Link href="/auth">
                <Button variant="ghost" className="w-full justify-start">Log In</Button>
              </Link>
              <Link href="/auth?signup=true">
                <Button className="w-full bg-primary text-primary-foreground">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
