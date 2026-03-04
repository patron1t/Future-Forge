import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img src={logo} alt="Career Plug AI" className="h-10 w-auto" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button 
            onClick={() => document.getElementById('legacy-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Career Paths
          </button>
          <Link href="/professionals#plans-section">
            <a className="text-sm font-medium transition-colors hover:text-primary">For Professionals</a>
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
            <button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left text-sm font-medium hover:text-primary"
            >
              About
            </button>
            <button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('legacy-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left text-sm font-medium hover:text-primary"
            >
              Career Paths
            </button>
            <Link href="/professionals#plans-section"><a className="text-sm font-medium hover:text-primary">For Professionals</a></Link>
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
