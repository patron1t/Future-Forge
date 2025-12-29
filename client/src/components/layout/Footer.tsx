import { Link } from "wouter";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Career Plug AI" className="h-8 w-auto" />
              <span className="font-heading text-lg font-bold text-primary">
                Career Plug AI
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Smart Careers. Strong Identities. Creating the billionaires of tomorrow through personalized, AI-driven guidance.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features"><a className="hover:text-primary">Features</a></Link></li>
              <li><Link href="/careers"><a className="hover:text-primary">Career Paths</a></Link></li>
              <li><Link href="/pricing"><a className="hover:text-primary">Pricing</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog"><a className="hover:text-primary">Success Stories</a></Link></li>
              <li><Link href="/guidance"><a className="hover:text-primary">Guidance</a></Link></li>
              <li><Link href="/help"><a className="hover:text-primary">Help Center</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/professionals"><a className="hover:text-primary">For Employers</a></Link></li>
              <li><Link href="/scouts"><a className="hover:text-primary">For Scouts</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary">Contact Us</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Career Plug AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
