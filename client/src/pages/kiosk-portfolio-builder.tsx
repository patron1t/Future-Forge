import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Camera, CheckCircle2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function KioskPortfolioBuilderPage() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    bio: "",
    skills: "",
    dreamCareer: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Try to pre-fill name if available
    const name = localStorage.getItem("student_name");
    if (name) setFormData(prev => ({ ...prev, name }));
    
    setSchoolName(localStorage.getItem('kiosk_location') || "Unknown School");
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else setLocation("/kiosk-dashboard");
  };

  const handleSave = () => {
    // Save to local storage for the dashboard
    if (formData.name) localStorage.setItem("student_name", formData.name);
    
    // Save simple portfolio data
    localStorage.setItem("kiosk_portfolio", JSON.stringify(formData));
    setIsSaved(true);
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" size="lg" onClick={handleBack} className="text-xl h-14 rounded-xl gap-2">
          <ArrowLeft className="h-6 w-6" /> Back
        </Button>
        {!isSaved && (
          <div className="text-xl font-bold text-muted-foreground">
            Step {step} of 3
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full justify-center">
        {!isSaved ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold mb-4 font-heading">Build Your Mini Portfolio</h1>
              <p className="text-2xl text-muted-foreground">
                {step === 1 && "Let's start with the basics"}
                {step === 2 && "Tell us about your skills and goals"}
                {step === 3 && "Review and generate your offline profile"}
              </p>
            </div>

            <div className="bg-muted/30 border-2 rounded-3xl p-10 space-y-8">
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-center mb-8">
                    <div className="h-32 w-32 rounded-full bg-primary/10 border-4 border-primary/20 flex flex-col items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-colors">
                      <Camera className="h-10 w-10 mb-2" />
                      <span className="text-sm font-bold">Add Photo</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xl font-bold">Full Name</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Thabo Ndlovu"
                      className="h-16 text-2xl rounded-xl"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xl font-bold">Grade</label>
                    <div className="grid grid-cols-5 gap-3">
                      {[8, 9, 10, 11, 12].map(g => (
                        <div 
                          key={g}
                          onClick={() => handleChange('grade', `Grade ${g}`)}
                          className={`h-16 rounded-xl flex items-center justify-center text-xl font-bold cursor-pointer border-2 transition-all ${formData.grade === `Grade ${g}` ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:border-primary/50'}`}
                        >
                          {g}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="space-y-3">
                    <label className="text-xl font-bold">A short bio about you</label>
                    <Textarea 
                      value={formData.bio}
                      onChange={(e) => handleChange('bio', e.target.value)}
                      placeholder="e.g. I am a passionate student who loves solving problems and wants to start my own tech company..."
                      className="h-32 text-xl rounded-xl resize-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xl font-bold">Top 3 Skills (comma separated)</label>
                    <Input 
                      value={formData.skills}
                      onChange={(e) => handleChange('skills', e.target.value)}
                      placeholder="e.g. Coding, Public Speaking, Leadership"
                      className="h-16 text-2xl rounded-xl"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xl font-bold">Dream Career Path</label>
                    <Input 
                      value={formData.dreamCareer}
                      onChange={(e) => handleChange('dreamCareer', e.target.value)}
                      placeholder="e.g. Software Engineer"
                      className="h-16 text-2xl rounded-xl"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                  <div className="bg-background rounded-2xl p-6 border-2 border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                    <div className="flex gap-6 items-center mb-6">
                      <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center text-3xl font-bold text-muted-foreground">
                        {formData.name.charAt(0) || "U"}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{formData.name || "Unnamed Student"}</h3>
                        <p className="text-xl text-primary font-semibold">{formData.grade || "Grade Unspecified"}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-bold text-muted-foreground uppercase tracking-wider mb-1">Goal</h4>
                        <p className="text-xl font-medium">{formData.dreamCareer || "Not specified"}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-muted-foreground uppercase tracking-wider mb-1">About</h4>
                        <p className="text-lg">{formData.bio || "No bio provided."}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-muted-foreground uppercase tracking-wider mb-1">Skills</h4>
                        <div className="flex gap-2 flex-wrap mt-2">
                          {(formData.skills || "Add skills later").split(',').map((s, i) => (
                            <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                              {s.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6">
                {step < 3 ? (
                  <Button onClick={handleNext} className="w-full h-16 text-xl font-bold rounded-xl gap-2">
                    Next Step <ArrowRight className="h-6 w-6" />
                  </Button>
                ) : (
                  <Button onClick={handleSave} className="w-full h-16 text-xl font-bold rounded-xl gap-2 bg-green-600 hover:bg-green-700 text-white">
                    Save Mini Portfolio <CheckCircle2 className="h-6 w-6" />
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center space-y-10 animate-in zoom-in-95 duration-500">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100 mb-2">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-5xl font-bold mb-4">Portfolio Saved to Kiosk!</h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                Your profile is now securely saved on this device. Scan to sync it to your personal phone via WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl mx-auto inline-block border-4 border-primary/20 shadow-xl">
              <QRCodeSVG 
                value={`https://wa.me/27796158762?text=Hi%20Career%20Plug%20AI!%20I%20just%20created%20my%20offline%20portfolio${schoolName !== "Unknown School" ? `%20at%20${encodeURIComponent(schoolName)}` : ""}.%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20Please%20sync%20my%20profile!`} 
                size={220}
                level="H"
                includeMargin={false}
                fgColor="#000000"
                bgColor="#ffffff"
              />
              <span className="text-sm font-bold text-primary mt-4 block tracking-widest uppercase">SCAN TO SYNC TO PHONE</span>
            </div>

            <div className="pt-8">
              <Button 
                onClick={() => setLocation("/kiosk-dashboard")}
                size="lg"
                variant="outline"
                className="h-16 px-12 text-xl font-bold rounded-xl"
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
