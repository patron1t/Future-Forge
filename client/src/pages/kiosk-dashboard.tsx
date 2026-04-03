import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Briefcase, Compass, FileText, Settings, Heart } from "lucide-react";

export default function KioskDashboardPage() {
  const [, setLocation] = useLocation();
  const [studentName, setStudentName] = useState("Student");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Load student name from local storage if available from previous steps
    const name = localStorage.getItem("student_name") || "Student";
    setStudentName(name);
  }, []);

  const modules = [
    {
      title: "Career Match Assessment",
      description: "Discover careers based on your strengths",
      icon: Compass,
      path: "/kiosk-assessment",
      color: "bg-primary text-primary-foreground border-primary/20",
      isPrimary: true
    },
    {
      title: "Build Offline Portfolio",
      description: "Start building your digital CV right now",
      icon: FileText,
      path: "/kiosk-portfolio-builder",
      color: "bg-card text-card-foreground border-border hover:border-primary/50",
      isPrimary: false
    },
    {
      title: "Subject Selector (Gr 8-9)",
      description: "Pick the right subjects for your goals",
      icon: Briefcase,
      path: "/kiosk-subjects",
      color: "bg-card text-card-foreground border-border hover:border-primary/50",
      isPrimary: false
    },
    {
      title: "Wellness & Study Tips",
      description: "Quick tips for mental health and exams",
      icon: Heart,
      path: "/kiosk-wellness",
      color: "bg-card text-card-foreground border-border hover:border-primary/50",
      isPrimary: false
    }
  ];

  return (
    <div className="w-screen h-screen bg-background flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="h-20 border-b flex items-center justify-between px-8 bg-muted/30">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Hi, {studentName}! 👋</h2>
            <p className="text-muted-foreground">What would you like to do today?</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="lg" 
          onClick={() => {
            // Log out functionality for the kiosk
            localStorage.removeItem("student_name");
            setLocation("/kiosk");
          }}
          className="rounded-xl h-12"
        >
          End Session
        </Button>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
          <h1 className="text-4xl font-heading font-bold mb-8 text-center">
            Your Kiosk Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod, idx) => (
              <div 
                key={idx}
                onClick={() => setLocation(mod.path)}
                className={`cursor-pointer rounded-2xl border-2 p-8 transition-all hover:scale-[1.02] hover:shadow-lg flex flex-col justify-between min-h-[220px] ${mod.color} ${mod.isPrimary ? "md:col-span-2 shadow-sm" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-xl ${mod.isPrimary ? "bg-white/20" : "bg-primary/10 text-primary"} backdrop-blur-sm shadow-sm`}>
                    <mod.icon className="h-10 w-10" />
                  </div>
                  {mod.isPrimary && (
                    <span className="bg-background text-foreground text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Recommended
                    </span>
                  )}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-3xl font-bold mb-2">{mod.title}</h3>
                  <p className="text-xl opacity-90">{mod.description}</p>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <div className={`h-12 w-12 rounded-full ${mod.isPrimary ? "bg-white/20" : "bg-primary/10"} flex items-center justify-center`}>
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
