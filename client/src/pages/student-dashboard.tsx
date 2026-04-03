import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
} from "recharts";
import { Heart, BookOpen, Building2, Users, Zap, ArrowRight, MapPin, Clock, Bookmark, MessageSquare } from "lucide-react";

export default function StudentDashboard() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if onboarding is complete
    const onboardingComplete = localStorage.getItem("onboarding_complete");
    const hasAssessmentScores = localStorage.getItem("assessmentScores");
    
    if (!onboardingComplete || !hasAssessmentScores) {
      // Redirect back to onboarding
      setLocation("/onboarding?role=student");
      return;
    }
    setIsLoading(false);
  }, [setLocation]);

  // Get actual assessment scores
  const savedScores = localStorage.getItem("assessmentScores");
  const scoreMap: Record<string, number> = savedScores ? JSON.parse(savedScores) : {};

  const strengthData = [
    { subject: 'Entrepreneurship', A: scoreMap.Entrepreneurship ?? 50, fullMark: 100 },
    { subject: 'Leadership', A: scoreMap.Leadership ?? 50, fullMark: 100 },
    { subject: 'STEM', A: scoreMap.STEM ?? 50, fullMark: 100 },
    { subject: 'Creativity', A: scoreMap.Creativity ?? 50, fullMark: 100 },
    { subject: 'Social Impact', A: scoreMap['Social Impact'] ?? 50, fullMark: 100 },
    { subject: 'Sports', A: scoreMap.Sports ?? 50, fullMark: 100 },
  ];

  const getCareerPathsForProfile = (scores: Record<string, number>) => {
    // Sort strengths by score
    const sortedStrengths = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);

    // Simple career path recommendations based on top 3 strengths
    const careerMap: Record<string, { title: string; icon: string; description: string }> = {
      Entrepreneurship: { 
        title: "Startup Founder", 
        icon: "🚀",
        description: "Start your own venture with TINP and Softstart BTI support."
      },
      Leadership: { 
        title: "Business Manager", 
        icon: "👔",
        description: "Lead teams and drive organizational success."
      },
      STEM: { 
        title: "Software Developer", 
        icon: "💻",
        description: "Build innovative tech solutions and applications."
      },
      Creativity: { 
        title: "Digital Creator", 
        icon: "🎨",
        description: "Express yourself through digital content and design."
      },
      "Social Impact": { 
        title: "Social Entrepreneur", 
        icon: "🌍",
        description: "Create positive change in your community."
      },
      Sports: { 
        title: "Sports Coach", 
        icon: "⚽",
        description: "Train and develop the next generation of athletes."
      },
    };

    return sortedStrengths.map(([strength, score], index) => ({
      ...careerMap[strength] || { title: "Career Path", icon: "🎯", description: "Explore career opportunities" },
      match: Math.round(score * 1.05), // Convert 0-10 score to match percentage
    }));
  };

interface Opportunity {
  id: string;
  title: string;
  type: "internship" | "scholarship" | "mentorship" | "competition";
  company: string;
  location: string;
  duration: string;
  match: number;
  description: string;
  deadline: string;
  saved?: boolean;
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Product Strategy Internship",
    type: "internship",
    company: "TechHub Innovation Labs",
    location: "Johannesburg, SA",
    duration: "3 months",
    match: 95,
    description: "Work with our product team to develop new features and strategies. Perfect for aspiring product managers.",
    deadline: "Apply by June 15",
    saved: false
  },
  {
    id: "2",
    title: "Young Entrepreneur Scholarship",
    type: "scholarship",
    company: "Future Leaders Foundation",
    location: "Virtual",
    duration: "1 year",
    match: 92,
    description: "Fully funded mentorship and startup accelerator program for Grade 11-12 students.",
    deadline: "Apply by May 30",
    saved: false
  },
  {
    id: "3",
    title: "Startup Mentor - Tech & Business",
    type: "mentorship",
    company: "Founder Connect SA",
    location: "Hybrid",
    duration: "6 months",
    match: 90,
    description: "Get 1-on-1 mentorship from successful entrepreneurs building in SA and Africa.",
    deadline: "Join anytime",
    saved: false
  },
  {
    id: "4",
    title: "African Tech Leaders Summit",
    type: "competition",
    company: "TechCrunch Africa",
    location: "Cape Town, SA",
    duration: "2 days",
    match: 88,
    description: "Pitch competition and networking event for young innovators. Winners get funding.",
    deadline: "Registration closes June 1",
    saved: false
  },
  {
    id: "5",
    title: "Data Analytics Internship",
    type: "internship",
    company: "Data Science Corps",
    location: "Pretoria, SA",
    duration: "4 months",
    match: 78,
    description: "Learn data analysis and business intelligence while solving real-world problems.",
    deadline: "Apply by June 22",
    saved: false
  },
];

