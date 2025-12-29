import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";

export default function AuthPage() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const defaultTab = searchParams.get("signup") ? "signup" : "login";
  
  const [role, setRole] = useState<"student" | "professional" | "counselor">("student");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "student") {
      setLocation("/student-dashboard");
    } else if (role === "counselor") {
      setLocation("/counselor-dashboard");
    } else {
      setLocation("/professional-dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20 px-4 py-12">
      <Link href="/">
        <a className="absolute left-4 top-4 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary md:left-8 md:top-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </a>
      </Link>

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <img src={logo} alt="Logo" className="mx-auto mb-4 h-16 w-auto" />
          <h1 className="font-heading text-2xl font-bold tracking-tight">Welcome to Career Plug AI</h1>
          <p className="text-muted-foreground">Your future starts here.</p>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account.</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Sign In</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Join the platform to unlock your potential.</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                     <button
                        type="button" 
                        onClick={() => setRole("student")}
                        className={`rounded-lg border p-4 text-center transition-all ${
                          role === "student" ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:bg-muted"
                        }`}
                     >
                       <div className="font-semibold text-sm">Student</div>
                       <div className="text-xs text-muted-foreground">Grade 8-12</div>
                     </button>
                     <button
                        type="button" 
                        onClick={() => setRole("professional")}
                        className={`rounded-lg border p-4 text-center transition-all ${
                          role === "professional" ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:bg-muted"
                        }`}
                     >
                       <div className="font-semibold text-sm">Scout / Employer</div>
                       <div className="text-xs text-muted-foreground">Paid Access</div>
                     </button>
                     <button
                        type="button" 
                        onClick={() => setRole("counselor")}
                        className={`rounded-lg border p-4 text-center transition-all ${
                          role === "counselor" ? "border-accent bg-accent/5 ring-1 ring-accent" : "hover:bg-muted"
                        }`}
                     >
                       <div className="font-semibold text-sm">Counselor</div>
                       <div className="text-xs text-muted-foreground">Free Access</div>
                     </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-signup">Email</Label>
                    <Input id="email-signup" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-signup">Password</Label>
                    <Input id="password-signup" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Create Account</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
