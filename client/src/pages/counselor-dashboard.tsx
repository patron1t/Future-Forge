import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, Heart, TrendingUp, Users, MessageSquare, CheckCircle } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Emma Rodriguez",
    grade: "Grade 9",
    status: "At Risk",
    careerClarity: 45,
    wellness: "Needs Support",
    avatar: "ER",
    color: "text-orange-600"
  },
  {
    id: 2,
    name: "James Park",
    grade: "Grade 11",
    status: "On Track",
    careerClarity: 82,
    wellness: "Good",
    avatar: "JP",
    color: "text-green-600"
  },
  {
    id: 3,
    name: "Sophie Chen",
    grade: "Grade 10",
    status: "Thriving",
    careerClarity: 89,
    wellness: "Excellent",
    avatar: "SC",
    color: "text-blue-600"
  },
];

export default function CounselorDashboard() {
  return (
    <DashboardLayout type="professional">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Your Students</h1>
          <p className="text-muted-foreground">
            Monitor career progress and wellness. Support your students' holistic development.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">In your caseload</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wellness Alerts</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-xs text-muted-foreground">Need support</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">On Track</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">18</div>
              <p className="text-xs text-muted-foreground">Making progress</p>
            </CardContent>
          </Card>
        </div>

        {/* Student List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Student Monitoring</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {students.map((student) => (
              <Card key={student.id} className="border-l-4 border-l-primary overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
                  <Avatar className="h-10 w-10 border-2 border-background">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">{student.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-base">{student.name}</CardTitle>
                    <CardDescription className="text-xs">{student.grade}</CardDescription>
                  </div>
                  <Badge 
                    variant="outline"
                    className={`text-xs ${
                      student.status === "Thriving" ? "border-green-500/50 bg-green-50/50 text-green-700 dark:bg-green-950/20" :
                      student.status === "On Track" ? "border-blue-500/50 bg-blue-50/50 text-blue-700 dark:bg-blue-950/20" :
                      "border-orange-500/50 bg-orange-50/50 text-orange-700 dark:bg-orange-950/20"
                    }`}
                  >
                    {student.status}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium">Career Clarity</span>
                      <span className="text-xs font-bold">{student.careerClarity}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${student.careerClarity}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="text-xs text-muted-foreground">Wellness</div>
                    <span className={`text-xs font-semibold ${
                      student.wellness === "Excellent" ? "text-green-600" :
                      student.wellness === "Good" ? "text-blue-600" :
                      "text-orange-600"
                    }`}>
                      {student.wellness}
                    </span>
                  </div>

                  <Button variant="secondary" size="sm" className="w-full h-8 gap-1 text-xs">
                    <MessageSquare className="h-3 w-3" /> Check In
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Counselor Resources
            </CardTitle>
            <CardDescription>Support tools and training for your role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Button variant="outline" className="justify-start h-10">
                Mental Health Guidelines
              </Button>
              <Button variant="outline" className="justify-start h-10">
                Career Assessment Tools
              </Button>
              <Button variant="outline" className="justify-start h-10">
                Crisis Resources
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
