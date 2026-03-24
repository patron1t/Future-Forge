import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MapPin, Zap, Heart, Award, Globe, ArrowRight, Phone, Mail } from "lucide-react";
import { useLocation } from "wouter";
import { ComingSoonBanner } from "@/components/common/ComingSoonBanner";

export default function SponsorshipPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container px-4 text-center">
          <ComingSoonBanner title="final sponsorship pricing" />
          <Badge className="mb-4" variant="secondary">Kiosk Sponsorship Program</Badge>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transform Schools & <span className="text-primary">Communities</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Sponsor an interactive Career Plug AI kiosk in schools and community hubs. Give students instant access to AI-powered career guidance while building your brand and community impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Sponsor
            </Button>
            <Button size="lg" variant="outline" onClick={() => setLocation("/placements")}>See Placements</Button>
          </div>
        </div>
      </section>
      <section className="py-24 border-t">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">What is a Career Plug AI Kiosk?</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>An interactive, touchscreen terminal that brings Career Plug AI directly to students in their schools and communities. Students can:</p>
              <ul className="space-y-3 pl-6">
                <li className="flex gap-3"><Zap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Map Career Paths:</strong> Get personalized career recommendations based on their strengths</span></li>
                <li className="flex gap-3"><Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Build Digital Footprint:</strong> Curate their professional presence and portfolio</span></li>
                <li className="flex gap-3"><Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Access Wellness Resources:</strong> Get mental health support and guidance</span></li>
                <li className="flex gap-3"><Globe className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Connect with Opportunities:</strong> Browse internships, mentorships, and scouts</span></li>
              </ul>
              <p className="pt-4 italic">All powered by AI that understands each student's unique strengths—not just their grades.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 border-t bg-muted/20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Why Sponsor a Kiosk?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card><CardHeader><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4"><Heart className="h-6 w-6 text-primary" /></div><CardTitle>Community Impact</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Directly empower students in underserved communities with tools that change their futures. Your sponsorship removes barriers to career guidance.</p></CardContent></Card>
            <Card><CardHeader><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 mb-4"><MapPin className="h-6 w-6 text-accent-foreground" /></div><CardTitle>Brand Visibility</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Your logo and message featured on every kiosk. Reach thousands of students and their families who see your brand as a force for good.</p></CardContent></Card>
            <Card><CardHeader><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20 mb-4"><Users className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div><CardTitle>Talent Pipeline</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Connect directly with engaged, high-potential students early. Sponsor organizations gain exclusive access to student talent insights.</p></CardContent></Card>
            <Card><CardHeader><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20 mb-4"><Award className="h-6 w-6 text-green-600 dark:text-green-400" /></div><CardTitle>Recognition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Be recognized as a leader supporting youth development. Featured on our website, social media, and impact reports.</p></CardContent></Card>
            <Card><CardHeader><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-4"><Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" /></div><CardTitle>Tax Benefits</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Sponsorships may be tax-deductible as corporate philanthropy. We'll provide documentation for your records.</p></CardContent></Card>
            <Card><CardHeader><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-4"><Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" /></div><CardTitle>Measurable Impact</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Track real metrics: students reached, careers mapped, opportunities connected. Get quarterly impact reports.</p></CardContent></Card>
          </div>
        </div>
      </section>
      <section className="py-24 border-t">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Sponsorship Tiers</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Indicative pricing only while we finalize the program structure.</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>Bronze</CardTitle><CardDescription>Single Kiosk Sponsorship</CardDescription><div className="mt-4 text-3xl font-bold">TBD<span className="text-lg font-normal text-muted-foreground">/year</span></div></CardHeader>
              <CardContent><Button className="mt-8 w-full" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</Button></CardContent>
            </Card>
            <Card className="border-primary bg-primary/5">
              <CardHeader><CardTitle className="flex justify-between">Silver<Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Popular</Badge></CardTitle><CardDescription>Multi-Location Partnership</CardDescription><div className="mt-4 text-3xl font-bold">TBD<span className="text-lg font-normal text-muted-foreground">/year</span></div></CardHeader>
              <CardContent><Button className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</Button></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Gold</CardTitle><CardDescription>National Partnership</CardDescription><div className="mt-4 text-3xl font-bold">TBD<span className="text-lg font-normal text-muted-foreground">/year</span></div></CardHeader>
              <CardContent><Button className="mt-8 w-full" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</Button></CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
