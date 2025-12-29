import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";
import { Brain, Trophy, Activity, Target, ArrowRight, Zap } from "lucide-react";

const strengthData = [
  { subject: 'Analytical', A: 120, fullMark: 150 },
  { subject: 'Creative', A: 98, fullMark: 150 },
  { subject: 'Social', A: 86, fullMark: 150 },
  { subject: 'Technical', A: 99, fullMark: 150 },
  { subject: 'Leadership', A: 85, fullMark: 150 },
  { subject: 'Athletic', A: 65, fullMark: 150 },
];

const careerMatches = [
  { 
    title: "AI Ethics Specialist", 
    match: 94, 
    type: "Tech & Innovation",
    color: "bg-purple-500",
    description: "Combine your analytical skills with social awareness to guide ethical AI development."
  },
  { 
    title: "Data Journalist", 
    match: 88, 
    type: "Media & Tech",
    color: "bg-blue-500",
    description: "Use data storytelling to report on complex global issues."
  },
  { 
    title: "Fintech Entrepreneur", 
    match: 82, 
    type: "Business",
    color: "bg-emerald-500",
    description: "Build financial solutions using your technical background."
  },
];

export default function StudentDashboard() {
  return (
    <DashboardLayout type="student">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Stats Cards */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Career Clarity</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
            <Progress value={78} className="mt-3 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Digital Badges</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 new earned this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mental Wellness</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">Great</div>
            <p className="text-xs text-muted-foreground">Keep up the balance!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scout Views</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">2 Universities, 3 Employers</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Strength Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>AI Strength Analysis</CardTitle>
            <CardDescription>Based on your recent assessments and project performance.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={strengthData}>
                <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Mike"
                  dataKey="A"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              Top AI Recommendations
            </CardTitle>
            <CardDescription>Paths tailored to your "Analytical" strength.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {careerMatches.map((career, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border p-4 transition-all hover:bg-muted/50 hover:shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{career.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">{career.match}% Match</Badge>
                </div>
                <p className="mb-3 text-xs text-muted-foreground">{career.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">{career.type}</span>
                  <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                    Explore Path <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
      {/* Daily Challenge / Hackathon Feed */}
      <div className="mt-6">
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Upcoming Opportunities</CardTitle>
            <CardDescription>Hackathons, workshops, and sports tryouts near you.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg border bg-background p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                     <Badge variant="outline">Hackathon</Badge>
                     <span className="text-xs text-muted-foreground">In 3 days</span>
                  </div>
                  <h4 className="mb-1 font-semibold">Global Innovation Challenge</h4>
                  <p className="text-xs text-muted-foreground">Build a solution for climate change using AI.</p>
                  <Button className="mt-4 w-full" variant="secondary" size="sm">Register</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
