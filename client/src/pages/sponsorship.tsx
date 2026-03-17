import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MapPin, Zap, Heart, Award, Globe, ArrowRight, Phone, Mail } from "lucide-react";

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container px-4 text-center">
          <Badge className="mb-4" variant="secondary">Kiosk Sponsorship Program</Badge>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transform Schools & <span className="text-primary">Communities</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Sponsor an interactive Career Plug AI kiosk in schools and community hubs. Give students instant access to AI-powered career guidance while building your brand and community impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Become a Sponsor
            </Button>
            <Button size="lg" variant="outline">
              See Placements
            </Button>
          </div>
        </div>
      </section>

      {/* What is a Kiosk? */}
      <section className="py-24 border-t">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">What is a Career Plug AI Kiosk?</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                An interactive, touchscreen terminal that brings Career Plug AI directly to students in their schools and communities. Students can:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex gap-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Map Career Paths:</strong> Get personalized career recommendations based on their strengths</span>
                </li>
                <li className="flex gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Build Digital Footprint:</strong> Curate their professional presence and portfolio</span>
                </li>
                <li className="flex gap-3">
                  <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Access Wellness Resources:</strong> Get mental health support and guidance</span>
                </li>
                <li className="flex gap-3">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Connect with Opportunities:</strong> Browse internships, mentorships, and scouts</span>
                </li>
              </ul>
              <p className="pt-4 italic">
                All powered by AI that understands each student's unique strengths—not just their grades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Why Sponsor a Kiosk?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Directly empower students in underserved communities with tools that change their futures. Your sponsorship removes barriers to career guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 mb-4">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Brand Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your logo and message featured on every kiosk. Reach thousands of students and their families who see your brand as a force for good.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20 mb-4">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Talent Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect directly with engaged, high-potential students early. Sponsor organizations gain exclusive access to student talent insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20 mb-4">
                  <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Be recognized as a leader supporting youth development. Featured on our website, social media, and impact reports.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-4">
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sponsorships may be tax-deductible as corporate philanthropy. We'll provide documentation for your records.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-4">
                  <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Measurable Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track real metrics: students reached, careers mapped, opportunities connected. Get quarterly impact reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24 border-t">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Sponsorship Tiers</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Choose a sponsorship level that matches your organization's commitment and reach.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Bronze</CardTitle>
                <CardDescription>Single Kiosk Sponsorship</CardDescription>
                <div className="mt-4 text-3xl font-bold">$15K<span className="text-lg font-normal text-muted-foreground">/year</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>1 kiosk placement in school or community hub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Your logo on kiosk display</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Annual impact report (students reached)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Listed as sponsor on website</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full" variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  Silver
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Popular</Badge>
                </CardTitle>
                <CardDescription>Multi-Location Partnership</CardDescription>
                <div className="mt-4 text-3xl font-bold">$45K<span className="text-lg font-normal text-muted-foreground">/year</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>3-5 kiosks across multiple locations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Co-branded kiosk design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Quarterly impact reports with analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Featured sponsor status on website & social</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Access to student talent insights (non-personal)</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gold</CardTitle>
                <CardDescription>District-Wide Initiative</CardDescription>
                <div className="mt-4 text-3xl font-bold">Custom<span className="text-lg font-normal text-muted-foreground">Pricing</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>10+ kiosks across entire district</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>Custom branding & placement strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>Monthly impact reports & insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>Dedicated partnership manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>Premium talent insights & partnership benefits</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Express Interest",
                description: "Fill out our sponsorship form with your organization info and preferred placement location(s)."
              },
              {
                step: 2,
                title: "Partnership Consultation",
                description: "Meet with our team to discuss your goals, brand integration, and ideal kiosk locations in schools or community hubs."
              },
              {
                step: 3,
                title: "Placement & Setup",
                description: "We handle hardware installation, maintenance, and software updates. Your kiosk goes live in weeks, not months."
              },
              {
                step: 4,
                title: "Track Impact",
                description: "Receive monthly or quarterly reports showing students reached, career paths mapped, and community engagement metrics."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to sponsor a kiosk? Contact our sponsorship team directly to discuss your organization's goals and ideal placement locations.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Call Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Primary Line</p>
                  <a href="tel:+27796158762" className="text-lg font-semibold text-primary hover:underline">
                    +27 79 615 8762
                  </a>
                  <p className="text-sm text-muted-foreground pt-4">Alternative Line</p>
                  <a href="tel:+27834095677" className="text-lg font-semibold text-primary hover:underline">
                    +27 83 409 5677
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-accent" />
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Sponsorship Inquiries</p>
                  <a href="mailto:sponsorship@careerplugai.com" className="text-lg font-semibold text-accent hover:underline">
                    sponsorship@careerplugai.com
                  </a>
                  <p className="text-sm text-muted-foreground pt-4">General Contact</p>
                  <a href="mailto:info@careerplugai.com" className="text-lg font-semibold text-accent hover:underline">
                    info@careerplugai.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sponsor a kiosk and help shape the future of youth career development. Join organizations already investing in the next generation.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Become a Sponsor <ArrowRight className="h-4 w-4" />
          </Button>
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
