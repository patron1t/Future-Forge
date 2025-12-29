import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share2, Plus, ExternalLink, Github, Linkedin, Award } from "lucide-react";

export default function DigitalFootprintPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        {/* Profile Header */}
        <div className="relative rounded-xl border bg-card text-card-foreground shadow">
          <div className="h-32 rounded-t-xl bg-gradient-to-r from-primary to-accent opacity-20" />
          <div className="px-6 pb-6">
            <div className="relative -mt-12 flex items-end justify-between">
              <div className="flex items-end gap-4">
                <Avatar className="h-24 w-24 border-4 border-background text-3xl">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="mb-2">
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Aspiring AI Engineer • Grade 11</p>
                </div>
              </div>
              <div className="mb-2 flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" /> Share Profile
                </Button>
                <Button size="sm" className="gap-2 bg-primary text-primary-foreground">
                  <Plus className="h-4 w-4" /> Add Project
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1 text-sm">Python</Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">Machine Learning</Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">Robotics</Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">Public Speaking</Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Main Content: Projects */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-bold">Featured Projects</h2>
            
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Eco-Friendly Smart Home Model</CardTitle>
                    <CardDescription>Science Fair 2024 - Regional Winner</CardDescription>
                  </div>
                  <Badge>Hardware</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Built a miniature smart home using Arduino that optimizes energy consumption based on sunlight and occupancy. Used solar panels and servo motors to track the sun.
                </p>
                <div className="flex gap-4">
                  <div className="aspect-video w-32 rounded bg-muted/50" />
                  <div className="aspect-video w-32 rounded bg-muted/50" />
                </div>
                <div className="mt-4 flex gap-3">
                   <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                     <Github className="h-3 w-3" /> View Code
                   </Button>
                   <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                     <ExternalLink className="h-3 w-3" /> Live Demo
                   </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Community Cleanup App</CardTitle>
                    <CardDescription>Hackathon Project - "Best Social Impact"</CardDescription>
                  </div>
                  <Badge>Mobile App</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Designed the UI/UX for a mobile app that gamifies community service. Connected with local NGOs to verify volunteer hours.
                </p>
                <div className="mt-4 flex gap-3">
                   <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                     <ExternalLink className="h-3 w-3" /> View Design
                   </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar: Credentials */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Verified Badges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Hackathon Winner</div>
                    <div className="text-xs text-muted-foreground">TechNova 2024</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Python Certified</div>
                    <div className="text-xs text-muted-foreground">CodeAcademy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2 h-9">
                  <Linkedin className="h-4 w-4 text-blue-600" /> LinkedIn
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 h-9">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
