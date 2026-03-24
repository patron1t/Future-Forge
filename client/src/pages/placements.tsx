import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, MapPin, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { ComingSoonBanner } from "@/components/common/ComingSoonBanner";

export default function PlacementsPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const placements = [
    { id: 1, school: "Sample Placement One", location: "South Africa", type: "Secondary School", studentsReached: "—", careersExplored: "—", successRate: "—", testimonial: "Real placement data will appear here once programs go live.", sponsor: "Coming soon" },
    { id: 2, school: "Sample Placement Two", location: "South Africa", type: "Community Hub", studentsReached: "—", careersExplored: "—", successRate: "—", testimonial: "This page will showcase verified impact stories and metrics.", sponsor: "Coming soon" },
    { id: 3, school: "Sample Placement Three", location: "South Africa", type: "STEM School", studentsReached: "—", careersExplored: "—", successRate: "—", testimonial: "We’ll replace this with real examples as soon as placements are confirmed.", sponsor: "Coming soon" },
    { id: 4, school: "Sample Placement Four", location: "South Africa", type: "Private School", studentsReached: "—", careersExplored: "—", successRate: "—", testimonial: "This is a placeholder showcase for now.", sponsor: "Coming soon" }
  ];

  const stats = [
    { icon: Users, label: "Students Reached", value: "Coming soon", description: "Real figures will appear here" },
    { icon: TrendingUp, label: "Career Paths Explored", value: "Coming soon", description: "Waiting on verified data" },
    { icon: Award, label: "Success Rate", value: "Coming soon", description: "Will update once live" },
    { icon: MapPin, label: "Active Placements", value: "Coming soon", description: "Confirmed placements only" }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container px-4 text-center">
          <ComingSoonBanner title="real placement data" />
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Kiosk <span className="text-primary">Placements</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            This page will showcase verified kiosk placements and their impact once we have live program data.
          </p>
        </div>
      </section>
      <section className="py-24 border-t">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-4"><div className="bg-primary/10 p-3 rounded-lg"><Icon className="h-6 w-6 text-primary" /></div></div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="font-semibold text-sm mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 border-t bg-muted/20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Placements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Placeholder examples will stay visible until real placements are ready.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {placements.map((placement) => (
              <Card key={placement.id} className="overflow-hidden opacity-95">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl">{placement.school}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-2"><MapPin className="h-4 w-4" /> {placement.location}</CardDescription>
                    </div>
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">{placement.type}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary/5 p-3 rounded-lg text-center"><p className="text-lg font-bold text-primary">{placement.studentsReached}</p><p className="text-xs text-muted-foreground">Students</p></div>
                    <div className="bg-accent/5 p-3 rounded-lg text-center"><p className="text-lg font-bold text-accent">{placement.careersExplored}</p><p className="text-xs text-muted-foreground">Paths</p></div>
                    <div className="bg-muted/30 p-3 rounded-lg text-center"><p className="text-lg font-bold text-foreground">{placement.successRate}</p><p className="text-xs text-muted-foreground">Success</p></div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm text-muted-foreground">{placement.testimonial}</div>
                  <div className="pt-2 border-t"><p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Status:</span> {placement.sponsor}</p></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready When the Data Is</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">We’ll swap these placeholders for live placement data as soon as the first kiosks are confirmed.</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" onClick={() => setLocation("/sponsorship")}>Explore Sponsorship <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
