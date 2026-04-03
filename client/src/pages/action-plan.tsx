import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, MapPin, ArrowRight } from "lucide-react";

export default function ActionPlanPage() {
  const currentGrade = localStorage.getItem("onboarding_grade") || "Grade 11";
  const gradeNumber = parseInt(currentGrade.replace(/\D/g, "")) || 11;

  const timeline = [
    {
      grade: 8,
      title: "Exploration & Foundation",
      status: gradeNumber > 8 ? "completed" : gradeNumber === 8 ? "current" : "upcoming",
      tasks: [
        { name: "Take initial strengths assessment", completed: true },
        { name: "Join 2 extra-curricular activities", completed: true },
        { name: "Explore basic coding concepts", completed: false }
      ]
    },
    {
      grade: 9,
      title: "Subject Selection Alignment",
      status: gradeNumber > 9 ? "completed" : gradeNumber === 9 ? "current" : "upcoming",
      tasks: [
        { name: "Review subject choices for STEM", completed: gradeNumber > 9 },
        { name: "Start a personal project", completed: false },
        { name: "Attend a career exhibition", completed: gradeNumber > 9 }
      ]
    },
    {
      grade: 10,
      title: "Skill Building & First Portfolio",
      status: gradeNumber > 10 ? "completed" : gradeNumber === 10 ? "current" : "upcoming",
      tasks: [
        { name: "Create digital portfolio", completed: true },
        { name: "Complete a certified online course", completed: false },
        { name: "Job shadowing (1 day)", completed: false }
      ]
    },
    {
      grade: 11,
      title: "Leadership & Real Experience",
      status: gradeNumber > 11 ? "completed" : gradeNumber === 11 ? "current" : "upcoming",
      tasks: [
        { name: "Take on a leadership role at school", completed: false },
        { name: "Apply for a holiday internship", completed: false },
        { name: "Draft personal statement", completed: false }
      ]
    },
    {
      grade: 12,
      title: "Launch & Opportunity Matching",
      status: gradeNumber > 12 ? "completed" : gradeNumber === 12 ? "current" : "upcoming",
      tasks: [
        { name: "Finalize portfolio for university/bursary", completed: false },
        { name: "Apply for 3+ bursaries/scholarships", completed: false },
        { name: "Final exams preparation", completed: false }
      ]
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">Your Action Plan 🗺️</h1>
          <p className="text-muted-foreground mt-2">
            Your personalized Grade 8-12 journey to becoming the billionaire of tomorrow.
          </p>
        </div>

        <div className="relative border-l-2 border-muted ml-4 md:ml-6 space-y-12 pb-8">
          {timeline.map((step, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className={`absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-background border-2 ${
                step.status === "completed" ? "border-primary" : 
                step.status === "current" ? "border-primary" : "border-muted-foreground"
              }`}>
                {step.status === "completed" ? (
                  <CheckCircle2 className="h-4 w-4 text-primary bg-background rounded-full" />
                ) : step.status === "current" ? (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                )}
              </div>

              <Card className={`${step.status === "current" ? "border-primary shadow-md" : step.status === "upcoming" ? "opacity-75" : ""}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant={step.status === "current" ? "default" : step.status === "completed" ? "outline" : "secondary"} className="mb-2">
                        Grade {step.grade}
                      </Badge>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                    {step.status === "current" && (
                      <MapPin className="h-6 w-6 text-primary animate-bounce" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {step.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-start gap-3">
                        {task.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        ) : step.status === "upcoming" ? (
                          <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${task.completed ? "text-muted-foreground line-through" : ""}`}>
                          {task.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {step.status === "current" && (
                    <Button className="mt-6 w-full sm:w-auto" variant="default">
                      Update Progress <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
