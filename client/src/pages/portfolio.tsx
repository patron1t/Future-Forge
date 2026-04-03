import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Plus, Edit2, Trash2, ExternalLink, Share2, Eye } from "lucide-react";

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

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("about");
  const [isEditing, setIsEditing] = useState(false);

  // Mock portfolio data
  const [portfolio, setPortfolio] = useState<PortfolioAbout>({
    name: "Alex Johnson",
    headline: "Aspiring Tech Entrepreneur | Grade 11",
    bio: "Passionate about building innovative solutions for social impact. Strong in leadership, STEM, and entrepreneurship.",
    location: "Johannesburg, South Africa",
    website: "www.alexjohnson.tech",
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Community App MVP",
      description: "Built a mobile app to connect students with mentors. Designed UI/UX and led a team of 3.",
      skills: ["Leadership", "App Design", "Project Management"],
      link: "github.com/alexjohnson/community-app",
      date: "2024",
    },
    {
      id: "2",
      title: "School Website Redesign",
      description: "Redesigned school website with improved UX and mobile responsiveness. Increased user engagement by 40%.",
      skills: ["Web Design", "HTML/CSS", "UX Research"],
      link: "schoolwebsite.co.za",
      date: "2023",
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { name: "Leadership", level: "Advanced" },
    { name: "Web Development", level: "Intermediate" },
    { name: "Product Strategy", level: "Advanced" },
    { name: "Team Management", level: "Intermediate" },
    { name: "Entrepreneurship", level: "Expert" },
    { name: "Data Analysis", level: "Beginner" },
  ]);

  const [newProject, setNewProject] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    skills: [],
    date: new Date().getFullYear().toString(),
  });

  const [showAddProject, setShowAddProject] = useState(false);

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project: Project = {
        ...newProject,
        id: Math.random().toString(),
      };
      setProjects([...projects, project]);
      setNewProject({
        title: "",
        description: "",
        skills: [],
        date: new Date().getFullYear().toString(),
      });
      setShowAddProject(false);
    }
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <DashboardLayout type="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <p className="text-muted-foreground">Build your digital presence and showcase your strengths</p>
          </div>
          <div className="flex gap-2">
            <Link href="/portfolio-view">
              <Button variant="outline" className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
            </Link>
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Share2 className="h-4 w-4" />
              Share Portfolio
            </Button>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  About You
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="gap-2"
                  >
                    <Edit2 className="h-4 w-4" />
                    {isEditing ? "Done" : "Edit"}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <Input
                        value={portfolio.name}
                        onChange={(e) =>
                          setPortfolio({ ...portfolio, name: e.target.value })
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Headline</label>
                      <Input
                        value={portfolio.headline}
                        onChange={(e) =>
                          setPortfolio({ ...portfolio, headline: e.target.value })
                        }
                        placeholder="e.g., Aspiring Tech Entrepreneur | Grade 11"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Bio</label>
                      <textarea
                        value={portfolio.bio}
                        onChange={(e) =>
                          setPortfolio({ ...portfolio, bio: e.target.value })
                        }
                        className="w-full p-2 border rounded-lg mt-1 min-h-[100px]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        value={portfolio.location}
                        onChange={(e) =>
                          setPortfolio({ ...portfolio, location: e.target.value })
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Website (Optional)</label>
                      <Input
                        value={portfolio.website || ""}
                        onChange={(e) =>
                          setPortfolio({ ...portfolio, website: e.target.value })
                        }
                        placeholder="www.yourwebsite.com"
                        className="mt-1"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold">{portfolio.name}</h2>
                      <p className="text-primary font-medium">{portfolio.headline}</p>
                    </div>
                    <p className="text-muted-foreground">{portfolio.bio}</p>
                    <div className="text-sm text-muted-foreground">
                      📍 {portfolio.location}
                      {portfolio.website && (
                        <>
                          <br />
                          🌐{" "}
                          <a
                            href={`https://${portfolio.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {portfolio.website}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.date}</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
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
                      className="text-primary hover:underline flex items-center gap-2 text-sm"
                    >
                      View Project <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}

            {showAddProject ? (
              <Card>
                <CardHeader>
                  <CardTitle>Add New Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Project Title</label>
                    <Input
                      value={newProject.title}
                      onChange={(e) =>
                        setNewProject({ ...newProject, title: e.target.value })
                      }
                      placeholder="e.g., Community App MVP"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      value={newProject.description}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          description: e.target.value,
                        })
                      }
                      placeholder="What did you build? What was your role? What impact did it have?"
                      className="w-full p-2 border rounded-lg mt-1 min-h-[100px]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Project Link (Optional)</label>
                    <Input
                      value={newProject.link || ""}
                      onChange={(e) =>
                        setNewProject({ ...newProject, link: e.target.value })
                      }
                      placeholder="github.com/yourproject"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleAddProject}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Add Project
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowAddProject(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Button
                onClick={() => setShowAddProject(true)}
                variant="outline"
                className="w-full gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Project
              </Button>
            )}
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Skills</CardTitle>
                <CardDescription>
                  Skills aligned to your strengths and career paths
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="p-4 rounded-lg border">
                      <div className="font-semibold mb-2">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">{skill.level}</div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
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
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg border">
                  <h3 className="font-semibold">Johannesburg High School</h3>
                  <p className="text-sm text-muted-foreground">Grade 11, 2024</p>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm font-medium">Subjects:</p>
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
                <Button variant="outline" className="w-full gap-2">
                  <Edit2 className="h-4 w-4" />
                  Update Education
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Stats */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{projects.length}</div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{skills.length}</div>
                <p className="text-sm text-muted-foreground">Skills</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">85%</div>
                <p className="text-sm text-muted-foreground">Profile Complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
