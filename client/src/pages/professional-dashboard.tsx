import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Briefcase, 
  MessageSquare,
  Trophy
} from "lucide-react";

const students = [
  {
    id: 1,
    name: "Alex Chen",
    grade: "Grade 11",
    location: "San Francisco, CA",
    strengths: ["Coding", "Problem Solving", "Robotics"],
    badges: ["Hackathon Winner", "Python Expert"],
    avatar: "AC",
    match: 98
  },
  {
    id: 2,
    name: "Sarah Johnson",
    grade: "Grade 12",
    location: "New York, NY",
    strengths: ["Leadership", "Public Speaking", "Economics"],
    badges: ["Debate Captain", "Student Body President"],
    avatar: "SJ",
    match: 92
  },
  {
    id: 3,
    name: "Michael Torres",
    grade: "Grade 10",
    location: "Austin, TX",
    strengths: ["Design", "Creativity", "UX/UI"],
    badges: ["Art Award", "App Designer"],
    avatar: "MT",
    match: 89
  }
];

export default function ProfessionalDashboard() {
  return (
    <DashboardLayout type="professional">
      <div className="flex flex-col gap-6">
        {/* Header Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Talent Pool Access</CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,240</div>
              <p className="text-xs text-muted-foreground">Students matching your criteria</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 Internship, 2 Scholarships</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Direct Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">4 unread messages</p>
            </CardContent>
          </Card>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by skill, strength, or keyword..."
              className="pl-8 bg-background"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Saved Searches
          </Button>
        </div>

        {/* Student List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Top Matched Talent</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
              <Card key={student.id} className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarFallback className="bg-primary/10 text-primary">{student.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <CardTitle className="text-base">{student.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {student.location}
                    </CardDescription>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {student.match}% Match
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {student.strengths.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-accent" />
                      <span>{student.badges[0]}</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="secondary">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
