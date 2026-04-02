import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

interface CareerPath {
  title: string;
  icon: string;
  match: number;
}

export default function KioskResultsPage() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerPaths: CareerPath[] = [
    { title: "Tech Entrepreneur", icon: "🚀", match: 95 },
    { title: "Product Manager", icon: "🎯", match: 88 },
    { title: "Innovation Consultant", icon: "💡", match: 85 },
  ];

  const handleSaveResults = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSaved(true);
      setTimeout(() => {
        setLocation("/kiosk");
      }, 2000);
    }
  };

  const handleBack = () => {
    setLocation("/kiosk");
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col p-6 overflow-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-3">Your Career Map</h1>
        <p className="text-2xl text-muted-foreground">
          Based on your strengths, here are your top career paths
        </p>
      </div>

      {/* Career Paths */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {careerPaths.map((career, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border-2 border-primary/30 bg-primary/5 space-y-4"
          >
            <div className="text-5xl">{career.icon}</div>
            <h3 className="text-2xl font-bold">{career.title}</h3>
            <div className="text-3xl font-bold text-primary">{career.match}%</div>
            <p className="text-lg text-muted-foreground">Match Score</p>
          </div>
        ))}
      </div>

      {/* Save Results Section */}
      <div className="max-w-2xl mx-auto w-full space-y-6 mb-12">
        <div className="p-8 rounded-2xl bg-muted/50 border-2 border-muted space-y-6">
          <h2 className="text-3xl font-bold">Save Your Results</h2>

          {!isSaved ? (
            <>
              <p className="text-xl text-muted-foreground">
                Enter your email to receive your full career map and opportunities
              </p>

              <form onSubmit={handleSaveResults} className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-xl rounded-xl"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                >
                  Save Results
                </Button>
              </form>

              <div className="text-center pt-6 border-t">
                <p className="text-lg text-muted-foreground mb-4">Or visit on your phone:</p>
                <p className="text-2xl font-bold text-primary">careerplugai.co.za</p>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4 py-8">
              <div className="text-6xl">✓</div>
              <h3 className="text-3xl font-bold">Results Saved!</h3>
              <p className="text-xl text-muted-foreground">
                Check your email for your full career map and opportunities
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-4 justify-center">
        <Button
          onClick={handleBack}
          size="lg"
          variant="outline"
          className="h-16 px-12 text-lg font-semibold rounded-xl"
        >
          Start Over
        </Button>

        <Button
          onClick={() => setLocation("/")}
          size="lg"
          className="h-16 px-12 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          Learn More Online <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
