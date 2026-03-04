import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Trophy } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_education_background_with_connecting_nodes.png";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-32 md:pt-24 md:pb-48">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="h-3.5 w-3.5 fill-current" />
              Smart Careers. Strong Identities.
            </span>
          </div>
          
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Creating the <span className="text-primary">Billionaires</span> of <span className="text-accent">Tomorrow</span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
            Career Plug AI maps out personalized paths for students (Grade 8-12) based on real strengths. 
            Whether it's STEM, Sports, or Entrepreneurship, find the path where you'll truly succeed.
          </p>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/student-dashboard">
              <Button size="lg" className="h-12 min-w-[160px] text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Brain className="h-4 w-4" />
                I'm a Student
              </Button>
            </Link>
            <Link href="/professionals?scroll=pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 min-w-[160px] text-base gap-2 hover:bg-secondary/50"
              >
                <Trophy className="h-4 w-4" />
                For Scouts & Employers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
