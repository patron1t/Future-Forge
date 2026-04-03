import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Heart, Moon, Coffee, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function KioskWellnessPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tips = [
    {
      title: "The Pomodoro Technique",
      category: "Study Hacks",
      icon: Coffee,
      color: "bg-orange-500/10 text-orange-600",
      content: "Study for 25 minutes, then take a 5-minute break. After 4 cycles, take a 15-30 minute break. This keeps your brain fresh and focused!"
    },
    {
      title: "Sleep is Your Superpower",
      category: "Mental Health",
      icon: Moon,
      color: "bg-indigo-500/10 text-indigo-600",
      content: "Teenagers need 8-10 hours of sleep. While you sleep, your brain is actually organizing everything you learned that day. Pulling an all-nighter hurts your grades!"
    },
    {
      title: "Box Breathing for Anxiety",
      category: "Stress Relief",
      icon: Heart,
      color: "bg-rose-500/10 text-rose-600",
      content: "Feeling overwhelmed before a test? Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat 4 times."
    },
    {
      title: "Active Recall",
      category: "Study Hacks",
      icon: Brain,
      color: "bg-blue-500/10 text-blue-600",
      content: "Don't just re-read your notes. Close the book and try to explain the concept out loud to an imaginary friend. If you can't explain it simply, you don't understand it well enough yet."
    },
    {
      title: "The 'Done List'",
      category: "Motivation",
      icon: Sparkles,
      color: "bg-amber-500/10 text-amber-600",
      content: "Instead of just looking at a massive 'To-Do' list that stresses you out, keep a 'Done List' next to it. Write down every small thing you accomplish to build momentum."
    }
  ];

  return (
    <div className="w-screen h-screen bg-background flex flex-col p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" size="lg" onClick={() => setLocation("/kiosk-dashboard")} className="text-xl h-14 rounded-xl gap-2">
          <ArrowLeft className="h-6 w-6" /> Back
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full overflow-hidden">
        <div className="text-center mb-10 shrink-0">
          <h1 className="text-5xl font-bold mb-4 font-heading">Wellness & Study Hub</h1>
          <p className="text-2xl text-muted-foreground">
            Quick tips to help you stay sharp, focused, and healthy
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => (
              <Card key={idx} className="border-2 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl ${tip.color}`}>
                      <tip.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                        {tip.category}
                      </div>
                      <h3 className="text-2xl font-bold leading-tight">{tip.title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {tip.content}
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* SADAG Helplines Card */}
            <Card className="border-2 border-red-500/30 bg-red-500/5 rounded-2xl overflow-hidden md:col-span-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-red-600 mb-4">Need someone to talk to right now?</h3>
                <p className="text-xl mb-6 max-w-3xl mx-auto">
                  If you are feeling completely overwhelmed, depressed, or having dark thoughts, free help is available 24/7 in South Africa.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-6 py-4 rounded-xl border-2 border-red-200 shadow-sm">
                    <div className="text-sm font-bold text-muted-foreground mb-1 uppercase">SADAG Suicide Helpline</div>
                    <div className="text-2xl font-bold">0800 567 567</div>
                  </div>
                  <div className="bg-white px-6 py-4 rounded-xl border-2 border-red-200 shadow-sm">
                    <div className="text-sm font-bold text-muted-foreground mb-1 uppercase">Childline (Under 18)</div>
                    <div className="text-2xl font-bold">116</div>
                  </div>
                  <div className="bg-white px-6 py-4 rounded-xl border-2 border-red-200 shadow-sm">
                    <div className="text-sm font-bold text-muted-foreground mb-1 uppercase">WhatsApp Support</div>
                    <div className="text-2xl font-bold">076 882 2775</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