const typeConfig = {
  internship: { icon: Building2, color: "bg-blue-500/10 text-blue-600", badge: "Internship" },
  scholarship: { icon: BookOpen, color: "bg-green-500/10 text-green-600", badge: "Scholarship" },
  mentorship: { icon: Users, color: "bg-purple-500/10 text-purple-600", badge: "Mentorship" },
  competition: { icon: Zap, color: "bg-orange-500/10 text-orange-600", badge: "Competition" },
};

  const [savedOps, setSavedOps] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string>("all");

  const toggleSave = (id: string) => {
    setSavedOps(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = filterType === "all" 
    ? opportunities 
    : opportunities.filter(op => op.type === filterType);

  if (isLoading) return null;

  // Get career paths based on actual assessment scores
  const careerPaths = getCareerPathsForProfile(scoreMap);

  return (
    <DashboardLayout type="student">
      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Career Clarity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground mt-1">From assessment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{opportunities.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Matched to you</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{savedOps.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Bookmarked</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">From scouts</p>
          </CardContent>
        </Card>
      </div>

      {/* Your Strengths & Career Paths */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {/* Strength Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              Your Strength Profile
            </CardTitle>
            <CardDescription>Based on your assessment</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={strengthData}>
                <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Strength"
                  dataKey="A"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Career Paths */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Your Top Career Paths
            </CardTitle>
            <CardDescription>Personalized to your strengths</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {careerPaths.map((path, i) => (
              <div key={i} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{path.icon}</span>
                    <div>
                      <h4 className="font-semibold text-sm">{path.title}</h4>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary text-xs">{path.match}%</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{path.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Opportunities */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Opportunities Matched For You
            </CardTitle>
            <CardDescription>Internships, scholarships, mentorships, and competitions tailored to your strengths</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Filter Tabs */}
            <Tabs value={filterType} onValueChange={setFilterType} className="mb-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All ({opportunities.length})</TabsTrigger>
                <TabsTrigger value="internship">Internships</TabsTrigger>
                <TabsTrigger value="scholarship">Scholarships</TabsTrigger>
                <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
                <TabsTrigger value="competition">Competitions</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Opportunities Grid */}
            <div className="space-y-4">
              {filteredOpportunities.map((opp) => {
                const TypeIcon = typeConfig[opp.type].icon;
                return (
                  <div key={opp.id} className="rounded-lg border p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`p-2 rounded-lg ${typeConfig[opp.type].color}`}>
                          <TypeIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{opp.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{opp.company}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {opp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {opp.duration}
                            </span>
                          </div>
                          <p className="text-sm text-foreground mb-2">{opp.description}</p>
                          <p className="text-xs text-muted-foreground">{opp.deadline}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-primary/10 text-primary">{opp.match}% Match</Badge>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-3 border-t">
                      <Button
                        onClick={() => toggleSave(opp.id)}
                        variant={savedOps.includes(opp.id) ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                      >
                        <Bookmark className="h-4 w-4" fill={savedOps.includes(opp.id) ? "currentColor" : "none"} />
                        {savedOps.includes(opp.id) ? "Saved" : "Save"}
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Details
                      </Button>
                      <Button size="sm" className="ml-auto bg-primary text-primary-foreground hover:bg-primary/90">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
