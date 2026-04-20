import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Building2, GraduationCap, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";
import kioskImage from "@assets/Screenshot_20260410_125306_ChatGPT_1776699242881.jpg";

export default function PartnerBriefsPage() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("sanlam");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      {/* Non-printable header and controls */}
      <div className="print:hidden bg-background border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setLocation("/")}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-bold">Partner Briefs</h1>
            </div>
            <Button onClick={handlePrint} className="gap-2 bg-primary text-primary-foreground">
              <Download className="h-4 w-4" />
              Save as PDF / Print
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="sanlam" className="gap-2">
                <Building2 className="h-4 w-4" /> Sanlam (Corporate)
              </TabsTrigger>
              <TabsTrigger value="principal" className="gap-2">
                <GraduationCap className="h-4 w-4" /> High School Principal
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Printable Area */}
      <div className="max-w-4xl mx-auto mt-8 px-6 print:mt-0 print:px-0">
        
        {/* SANLAM BRIEF */}
        <div className={`${activeTab === 'sanlam' ? 'block' : 'hidden'} print:block bg-background p-12 rounded-2xl shadow-sm border print:shadow-none print:border-none print:p-0`}>
          {/* Cover/Header */}
          <div className="flex items-center justify-between border-b-4 border-primary pb-6 mb-8">
            <img src={logo} alt="Career Plug AI" className="h-16 object-contain" />
            <div className="text-right">
              <p className="font-bold text-primary tracking-widest uppercase text-sm">Partnership Proposal</p>
              <h2 className="text-2xl font-black text-foreground">Sanlam</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8 text-lg">
              <div>
                <h3 className="text-3xl font-black mb-4 font-heading text-foreground">Building the Billionaires of Tomorrow.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  South Africa faces a critical paradox: a high youth unemployment rate alongside corporations struggling to find young, qualified talent in scarce-skill sectors (Actuarial Science, Data Science, Finance, and Tech).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The root cause starts early. Millions of high-potential learners in under-resourced schools lack access to personalized career guidance and the digital resources required to discover modern career paths.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <h4 className="text-xl font-bold mb-2 text-primary">The Solution: Offline-First Kiosks</h4>
                <p className="text-foreground">
                  Career Plug AI deploys standalone, interactive Touchscreen Kiosks directly into school foyers. Learners take a 5-minute strengths assessment, instantly match with 79 modern career paths, and export their profiles via a WhatsApp QR code—<strong>requiring zero data or airtime.</strong>
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4 border-b pb-2">The Sanlam ROI</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <div>
                      <strong>Early Talent Pipeline (The "Moneyball" Approach)</strong>
                      <p className="text-muted-foreground text-base mt-1">Gain aggregated data on the career trajectories of thousands of learners. Identify high-aptitude students matching Sanlam's scarce-skill needs early for targeted bursaries.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <div>
                      <strong>Unprecedented Brand Visibility</strong>
                      <p className="text-muted-foreground text-base mt-1">Co-branded "Powered by Sanlam" kiosks act as permanent, interactive billboards within the school. WhatsApp exports carry Sanlam branding directly to parents' phones.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <div>
                      <strong>Measurable CSI & ESG Impact</strong>
                      <p className="text-muted-foreground text-base mt-1">Unlike traditional career days, the kiosk provides exact metrics for ESG scorecards: assessment completion rates, popular career interests, and demographic engagement.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <h4 className="text-xl font-bold mb-2">The Pilot Ask</h4>
                <p className="text-muted-foreground">
                  Funding for a 3-month pilot to place fully-managed, co-branded Career Plug AI Kiosks in pre-selected, high-potential schools to build a measurable early talent pipeline.
                </p>
              </div>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div className="bg-muted rounded-2xl overflow-hidden border border-border/50 shadow-inner">
                <img src={kioskImage} alt="Career Plug AI Kiosk" className="w-full h-auto mix-blend-multiply" />
                <div className="p-4 bg-background text-center text-sm font-bold text-muted-foreground">
                  Sleek, Standalone Hardware
                </div>
              </div>
              
              <div className="bg-primary text-primary-foreground p-6 rounded-2xl">
                <h4 className="font-bold mb-2 text-lg">Key Metrics</h4>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                    <span>Setup Time</span>
                    <strong>15 Mins</strong>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                    <span>Student Data Cost</span>
                    <strong>R 0.00</strong>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Career Paths</span>
                    <strong>79 Mapped</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PRINCIPAL BRIEF */}
        {/* We use print:hidden on the other tab during print if we only wanted one, but usually it's fine to just print the active one. Wait, to print ONLY the active tab: */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            .print\\:hidden { display: none !important; }
            .print\\:block { display: block !important; }
          }
        `}} />

        <div className={`${activeTab === 'principal' ? 'block' : 'hidden'} print:block bg-background p-12 rounded-2xl shadow-sm border print:shadow-none print:border-none print:p-0 ${activeTab === 'principal' ? 'print:block' : 'print:hidden'}`}>
          {/* Cover/Header */}
          <div className="flex items-center justify-between border-b-4 border-green-600 pb-6 mb-8">
            <img src={logo} alt="Career Plug AI" className="h-16 object-contain" />
            <div className="text-right">
              <p className="font-bold text-green-600 tracking-widest uppercase text-sm">School Implementation Guide</p>
              <h2 className="text-2xl font-black text-foreground">For High School Principals</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8 text-lg">
              <div>
                <h3 className="text-3xl font-black mb-4 font-heading text-foreground">Empowering Every Learner.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every learner in your school has unique strengths, but it is impossible for educators to provide personalized career mapping for hundreds of students simultaneously. 
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Furthermore, many learners are unaware of modern career paths, or they lack the data and devices to research them at home. Career Plug AI solves this by bringing the career center directly to your students.
                </p>
              </div>

              <div className="bg-green-600/10 p-6 rounded-xl border-l-4 border-green-600">
                <h4 className="text-xl font-bold mb-2 text-green-700">What is the Career Plug AI Kiosk?</h4>
                <p className="text-foreground">
                  A sleek, modern Interactive Touchscreen Kiosk placed in your school's foyer or library. It is a standalone "career hub" designed specifically for South African learners to discover their strengths and build a portfolio in 5 minutes.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4 border-b pb-2">Why Host a Kiosk?</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <strong>Zero Burden on Teachers</strong>
                      <p className="text-muted-foreground text-base mt-1">The kiosk is entirely self-serve. Students use it during breaks or after school without requiring supervision or passwords.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <strong>No Wi-Fi Required</strong>
                      <p className="text-muted-foreground text-base mt-1">The kiosk operates independently with its own cellular connection. It does not need to connect to the school's internet or network infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <strong>Data-Driven Insights for the School</strong>
                      <p className="text-muted-foreground text-base mt-1">You receive access to a secure "Counselor Dashboard" showing aggregated, anonymized data on the top career interests of your student body, helping you tailor subject offerings.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <h4 className="text-xl font-bold mb-2">The Pilot Program</h4>
                <p className="text-muted-foreground">
                  We are offering a fully-funded 3-month pilot. The hardware, software, delivery, and maintenance are <strong>100% covered by our corporate sponsors</strong>. All we require is one standard electrical plug point and 1 square meter of floor space.
                </p>
              </div>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div className="bg-muted rounded-2xl overflow-hidden border border-border/50 shadow-inner">
                <img src={kioskImage} alt="Career Plug AI Kiosk" className="w-full h-auto mix-blend-multiply" />
                <div className="p-4 bg-background text-center text-sm font-bold text-muted-foreground">
                  Modernize Your Foyer
                </div>
              </div>
              
              <div className="bg-green-600 text-white p-6 rounded-2xl">
                <h4 className="font-bold mb-2 text-lg">Student Experience</h4>
                <ol className="space-y-3 text-sm opacity-90 list-decimal list-inside ml-2">
                  <li className="pb-2">Take strengths assessment</li>
                  <li className="pb-2">Match with top 3 careers</li>
                  <li className="pb-2">Build Mini-Portfolio</li>
                  <li className="pb-2">Scan QR code to WhatsApp</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}