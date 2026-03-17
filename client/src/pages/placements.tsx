import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, MapPin, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function PlacementsPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const placements = [
    {
      id: 1,
      school: "Johannesburg High School",
      location: "Johannesburg, South Africa",
      type: "Secondary School",
      studentsReached: 450,
      careersExplored: 1250,
      successRate: 89,
      testimonial: "The Career Plug AI kiosk has transformed how our students think about their futures. Within months, we saw increased engagement with career planning.",
      sponsor: "Tech Education Foundation"
    },
    {
      id: 2,
      school: "Cape Town Community Centre",
      location: "Cape Town, South Africa",
      type: "Community Hub",
      studentsReached: 320,
      careersExplored: 890,
      successRate: 84,
      testimonial: "Our youth now have access to world-class career guidance. The kiosk has been a game-changer for underserved communities.",
      sponsor: "Community Empowerment Initiative"
    },
    {
      id: 3,
      school: "Durban STEM Academy",
      location: "Durban, South Africa",
      type: "STEM School",
      studentsReached: 280,
      careersExplored: 950,
      successRate: 91,
      testimonial: "Students are more confident about pursuing STEM careers. The AI-powered guidance has made technical career paths more accessible.",
      sponsor: "Innovation & Technology Partners"
    },
    {
      id: 4,
      school: "Pretoria International School",
      location: "Pretoria, South Africa",
      type: "Private School",
      studentsReached: 380,
      careersExplored: 1100,
      successRate: 87,
      testimonial: "The platform aligns perfectly with our holistic student development approach. Career planning is now data-driven and personalized.",
      sponsor: "Education Excellence Fund"
    }
  ];

  const stats = [
    {
      icon: Users,
      label: "Students Reached",
      value: "1,430+",
      description: "Across all placements"
    },
    {
      icon: TrendingUp,
      label: "Career Paths Explored",
      value: "4,190+",
      description: "Average per student"
    },
    {
      icon: Award,
      label: "Success Rate",
      value: "88%",
      description: "Students confident in careers"
    },
    {
      icon: MapPin,
      label: "Active Placements",
      value: "4",
      description: "Across South Africa"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container px-4 text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Kiosk <span className="text-primary">Placements</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            See the real-world impact of Career Plug AI kiosks in schools and communities across South Africa.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-t">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="font-semibold text-sm mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Placements */}
      <section className="py-24 border-t bg-muted/20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Placements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Successful Career Plug AI kiosk installations making a real difference in students' lives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {placements.map((placement) => (
              <Card key={placement.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl">{placement.school}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-2">
                        <MapPin className="h-4 w-4" /> {placement.location}
                      </CardDescription>
                    </div>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {placement.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary/5 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary">{placement.studentsReached}</p>
                      <p className="text-xs text-muted-foreground">Students Reached</p>
                    </div>
                    <div className="bg-accent/5 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-accent">{placement.careersExplored}</p>
                      <p className="text-xs text-muted-foreground">Paths Explored</p>
                    </div>
                    <div className="bg-green-100/30 dark:bg-green-900/20 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">{placement.successRate}%</p>
                      <p className="text-xs text-muted-foreground">Success Rate</p>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg italic text-sm">
                    "{placement.testimonial}"
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Sponsored by:</span> {placement.sponsor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Sponsor a Kiosk?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing network of organizations making a real impact on student career development.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            onClick={() => setLocation("/sponsorship")}
          >
            Learn More About Sponsorship <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
