import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

interface AssessmentQuestion {
  id: number;
  category: string;
  question: string;
  type: "multiple-choice" | "slider" | "ranking";
  options?: string[];
  description?: string;
}

const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    category: "STEM",
    question: "How interested are you in solving complex problems with technology and science?",
    type: "slider",
    description: "Think about coding, engineering, mathematics, or scientific research"
  },
  {
    id: 2,
    category: "Sports & Physical",
    question: "Do you enjoy competitive or team sports and physical challenges?",
    type: "multiple-choice",
    options: ["Very interested", "Somewhat interested", "Not really", "Prefer individual activities"]
  },
  {
    id: 3,
    category: "Entrepreneurship",
    question: "Have you ever wanted to start your own business or create something new?",
    type: "multiple-choice",
    options: ["Already have ideas", "Frequently think about it", "Sometimes", "Not interested"]
  },
  {
    id: 4,
    category: "Creativity",
    question: "How do you express yourself creatively?",
    type: "multiple-choice",
    options: ["Art & Design", "Music & Performance", "Writing & Storytelling", "Don't feel particularly creative"]
  },
  {
    id: 5,
    category: "Leadership",
    question: "How comfortable are you leading or influencing others?",
    type: "slider",
    description: "Being a leader, managing projects, or inspiring people"
  },
  {
    id: 6,
    category: "Social Impact",
    question: "Are you passionate about making a difference in your community?",
    type: "multiple-choice",
    options: ["Very passionate", "Interested", "Somewhat", "Not a priority"]
  },
];

export default function AssessmentPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const grade = searchParams.get("grade") || "Your Grade";
  const subjectsParam = searchParams.get("subjects") || "";
  const subjects = subjectsParam ? subjectsParam.split(",") : [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;
  const question = assessmentQuestions[currentQuestion];

  const handleAnswer = (value: number | string) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const calculateScores = (allAnswers: Record<number, number | string>) => {
    const scores: Record<string, number> = {
      STEM: 0,
      Entrepreneurship: 0,
      Leadership: 0,
      Creativity: 0,
      Sports: 0,
      "Social Impact": 0,
    };

    // Score each question based on the answer
    // Q1: STEM (slider 0-10)
    if (allAnswers[1] !== undefined) {
      scores.STEM = (allAnswers[1] as number) ?? 0;
    }
    // Q2: Sports (multiple choice: 0=0, 1=3, 2=6, 3=10)
    if (allAnswers[2] !== undefined) {
      const sportScores = [0, 10, 6, 3];
      scores.Sports = sportScores[allAnswers[2] as number] ?? 0;
    }
    // Q3: Entrepreneurship (multiple choice: 0=10, 1=7, 2=4, 3=0)
    if (allAnswers[3] !== undefined) {
      const entrepreneurScores = [10, 7, 4, 0];
      scores.Entrepreneurship = entrepreneurScores[allAnswers[3] as number] ?? 0;
    }
    // Q4: Creativity (multiple choice: 0=10, 1=10, 2=10, 3=0)
    if (allAnswers[4] !== undefined) {
      const creativeScores = [10, 10, 10, 0];
      scores.Creativity = creativeScores[allAnswers[4] as number] ?? 0;
    }
    // Q5: Leadership (slider 0-10)
    if (allAnswers[5] !== undefined) {
      scores.Leadership = (allAnswers[5] as number) ?? 0;
    }
    // Q6: Social Impact (multiple choice: 0=10, 1=7, 2=4, 3=0)
    if (allAnswers[6] !== undefined) {
      const socialScores = [10, 7, 4, 0];
      scores["Social Impact"] = socialScores[allAnswers[6] as number] ?? 0;
    }

    return scores;
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const scores = calculateScores(answers);
      localStorage.setItem("assessmentScores", JSON.stringify(scores));
      localStorage.setItem("assessmentAnswers", JSON.stringify(answers));
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isAnswered = question.id in answers;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background font-sans flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-2xl text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight">Assessment Complete!</h1>
              <p className="text-lg text-muted-foreground">
                We're analyzing your strengths to create your personalized career map.
              </p>
            </div>

            <Card className="p-8 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">What's Next?</h2>
                <p className="text-muted-foreground">
                  Your personalized career paths will be ready in moments. You'll discover:
                </p>
              </div>
              <ul className="text-left space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Career paths aligned with your unique strengths</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Skill development recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Opportunities matched to your profile</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Connection with mentors and scouts</span>
                </li>
              </ul>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/career-map">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  View Your Career Map <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />
      
      <div className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center space-y-3">
            <div className="flex items-center justify-center gap-3 text-muted-foreground mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">{grade}</span>
              {subjects.length > 0 && (
                <span className="text-sm">{subjects.length} subject{subjects.length !== 1 ? "s" : ""} selected</span>
              )}
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight mb-2">
              Discover Your Strengths
            </h1>
            <p className="text-muted-foreground">
              Answer a few questions to uncover your real strengths and potential career paths tailored to {grade.toLowerCase()} with your chosen subjects
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {assessmentQuestions.length}
              </span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 mb-8 space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
              <span className="text-xs font-semibold text-primary uppercase">{question.category}</span>
            </div>

            {/* Question */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">{question.question}</h2>
              {question.description && (
                <p className="text-muted-foreground">{question.description}</p>
              )}
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              {question.type === "multiple-choice" && question.options && (
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        answers[question.id] === index
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              )}

              {question.type === "slider" && (
                <div className="space-y-6 py-4">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={answers[question.id] || 5}
                    onChange={(e) => handleAnswer(parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground font-medium">
                    <span>Not interested</span>
                    <span className="text-primary font-bold">{answers[question.id] || 5}</span>
                    <span>Very interested</span>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex gap-4 justify-between">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              {currentQuestion === assessmentQuestions.length - 1 ? (
                <>
                  Complete Assessment
                  <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
