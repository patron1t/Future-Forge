import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Phone, Lock, ArrowRight, UserCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function KioskAuthPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (pin.length < 4) {
      toast({
        variant: "destructive",
        title: "Invalid PIN",
        description: "Please enter a 4-digit PIN."
      });
      return;
    }

    if (isLogin) {
      // Mock login - in a real app this would verify with backend
      // For the prototype, we just pretend they logged in successfully
      // unless they left it completely blank
      if (phoneNumber && pin) {
        // Recover mock name if we have one, otherwise generic
        const storedName = localStorage.getItem("student_name") || "Learner";
        toast({
          title: "Welcome back!",
          description: "Successfully logged in."
        });
        setLocation("/kiosk-dashboard");
      }
    } else {
      // Mock signup
      if (phoneNumber && pin && name) {
        localStorage.setItem("student_name", name);
        localStorage.setItem("kiosk_phone", phoneNumber);
        toast({
          title: "Account Created!",
          description: "Your profile is now secured with your PIN."
        });
        setLocation("/kiosk-dashboard");
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <Button variant="ghost" size="lg" onClick={() => setLocation("/kiosk")} className="text-xl h-14 rounded-xl gap-2">
          <ArrowLeft className="h-6 w-6" /> Back to Welcome
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full justify-center">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
            <UserCircle className="h-14 w-14 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-3 font-heading">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isLogin ? "Enter your phone number and PIN to resume" : "Secure your profile so you can return later"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-muted/30 border-2 rounded-3xl p-8 space-y-6">
          {!isLogin && (
            <div className="space-y-3">
              <label className="text-lg font-bold">First Name</label>
              <Input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Thabo"
                className="h-16 text-xl rounded-xl"
                required={!isLogin}
              />
            </div>
          )}

          <div className="space-y-3">
            <label className="text-lg font-bold">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-5 h-6 w-6 text-muted-foreground" />
              <Input 
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="082 123 4567"
                className="h-16 text-xl rounded-xl pl-14"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-lg font-bold">4-Digit PIN</label>
            <div className="relative">
              <Lock className="absolute left-4 top-5 h-6 w-6 text-muted-foreground" />
              <Input 
                type="password"
                inputMode="numeric"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="****"
                className="h-16 text-3xl rounded-xl pl-14 tracking-[0.5em]"
                required
              />
            </div>
            {!isLogin && <p className="text-sm text-muted-foreground">Choose a PIN you won't forget.</p>}
          </div>

          <Button type="submit" className="w-full h-16 text-xl font-bold rounded-xl gap-2 mt-4">
            {isLogin ? "Log In" : "Create Account"} <ArrowRight className="h-6 w-6" />
          </Button>

          <div className="text-center pt-4">
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-lg text-primary font-bold hover:underline"
            >
              {isLogin ? "Need to create an account?" : "Already have an account? Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
