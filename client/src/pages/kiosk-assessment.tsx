import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface AssessmentQuestion {
  id: number;
  category: string;
  question: string;
  type: "multiple-choice" | "slider";
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

export default function KioskAssessmentPage() {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;
  const question = assessmentQuestions[currentQuestion];
  const isAnswered = question.id in answers;

  const handleAnswer = (value: number | string) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setLocation("/kiosk-results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setLocation("/kiosk-dashboard");
    }
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-semibold text-muted-foreground">
            Question {currentQuestion + 1} of {assessmentQuestions.length}
          </span>
          <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Category */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8">
          <span className="text-lg font-bold text-primary uppercase">{question.category}</span>
        </div>

        {/* Question */}
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight max-w-3xl">
          {question.question}
        </h2>

        {question.description && (
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl">
            {question.description}
          </p>
        )}

        {/* Answer Options */}
        <div className="w-full max-w-2xl">
          {question.type === "multiple-choice" && question.options && (
            <div className="grid grid-cols-2 gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`p-6 rounded-2xl border-2 text-xl font-semibold transition-all h-24 flex items-center justify-center text-center ${
                    answers[question.id] === index
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-muted hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {question.type === "slider" && (
            <div className="space-y-8">
              <input
                type="range"
                min="0"
                max="10"
                value={answers[question.id] || 5}
                onChange={(e) => handleAnswer(parseInt(e.target.value))}
                className="w-full h-4 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-lg text-muted-foreground font-semibold">
                <span>Not interested</span>
                <span className="text-4xl text-primary font-bold">{answers[question.id] || 5}</span>
                <span>Very interested</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex gap-4 justify-center mt-12">
        <Button
          onClick={handlePrevious}
          size="lg"
          variant="outline"
          className="h-16 px-8 text-lg font-semibold rounded-xl gap-2"
        >
          <ArrowLeft className="h-6 w-6" />
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={!isAnswered}
          size="lg"
          className="h-16 px-8 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          {currentQuestion === assessmentQuestions.length - 1 ? (
            <>
              Complete <ArrowRight className="h-6 w-6" />
            </>
          ) : (
            <>
              Next <ArrowRight className="h-6 w-6" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
