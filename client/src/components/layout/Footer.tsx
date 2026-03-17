import { Link, useLocation } from "wouter";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";

export function Footer() {
  const [location, setLocation] = useLocation();

  const handlePricingClick = () => {
    setLocation("/professionals");
    setTimeout(() => {
      document.getElementById("access-plans")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleLogoClick = () => {
    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setLocation("/");
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
              <img src={logo} alt="Career Plug AI" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Smart Careers. Strong Identities. Creating the billionaires of tomorrow through personalized, AI-driven guidance.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><div onClick={handlePricingClick} className="hover:text-primary cursor-pointer">Pricing & Plans</div></li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {location !== "/professionals" && (
                <li><Link href="/professionals"><div className="hover:text-primary cursor-pointer">For Employers & Scouts</div></Link></li>
              )}
              {location !== "/sponsorship" && (
                <li><Link href="/sponsorship"><div className="hover:text-primary cursor-pointer">Sponsorship</div></Link></li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+27796158762" className="hover:text-primary">+27 79 615 8762</a></li>
              <li><a href="tel:+27834095677" className="hover:text-primary">+27 83 409 5677</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex justify-center gap-6 mb-6 text-xs text-muted-foreground">
            <Link href="/privacy"><div className="hover:text-primary cursor-pointer">Privacy Policy</div></Link>
            <span>•</span>
            <Link href="/terms"><div className="hover:text-primary cursor-pointer">Terms of Service</div></Link>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Career Plug AI (Pty) Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
