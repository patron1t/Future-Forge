import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Search, BarChart3, Users, Building } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";

export default function ProfessionalsPage() {
  const [location] = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('scroll') === 'pricing') {
      const element = document.getElementById('plans-section');
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container px-4 text-center">
          <Badge className="mb-4" variant="secondary">For Employers, Scouts & Counselors</Badge>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Access <span className="text-primary">Top Talent</span> Before Competitors
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Access a curated pool of high-potential students mapped by our AI based on their actual strengths, projects, and digital footprint. Counselors get free access.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Scouting
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Precision Scouting</h3>
              <p className="text-muted-foreground">
                Don't just look at grades. See cognitive strengths, soft skills, and project portfolios that prove ability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <BarChart3 className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold">Data-Driven Hiring</h3>
              <p className="text-muted-foreground">
                Our AI maps students to your organization's needs, reducing mismatch and identifying future leaders early.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Employer Branding</h3>
              <p className="text-muted-foreground">
                Showcase your company or university directly to engaged students who align with your mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Access */}
      <section id="plans-section" className="border-t bg-muted/20 py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Access Plans</h2>
            <p className="mt-4 text-muted-foreground">
              Choose the right plan for your organization. <span className="font-semibold text-primary">School counselors have free access.</span>
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card className="border-accent/30 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  Counselor Access
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">Free</Badge>
                </CardTitle>
                <CardDescription>For school counselors and educators.</CardDescription>
                <div className="mt-4 text-4xl font-bold">Free<span className="text-lg font-normal text-muted-foreground">Always</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-foreground" /> <span>View student profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-foreground" /> <span>Track student progress</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-foreground" /> <span>Direct messaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-foreground" /> <span>Wellness monitoring</span>
                  </li>
                </ul>
                <Link href="/auth">
                  <Button className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90">Create Free Account</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scout Access</CardTitle>
                <CardDescription>For independent talent scouts and small agencies.</CardDescription>
                <div className="mt-4 text-4xl font-bold">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> <span>View 100 student profiles/mo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> <span>Basic advanced filtering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> <span>Direct messaging</span>
                  </li>
                </ul>
                <Link href="/auth">
                  <Button className="mt-8 w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  Enterprise
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Popular</Badge>
                </CardTitle>
                <CardDescription>For universities, large employers, and academies.</CardDescription>
                <div className="mt-4 text-4xl font-bold">$199<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> <span>Unlimited profile views</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> <span>AI-powered matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> <span>Brand showcase page</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> <span>Priority support</span>
                  </li>
                </ul>
                <Link href="/auth">
                  <Button className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: "default" | "secondary" | "outline", className?: string }) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background"
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
