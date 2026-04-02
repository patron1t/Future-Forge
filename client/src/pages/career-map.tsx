import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Zap, TrendingUp, Users, Briefcase } from "lucide-react";

interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  match: number;
  skills: string[];
  opportunities: number;
}

interface StrengthScore {
  category: string;
  score: number;
  color: string;
}

export default function CareerMapPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data based on assessment - in real app, would come from backend
  const strengthScores: StrengthScore[] = [
    { category: "Entrepreneurship", score: 9, color: "bg-blue-500" },
    { category: "Leadership", score: 8, color: "bg-purple-500" },
    { category: "STEM", score: 7, color: "bg-green-500" },
    { category: "Creativity", score: 8, color: "bg-pink-500" },
    { category: "Social Impact", score: 8, color: "bg-orange-500" },
    { category: "Sports", score: 5, color: "bg-yellow-500" },
  ];

  const careerPaths: CareerPath[] = [
    {
      id: "tech-entrepreneur",
      title: "Tech Entrepreneur",
      description: "Build innovative technology solutions and start your own company. Perfect for combining leadership, STEM, and entrepreneurial drive.",
      icon: "🚀",
      match: 95,
      skills: ["Product Strategy", "Team Leadership", "Technical Foundation", "Business Development"],
      opportunities: 12,
    },
    {
      id: "product-manager",
      title: "Product Manager",
      description: "Lead product vision and strategy at growing tech companies. Leverage your leadership and creative problem-solving.",
      icon: "🎯",
      match: 88,
      skills: ["User Research", "Strategic Thinking", "Data Analysis", "Cross-functional Communication"],
      opportunities: 18,
    },
    {
      id: "innovation-consultant",
      title: "Innovation Consultant",
      description: "Help organizations transform through innovation and digital strategy. Use your entrepreneurial mindset to drive change.",
      icon: "💡",
      match: 85,
      skills: ["Systems Thinking", "Change Management", "Business Strategy", "Creative Problem Solving"],
      opportunities: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <div className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center space-y-3">
            <h1 className="font-heading text-4xl font-bold tracking-tight">
              Your Personalized Career Map
            </h1>
            <p className="text-lg text-muted-foreground">
              Based on your unique strengths, here are the career paths that match your potential
            </p>
          </div>

          {/* Strength Visualization */}
          <Card className="p-8 mb-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Your Strength Profile</h2>
              <div className="space-y-4">
                {strengthScores.map((strength) => (
                  <div key={strength.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{strength.category}</span>
                      <span className="text-sm font-bold text-primary">{strength.score}/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${strength.color} rounded-full transition-all duration-500`}
                        style={{ width: `${(strength.score / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t flex items-center gap-2 text-muted-foreground text-sm">
              <TrendingUp className="h-4 w-4" />
              <span>Your top strengths: Entrepreneurship, Leadership, and Creativity</span>
            </div>
          </Card>

          {/* Top Career Paths */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Top Career Paths for You</h2>
            <div className="space-y-6">
              {careerPaths.map((career) => (
                <Card
                  key={career.id}
                  className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left: Title & Description */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{career.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold">{career.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-primary/10 text-primary text-sm font-semibold">
                              <Zap className="h-3 w-3" />
                              {career.match}% Match
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{career.description}</p>

                      {/* Skills */}
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Key Skills to Develop:</p>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: CTA & Opportunities */}
                    <div className="flex flex-col justify-between">
                      <div className="space-y-2 p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Matching Opportunities</p>
                        <p className="text-3xl font-bold text-primary">{career.opportunities}</p>
                        <p className="text-xs text-muted-foreground">internships, scholarships, mentorships</p>
                      </div>
                      <Link href="/student-dashboard">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 mt-4">
                          Explore Path <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <Card className="p-8 space-y-6 mb-12">
            <h2 className="text-2xl font-bold">What's Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold">Connect with Mentors</h3>
                <p className="text-sm text-muted-foreground">
                  Meet professionals in your top career paths
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10">
                  <Briefcase className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-semibold">Explore Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Apply for internships and scholarships
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-semibold">Build Your Digital Footprint</h3>
                <p className="text-sm text-muted-foreground">
                  Showcase your strengths and achievements
                </p>
              </div>
            </div>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/student-dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Go to Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
