import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Zap, Target, Rocket, CheckCircle, BookOpen } from "lucide-react";

type OnboardingStep = "welcome" | "grade-selection" | "subject-selection" | "assessment-intro" | "start-assessment" | "completion";

interface StepConfig {
  id: OnboardingStep;
  title: string;
  description: string;
  progress: number;
}

const steps: StepConfig[] = [
  { id: "welcome", title: "Welcome", description: "Get started on your journey", progress: 14 },
  { id: "grade-selection", title: "Your Grade", description: "What year are you in?", progress: 28 },
  { id: "subject-selection", title: "Your Subjects", description: "What are you taking?", progress: 42 },
  { id: "assessment-intro", title: "Learn", description: "Discover how it works", progress: 56 },
  { id: "start-assessment", title: "Assess", description: "Find your strengths", progress: 70 },
  { id: "completion", title: "Complete", description: "View your career map", progress: 100 },
];

const SASubjects = [
  "Mathematics",
  "Mathematical Literacy",
  "Physical Sciences",
  "Life Sciences",
  "Biology",
  "Chemistry",
  "English",
  "Home Language",
  "History",
  "Geography",
  "Business Studies",
  "Economics",
  "Accounting",
  "Computer Science",
  "Information Technology",
  "Technical Sciences",
];

const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

