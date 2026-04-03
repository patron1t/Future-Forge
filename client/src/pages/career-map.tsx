import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowRight, Clock, DollarSign, BookOpen, Users, Zap } from "lucide-react";

interface CareerPathway {
  id: string;
  title: string;
  description: string;
  icon: string;
  strength: "STEM" | "Entrepreneurship" | "Leadership" | "Creativity" | "Sports" | "Social Impact";
  duration: string;
  cost: "Affordable" | "Moderate" | "Expensive";
  entryLevel: "Grade 8" | "Grade 10" | "Grade 11" | "Grade 12";
  requiredSubjects: string[];
  skills: string[];
  opportunities: number;
  organization?: string;
  pathway: "Traditional" | "Certification" | "Alternative";
}

const careerPathways: CareerPathway[] = [
  // STEM - Traditional
  {
    id: "engineer",
    title: "Engineer",
    description: "Design and build infrastructure, systems, and products.",
    icon: "🏗️",
    strength: "STEM",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Mathematics", "Physical Sciences"],
    skills: ["Technical Design", "Problem Solving", "Mathematics"],
    opportunities: 45,
    pathway: "Traditional",
  },
  {
    id: "scientist",
    title: "Scientist (Research)",
    description: "Conduct research to advance knowledge in science.",
    icon: "🔬",
    strength: "STEM",
    duration: "4+ years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Physical Sciences", "Mathematics"],
    skills: ["Research", "Data Analysis", "Scientific Method"],
    opportunities: 20,
    pathway: "Traditional",
  },
  {
    id: "doctor",
    title: "Doctor / Medical Professional",
    description: "Provide healthcare and treatment to patients.",
    icon: "⚕️",
    strength: "STEM",
    duration: "5-6 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences", "Mathematics"],
    skills: ["Medical Knowledge", "Empathy", "Problem Solving"],
    opportunities: 30,
    pathway: "Traditional",
  },

  // STEM - Certification
  {
    id: "software-tester",
    title: "Software Tester (ISTQB)",
    description: "Test software applications to find bugs and ensure quality. ISTQB Foundation certificate in 2 months.",
    icon: "🧪",
    strength: "STEM",
    duration: "2 months",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Mathematics", "Computer Science"],
    skills: ["Quality Assurance", "Testing", "Attention to Detail"],
    opportunities: 50,
    organization: "ISTQB",
    pathway: "Certification",
  },
  {
    id: "cloud-specialist",
    title: "Cloud Specialist (AWS Certified)",
    description: "Manage cloud infrastructure and applications.",
    icon: "☁️",
    strength: "STEM",
    duration: "3-4 months",
    cost: "Affordable",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science"],
    skills: ["Cloud Systems", "Infrastructure", "Problem Solving"],
    opportunities: 40,
    organization: "AWS",
    pathway: "Certification",
  },
  {
    id: "data-analyst-cert",
    title: "Data Analyst (Google Certificate)",
    description: "Analyze data to inform business decisions.",
    icon: "📊",
    strength: "STEM",
    duration: "4-6 months",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Mathematics"],
    skills: ["Data Analysis", "Excel", "Statistics"],
    opportunities: 35,
    organization: "Google",
    pathway: "Certification",
  },

  // Entrepreneurship - Traditional
  {
    id: "business-owner",
    title: "Entrepreneur / Business Owner",
    description: "Start and manage your own business.",
    icon: "🚀",
    strength: "Entrepreneurship",
    duration: "Ongoing",
    cost: "Variable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Business Studies"],
    skills: ["Business Strategy", "Leadership", "Financial Management"],
    opportunities: 60,
    pathway: "Traditional",
  },
  {
    id: "consultant",
    title: "Business Consultant",
    description: "Help organizations improve operations and strategy.",
    icon: "💼",
    strength: "Entrepreneurship",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies", "Mathematics"],
    skills: ["Strategic Thinking", "Analysis", "Communication"],
    opportunities: 25,
    pathway: "Traditional",
  },

  // Entrepreneurship - Alternative (TINP, Softstart BTI)
  {
    id: "startup-founder",
    title: "Startup Founder (TINP / Softstart BTI)",
    description: "Launch your startup with mentorship and resources from TINP hubs and Softstart BTI incubator.",
    icon: "🌱",
    strength: "Entrepreneurship",
    duration: "12-24 months incubation",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Innovation", "Leadership", "Adaptability"],
    opportunities: 100,
    organization: "TINP / Softstart BTI",
    pathway: "Alternative",
  },
  {
    id: "tech-entrepreneur",
    title: "Tech Entrepreneur",
    description: "Build innovative tech solutions. Access to tech hubs, accelerators, and investor networks.",
    icon: "💻",
    strength: "Entrepreneurship",
    duration: "12-36 months",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science", "Business Studies"],
    skills: ["Technical Skills", "Business Acumen", "Innovation"],
    opportunities: 70,
    pathway: "Alternative",
  },

  // Leadership - Traditional
  {
    id: "manager",
    title: "Manager / Team Leader",
    description: "Lead teams and manage organizational operations.",
    icon: "👔",
    strength: "Leadership",
    duration: "Variable",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies"],
    skills: ["Leadership", "Communication", "Decision Making"],
    opportunities: 55,
    pathway: "Traditional",
  },
  {
    id: "executive",
    title: "Executive / C-Suite",
    description: "Lead organizations at the highest levels.",
    icon: "🏢",
    strength: "Leadership",
    duration: "10+ years progression",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies", "Economics"],
    skills: ["Strategic Leadership", "Vision", "Negotiation"],
    opportunities: 15,
    pathway: "Traditional",
  },
  {
    id: "teacher",
    title: "Teacher / Educator",
    description: "Shape the next generation through education.",
    icon: "📚",
    strength: "Leadership",
    duration: "4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Communication", "Empathy", "Organization"],
    opportunities: 40,
    pathway: "Traditional",
  },

  // Creativity - Traditional & Alternative
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual content for brands and businesses.",
    icon: "🎨",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Design", "Creativity", "Tech Tools"],
    opportunities: 45,
    pathway: "Traditional",
  },
  {
    id: "musician",
    title: "Musician / Music Producer",
    description: "Create and perform music professionally.",
    icon: "🎵",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 10",
    requiredSubjects: ["Music"],
    skills: ["Musical Talent", "Creativity", "Discipline"],
    opportunities: 30,
    pathway: "Traditional",
  },
  {
    id: "artist",
    title: "Visual Artist",
    description: "Create art for galleries, exhibitions, and communities.",
    icon: "🖼️",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 10",
    requiredSubjects: ["Art"],
    skills: ["Artistic Talent", "Creativity", "Expression"],
    opportunities: 25,
    pathway: "Traditional",
  },
  {
    id: "digital-creator",
    title: "Digital Content Creator / Influencer",
    description: "Create content on social media and streaming platforms.",
    icon: "📱",
    strength: "Creativity",
    duration: "6-12 months to start",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Any"],
    skills: ["Creativity", "Digital Tools", "Audience Engagement"],
    opportunities: 80,
    pathway: "Alternative",
  },
  {
    id: "filmmaker",
    title: "Filmmaker / Video Producer",
    description: "Create films, documentaries, and video content.",
    icon: "🎬",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Storytelling", "Technical Skills", "Creativity"],
    opportunities: 35,
    pathway: "Traditional",
  },

  // Sports
  {
    id: "professional-athlete",
    title: "Professional Athlete",
    description: "Compete professionally in your sport.",
    icon: "⚽",
    strength: "Sports",
    duration: "10+ years training",
    cost: "Variable",
    entryLevel: "Grade 8",
    requiredSubjects: ["Physical Education"],
    skills: ["Athletic Excellence", "Discipline", "Teamwork"],
    opportunities: 50,
    pathway: "Traditional",
  },
  {
    id: "sports-coach",
    title: "Sports Coach",
    description: "Train and develop athletes in your sport.",
    icon: "🏆",
    strength: "Sports",
    duration: "2-4 years",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Physical Education"],
    skills: ["Coaching", "Leadership", "Sports Knowledge"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "sports-science",
    title: "Sports Scientist / Physiotherapist",
    description: "Support athlete performance and health.",
    icon: "🏥",
    strength: "Sports",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Science", "Biomechanics", "Health Knowledge"],
    opportunities: 35,
    pathway: "Traditional",
  },

  // Social Impact
  {
    id: "social-worker",
    title: "Social Worker",
    description: "Help vulnerable communities and individuals.",
    icon: "🤝",
    strength: "Social Impact",
    duration: "4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Empathy", "Communication", "Problem Solving"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "ngo-leader",
    title: "NGO / Non-Profit Leader",
    description: "Lead organizations focused on social change.",
    icon: "🌍",
    strength: "Social Impact",
    duration: "Variable",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Leadership", "Impact Focus", "Fundraising"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "environmental-specialist",
    title: "Environmental Specialist",
    description: "Work on climate, conservation, and sustainability.",
    icon: "🌱",
    strength: "Social Impact",
    duration: "4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Environmental Science", "Research", "Advocacy"],
    opportunities: 30,
    pathway: "Traditional",
  },
];

