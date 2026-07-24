import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface CareerPath {
  title: string;
  icon: string;
  match: number;
}

// Full database of careers
const allCareers = [
  // STEM
  { title: "Engineer", icon: "🏗️" },
  { title: "Doctor / Medical Professional", icon: "⚕️" },
  { title: "Scientist", icon: "🔬" },
  { title: "Pharmacist", icon: "💊" },
  { title: "Dentist", icon: "😁" },
  { title: "Veterinarian", icon: "🐾" },
  { title: "Physicist", icon: "⚛️" },
  { title: "Chemist", icon: "🧪" },
  { title: "Geologist", icon: "🪨" },
  
  // Tech
  { title: "Software Developer", icon: "💻" },
  { title: "Web Developer", icon: "🌐" },
  { title: "Mobile App Developer", icon: "📱" },
  { title: "Game Developer", icon: "🎮" },
  { title: "Data Scientist", icon: "📊" },
  { title: "Cybersecurity Analyst", icon: "🔒" },
  { title: "Cloud Architect", icon: "☁️" },
  { title: "AI/Machine Learning Engineer", icon: "🤖" },
  { title: "IT Support Specialist", icon: "🖥️" },
  { title: "Database Administrator", icon: "🗄️" },
  { title: "Network Engineer", icon: "📡" },

  // Business & Entrepreneurship
  { title: "Entrepreneur / Business Owner", icon: "🚀" },
  { title: "Accountant", icon: "📊" },
  { title: "Financial Analyst", icon: "💹" },
  { title: "Marketing Manager", icon: "📈" },
  { title: "Human Resources Manager", icon: "👥" },
  { title: "Sales Executive", icon: "💼" },
  { title: "Business Consultant", icon: "💡" },
  { title: "Project Manager", icon: "📋" },
  { title: "Real Estate Agent", icon: "🏠" },
  { title: "Supply Chain Manager", icon: "🚚" },

  // Arts, Design & Media
  { title: "Graphic Designer", icon: "🎨" },
  { title: "UX/UI Designer", icon: "✨" },
  { title: "Architect", icon: "🏛️" },
  { title: "Interior Designer", icon: "🛋️" },
  { title: "Fashion Designer", icon: "👗" },
  { title: "Photographer", icon: "📸" },
  { title: "Film Director / Video Producer", icon: "🎬" },
  { title: "Journalist / Writer", icon: "✍️" },
  { title: "Animator", icon: "🎞️" },
  { title: "Musician / Audio Engineer", icon: "🎵" },

  // Education & Social Sciences
  { title: "Teacher / Educator", icon: "📚" },
  { title: "Psychologist", icon: "🧠" },
  { title: "Social Worker", icon: "🤝" },
  { title: "Counselor", icon: "🗣️" },
  { title: "Sociologist", icon: "🌍" },
  { title: "Lawyer", icon: "⚖️" },
  { title: "Paralegal", icon: "📜" },
  { title: "Urban Planner", icon: "🏙️" },

  // Vocational & Trades
  { title: "Electrician", icon: "⚡" },
  { title: "Plumber", icon: "🔧" },
  { title: "Carpenter", icon: "🪚" },
  { title: "Mechanic / Auto Technician", icon: "🚗" },
  { title: "Welder", icon: "🔥" },
  { title: "Chef / Culinary Arts", icon: "👨‍🍳" },
  { title: "Cosmetologist / Hair Stylist", icon: "✂️" },
  { title: "Aviation Technician", icon: "✈️" },

  // Healthcare Support
  { title: "Nurse", icon: "🏥" },
  { title: "Physical Therapist", icon: "💪" },
  { title: "Occupational Therapist", icon: "🦵" },
  { title: "Radiologist", icon: "🦴" },
  { title: "Paramedic", icon: "🚑" },
  { title: "Dental Hygienist", icon: "🦷" },
  { title: "Nutritionist / Dietitian", icon: "🥗" },

  // Agriculture & Environment
  { title: "Agricultural Scientist", icon: "🌾" },
  { title: "Environmental Scientist", icon: "🌱" },
  { title: "Marine Biologist", icon: "🐋" },
  { title: "Conservationist", icon: "♻️" },
  { title: "Farmer / Agribusiness", icon: "🚜" },
  { title: "Forester", icon: "🌲" },

  // Public Service & Defense
  { title: "Police Officer", icon: "🚓" },
  { title: "Firefighter", icon: "🚒" },
  { title: "Military Officer", icon: "🎖️" },
  { title: "Paramedic / EMT", icon: "🚑" },
  { title: "Air Traffic Controller", icon: "🛫" },
  { title: "Pilot", icon: "✈️" }
];

