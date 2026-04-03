import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";

export default function KioskWelcomePage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStart = () => {
    setLocation("/kiosk-dashboard");
  };

  const handleLearnMore = () => {
    setLocation("/");
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Career Plug AI" className="h-24 w-auto" />
      </div>

      {/* Main Content */}
      <div className="text-center space-y-6 max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
          <Zap className="h-14 w-14 text-primary" />
        </div>

        <h1 className="font-heading text-6xl font-bold tracking-tight">
          Discover Your Future
        </h1>

        <p className="text-3xl text-muted-foreground font-light">
          Find the career path that matches your authentic strengths
        </p>

        <div className="text-xl text-muted-foreground space-y-2 pt-4">
          <p>✓ Answer 6 quick questions</p>
          <p>✓ Get personalized career paths</p>
          <p>✓ Save your results to your phone</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Button
          onClick={handleStart}
          size="lg"
          className="h-20 text-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl gap-3 w-full"
        >
          Start Assessment <ArrowRight className="h-7 w-7" />
        </Button>

        <Button
          onClick={() => setLocation("/kiosk-auth")}
          size="lg"
          variant="secondary"
          className="h-16 text-xl font-semibold rounded-2xl w-full border-2"
        >
          Returning Learner? Log In
        </Button>

        <Button
          onClick={handleLearnMore}
          size="lg"
          variant="ghost"
          className="h-12 text-lg text-muted-foreground font-semibold rounded-2xl w-full"
        >
          What is Career Plug AI?
        </Button>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-muted-foreground">
        <p>Takes about 5-10 minutes • No registration required</p>
      </div>
    </div>
  );
}
