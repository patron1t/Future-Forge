import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, MapPin, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function KioskSetupPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [schoolName, setSchoolName] = useState("");
  const [facilitatorName, setFacilitatorName] = useState("");

  useEffect(() => {
    // Load existing if set
    const existing = localStorage.getItem("kiosk_location");
    if (existing) setSchoolName(existing);
    
    const existingFacil = localStorage.getItem("kiosk_facilitator");
    if (existingFacil) setFacilitatorName(existingFacil);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolName.trim()) return;

    localStorage.setItem("kiosk_location", schoolName);
    if (facilitatorName) {
      localStorage.setItem("kiosk_facilitator", facilitatorName);
    }
    
    toast({
      title: "Kiosk Locked & Ready",
      description: `Location set to ${schoolName}. Students will not see this screen.`,
    });

    // Navigate to the welcome screen for students
    setLocation("/kiosk");
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-background rounded-xl shadow-lg border p-8 space-y-6">
        <div className="flex items-center gap-3 text-primary mb-2">
          <Settings className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Facilitator Setup</h1>
        </div>
        
        <p className="text-muted-foreground text-sm">
          Lock in the details for this session before handing the device to learners.
          This ensures all assessments are tracked to the correct school or community hub.
        </p>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location">School or Hub Name (Required)</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="location"
                placeholder="e.g. Johannesburg High School"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="pl-9 h-12"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="facilitator">Facilitator Name (Optional)</Label>
            <Input 
              id="facilitator"
              placeholder="e.g. Mr. Smith"
              value={facilitatorName}
              onChange={(e) => setFacilitatorName(e.target.value)}
              className="h-12"
            />
          </div>

          <Button type="submit" className="w-full h-12 gap-2" size="lg">
            Lock Kiosk & Start Session <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