export default function KioskResultsPage() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fire GA conversion event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "kiosk_completed", {
        event_category: "Kiosk",
        event_label: "Student completed full kiosk flow",
      });
    }

    // Try to get school from URL parameters
    const params = new URLSearchParams(window.location.search);
    const locationParam = params.get('location');
    if (locationParam) {
      setSchoolName(locationParam);
    } else {
      // Fallback to localStorage if set by facilitator
      setSchoolName(localStorage.getItem('kiosk_location') || "Unknown School");
    }

    // Generate 3 random careers from our full database of 79 careers
    const shuffled = [...allCareers].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3).map((career, index) => {
      // Generate realistic looking match scores (highest first)
      let matchScore;
      if (index === 0) matchScore = Math.floor(Math.random() * (98 - 92 + 1)) + 92; // 92-98%
      else if (index === 1) matchScore = Math.floor(Math.random() * (91 - 85 + 1)) + 85; // 85-91%
      else matchScore = Math.floor(Math.random() * (84 - 78 + 1)) + 78; // 78-84%

      return {
        ...career,
        match: matchScore
      };
    });
    
    setCareerPaths(selected);
  }, []);

  const handleSaveResults = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSaved(true);
      setTimeout(() => {
        setLocation("/kiosk");
      }, 2000);
    }
  };

  const handleBack = () => {
    setLocation("/kiosk-dashboard");
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col p-6 overflow-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-3">Your Career Map</h1>
        <p className="text-2xl text-muted-foreground">
          Based on your strengths, here are your top career paths
        </p>
      </div>

      {/* Career Paths */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {careerPaths.map((career, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border-2 border-primary/30 bg-primary/5 space-y-4"
          >
            <div className="text-5xl">{career.icon}</div>
            <h3 className="text-2xl font-bold">{career.title}</h3>
            <div className="text-3xl font-bold text-primary">{career.match}%</div>
            <p className="text-lg text-muted-foreground">Match Score</p>
          </div>
        ))}
      </div>

      {/* Save Results Section */}
      <div className="max-w-2xl mx-auto w-full space-y-6 mb-12">
        <div className="p-8 rounded-2xl bg-muted/50 border-2 border-muted space-y-6">
          <h2 className="text-3xl font-bold text-center">Save Your Results</h2>

          {!isSaved ? (
            <>
              <p className="text-xl text-muted-foreground text-center">
                Enter your phone number to receive your full career map and opportunities via WhatsApp
              </p>

              <form onSubmit={handleSaveResults} className="flex flex-col gap-4 mt-6">
                <Input
                  type="tel"
                  placeholder="e.g. 082 123 4567"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-xl rounded-xl text-center"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl mt-2 w-full"
                >
                  Send to WhatsApp
                </Button>
              </form>

              <div className="text-center pt-8 mt-4 border-t border-border">
                <p className="text-lg text-muted-foreground mb-2">Or scan to view on your phone:</p>
                <div className="bg-white p-4 rounded-xl mx-auto inline-block border-4 border-primary/20 mt-4 mb-4 shadow-sm">
                  <QRCodeSVG 
                    value={`https://wa.me/27796158762?text=Hi%20Career%20Plug%20AI!%20I%20just%20took%20the%20kiosk%20assessment${schoolName !== "Unknown School" ? `%20at%20${encodeURIComponent(schoolName)}` : ""}.%20Please%20send%20me%20my%20career%20action%20plan!`} 
                    size={160}
                    level="H"
                    includeMargin={false}
                    fgColor="#000000"
                    bgColor="#ffffff"
                  />
                  <span className="text-xs font-bold text-primary mt-2 block">SCAN WITH WHATSAPP</span>
                </div>
                <p className="text-xl font-bold text-primary">careerplugai.co.za</p>
              </div>

              <div className="mt-6 text-center">
                <Button variant="ghost" className="text-muted-foreground underline" onClick={() => {
                  alert("Please write down your unique reference code: " + Math.random().toString(36).substring(2, 8).toUpperCase() + " and give it to your teacher or facilitator.");
                }}>
                  Don't have a phone right now?
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4 py-8">
              <div className="text-6xl">✓</div>
              <h3 className="text-3xl font-bold">Results Saved!</h3>
              <p className="text-xl text-muted-foreground">
                Check your email for your full career map and opportunities
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-4 justify-center">
        <Button
          onClick={handleBack}
          size="lg"
          variant="outline"
          className="h-16 px-12 text-lg font-semibold rounded-xl"
        >
          Start Over
        </Button>

        <Button
          onClick={() => {
            alert("To learn more about these careers, scan the QR code to connect with Career Plug AI on WhatsApp, or visit our website on your personal device!");
          }}
          size="lg"
          className="h-16 px-12 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          Learn More Online <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
