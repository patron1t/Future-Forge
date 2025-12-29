import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smile, Frown, Meh, Heart, Phone, Calendar, Video } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function WellnessPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Wellness Hub</h1>
          <p className="text-muted-foreground">
            Success starts with a healthy mind. Check in with yourself and access support.
          </p>
        </div>

        {/* Daily Check-in */}
        <Card>
          <CardHeader>
            <CardTitle>How are you feeling today?</CardTitle>
            <CardDescription>Track your mood to see patterns over time.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {[
                { icon: Smile, label: "Great", color: "text-green-500 bg-green-50 hover:bg-green-100" },
                { icon: Smile, label: "Good", color: "text-blue-500 bg-blue-50 hover:bg-blue-100" },
                { icon: Meh, label: "Okay", color: "text-yellow-500 bg-yellow-50 hover:bg-yellow-100" },
                { icon: Frown, label: "Struggling", color: "text-orange-500 bg-orange-50 hover:bg-orange-100" },
                { icon: Frown, label: "Bad", color: "text-red-500 bg-red-50 hover:bg-red-100" },
              ].map((mood, i) => (
                <button 
                  key={i}
                  className={`flex flex-col items-center justify-center gap-2 rounded-xl p-4 transition-all ${mood.color} dark:bg-opacity-10 dark:hover:bg-opacity-20`}
                >
                  <mood.icon className="h-8 w-8" />
                  <span className="text-sm font-medium">{mood.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium mb-2 block">Journal (Optional)</label>
              <Textarea placeholder="What's on your mind? This is private to you." className="min-h-[100px]" />
              <Button className="mt-4" size="sm">Save Check-in</Button>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Connect with a Counselor
              </CardTitle>
              <CardDescription>Private, confidential support from school counselors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2 bg-background">
                <Calendar className="h-4 w-4" />
                Schedule In-Person
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 bg-background">
                <Video className="h-4 w-4" />
                Start Video Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-rose-50 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-700 dark:text-rose-400">
                <Phone className="h-5 w-5" />
                Immediate Help
              </CardTitle>
              <CardDescription className="text-rose-600/80 dark:text-rose-400/80">
                If you're in crisis, help is available 24/7.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-background p-3 text-center font-bold text-lg border mb-2">
                988
              </div>
              <p className="text-xs text-center text-muted-foreground">Suicide & Crisis Lifeline</p>
            </CardContent>
          </Card>
        </div>

        {/* Mindfulness */}
        <div className="space-y-4">
           <h3 className="font-semibold text-lg">Quick Resets</h3>
           <div className="grid gap-4 sm:grid-cols-3">
              {["5-min Meditation", "Focus Breathing", "Anxiety Relief"].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg bg-accent/10 p-4 hover:bg-accent/20 cursor-pointer transition-colors">
                  <div className="font-medium text-accent-foreground">{item}</div>
                  <div className="text-xs text-muted-foreground">Audio • 5m</div>
                  <div className="absolute right-2 bottom-2 h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    ▶
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
