import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Sparkles, Target, Users, Zap, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container px-4 text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Creating the <span className="text-primary">Billionaires</span> of Tomorrow
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            AI-powered career guidance that maps personalized paths for every student, connecting them with real opportunities and mentorship.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-t">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  We believe every student deserves a personalized roadmap to success. Career Plug AI democratizes access to world-class career guidance, making it available to Grade 8-12 students regardless of background or geography.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  A world where students discover their authentic strengths, build powerful digital footprints, and connect with scouts, employers, and mentors who recognize their potential—long before graduation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">The Problem We Solve</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
                <Zap className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Career Mismatch</h3>
                <p className="text-muted-foreground">Students choose careers based on grades and parental expectations, not their actual strengths and interests, leading to burnout and switching.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <Heart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mental Health Impact</h3>
                <p className="text-muted-foreground">Uncertainty about the future fuels anxiety and depression. Students lack accessible wellness resources and mentorship during critical years.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Footprint Gaps</h3>
                <p className="text-muted-foreground">Employers and scouts struggle to find hidden talent. Students don't know how to showcase their real strengths beyond test scores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Solve It */}
      <section className="py-24 border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">How Career Plug AI Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Strength Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI analyzes cognitive strengths, soft skills, interests, and projects to create a personalized career map based on *real* potential, not just grades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 mb-4">
                  <Sparkles className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Digital Footprint Curator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students build and showcase their professional presence—portfolios, projects, achievements, digital identity—making them visible to scouts and employers early.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20 mb-4">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Opportunity Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Direct connections with scouts, employers, counselors, and mentors. Students discover internships, mentorships, scholarships, and career pathways matched to their strengths.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">What Makes Us Different</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "AI That Understands Real Strengths", desc: "Not just grades—we map STEM, sports, entrepreneurship, creativity, leadership, and more." },
              { icon: Target, title: "Personalized Career Paths", desc: "Every student gets a unique roadmap based on their actual strengths and interests." },
              { icon: Heart, title: "Wellness Support Built In", desc: "Mental health resources, counselor connections, and mentorship to support the whole student." },
              { icon: Globe, title: "Digital Footprint Builder", desc: "Students curate their online presence and showcase real achievements to scouts and employers." },
              { icon: Users, title: "Direct Talent Marketplace", desc: "Employers and scouts find emerging talent early. Students connect with real opportunities." },
              { icon: Sparkles, title: "School & Community Access", desc: "Interactive kiosks in schools and community hubs make guidance accessible to all students." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Different Users */}
      <section className="py-24 border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">For Every Role</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Students (Free)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Map your strengths, build your portfolio, explore careers, connect with mentors and scouts.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Career path mapping</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Digital footprint tools</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Wellness hub</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Opportunity feed</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Counselors (Free)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Monitor student progress, track wellness, support career decisions at scale.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Student monitoring</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Wellness tracking</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Career insights</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Parent reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Employers & Scouts (Paid)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Find high-potential students early, access talent pipelines, post opportunities.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Talent discovery</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> AI-powered matching</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Direct messaging</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Brand showcase</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mb-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
              <p className="text-muted-foreground">Students mapped to career paths</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Opportunities connected</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Schools & community partners</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're just getting started. Our goal: reach every student who needs guidance, regardless of background or location.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Find Your Path?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a student exploring careers, a school supporting your students, or an employer finding tomorrow's talent—Career Plug AI is here to connect you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                I'm a Student
              </Button>
            </Link>
            <Link href="/professionals">
              <Button size="lg" variant="outline">
                For Employers & Scouts
              </Button>
            </Link>
            <Link href="/sponsorship">
              <Button size="lg" variant="outline">
                For Organizations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
