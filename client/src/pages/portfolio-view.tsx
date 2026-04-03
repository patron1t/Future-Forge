import { useMemo, useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Mail, Share2, Download, ArrowLeft, Check, Briefcase } from "lucide-react";
// @ts-ignore
import html2pdf from "html2pdf.js";

interface PortfolioAbout {
  name: string;
  headline: string;
  bio: string;
  location: string;
  website?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
  date: string;
}

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export default function PortfolioViewPage() {
  const [shareClicked, setShareClicked] = useState(false);
  const [downloadClicked, setDownloadClicked] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  // Get portfolio data from localStorage
  const portfolioData = useMemo(() => {
    const aboutJson = localStorage.getItem("portfolio_about");
    const projectsJson = localStorage.getItem("portfolio_projects");
    const skillsJson = localStorage.getItem("portfolio_skills");
    const scoresJson = localStorage.getItem("assessmentScores");
    const subjectsJson = localStorage.getItem("onboarding_subjects");

    const about: PortfolioAbout = aboutJson
      ? JSON.parse(aboutJson)
      : { name: "Student", headline: "", bio: "", location: "South Africa" };

    const projects: Project[] = projectsJson ? JSON.parse(projectsJson) : [];
    const skills: Skill[] = skillsJson ? JSON.parse(skillsJson) : [];
    const scores = scoresJson ? JSON.parse(scoresJson) : {};
    const subjects = subjectsJson ? JSON.parse(subjectsJson) : [];

    const strengths = Object.entries(scores)
      .map(([name, score]) => ({
        name,
        score: (score as number) || 5,
      }))
      .sort((a, b) => b.score - a.score);

    return { about, projects, skills, strengths, subjects };
  }, []);

  const { about, projects, skills, strengths, subjects } = portfolioData;

  const handleShare = async () => {
    try {
      const shareUrl = `${window.location.protocol}//${window.location.host}/portfolio-view`;
      
      // Fallback to clipboard first because navigator.share fails in some embedded browsers
      await navigator.clipboard.writeText(shareUrl);
      setShareClicked(true);
      setTimeout(() => setShareClicked(false), 2000);
      
      // Still try to open native share if available
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${about.name}'s Portfolio | Career Plug AI`,
            text: `Check out my portfolio and career profile on Career Plug AI!`,
            url: shareUrl,
          });
        } catch (e) {
          console.log("Native share aborted or failed:", e);
        }
      }
    } catch (err) {
      console.error("Error sharing:", err);
      // Ultimate fallback
      const fallbackUrl = `${window.location.protocol}//${window.location.host}/portfolio-view`;
      prompt("Copy your portfolio link:", fallbackUrl);
    }
  };

  const handleDownloadPDF = () => {
    if (!pdfRef.current) return;
    
    setDownloadClicked(true);
    
    const element = pdfRef.current;
    
    // Configure PDF options
    const opt = {
      margin: [10, 10, 10, 10], // top, left, bottom, right
      filename: `${about.name.replace(/\s+/g, "_")}_Portfolio.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
      setTimeout(() => setDownloadClicked(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto" ref={pdfRef}>
          {/* Header Navigation - Hidden in PDF */}
          <div className="flex items-center justify-between mb-8 html2pdf__ignore">
            <Link href="/portfolio">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Edit
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={handleShare}
              >
                {shareClicked ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    Share
                  </>
                )}
              </Button>
              <Button 
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleDownloadPDF}
              >
                {downloadClicked ? (
                  <>
                    <Check className="h-4 w-4" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Career Plug AI Logo for PDF */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-primary/10 text-primary px-6 py-3 rounded-xl inline-flex items-center gap-3">
              <Briefcase className="h-8 w-8" />
              <div>
                <h2 className="text-2xl font-bold tracking-tight leading-none">Career Plug AI</h2>
                <p className="text-xs font-medium uppercase tracking-wider text-primary/80">Student Portfolio</p>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <Card className="p-12 mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-0">
            <h1 className="text-5xl font-bold mb-2">{about.name}</h1>
            <p className="text-2xl text-primary font-semibold mb-4">{about.headline}</p>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">{about.bio}</p>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span>📍 {about.location}</span>
              {about.website && (
                <a href={`https://${about.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  🌐 {about.website}
                </a>
              )}
            </div>
          </Card>

          {/* Strength Profile */}
          {strengths.length > 0 && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Strength Profile</h2>
              <div className="grid grid-cols-2 gap-6">
                {strengths.map((strength) => (
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
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Projects & Achievements</h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
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
                    {project.link && (
                      <a
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm mt-2 inline-block"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-lg border">
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-sm text-muted-foreground">{skill.level}</div>
                    <div className="w-full bg-muted rounded-full h-1 mt-2">
                      <div
                        className={`h-full rounded-full ${
                          skill.level === "Expert"
                            ? "bg-primary w-full"
                            : skill.level === "Advanced"
                            ? "bg-primary w-3/4"
                            : skill.level === "Intermediate"
                            ? "bg-primary w-1/2"
                            : "bg-primary w-1/4"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Education */}
          {subjects.length > 0 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="border-l-4 border-l-primary pl-4 py-2">
                <h3 className="text-xl font-semibold">South Africa Student</h3>
                <p className="text-muted-foreground">{localStorage.getItem("onboarding_grade") || "Grade 11"}, 2024</p>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-2">Subjects:</p>
                  <div className="flex flex-wrap gap-2">
                    {subjects.length > 0 ? (
                      subjects.map((subject: string) => (
                        <Badge key={subject} variant="secondary">
                          {subject}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No subjects added yet</p>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Empty State */}
          {about.name === "Student" && projects.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">Your portfolio is still empty!</p>
              <Link href="/portfolio">
                <Button>Start Building Your Portfolio</Button>
              </Link>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