interface StrengthScore {
  category: string;
  score: number;
  color: string;
}

export default function CareerMapPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const grade = searchParams.get("grade") || "Your Grade";
  const subjectsParam = searchParams.get("subjects") || "";
  const subjects = subjectsParam ? subjectsParam.split(",") : [];
  const [selectedPathway, setSelectedPathway] = useState<CareerPathway | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateStrengths = (): StrengthScore[] => {
    const strengths = [
      { category: "STEM", score: 5, color: "bg-green-500" },
      { category: "Entrepreneurship", score: 5, color: "bg-blue-500" },
      { category: "Leadership", score: 5, color: "bg-purple-500" },
      { category: "Creativity", score: 5, color: "bg-pink-500" },
      { category: "Sports", score: 5, color: "bg-yellow-500" },
      { category: "Social Impact", score: 5, color: "bg-orange-500" },
    ];

    if (subjects.includes("Mathematics") || subjects.includes("Computer Science") || subjects.includes("Physical Sciences")) {
      strengths[0].score = 9;
    }
    if (subjects.includes("Business Studies") || subjects.includes("Economics")) {
      strengths[1].score = 8;
    }
    if (subjects.includes("Technical Sciences")) {
      strengths[3].score = 8;
    }

    return strengths;
  };

  const getRecommendedPaths = (): CareerPathway[] => {
    return careerPathways
      .filter(path => {
        const hasRequiredSubjects = path.requiredSubjects.length === 0 || 
          path.requiredSubjects.some(req => subjects.includes(req));
        const gradeNum = parseInt(grade);
        const entryNum = parseInt(path.entryLevel);
        return hasRequiredSubjects && gradeNum >= entryNum;
      })
      .sort((a, b) => b.opportunities - a.opportunities)
      .slice(0, 3);
  };

  const pathsByStrength = (strength: CareerPathway["strength"]) => {
    return careerPathways.filter(p => p.strength === strength);
  };

  const strengths = generateStrengths();
  const recommendedPaths = getRecommendedPaths();

  const costColors = {
    Affordable: "bg-green-100 text-green-800",
    Moderate: "bg-blue-100 text-blue-800",
    Expensive: "bg-red-100 text-red-800",
  };

  const pathwayColors = {
    Traditional: "bg-purple-100 text-purple-800",
    Certification: "bg-green-100 text-green-800",
    Alternative: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center space-y-3">
            <div className="flex items-center justify-center gap-3 text-muted-foreground mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">{grade}</span>
              {subjects.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-center">
                  {subjects.slice(0, 2).map((s) => (
                    <span key={s} className="px-2 py-1 rounded-full bg-muted text-xs font-medium">
                      {s}
                    </span>
                  ))}
                  {subjects.length > 2 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">+{subjects.length - 2} more</span>
                  )}
                </div>
              )}
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight">
              Your Career Map
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore pathways across all your strengths — Traditional degrees, Fast certifications, or Alternative routes
            </p>
          </div>

          {/* Strength Profile */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Strength Profile</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {strengths.map((strength) => (
                <div key={strength.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{strength.category}</span>
                    <span className="text-primary font-bold">{strength.score}/10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-full rounded-full ${strength.color}`}
                      style={{ width: `${(strength.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Top 3 Recommendations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Top Recommendations</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {recommendedPaths.map((path) => (
                <Card key={path.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary">
                  <div className="text-3xl mb-3">{path.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">{path.duration}</Badge>
                    <Badge className={`text-xs ${costColors[path.cost]}`}>{path.cost}</Badge>
                    <Badge variant="outline" className={`text-xs ${pathwayColors[path.pathway]}`}>{path.pathway}</Badge>
                  </div>
                  <Button 
                    onClick={() => setSelectedPathway(path)}
                    className="w-full gap-2"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Browse All Pathways by Strength */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Explore All Pathways</h2>
            <Tabs defaultValue="STEM" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="STEM">STEM</TabsTrigger>
                <TabsTrigger value="Entrepreneurship">Entrepreneurship</TabsTrigger>
                <TabsTrigger value="Leadership">Leadership</TabsTrigger>
                <TabsTrigger value="Creativity">Creativity</TabsTrigger>
                <TabsTrigger value="Sports">Sports</TabsTrigger>
                <TabsTrigger value="Social Impact">Social Impact</TabsTrigger>
              </TabsList>

              {(["STEM", "Entrepreneurship", "Leadership", "Creativity", "Sports", "Social Impact"] as const).map((strength) => (
                <TabsContent key={strength} value={strength} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {pathsByStrength(strength).map((path) => (
                      <Card key={path.id} className="p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-3xl">{path.icon}</div>
                          <Badge className={`text-xs ${pathwayColors[path.pathway]}`}>{path.pathway}</Badge>
                        </div>
                        <h3 className="font-bold mb-2">{path.title}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{path.description}</p>
                        <div className="space-y-2 mb-4 text-xs">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            <span>{path.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-3 w-3" />
                            <span className={costColors[path.cost]}>{path.cost}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-3 w-3" />
                            <span>Entry: {path.entryLevel}</span>
                          </div>
                        </div>
                        {path.organization && (
                          <div className="mb-3 p-2 rounded bg-primary/5 text-xs font-medium text-primary">
                            📌 {path.organization}
                          </div>
                        )}
                        <Button 
                          onClick={() => setSelectedPathway(path)}
                          size="sm"
                          variant="outline"
                          className="w-full"
                        >
                          Explore
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
