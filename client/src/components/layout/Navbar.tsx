import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location === path;

  const handleScroll = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const target =
      sectionId === "top"
        ? document.body
        : document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Career Plug AI" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/">
            <div className={`text-sm font-medium transition-colors cursor-pointer ${
              isActive("/") 
                ? "text-primary font-semibold border-b-2 border-primary pb-0.5" 
                : "hover:text-primary text-foreground"
            }`}>Home</div>
          </Link>

          <button
            onClick={() => handleScroll("legacy-section")}
            className="text-sm font-medium hover:text-primary"
          >
            Career Paths
          </button>

          <Link
            to="/about"
            className={`text-sm font-medium ${
              isActive("/about")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            About
          </Link>

          <Link
            to="/professionals"
            className={`text-sm font-medium ${
              isActive("/professionals")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            For Professionals
          </Link>

          <Link
            to="/sponsorship"
            className={`text-sm font-medium ${
              isActive("/sponsorship")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            Sponsorship
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-secondary"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>

            <Link to="/auth?signup=true">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className={`text-sm font-medium cursor-pointer ${
              isActive("/") 
                ? "text-primary font-semibold" 
                : "hover:text-primary text-foreground"
            }`}>Home</div>
          </Link>

          <button
            onClick={() => {
              setIsOpen(false);
              handleScroll("legacy-section");
            }}
            className="block text-left w-full"
          >
            Career Paths
          </button>

          <Link to="/about" onClick={() => setIsOpen(false)}>
            <div className={`text-sm font-medium cursor-pointer ${
              isActive("/about") 
                ? "text-primary font-semibold" 
                : "hover:text-primary text-foreground"
            }`}>About</div>
          </Link>

          <Link to="/professionals" onClick={() => setIsOpen(false)}>
            <div className={`text-sm font-medium cursor-pointer ${
              isActive("/professionals") 
                ? "text-primary font-semibold" 
                : "hover:text-primary text-foreground"
            }`}>For Professionals</div>
          </Link>

          <Link to="/sponsorship" onClick={() => setIsOpen(false)}>
            <div className={`text-sm font-medium cursor-pointer ${
              isActive("/sponsorship") 
                ? "text-primary font-semibold" 
                : "hover:text-primary text-foreground"
            }`}>Sponsorship</div>
          </Link>

          <div className="flex flex-col gap-2 pt-4 border-t">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-5 w-5" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5" /> Light Mode
                </>
              )}
            </button>

            <Link to="/auth">
              <Button variant="ghost" className="w-full">
                Log In
              </Button>
            </Link>

            <Link to="/auth?signup=true">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}