import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Code, Lightbulb, PlayCircle, Trophy, ExternalLink, Calculator, Clock } from "lucide-react";

export default function ResourcesPage() {
  const subjects = JSON.parse(localStorage.getItem("onboarding_subjects") || '["Mathematics", "Physical Sciences"]');
  
  const resources = [
    {
      title: "Introduction to Python",
      category: "Coding",
      type: "Course",
      provider: "Career Plug AI",
      duration: "4 hours",
      progress: 65,
      icon: Code,
      match: "Strong Match",
      recommended: subjects.includes("Mathematics") || subjects.includes("Information Technology")
    },
    {
      title: "Financial Literacy for Teens",
      category: "Life Skills",
      type: "Masterclass",
      provider: "Standard Bank",
      duration: "2 hours",
      progress: 0,
      icon: Calculator,
      match: "Essential",
      recommended: true
    },
    {
      title: "Public Speaking & Pitching",
      category: "Leadership",
      type: "Video Series",
      provider: "TED-Ed",
      duration: "1.5 hours",
      progress: 100,
      icon: Lightbulb,
      match: "Good Match",
      recommended: true
    },
    {
      title: "Design Thinking Basics",
      category: "Innovation",
      type: "Workshop",
      provider: "Stanford d.school",
      duration: "3 hours",
      progress: 15,
      icon: BookOpen,
      match: "Good Match",
      recommended: subjects.includes("Engineering Graphics and Design") || subjects.includes("Visual Arts")
    },
    {
      title: "How to Build a Startup in High School",
      category: "Entrepreneurship",
      type: "Article",
      provider: "Y Combinator",
      duration: "20 mins",
      progress: 0,
      icon: Trophy,
      match: "Strong Match",
      recommended: subjects.includes("Business Studies") || subjects.includes("Economics")
    },
    {
      title: "Mastering Physical Sciences",
      category: "Academics",
      type: "Course",
      provider: "Siyavula",
      duration: "10 hours",
      progress: 0,
      icon: PlayCircle,
      match: "Subject Alignment",
      recommended: subjects.includes("Physical Sciences")
    }
  ];

  // Filter out resources that are not recommended based on subjects (keep some general ones)
  const displayedResources = resources.filter(r => r.recommended || r.match === "Essential" || r.match === "Strong Match");

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">Skill-Building Resources 📚</h1>
            <p className="text-muted-foreground mt-2">
              Curated content to help you build your portfolio and level up your skills.
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="default" className="px-3 py-1 cursor-pointer">All Topics</Badge>
            <Badge variant="secondary" className="px-3 py-1 cursor-pointer">Coding</Badge>
            <Badge variant="secondary" className="px-3 py-1 cursor-pointer">Leadership</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedResources.map((resource, i) => (
            <Card key={i} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={
                    resource.match === "Essential" ? "destructive" : 
                    resource.match === "Strong Match" ? "default" : "secondary"
                  }>
                    {resource.match}
                  </Badge>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-1">{resource.title}</CardTitle>
                <CardDescription>{resource.provider}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" /> {resource.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {resource.duration}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Progress</span>
                    <span>{resource.progress}%</span>
                  </div>
                  <Progress value={resource.progress} className="h-2" />
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 mt-auto">
                <Button className="w-full" variant={resource.progress === 100 ? "outline" : "default"}>
                  {resource.progress === 100 ? "Review Material" : resource.progress > 0 ? "Continue Learning" : "Start Learning"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
