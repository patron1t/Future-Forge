import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const subjectCategories = [
  {
    category: "STEM",
    description: "Science, Technology, Engineering & Mathematics",
    subjects: ["Mathematics", "Physical Sciences", "Information Technology", "Life Sciences", "Computer Applications Technology"]
  },
  {
    category: "Commerce",
    description: "Business, Finance & Economics",
    subjects: ["Accounting", "Business Studies", "Economics"]
  },
  {
    category: "Humanities & Arts",
    description: "Social Sciences, Languages & Creative Arts",
    subjects: ["History", "Geography", "Visual Arts", "Dramatic Arts", "Music", "Tourism"]
  }
];

export default function KioskSubjectsPage() {
  const [, setLocation] = useLocation();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      if (selectedSubjects.length < 3) {
        setSelectedSubjects([...selectedSubjects, subject]);
      }
    }
  };

  const handleSave = () => {
    localStorage.setItem("kiosk_subjects", JSON.stringify(selectedSubjects));
    setIsSaved(true);
  };

  if (isSaved) {
    return (
      <div className="w-screen h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-8 animate-in zoom-in-95 duration-500 max-w-2xl">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100 mx-auto">
            <CheckCircle2 className="h-16 w-16 text-green-600" />
          </div>
          
          <div>
            <h2 className="text-5xl font-bold mb-4">Subjects Saved!</h2>
            <p className="text-2xl text-muted-foreground">
              Your subject choices have been saved to your kiosk profile. These will help us match you with the right careers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {selectedSubjects.map(s => (
              <Badge key={s} className="text-xl py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 font-semibold border-0">
                {s}
              </Badge>
            ))}
          </div>

          <div className="pt-12">
            <Button 
              onClick={() => setLocation("/kiosk-dashboard")}
              size="lg"
              className="h-16 px-12 text-xl font-bold rounded-xl"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-background flex flex-col p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" size="lg" onClick={() => setLocation("/kiosk-dashboard")} className="text-xl h-14 rounded-xl gap-2">
          <ArrowLeft className="h-6 w-6" /> Back
        </Button>
        <div className="text-xl font-bold text-muted-foreground flex items-center gap-2">
          <span className={selectedSubjects.length === 3 ? "text-green-600" : ""}>
            {selectedSubjects.length} / 3 Selected
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full overflow-hidden">
        <div className="text-center mb-8 shrink-0">
          <h1 className="text-5xl font-bold mb-4 font-heading">Subject Selector</h1>
          <p className="text-2xl text-muted-foreground">
            Choose exactly 3 elective subjects you're interested in for Grade 10-12
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 space-y-8 pb-32">
          {subjectCategories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" /> {cat.category}
                </h3>
                <p className="text-muted-foreground text-lg">{cat.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.subjects.map(subject => {
                  const isSelected = selectedSubjects.includes(subject);
                  const isDisabled = !isSelected && selectedSubjects.length >= 3;
                  
                  return (
                    <div 
                      key={subject}
                      onClick={() => !isDisabled && toggleSubject(subject)}
                      className={`
                        p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200
                        ${isSelected ? 'bg-primary border-primary text-primary-foreground shadow-md scale-[1.02]' : 
                          isDisabled ? 'bg-muted/50 border-muted opacity-50 cursor-not-allowed' : 
                          'bg-background border-muted hover:border-primary/40 hover:bg-primary/5'}
                      `}
                    >
                      <div className="flex justify-between items-center h-full">
                        <span className="text-xl font-semibold leading-tight">{subject}</span>
                        {isSelected && <CheckCircle2 className="h-6 w-6 shrink-0" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-end pointer-events-auto">
          {selectedSubjects.length === 3 ? (
            <Button 
              onClick={handleSave} 
              className="h-20 px-12 text-2xl font-bold rounded-2xl shadow-xl animate-in slide-in-from-bottom-10"
            >
              Save Subject Choices
            </Button>
          ) : (
            <div className="h-20 px-8 flex items-center gap-3 bg-muted/80 backdrop-blur-md rounded-2xl text-xl font-medium text-muted-foreground">
              <AlertCircle className="h-6 w-6" />
              Select {3 - selectedSubjects.length} more subject{3 - selectedSubjects.length !== 1 ? 's' : ''} to continue
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
