import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Trophy, Rocket, Users, Puzzle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Strength Mapping",
    description: "Our AI doesn't just ask what you like—it analyzes your cognitive strengths to find where you'll excel.",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    icon: Trophy,
    title: "Beyond Traditional Paths",
    description: "Guidance for sports, innovation hubs, hackathons, and entrepreneurship—not just standard jobs.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/20"
  },
  {
    icon: Rocket,
    title: "Future-Proof Skills",
    description: "We prepare you for tomorrow's economy, focusing on IT, STEM, and creative problem solving.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    icon: Puzzle,
    title: "Inclusive Design",
    description: "Tailored support for students with diverse needs, including specific guidance for autism and learning differences.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    icon: TrendingUp,
    title: "Digital Footprint Curator",
    description: "Build a professional online presence early. Showcase your projects, badges, and achievements.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/20"
  },
  {
    icon: Users,
    title: "Connect with Pros",
    description: "Direct links to scouts, counselors, and employers looking for talent just like you.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/20"
  }
];

export function Features() {
  return (
    <section className="container px-4 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          More Than Just Career Advice
        </h2>
        <p className="mt-4 text-muted-foreground">
          A comprehensive ecosystem designed to launch your success story.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg}`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
