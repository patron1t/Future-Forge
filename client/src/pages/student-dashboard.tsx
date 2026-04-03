import { useState, useEffect, useMemo } from "react";
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
import { Heart, BookOpen, Building2, Users, Zap, ArrowRight, MapPin, Clock, Bookmark, MessageSquare, TrendingUp, Sparkles, X } from "lucide-react";

const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

interface Scout {
  id: string;
  name: string;
  organization: string;
  role: string;
  viewedDate: string;
  avatar: string;
}

const mockScouts: Scout[] = [
  {
    id: "1",
    name: "Sarah Mthembu",
    organization: "TINP - Tshwane Innovation Network",
    role: "Talent Scout",
    viewedDate: "Today",
    avatar: "SM",
  },
  {
    id: "2",
    name: "James Park",
    organization: "Tech Startups SA",
    role: "Recruitment Manager",
    viewedDate: "2 days ago",
    avatar: "JP",
  },
  {
    id: "3",
    name: "Naledi Koala",
    organization: "Softstart BTI Accelerator",
    role: "Program Director",
    viewedDate: "1 week ago",
    avatar: "NK",
  },
];

export default function StudentDashboard() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showGradeProgression, setShowGradeProgression] = useState(false);
  const [previousGradeData, setPreviousGradeData] = useState<{ grade: string; scores: Record<string, number>; year: number } | null>(null);
  const [studentName, setStudentName] = useState<string>("");
  const [showScoutViews, setShowScoutViews] = useState(false);

  useEffect(() => {
    // Get student name
    const name = localStorage.getItem("student_name") || "there";
    setStudentName(name);

    // Check if onboarding is complete
    const onboardingComplete = localStorage.getItem("onboarding_complete");
    const hasAssessmentScores = localStorage.getItem("assessmentScores");
    
    if (!onboardingComplete || !hasAssessmentScores) {
      // Redirect back to onboarding
      setLocation("/onboarding?role=student");
      return;
    }

    // Check for grade progression
    const currentYear = new Date().getFullYear();
    const storedYear = localStorage.getItem("onboarding_year");
    const storedGrade = localStorage.getItem("onboarding_grade");
    
    if (storedYear && parseInt(storedYear) < currentYear && storedGrade) {
      // Grade progression detected
      const oldGrade = storedGrade;
      const oldScores = localStorage.getItem("assessmentScores");
      setPreviousGradeData({
        grade: oldGrade,
        scores: oldScores ? JSON.parse(oldScores) : {},
        year: parseInt(storedYear),
      });
      setShowGradeProgression(true);
      return;
    }

    // Ensure year is stored
    if (!storedYear) {
      localStorage.setItem("onboarding_year", currentYear.toString());
    }

    setIsLoading(false);
  }, [setLocation]);

  // Get actual assessment scores
  const savedScores = localStorage.getItem("assessmentScores");
  const scoreMap: Record<string, number> = savedScores ? JSON.parse(savedScores) : {};

  // Calculate Career Clarity (average of all assessment scores as percentage)
  const careerClarityValue = useMemo(() => {
    if (Object.keys(scoreMap).length === 0) return 0;
    const avgScore = Object.values(scoreMap).reduce((a, b) => a + b, 0) / Object.values(scoreMap).length;
    return Math.round(avgScore * 10);
  }, [scoreMap]);

  // Get Profile Views (stored in localStorage, defaults to mock data)
  const profileViewsValue = useMemo(() => {
    const views = localStorage.getItem("profile_views");
    return views ? parseInt(views) : Math.floor(Math.random() * 25) + 5; // Random 5-30 if not set
  }, []);

  const strengthData = [
    { subject: 'Entrepreneurship', A: (scoreMap.Entrepreneurship ?? 5) * 10, fullMark: 100 },
    { subject: 'Leadership', A: (scoreMap.Leadership ?? 5) * 10, fullMark: 100 },
    { subject: 'STEM', A: (scoreMap.STEM ?? 5) * 10, fullMark: 100 },
    { subject: 'Creativity', A: (scoreMap.Creativity ?? 5) * 10, fullMark: 100 },
    { subject: 'Social Impact', A: (scoreMap['Social Impact'] ?? 5) * 10, fullMark: 100 },
    { subject: 'Sports', A: (scoreMap.Sports ?? 5) * 10, fullMark: 100 },
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
      match: Math.round(score * 10), // Convert 0-10 score to 0-100 percentage
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

  const handleGradeProgressionConfirm = (newGrade: string) => {
    const currentYear = new Date().getFullYear();
    
    // Archive previous grade data
    const gradeHistory = localStorage.getItem("onboarding_grade_history") || "[]";
    const history = JSON.parse(gradeHistory);
    if (previousGradeData) {
      history.push({
        grade: previousGradeData.grade,
        year: previousGradeData.year,
        scores: previousGradeData.scores,
      });
    }
    
    // Update current grade and year
    localStorage.setItem("onboarding_grade", newGrade);
    localStorage.setItem("onboarding_year", currentYear.toString());
    localStorage.setItem("onboarding_grade_history", JSON.stringify(history));
    
    setShowGradeProgression(false);
    setIsLoading(false);
  };

  const handleOptionalReassess = () => {
    const currentGrade = localStorage.getItem("onboarding_grade");
    const currentSubjects = localStorage.getItem("onboarding_subjects");
    localStorage.setItem("onboarding_step", "start-assessment");
    setLocation(`/assessment?grade=${currentGrade}&subjects=${currentSubjects}`);
  };

  if (isLoading) return null;

  // Grade progression modal
  if (showGradeProgression && previousGradeData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight">Welcome back, {studentName}! 🎉</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">You're ready for the next chapter. Let's update your journey and see how your strengths have evolved.</p>
          </div>

          <div className="bg-card border rounded-lg p-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-bold">What grade are you in now?</h2>
              <p className="text-sm text-muted-foreground">Last year you were in {previousGradeData.grade}</p>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => handleGradeProgressionConfirm(grade)}
                  disabled={grade === previousGradeData.grade}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-lg font-medium ${
                    grade === previousGradeData.grade
                      ? "border-muted bg-muted/30 text-muted-foreground cursor-not-allowed opacity-50"
                      : "border-muted hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>

            <div className="border-t pt-6 space-y-4">
              <h3 className="font-semibold">Your {previousGradeData.grade} Strengths:</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(previousGradeData.scores).map(([strength, score]) => (
                  <div key={strength} className="p-3 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium">{strength}</p>
                    <p className="text-2xl font-bold text-primary">{Math.round(score * 10)}%</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We'll keep these for comparison. You can re-assess anytime to see your growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get career paths based on actual assessment scores
  const careerPaths = getCareerPathsForProfile(scoreMap);

  // Get grade history for growth comparison
  const gradeHistory = localStorage.getItem("onboarding_grade_history");
  const history = gradeHistory ? JSON.parse(gradeHistory) : [];
  const previousGrade = history.length > 0 ? history[history.length - 1] : null;
  const currentGrade = localStorage.getItem("onboarding_grade");

  return (
    <DashboardLayout type="student">
      {/* Welcome Banner */}
      <div className="mb-6 text-center space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">Welcome back to Career Plug AI, {studentName}! 👋</h1>
        <p className="text-muted-foreground">Your personalized career journey continues here</p>
      </div>

      {/* Growth Badge (if has history) */}
      {previousGrade && (
        <Card className="mb-6 border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold text-green-900 dark:text-green-100">
                  Your Growth Journey
                </CardTitle>
                <CardDescription className="text-xs text-green-700 dark:text-green-300">
                  You've progressed from {previousGrade.grade} ({previousGrade.year}). See how your strengths have evolved.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Career Clarity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{careerClarityValue}%</div>
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
            <button 
              onClick={() => setShowScoutViews(true)}
              className="w-full text-left hover:opacity-70 transition-opacity"
            >
              <div className="text-3xl font-bold">{profileViewsValue}</div>
              <p className="text-xs text-muted-foreground mt-1">From scouts (click to view)</p>
            </button>
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

      {/* Growth Comparison */}
      {previousGrade && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Your Growth: {previousGrade.grade} → {currentGrade}
            </CardTitle>
            <CardDescription>How have your strengths changed?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(scoreMap).map(([strength, currentScore]) => {
                const previousScore = previousGrade.scores[strength] ?? 0;
                const growth = (currentScore - previousScore) * 10;
                const isGrowth = growth > 0;
                
                return (
                  <div key={strength} className="p-4 rounded-lg border space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{strength}</span>
                      {growth !== 0 && (
                        <span className={`text-xs font-bold ${isGrowth ? 'text-green-600' : 'text-red-600'}`}>
                          {isGrowth ? '+' : ''}{growth.toFixed(0)}%
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground flex justify-between">
                        <span>{previousGrade.grade}</span>
                        <span className="font-semibold text-foreground">{Math.round(previousScore * 10)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div
                          className="h-full rounded-full bg-gray-400"
                          style={{ width: `${previousScore * 10}%` }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground flex justify-between">
                        <span>{currentGrade}</span>
                        <span className="font-semibold text-foreground">{Math.round(currentScore * 10)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div
                          className={`h-full rounded-full ${isGrowth ? 'bg-green-500' : growth < 0 ? 'bg-red-500' : 'bg-blue-500'}`}
                          style={{ width: `${currentScore * 10}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" className="flex-1" onClick={handleOptionalReassess}>
                Re-take Assessment
              </Button>
              <Button variant="outline" className="flex-1">
                View Full History
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

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

      {/* Scout Views Modal */}
      {showScoutViews && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>Who's Viewed Your Profile</CardTitle>
                <CardDescription>Scouts interested in your profile</CardDescription>
              </div>
              <button
                onClick={() => setShowScoutViews(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockScouts.map((scout) => (
                <div key={scout.id} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {scout.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm">{scout.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{scout.role}</p>
                    <p className="text-xs text-muted-foreground truncate">{scout.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{scout.viewedDate}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="flex-shrink-0">
                    View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
}
