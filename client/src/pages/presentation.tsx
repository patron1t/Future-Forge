import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Target, TrendingUp, ShieldCheck, Zap, BarChart3, Users } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";
import kioskImage from "@assets/Screenshot_20260410_125306_ChatGPT_1776699242881.jpg";

export default function PresentationPage() {
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slides = [
    // Slide 0: Title
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
      <img src={logo} alt="Career Plug AI" className="h-32 md:h-48 object-contain drop-shadow-lg" />
      <h1 className="text-5xl md:text-7xl font-black font-heading text-primary tracking-tight">
        Empowering the Next Generation
      </h1>
      <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl font-light">
        A technology-driven career management ecosystem designed to bridge the digital divide and unlock early talent.
      </p>
    </div>,

    // Slide 1: The Problem
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold border-l-8 border-destructive pl-6">The Disconnect in Early Talent</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-muted/50 p-8 rounded-2xl border-t-4 border-destructive/50">
          <Target className="h-12 w-12 text-destructive mb-6" />
          <h3 className="text-2xl font-bold mb-3">Lack of Guidance</h3>
          <p className="text-lg text-muted-foreground">Millions of high-potential learners lack access to personalized career mapping, leaving their potential untapped.</p>
        </div>
        <div className="bg-muted/50 p-8 rounded-2xl border-t-4 border-destructive/50">
          <Zap className="h-12 w-12 text-destructive mb-6" />
          <h3 className="text-2xl font-bold mb-3">The Digital Divide</h3>
          <p className="text-lg text-muted-foreground">While smartphone penetration is high, prohibitive data costs exclude students from discovering modern career paths.</p>
        </div>
        <div className="bg-muted/50 p-8 rounded-2xl border-t-4 border-destructive/50">
          <Users className="h-12 w-12 text-destructive mb-6" />
          <h3 className="text-2xl font-bold mb-3">Invisible Talent</h3>
          <p className="text-lg text-muted-foreground">Top-performing students remain invisible to the market until university—often too late for strategic intervention.</p>
        </div>
      </div>
    </div>,

    // Slide 2: The Solution (Kiosk)
    <div className="flex flex-col md:flex-row items-center justify-between h-full max-w-6xl mx-auto gap-12 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="flex-1 space-y-8">
        <h2 className="text-5xl md:text-6xl font-black text-primary leading-tight">The Career Hub,<br/>Reimagined.</h2>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          We deploy standalone, interactive Touchscreen Kiosks directly into educational environments. 
        </p>
        <ul className="space-y-6 text-xl">
          <li className="flex items-center gap-4"><ShieldCheck className="text-primary h-8 w-8" /> Zero administrative burden</li>
          <li className="flex items-center gap-4"><ShieldCheck className="text-primary h-8 w-8" /> Offline-first architecture</li>
          <li className="flex items-center gap-4"><ShieldCheck className="text-primary h-8 w-8" /> Zero data cost for students</li>
        </ul>
      </div>
      <div className="flex-1 relative flex justify-center">
        {/* Kiosk with Branding Overlay */}
        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-8 border-muted">
          <img src={kioskImage} alt="Kiosk Hardware" className="w-full h-auto object-cover" />
          {/* Simulated Screen Overlay */}
          <div className="absolute top-[12%] left-[10%] right-[10%] bottom-[48%] bg-background flex flex-col items-center justify-center p-4 text-center rounded-sm">
            <img src={logo} alt="Logo" className="h-16 object-contain mb-4" />
            <h3 className="text-xl font-bold text-primary">Tap to Start</h3>
            <p className="text-xs text-muted-foreground mt-2">Discover Your Future</p>
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: How It Works
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">A Frictionless Experience</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { step: "1", title: "Discover", desc: "Gamified, 5-minute strengths assessment on the interactive touchscreen." },
          { step: "2", title: "Match", desc: "Instant AI matching with 79 modern, high-demand career pathways." },
          { step: "3", title: "Build", desc: "Students generate a personalized 'Mini Portfolio' highlighting their potential." },
          { step: "4", title: "Take Home", desc: "Secure export via WhatsApp QR code—no app install or data required." }
        ].map((item, i) => (
          <div key={i} className="relative bg-background border-2 border-primary/20 p-8 rounded-3xl text-center group hover:border-primary transition-colors">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
              {item.step}
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-4">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>,

    // Slide 4: The Impact & Value
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto space-y-12 animate-in fade-in zoom-in duration-500">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Strategic Impact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
          <TrendingUp className="h-16 w-16 text-primary mb-6" />
          <h3 className="text-3xl font-bold mb-4">Early Talent Pipeline</h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Gain aggregated data on career trajectories. Identify high-aptitude students early for targeted bursaries, mentorship, or specialized academic support.
          </p>
        </div>
        <div className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
          <BarChart3 className="h-16 w-16 text-primary mb-6" />
          <h3 className="text-3xl font-bold mb-4">Measurable Outcomes</h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transparent reporting on assessment completion rates, popular career interests, and demographic engagement through a secure analytics dashboard.
          </p>
        </div>
      </div>
    </div>,

    // Slide 5: Conclusion
    <div className="flex flex-col items-center justify-center h-full text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500 w-full relative">
      <img src={logo} alt="Career Plug AI" className="h-24 object-contain mb-4 relative z-10" />
      <h2 className="text-5xl md:text-6xl font-black relative z-10">Partner With Us</h2>
      <p className="text-2xl text-muted-foreground max-w-2xl font-light relative z-10">
        Join us in deploying transformative career technology to build a stronger, data-driven talent ecosystem.
      </p>
      <div className="pt-8 relative z-10">
        <Button size="lg" className="h-16 px-12 text-2xl font-bold rounded-full shadow-xl hover:scale-105 transition-transform" onClick={() => setLocation("/")}>
          Return to Platform
        </Button>
      </div>
    </div>
  ];

  return (
    <div className="fixed inset-0 bg-background text-foreground overflow-hidden flex flex-col print:relative print:overflow-visible print:block">
      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { size: landscape; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .slide-container { page-break-after: always; height: 100vh !important; width: 100vw !important; position: relative !important; }
          .slide-container:last-child { page-break-after: auto; }
        }
      `}} />

      {/* Top Bar with Print Button */}
      <div className="absolute top-6 right-6 z-50 print:hidden">
        <Button 
          variant="outline" 
          className="bg-background/80 backdrop-blur-sm shadow-sm gap-2"
          onClick={() => window.print()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          Save as PDF
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-muted w-full z-50 print:hidden">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative overflow-hidden p-8 md:p-16 flex items-center justify-center bg-[url('/grid.svg')] bg-center print:hidden">
        {slides[currentSlide]}
      </div>

      {/* Print-only all slides container */}
      <div className="hidden print:block w-full">
        {slides.map((slide, index) => (
          <div key={index} className="slide-container p-16 flex items-center justify-center bg-[url('/grid.svg')] bg-center border-b border-border/10">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-12 z-50 pointer-events-none print:hidden">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="h-16 w-16 rounded-full p-0 shadow-lg bg-background/80 backdrop-blur-sm pointer-events-auto"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        
        <div className="text-lg font-medium text-muted-foreground font-mono bg-background/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm">
          {currentSlide + 1} / {slides.length}
        </div>

        <Button 
          variant="default" 
          size="lg" 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="h-16 w-16 rounded-full p-0 shadow-lg pointer-events-auto"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}