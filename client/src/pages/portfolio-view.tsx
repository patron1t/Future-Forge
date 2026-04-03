import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Mail, Share2, Download, ArrowLeft } from "lucide-react";

export default function PortfolioViewPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/portfolio">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Edit
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Hero Section */}
          <Card className="p-12 mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-0">
            <h1 className="text-5xl font-bold mb-2">Alex Johnson</h1>
            <p className="text-2xl text-primary font-semibold mb-4">
              Aspiring Tech Entrepreneur | Grade 11
            </p>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Passionate about building innovative solutions for social impact. Strong in leadership,
              STEM, and entrepreneurship.
            </p>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span>📍 Johannesburg, South Africa</span>
              <a href="#" className="text-primary hover:underline">
                🌐 www.alexjohnson.tech
              </a>
              <a href="#" className="text-primary hover:underline flex items-center gap-1">
                <Mail className="h-4 w-4" />
                alex@email.com
              </a>
            </div>
          </Card>

          {/* Strength Profile */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Strength Profile</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Entrepreneurship", score: 9 },
                { name: "Leadership", score: 8 },
                { name: "STEM", score: 7 },
                { name: "Creativity", score: 8 },
                { name: "Social Impact", score: 8 },
                { name: "Sports", score: 5 },
              ].map((strength) => (
                <div key={strength.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{strength.name}</span>
                    <span className="text-primary font-bold">{strength.score}/10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${(strength.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Projects */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Projects & Achievements</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Community App MVP",
                  description:
                    "Built a mobile app to connect students with mentors. Designed UI/UX and led a team of 3.",
                  skills: ["Leadership", "App Design", "Project Management"],
                  date: "2024",
                },
                {
                  title: "School Website Redesign",
                  description:
                    "Redesigned school website with improved UX and mobile responsiveness. Increased user engagement by 40%.",
                  skills: ["Web Design", "HTML/CSS", "UX Research"],
                  date: "2023",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border-l-4 border-l-primary hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Leadership", level: "Advanced" },
                { name: "Web Development", level: "Intermediate" },
                { name: "Product Strategy", level: "Advanced" },
                { name: "Team Management", level: "Intermediate" },
                { name: "Entrepreneurship", level: "Expert" },
                { name: "Data Analysis", level: "Beginner" },
              ].map((skill) => (
                <div key={skill.name} className="p-3 rounded-lg border">
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">{skill.level}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="border-l-4 border-l-primary pl-4 py-2">
              <h3 className="text-xl font-semibold">Johannesburg High School</h3>
              <p className="text-muted-foreground">Grade 11, 2024</p>
              <div className="mt-3">
                <p className="text-sm font-medium mb-2">Subjects:</p>
                <div className="flex flex-wrap gap-2">
                  {["Mathematics", "Physical Sciences", "Computer Science", "Business Studies"].map(
                    (subject) => (
                      <Badge key={subject} variant="secondary">
                        {subject}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