export default function OnboardingPage() {
  const [, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const role = (searchParams.get("role") || "student") as "student" | "professional" | "counselor";
  const name = searchParams.get("name") || "Student";

  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome");
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load saved progress
    const savedGrade = localStorage.getItem("onboarding_grade");
    const savedSubjects = localStorage.getItem("onboarding_subjects");
    const savedStep = localStorage.getItem("onboarding_step");
    
    if (savedGrade) setSelectedGrade(savedGrade);
    if (savedSubjects) setSelectedSubjects(JSON.parse(savedSubjects));
    if (savedStep) setCurrentStep(savedStep as OnboardingStep);
  }, []);

  const currentStepConfig = steps.find((s) => s.id === currentStep);
  const stepIndex = steps.findIndex((s) => s.id === currentStep);

  const saveProgress = (step: OnboardingStep) => {
    localStorage.setItem("onboarding_step", step);
    localStorage.setItem("onboarding_grade", selectedGrade);
    localStorage.setItem("onboarding_subjects", JSON.stringify(selectedSubjects));
  };

  const handleNext = () => {
    let nextStep: OnboardingStep | null = null;

    if (currentStep === "welcome") {
      nextStep = "grade-selection";
    } else if (currentStep === "grade-selection") {
      nextStep = "subject-selection";
    } else if (currentStep === "subject-selection") {
      nextStep = "assessment-intro";
    } else if (currentStep === "assessment-intro") {
      nextStep = "start-assessment";
    } else if (currentStep === "start-assessment") {
      saveProgress("start-assessment");
      setLocation(`/assessment?grade=${selectedGrade}&subjects=${selectedSubjects.join(",")}`);
      return;
    } else if (currentStep === "completion") {
      // Mark onboarding as complete
      localStorage.setItem("onboarding_complete", "true");
      localStorage.removeItem("onboarding_step");
      localStorage.removeItem("onboarding_grade");
      localStorage.removeItem("onboarding_subjects");
      setLocation("/student-dashboard");
      return;
    }

    if (nextStep) {
      setCurrentStep(nextStep);
      saveProgress(nextStep);
    }
  };

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => {
      const updated = prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject];
      // Save as they toggle
      localStorage.setItem("onboarding_subjects", JSON.stringify(updated));
      return updated;
    });
  };

  const canProceed = () => {
    if (currentStep === "grade-selection") return !!selectedGrade;
    if (currentStep === "subject-selection") return selectedSubjects.length > 0;
    return true;
  };

  const handleSkip = () => {
    if (role === "student") {
      setLocation("/student-dashboard");
    } else if (role === "counselor") {
      setLocation("/counselor-dashboard");
    } else {
      setLocation("/professional-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <div className="flex-1 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-muted-foreground">Step {stepIndex + 1} of {steps.length}</h2>
              <span className="text-sm font-semibold text-primary">{currentStepConfig?.progress || 0}%</span>
            </div>
            <Progress value={currentStepConfig?.progress || 0} className="h-2" />
          </div>

          {/* Grade Selection Step */}
          {currentStep === "grade-selection" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  What Grade Are You In?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  This helps us tailor your career path and opportunities to your stage
                </p>
              </div>

              <div className="space-y-3 max-w-md mx-auto">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    onClick={() => {
                      setSelectedGrade(grade);
                      localStorage.setItem("onboarding_grade", grade);
                    }}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-lg font-medium ${
                      selectedGrade === grade
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-muted hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setCurrentStep("welcome")}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Subject Selection Step */}
          {currentStep === "subject-selection" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  What Subjects Are You Taking?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select your current subjects (you can change this anytime)
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-3">
                  {SASubjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => toggleSubject(subject)}
                      className={`p-4 rounded-lg border-2 transition-all text-sm font-medium ${
                        selectedSubjects.includes(subject)
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-muted hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Selected: {selectedSubjects.length} subject{selectedSubjects.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setCurrentStep("grade-selection")}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Welcome Step */}
          {currentStep === "welcome" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  Welcome to Career Plug AI, {name}!
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're excited to help you discover your authentic strengths and map the perfect career path for you.
                </p>
              </div>

              <Card className="p-8 space-y-6">
                <h2 className="text-2xl font-bold">What You'll Experience</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Target className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Strength Assessment</h3>
                      <p className="text-sm text-muted-foreground">
                        Answer questions about your interests, skills, and passions. No right or wrong answers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Rocket className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Career Paths</h3>
                      <p className="text-sm text-muted-foreground">
                        Get AI-powered recommendations tailored to your unique strengths.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real Opportunities</h3>
                      <p className="text-sm text-muted-foreground">
                        Discover internships, scholarships, and mentorships matched to you.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  Let's Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button onClick={handleSkip} size="lg" variant="outline">
                  Skip for Now
                </Button>
              </div>
            </div>
          )}

          {/* Assessment Intro Step */}
          {currentStep === "assessment-intro" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  Strength Assessment
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A quick questionnaire to help us understand your true strengths
                </p>
              </div>

              <Card className="p-8 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">How It Works</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-lg">1</span>
                      <span>You'll answer 6 questions about your interests and strengths</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-lg">2</span>
                      <span>Questions cover STEM, Leadership, Entrepreneurship, Creativity, and more</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-lg">3</span>
                      <span>Takes about 5-10 minutes to complete</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-lg">4</span>
                      <span>Get instant personalized career recommendations</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    💡 Tip: There are no "correct" answers. We're looking for your authentic strengths, not what you think sounds impressive.
                  </p>
                </div>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  Start Assessment <ArrowRight className="h-4 w-4" />
                </Button>
                <Button onClick={handleSkip} size="lg" variant="outline">
                  Skip for Now
                </Button>
              </div>
            </div>
          )}

          {/* Start Assessment Step */}
          {currentStep === "start-assessment" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Rocket className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  Ready to Discover Your Strengths?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Answer a few questions about yourself and we'll create your personalized career map.
                </p>
              </div>

              <Card className="p-8 space-y-6">
                <div className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-transparent">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">What happens next</h3>
                    <p className="text-sm text-muted-foreground">
                      After completing the assessment, you'll see your personalized career paths, skill recommendations, and real opportunities matched to your profile.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  Start Now <ArrowRight className="h-4 w-4" />
                </Button>
                <Button onClick={handleSkip} size="lg" variant="outline">
                  Skip for Now
                </Button>
              </div>
            </div>
          )}

          {/* Completion Step */}
          {currentStep === "completion" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-4">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  Assessment Complete!
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your personalized career map is ready to view.
                </p>
              </div>

              <Card className="p-8 space-y-6">
                <h2 className="text-2xl font-bold">What's Next?</h2>
                <p className="text-muted-foreground">
                  You'll now see:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Your strength profile across 6 key categories</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Top 3 career paths tailored to you</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Skills to develop for each path</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Real opportunities matched to your profile</span>
                  </li>
                </ul>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  View Career Map <ArrowRight className="h-4 w-4" />
                </Button>
                <Button onClick={handleSkip} size="lg" variant="outline">
                  Go to Dashboard
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
