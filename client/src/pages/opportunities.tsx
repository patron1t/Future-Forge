import { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, BookOpen, Users, Zap, Heart, MapPin, Clock, ExternalLink } from "lucide-react";

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
  requirements: string[];
}

const allOpportunities: Opportunity[] = [
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
    requirements: ["Grade 11-12", "Computer Science", "Business Studies"]
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
    requirements: ["Grade 11-12", "Business Studies", "Accounting"]
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
    requirements: ["Grade 10-12"]
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
    requirements: ["Grade 9-12"]
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
    requirements: ["Grade 12", "Mathematics", "Information Technology"]
  },
  {
    id: "6",
    title: "Allan Gray Orbis Fellowship",
    type: "scholarship",
    company: "Allan Gray Orbis Foundation",
    location: "South Africa",
    duration: "University Duration",
    match: 98,
    description: "Comprehensive university funding and entrepreneurial mindset development program.",
    deadline: "Grade 12: April 30",
    requirements: ["Grade 12", "Mathematics (>60%)"]
  },
];

const typeConfig = {
  internship: { icon: Building2, color: "bg-blue-500/10 text-blue-600", badge: "Internship" },
  scholarship: { icon: BookOpen, color: "bg-green-500/10 text-green-600", badge: "Scholarship" },
  mentorship: { icon: Users, color: "bg-purple-500/10 text-purple-600", badge: "Mentorship" },
  competition: { icon: Zap, color: "bg-orange-500/10 text-orange-600", badge: "Competition" },
};

export default function OpportunitiesPage() {
  const [filterType, setFilterType] = useState<string>("all");
  const [savedOps, setSavedOps] = useState<string[]>([]);

  // Get student profile for matching
  const studentGrade = useMemo(() => localStorage.getItem("onboarding_grade") || "Grade 11", []);
  const studentSubjects = useMemo(() => {
    const subjectsJson = localStorage.getItem("onboarding_subjects") || "[]";
    return JSON.parse(subjectsJson) as string[];
  }, []);

  // Filter opportunities
  const filteredOpportunities = useMemo(() => {
    let filtered = allOpportunities;
    
    // Filter by tab type
    if (filterType !== "all") {
      if (filterType === "saved") {
        filtered = filtered.filter(op => savedOps.includes(op.id));
      } else {
        filtered = filtered.filter(op => op.type === filterType);
      }
    }
    
    // Simple mock matching logic: boost match score if requirements match subjects/grade
    return filtered.map(op => {
      let boostedMatch = op.match;
      
      const requiresMath = op.requirements.some(r => r.includes("Math"));
      if (requiresMath && studentSubjects.includes("Mathematics")) {
        boostedMatch = Math.min(100, boostedMatch + 5);
      }
      
      const requiresGrade12 = op.requirements.some(r => r.includes("Grade 12"));
      if (requiresGrade12 && studentGrade === "Grade 12") {
        boostedMatch = Math.min(100, boostedMatch + 8);
      }

      return { ...op, match: boostedMatch };
    }).sort((a, b) => b.match - a.match); // Sort highest match first
  }, [filterType, savedOps, studentGrade, studentSubjects]);

  const toggleSave = (id: string) => {
    setSavedOps(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <DashboardLayout type="student">
      <div className="mb-6 space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">Opportunities Matcher 🎯</h1>
        <p className="text-muted-foreground">
          Bursaries, internships, and programs tailored to your {studentGrade} profile.
        </p>
      </div>

      <Tabs value={filterType} onValueChange={setFilterType} className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="grid grid-cols-3 sm:flex sm:w-auto h-auto sm:h-10">
            <TabsTrigger value="all" className="py-2 sm:py-1.5">All</TabsTrigger>
            <TabsTrigger value="scholarship" className="py-2 sm:py-1.5">Scholarships</TabsTrigger>
            <TabsTrigger value="internship" className="py-2 sm:py-1.5">Internships</TabsTrigger>
            <TabsTrigger value="mentorship" className="py-2 sm:py-1.5 hidden sm:inline-flex">Mentorship</TabsTrigger>
            <TabsTrigger value="competition" className="py-2 sm:py-1.5 hidden sm:inline-flex">Competitions</TabsTrigger>
          </TabsList>
          
          <TabsList>
            <TabsTrigger value="saved" className="gap-2">
              <Heart className="h-4 w-4" />
              Saved ({savedOps.length})
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="grid gap-6">
          {filteredOpportunities.length === 0 ? (
            <Card className="p-12 text-center border-dashed">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                <Heart className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No opportunities found</h3>
              <p className="text-muted-foreground">
                {filterType === "saved" 
                  ? "You haven't saved any opportunities yet."
                  : "Check back later for new matches!"}
              </p>
            </Card>
          ) : (
            filteredOpportunities.map((opp) => {
              const config = typeConfig[opp.type];
              const Icon = config.icon;
              const isSaved = savedOps.includes(opp.id);

              return (
                <Card key={opp.id} className="overflow-hidden transition-all hover:shadow-md border-l-4" style={{ borderLeftColor: `hsl(var(--${opp.match > 90 ? 'primary' : 'muted-foreground'}))` }}>
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Match Score Sidebar */}
                      <div className="md:w-32 bg-muted/30 p-6 flex flex-row md:flex-col items-center justify-center border-b md:border-b-0 md:border-r gap-2 md:gap-1 text-center">
                        <span className="text-sm font-medium text-muted-foreground">Match</span>
                        <div className="text-3xl font-bold text-primary">{opp.match}%</div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className={config.color}>
                                <Icon className="h-3 w-3 mr-1" />
                                {config.badge}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{opp.deadline}</span>
                            </div>
                            <h3 className="text-xl font-bold">{opp.title}</h3>
                            <p className="font-medium text-foreground/80">{opp.company}</p>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0"
                            onClick={() => toggleSave(opp.id)}
                          >
                            <Heart className={`h-5 w-5 ${isSaved ? "fill-red-500 text-red-500" : ""}`} />
                          </Button>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {opp.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {opp.location}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {opp.duration}
                          </div>
                          <div className="flex-1 min-w-[200px]" />
                          <Button className="w-full sm:w-auto gap-2">
                            Apply Now
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Requirements */}
                        <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
                          <span className="text-sm font-medium text-muted-foreground mr-2 py-1">Requirements:</span>
                          {opp.requirements.map(req => (
                            <Badge key={req} variant="outline" className="text-xs font-normal bg-background">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </Tabs>
    </DashboardLayout>
  );
}