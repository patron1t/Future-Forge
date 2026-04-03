import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "wouter";
import { ArrowRight, Clock, DollarSign, BookOpen, Users, Zap, Home } from "lucide-react";

interface CareerPathway {
  id: string;
  title: string;
  description: string;
  icon: string;
  strength: "STEM" | "Entrepreneurship" | "Leadership" | "Creativity" | "Sports" | "Social Impact";
  duration: string;
  cost: "Affordable" | "Moderate" | "Expensive";
  entryLevel: "Grade 8" | "Grade 10" | "Grade 11" | "Grade 12";
  requiredSubjects: string[];
  skills: string[];
  opportunities: number;
  organization?: string;
  pathway: "Traditional" | "Certification" | "Alternative";
}

const careerPathways: CareerPathway[] = [
  // STEM - Traditional (Science & Health)
  {
    id: "engineer",
    title: "Engineer",
    description: "Design and build infrastructure, systems, and products.",
    icon: "🏗️",
    strength: "STEM",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Mathematics", "Physical Sciences"],
    skills: ["Technical Design", "Problem Solving", "Mathematics"],
    opportunities: 45,
    pathway: "Traditional",
  },
  {
    id: "doctor",
    title: "Doctor / Medical Professional",
    description: "Provide healthcare and treatment to patients.",
    icon: "⚕️",
    strength: "STEM",
    duration: "5-6 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences", "Mathematics"],
    skills: ["Medical Knowledge", "Empathy", "Problem Solving"],
    opportunities: 30,
    pathway: "Traditional",
  },
  {
    id: "scientist",
    title: "Scientist (Research)",
    description: "Conduct research to advance knowledge in science.",
    icon: "🔬",
    strength: "STEM",
    duration: "4+ years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Physical Sciences", "Mathematics"],
    skills: ["Research", "Data Analysis", "Scientific Method"],
    opportunities: 20,
    pathway: "Traditional",
  },
  {
    id: "pharmacist",
    title: "Pharmacist",
    description: "Dispense medications and provide pharmaceutical advice.",
    icon: "💊",
    strength: "STEM",
    duration: "4-5 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Pharmaceutical Knowledge", "Patient Care", "Chemistry"],
    opportunities: 25,
    pathway: "Traditional",
  },
  {
    id: "dentist",
    title: "Dentist",
    description: "Provide dental care and oral health services.",
    icon: "😁",
    strength: "STEM",
    duration: "4-5 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Dental Medicine", "Patient Care", "Precision"],
    opportunities: 22,
    pathway: "Traditional",
  },
  {
    id: "veterinarian",
    title: "Veterinarian",
    description: "Provide medical care to animals.",
    icon: "🐾",
    strength: "STEM",
    duration: "5-6 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Animal Medicine", "Diagnostics", "Research"],
    opportunities: 20,
    pathway: "Traditional",
  },
  {
    id: "physicist",
    title: "Physicist",
    description: "Study matter, energy, and fundamental forces.",
    icon: "⚛️",
    strength: "STEM",
    duration: "4+ years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Mathematics", "Physical Sciences"],
    skills: ["Physics", "Research", "Mathematical Analysis"],
    opportunities: 18,
    pathway: "Traditional",
  },
  {
    id: "chemist",
    title: "Chemist",
    description: "Study and work with chemical reactions and materials.",
    icon: "🧪",
    strength: "STEM",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Chemistry", "Mathematics"],
    skills: ["Chemistry", "Laboratory Work", "Analysis"],
    opportunities: 22,
    pathway: "Traditional",
  },
  {
    id: "geologist",
    title: "Geologist",
    description: "Study Earth's rocks, minerals, and geological processes.",
    icon: "🪨",
    strength: "STEM",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Earth Science", "Mathematics"],
    skills: ["Geology", "Field Work", "Data Analysis"],
    opportunities: 30,
    pathway: "Traditional",
  },

  // STEM - Technology & Developer Roles
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Build applications and software solutions.",
    icon: "💻",
    strength: "STEM",
    duration: "3-4 years or bootcamp 3-6 months",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science", "Mathematics"],
    skills: ["Programming", "Problem Solving", "Technical Design"],
    opportunities: 70,
    pathway: "Traditional",
  },
  {
    id: "web-developer",
    title: "Web Developer",
    description: "Create and maintain websites and web applications.",
    icon: "🌐",
    strength: "STEM",
    duration: "3-4 years or bootcamp 3-6 months",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science"],
    skills: ["Web Development", "HTML/CSS/JavaScript", "Problem Solving"],
    opportunities: 65,
    pathway: "Traditional",
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    description: "Develop applications for phones and tablets.",
    icon: "📱",
    strength: "STEM",
    duration: "3-4 years or bootcamp 3-6 months",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science"],
    skills: ["App Development", "Programming", "User Interface"],
    opportunities: 60,
    pathway: "Traditional",
  },
  {
    id: "game-developer",
    title: "Game Developer",
    description: "Create video games and interactive entertainment.",
    icon: "🎮",
    strength: "STEM",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science"],
    skills: ["Programming", "Game Design", "Creativity"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to inform business decisions.",
    icon: "📊",
    strength: "STEM",
    duration: "4 years or bootcamp",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Mathematics", "Computer Science"],
    skills: ["Data Analysis", "Statistics", "Programming"],
    opportunities: 42,
    pathway: "Traditional",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    description: "Build systems to manage and process large data.",
    icon: "🔧",
    strength: "STEM",
    duration: "4 years or bootcamp",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Mathematics", "Computer Science"],
    skills: ["Data Systems", "Programming", "Database Management"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity Specialist",
    description: "Protect organizations from cyber threats.",
    icon: "🔒",
    strength: "STEM",
    duration: "4 years or certification 6-12 months",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science", "Mathematics"],
    skills: ["Security Systems", "Risk Analysis", "Problem Solving"],
    opportunities: 50,
    pathway: "Traditional",
  },
  {
    id: "systems-administrator",
    title: "Systems Administrator",
    description: "Manage computer systems and networks.",
    icon: "🖥️",
    strength: "STEM",
    duration: "2-3 years or certification",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science"],
    skills: ["System Management", "Troubleshooting", "Networks"],
    opportunities: 45,
    pathway: "Traditional",
  },

  // STEM - Certification Programs
  {
    id: "software-tester-istqb",
    title: "Software Tester (ISTQB Certified)",
    description: "Test software applications. ISTQB Foundation in 2 months.",
    icon: "🧪",
    strength: "STEM",
    duration: "2 months",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Mathematics", "Computer Science"],
    skills: ["Quality Assurance", "Testing", "Attention to Detail"],
    opportunities: 50,
    organization: "ISTQB",
    pathway: "Certification",
  },
  {
    id: "cloud-aws",
    title: "Cloud Specialist (AWS Certified)",
    description: "Manage cloud infrastructure and applications.",
    icon: "☁️",
    strength: "STEM",
    duration: "3-4 months",
    cost: "Affordable",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science"],
    skills: ["Cloud Systems", "Infrastructure", "Problem Solving"],
    opportunities: 40,
    organization: "AWS",
    pathway: "Certification",
  },
  {
    id: "cloud-azure",
    title: "Cloud Admin (Azure Certified)",
    description: "Manage Microsoft Azure cloud infrastructure.",
    icon: "☁️",
    strength: "STEM",
    duration: "3-4 months",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science"],
    skills: ["Cloud Management", "Azure Platform", "Infrastructure"],
    opportunities: 38,
    organization: "Microsoft",
    pathway: "Certification",
  },
  {
    id: "cloud-gcp",
    title: "Cloud Architect (Google Cloud)",
    description: "Design and manage Google Cloud solutions.",
    icon: "☁️",
    strength: "STEM",
    duration: "3-4 months",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science"],
    skills: ["Cloud Architecture", "GCP Platform", "System Design"],
    opportunities: 35,
    organization: "Google",
    pathway: "Certification",
  },
  {
    id: "data-analyst-google",
    title: "Data Analyst (Google Certificate)",
    description: "Analyze data to inform business decisions.",
    icon: "📊",
    strength: "STEM",
    duration: "4-6 months",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Mathematics"],
    skills: ["Data Analysis", "Excel", "Statistics"],
    opportunities: 35,
    organization: "Google",
    pathway: "Certification",
  },
  {
    id: "it-support-comptia",
    title: "IT Support Specialist (CompTIA A+)",
    description: "Provide technical support and troubleshooting.",
    icon: "🖥️",
    strength: "STEM",
    duration: "3 months",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science"],
    skills: ["Technical Support", "Troubleshooting", "Hardware"],
    opportunities: 45,
    organization: "CompTIA",
    pathway: "Certification",
  },
  {
    id: "network-admin-cisco",
    title: "Network Admin (Cisco CCNA)",
    description: "Design and manage computer networks.",
    icon: "🌐",
    strength: "STEM",
    duration: "4-6 months",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science", "Mathematics"],
    skills: ["Networking", "System Administration", "Problem Solving"],
    opportunities: 35,
    organization: "Cisco",
    pathway: "Certification",
  },

  // STEM - Trades & Skilled Labor
  {
    id: "electrician",
    title: "Electrician",
    description: "Install and maintain electrical systems.",
    icon: "⚡",
    strength: "STEM",
    duration: "3-4 years apprenticeship",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Mathematics"],
    skills: ["Electrical Systems", "Problem Solving", "Safety"],
    opportunities: 55,
    pathway: "Alternative",
  },
  {
    id: "plumber",
    title: "Plumber",
    description: "Install and repair plumbing systems.",
    icon: "🔧",
    strength: "STEM",
    duration: "3-4 years apprenticeship",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Mathematics"],
    skills: ["Plumbing", "Problem Solving", "Maintenance"],
    opportunities: 50,
    pathway: "Alternative",
  },
  {
    id: "welder",
    title: "Welder",
    description: "Join metal parts using welding techniques.",
    icon: "🔥",
    strength: "STEM",
    duration: "2-3 years apprenticeship",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Technical Sciences"],
    skills: ["Welding", "Technical Skills", "Precision"],
    opportunities: 45,
    pathway: "Alternative",
  },
  {
    id: "auto-mechanic",
    title: "Auto Mechanic",
    description: "Repair and maintain vehicles.",
    icon: "🚗",
    strength: "STEM",
    duration: "3-4 years apprenticeship",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Mathematics"],
    skills: ["Vehicle Maintenance", "Diagnostics", "Problem Solving"],
    opportunities: 55,
    pathway: "Alternative",
  },
  {
    id: "hvac-technician",
    title: "HVAC Technician",
    description: "Install and maintain heating/cooling systems.",
    icon: "❄️",
    strength: "STEM",
    duration: "2-3 years apprenticeship",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Mathematics"],
    skills: ["HVAC Systems", "Technical Skills", "Maintenance"],
    opportunities: 48,
    pathway: "Alternative",
  },
  {
    id: "carpenter",
    title: "Carpenter / Woodworker",
    description: "Build and repair wooden structures.",
    icon: "🪵",
    strength: "STEM",
    duration: "3-4 years apprenticeship",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Technical Sciences"],
    skills: ["Carpentry", "Precision", "Creativity"],
    opportunities: 50,
    pathway: "Alternative",
  },
  {
    id: "construction-worker",
    title: "Construction Worker",
    description: "Build and renovate buildings and structures.",
    icon: "👷",
    strength: "STEM",
    duration: "2-3 years apprenticeship",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Mathematics"],
    skills: ["Construction", "Safety", "Teamwork"],
    opportunities: 52,
    pathway: "Alternative",
  },

  // Entrepreneurship - Traditional
  {
    id: "entrepreneur",
    title: "Entrepreneur / Business Owner",
    description: "Start and manage your own business.",
    icon: "🚀",
    strength: "Entrepreneurship",
    duration: "Ongoing",
    cost: "Variable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Business Studies"],
    skills: ["Business Strategy", "Leadership", "Financial Management"],
    opportunities: 60,
    pathway: "Traditional",
  },
  {
    id: "consultant",
    title: "Business Consultant",
    description: "Help organizations improve operations and strategy.",
    icon: "💼",
    strength: "Entrepreneurship",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies", "Mathematics"],
    skills: ["Strategic Thinking", "Analysis", "Communication"],
    opportunities: 25,
    pathway: "Traditional",
  },

  // Entrepreneurship - Alternative (TINP, Softstart, Freelance)
  {
    id: "startup-founder-tinp",
    title: "Startup Founder (TINP / Softstart BTI)",
    description: "Launch your startup with TINP and Softstart BTI mentorship.",
    icon: "🌱",
    strength: "Entrepreneurship",
    duration: "12-24 months incubation",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Innovation", "Leadership", "Adaptability"],
    opportunities: 100,
    organization: "TINP / Softstart BTI",
    pathway: "Alternative",
  },
  {
    id: "tech-entrepreneur",
    title: "Tech Entrepreneur",
    description: "Build innovative tech solutions.",
    icon: "💻",
    strength: "Entrepreneurship",
    duration: "12-36 months",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Computer Science", "Business Studies"],
    skills: ["Technical Skills", "Business Acumen", "Innovation"],
    opportunities: 70,
    pathway: "Alternative",
  },
  {
    id: "ecommerce-entrepreneur",
    title: "E-Commerce Entrepreneur",
    description: "Build online businesses and digital storefronts.",
    icon: "🛍️",
    strength: "Entrepreneurship",
    duration: "6-12 months to start",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Business Studies"],
    skills: ["Digital Marketing", "E-commerce", "Sales"],
    opportunities: 75,
    pathway: "Alternative",
  },
  {
    id: "freelancer",
    title: "Freelancer (Creative/Technical)",
    description: "Offer services independently online.",
    icon: "👨‍💼",
    strength: "Entrepreneurship",
    duration: "Start immediately",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Any"],
    skills: ["Self-Management", "Client Relations", "Specialized Skills"],
    opportunities: 80,
    pathway: "Alternative",
  },

  // Leadership - Management & Business
  {
    id: "manager",
    title: "Manager / Team Leader",
    description: "Lead teams and manage organizational operations.",
    icon: "👔",
    strength: "Leadership",
    duration: "Variable",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies"],
    skills: ["Leadership", "Communication", "Decision Making"],
    opportunities: 55,
    pathway: "Traditional",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    description: "Plan, execute, and oversee projects.",
    icon: "📋",
    strength: "Leadership",
    duration: "3-4 years or certification 4-6 months",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies", "Mathematics"],
    skills: ["Project Planning", "Team Management", "Risk Management"],
    opportunities: 45,
    pathway: "Traditional",
  },
  {
    id: "hr-manager",
    title: "HR Manager",
    description: "Manage human resources and employee relations.",
    icon: "👥",
    strength: "Leadership",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies"],
    skills: ["People Management", "Communication", "Problem Solving"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "operations-manager",
    title: "Operations Manager",
    description: "Oversee daily business operations.",
    icon: "⚙️",
    strength: "Leadership",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies", "Mathematics"],
    skills: ["Operations", "Process Improvement", "Analysis"],
    opportunities: 42,
    pathway: "Traditional",
  },
  {
    id: "executive-ceo",
    title: "Executive / C-Suite",
    description: "Lead organizations at the highest levels.",
    icon: "🏢",
    strength: "Leadership",
    duration: "10+ years progression",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies", "Economics"],
    skills: ["Strategic Leadership", "Vision", "Negotiation"],
    opportunities: 15,
    pathway: "Traditional",
  },

  // Leadership - Accounting & Finance
  {
    id: "accountant",
    title: "Accountant",
    description: "Manage financial records and provide accounting services.",
    icon: "💰",
    strength: "Leadership",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Accounting", "Mathematics"],
    skills: ["Accounting", "Financial Analysis", "Attention to Detail"],
    opportunities: 42,
    pathway: "Traditional",
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Analyze financial data for investment decisions.",
    icon: "📈",
    strength: "Leadership",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Mathematics", "Economics"],
    skills: ["Financial Analysis", "Data Analysis", "Economics"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "banker",
    title: "Banker / Banking Professional",
    description: "Provide banking and financial services.",
    icon: "🏦",
    strength: "Leadership",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies", "Mathematics"],
    skills: ["Banking Knowledge", "Customer Service", "Sales"],
    opportunities: 40,
    pathway: "Traditional",
  },

  // Leadership - Education & Government
  {
    id: "teacher",
    title: "Teacher / Educator",
    description: "Shape the next generation through education.",
    icon: "📚",
    strength: "Leadership",
    duration: "4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Communication", "Empathy", "Organization"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "government-official",
    title: "Government Official / Public Administrator",
    description: "Work in government departments.",
    icon: "🏛️",
    strength: "Leadership",
    duration: "4 years degree + recruitment",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Policy Knowledge", "Communication", "Ethics"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "police-officer",
    title: "Police Officer",
    description: "Serve and protect communities.",
    icon: "👮",
    strength: "Leadership",
    duration: "Academy training 12-18 months",
    cost: "Affordable",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Law Enforcement", "Physical Fitness", "Decision Making"],
    opportunities: 30,
    pathway: "Alternative",
  },
  {
    id: "military-officer",
    title: "Military Officer",
    description: "Lead and serve in military operations.",
    icon: "🪖",
    strength: "Leadership",
    duration: "Military training + degree",
    cost: "Affordable",
    entryLevel: "Grade 12",
    requiredSubjects: ["Physical Education"],
    skills: ["Leadership", "Strategic Thinking", "Discipline"],
    opportunities: 25,
    pathway: "Alternative",
  },

  // Leadership - Hospitality & Service
  {
    id: "hotel-manager",
    title: "Hotel / Hospitality Manager",
    description: "Manage hotel operations and guest services.",
    icon: "🏨",
    strength: "Leadership",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies"],
    skills: ["Hospitality", "Management", "Customer Service"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "event-planner",
    title: "Event Planner",
    description: "Organize and coordinate events.",
    icon: "🎉",
    strength: "Leadership",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies"],
    skills: ["Event Management", "Coordination", "Communication"],
    opportunities: 38,
    pathway: "Traditional",
  },
  {
    id: "tour-guide",
    title: "Tourism Guide",
    description: "Guide tourists and share cultural knowledge.",
    icon: "🗺️",
    strength: "Leadership",
    duration: "2-3 years",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Tourism Knowledge", "Communication", "Customer Service"],
    opportunities: 32,
    pathway: "Traditional",
  },
  {
    id: "chef",
    title: "Chef / Cook",
    description: "Prepare meals and manage kitchen operations.",
    icon: "👨‍🍳",
    strength: "Creativity",
    duration: "2-4 years apprenticeship",
    cost: "Moderate",
    entryLevel: "Grade 10",
    requiredSubjects: ["Any"],
    skills: ["Cooking", "Food Safety", "Creativity"],
    opportunities: 45,
    pathway: "Alternative",
  },

  // Creativity - Visual & Graphic Design
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual content for brands.",
    icon: "🎨",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Design", "Creativity", "Tech Tools"],
    opportunities: 45,
    pathway: "Traditional",
  },
  {
    id: "web-designer",
    title: "Web Designer",
    description: "Design beautiful and functional websites.",
    icon: "🌐",
    strength: "Creativity",
    duration: "3-4 years or bootcamp 4-6 months",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science"],
    skills: ["Web Design", "UX Principles", "Coding Basics"],
    opportunities: 50,
    pathway: "Traditional",
  },
  {
    id: "animator",
    title: "Animator / Motion Graphics",
    description: "Create animations and visual effects.",
    icon: "✨",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Computer Science"],
    skills: ["Animation", "Technical Skills", "Creativity"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "illustrator",
    title: "Illustrator",
    description: "Create illustrations for books and media.",
    icon: "🖌️",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 10",
    requiredSubjects: ["Art"],
    skills: ["Illustration", "Creativity", "Technical Tools"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "fashion-designer",
    title: "Fashion Designer",
    description: "Design and create fashion garments.",
    icon: "👗",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Fashion Design", "Sewing", "Creativity"],
    opportunities: 30,
    pathway: "Traditional",
  },
  {
    id: "photographer",
    title: "Photographer",
    description: "Capture images for clients and businesses.",
    icon: "📸",
    strength: "Creativity",
    duration: "2-3 years or self-taught",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Any"],
    skills: ["Photography", "Technical Skills", "Creativity"],
    opportunities: 45,
    pathway: "Alternative",
  },

  // Creativity - Media & Performance
  {
    id: "musician",
    title: "Musician / Music Producer",
    description: "Create and perform music professionally.",
    icon: "🎵",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 10",
    requiredSubjects: ["Music"],
    skills: ["Musical Talent", "Creativity", "Discipline"],
    opportunities: 30,
    pathway: "Traditional",
  },
  {
    id: "filmmaker",
    title: "Filmmaker / Video Producer",
    description: "Create films, documentaries, and video.",
    icon: "🎬",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 11",
    requiredSubjects: ["Any"],
    skills: ["Storytelling", "Technical Skills", "Creativity"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "actor",
    title: "Theater Actor / Performer",
    description: "Perform in theater and film.",
    icon: "🎭",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 10",
    requiredSubjects: ["Drama"],
    skills: ["Acting", "Expression", "Stage Presence"],
    opportunities: 20,
    pathway: "Traditional",
  },
  {
    id: "dancer",
    title: "Dancer / Choreographer",
    description: "Perform dance and create choreography.",
    icon: "💃",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 9",
    requiredSubjects: ["Physical Education"],
    skills: ["Dance", "Choreography", "Expression"],
    opportunities: 25,
    pathway: "Traditional",
  },
  {
    id: "visual-artist",
    title: "Visual Artist",
    description: "Create art for galleries and exhibitions.",
    icon: "🖼️",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 10",
    requiredSubjects: ["Art"],
    skills: ["Artistic Talent", "Creativity", "Expression"],
    opportunities: 25,
    pathway: "Traditional",
  },

  // Creativity - Content & Writing
  {
    id: "digital-creator",
    title: "Digital Content Creator / Influencer",
    description: "Create content on social media.",
    icon: "📱",
    strength: "Creativity",
    duration: "6-12 months to start",
    cost: "Affordable",
    entryLevel: "Grade 10",
    requiredSubjects: ["Any"],
    skills: ["Creativity", "Digital Tools", "Audience Engagement"],
    opportunities: 80,
    pathway: "Alternative",
  },
  {
    id: "copywriter",
    title: "Copywriter",
    description: "Write compelling marketing content.",
    icon: "✍️",
    strength: "Creativity",
    duration: "3-4 years or portfolio-based",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["English"],
    skills: ["Writing", "Creativity", "Marketing Knowledge"],
    opportunities: 50,
    pathway: "Traditional",
  },
  {
    id: "journalist",
    title: "Journalist / Reporter",
    description: "Report news and investigate stories.",
    icon: "📰",
    strength: "Creativity",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["English"],
    skills: ["Journalism", "Writing", "Research"],
    opportunities: 28,
    pathway: "Traditional",
  },

  // Sports
  {
    id: "professional-athlete",
    title: "Professional Athlete",
    description: "Compete professionally in your sport.",
    icon: "⚽",
    strength: "Sports",
    duration: "10+ years training",
    cost: "Variable",
    entryLevel: "Grade 8",
    requiredSubjects: ["Physical Education"],
    skills: ["Athletic Excellence", "Discipline", "Teamwork"],
    opportunities: 50,
    pathway: "Traditional",
  },
  {
    id: "sports-coach",
    title: "Sports Coach",
    description: "Train and develop athletes.",
    icon: "🏆",
    strength: "Sports",
    duration: "2-4 years",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Physical Education"],
    skills: ["Coaching", "Leadership", "Sports Knowledge"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "sports-scientist",
    title: "Sports Scientist / Physiotherapist",
    description: "Support athlete performance and health.",
    icon: "🏥",
    strength: "Sports",
    duration: "4 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Science", "Biomechanics", "Health Knowledge"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "fitness-trainer",
    title: "Fitness Trainer / Personal Trainer",
    description: "Help clients achieve fitness goals.",
    icon: "💪",
    strength: "Sports",
    duration: "3-6 months certification",
    cost: "Affordable",
    entryLevel: "Grade 11",
    requiredSubjects: ["Physical Education"],
    skills: ["Fitness Knowledge", "Client Relations", "Motivation"],
    opportunities: 55,
    pathway: "Certification",
  },
  {
    id: "sports-manager",
    title: "Sports Manager",
    description: "Manage sports teams and facilities.",
    icon: "📊",
    strength: "Sports",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Business Studies"],
    skills: ["Management", "Sports Knowledge", "Organization"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "sports-journalist",
    title: "Sports Journalist / Commentator",
    description: "Report on sports and commentate.",
    icon: "📺",
    strength: "Sports",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["English"],
    skills: ["Journalism", "Sports Knowledge", "Communication"],
    opportunities: 25,
    pathway: "Traditional",
  },

  // Social Impact
  {
    id: "social-worker",
    title: "Social Worker",
    description: "Help vulnerable communities.",
    icon: "🤝",
    strength: "Social Impact",
    duration: "4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Empathy", "Communication", "Problem Solving"],
    opportunities: 35,
    pathway: "Traditional",
  },
  {
    id: "ngo-leader",
    title: "NGO / Non-Profit Leader",
    description: "Lead organizations for social change.",
    icon: "🌍",
    strength: "Social Impact",
    duration: "Variable",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Leadership", "Impact Focus", "Fundraising"],
    opportunities: 40,
    pathway: "Traditional",
  },
  {
    id: "environmental-specialist",
    title: "Environmental Specialist",
    description: "Work on climate and conservation.",
    icon: "🌱",
    strength: "Social Impact",
    duration: "4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Environmental Science", "Research", "Advocacy"],
    opportunities: 30,
    pathway: "Traditional",
  },
  {
    id: "counselor",
    title: "Counselor / Psychologist",
    description: "Provide mental health support.",
    icon: "💭",
    strength: "Social Impact",
    duration: "4-5 years",
    cost: "Expensive",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences"],
    skills: ["Psychology", "Empathy", "Listening"],
    opportunities: 32,
    pathway: "Traditional",
  },
  {
    id: "community-developer",
    title: "Community Development Officer",
    description: "Work with communities to improve conditions.",
    icon: "👫",
    strength: "Social Impact",
    duration: "3-4 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Any"],
    skills: ["Community Engagement", "Leadership", "Problem Solving"],
    opportunities: 28,
    pathway: "Traditional",
  },
  {
    id: "public-health",
    title: "Public Health Officer",
    description: "Promote health and prevent disease.",
    icon: "⚕️",
    strength: "Social Impact",
    duration: "4-5 years",
    cost: "Moderate",
    entryLevel: "Grade 12",
    requiredSubjects: ["Life Sciences", "Physical Sciences"],
    skills: ["Public Health", "Data Analysis", "Communication"],
    opportunities: 30,
    pathway: "Traditional",
  },
];

interface StrengthScore {
  category: string;
  score: number;
  color: string;
}

export default function CareerMapPage() {
  const [, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const grade = searchParams.get("grade") || "Your Grade";
  const subjectsParam = searchParams.get("subjects") || "";
  const subjects = subjectsParam ? subjectsParam.split(",") : [];
  const [selectedPathway, setSelectedPathway] = useState<CareerPathway | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if assessment scores exist
    const assessmentScores = localStorage.getItem("assessmentScores");
    if (!assessmentScores && grade === "Your Grade") {
      // Redirect to assessment if no scores and no grade info
      setLocation(`/assessment?grade=${grade}&subjects=${subjectsParam}`);
    }
  }, [setLocation, grade, subjectsParam]);

  const generateStrengths = (): StrengthScore[] => {
    // Try to get actual assessment scores from localStorage
    const savedScores = localStorage.getItem("assessmentScores");
    const scoreMap: Record<string, number> = savedScores ? JSON.parse(savedScores) : null;

    const strengths = [
      { category: "STEM", score: scoreMap?.STEM ?? 5, color: "bg-green-500" },
      { category: "Entrepreneurship", score: scoreMap?.Entrepreneurship ?? 5, color: "bg-blue-500" },
      { category: "Leadership", score: scoreMap?.Leadership ?? 5, color: "bg-purple-500" },
      { category: "Creativity", score: scoreMap?.Creativity ?? 5, color: "bg-pink-500" },
      { category: "Sports", score: scoreMap?.Sports ?? 5, color: "bg-yellow-500" },
      { category: "Social Impact", score: scoreMap?.["Social Impact"] ?? 5, color: "bg-orange-500" },
    ];

    return strengths;
  };

  const getRecommendedPaths = (): CareerPathway[] => {
    // Get actual assessment scores
    const savedScores = localStorage.getItem("assessmentScores");
    const scoreMap: Record<string, number> = savedScores ? JSON.parse(savedScores) : null;

    const gradeNum = parseInt(grade);

    // First, try to get pathways matching subject + grade
    let filtered = careerPathways.filter(path => {
      const hasRequiredSubjects = path.requiredSubjects.length === 0 || 
        path.requiredSubjects.some(req => subjects.includes(req));
      const entryNum = parseInt(path.entryLevel);
      return hasRequiredSubjects && gradeNum >= entryNum;
    });

    // If none match, just filter by grade
    if (filtered.length === 0) {
      filtered = careerPathways.filter(path => {
        const entryNum = parseInt(path.entryLevel);
        return gradeNum >= entryNum;
      });
    }

    // Sort by strength match
    return filtered
      .sort((a, b) => {
        if (scoreMap) {
          const aScore = scoreMap[a.strength] ?? 0;
          const bScore = scoreMap[b.strength] ?? 0;
          if (aScore !== bScore) return bScore - aScore;
        }
        return b.opportunities - a.opportunities;
      })
      .slice(0, 3);
  };

  const pathsByStrength = (strength: CareerPathway["strength"]) => {
    return careerPathways.filter(p => p.strength === strength);
  };

  const strengths = generateStrengths();
  const recommendedPaths = getRecommendedPaths();

  const costColors = {
    Affordable: "bg-green-100 text-green-800",
    Moderate: "bg-blue-100 text-blue-800",
    Expensive: "bg-red-100 text-red-800",
  };

  const pathwayColors = {
    Traditional: "bg-purple-100 text-purple-800",
    Certification: "bg-green-100 text-green-800",
    Alternative: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center space-y-3">
            <div className="flex items-center justify-center gap-3 text-muted-foreground mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">{grade}</span>
              {subjects.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-center">
                  {subjects.slice(0, 2).map((s) => (
                    <span key={s} className="px-2 py-1 rounded-full bg-muted text-xs font-medium">
                      {s}
                    </span>
                  ))}
                  {subjects.length > 2 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">+{subjects.length - 2} more</span>
                  )}
                </div>
              )}
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight">
              Your Career Map
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore pathways across all strengths — Traditional degrees, Fast certifications, Skilled trades, or Alternative routes
            </p>
          </div>

          {/* Strength Profile */}
          <div className="bg-card border rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Strength Profile</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {strengths.map((strength) => (
                <div key={strength.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{strength.category}</span>
                    <span className="text-primary font-bold">{strength.score}/10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-full rounded-full ${strength.color}`}
                      style={{ width: `${(strength.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top 3 Recommendations */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Top Recommendations</h2>
              <Link href="/student-dashboard">
                <Button className="gap-2" size="sm">
                  Go to Dashboard <Home className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {recommendedPaths.map((path) => (
                <div key={path.id} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary">
                  <div className="text-3xl mb-3">{path.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">{path.duration}</Badge>
                    <Badge className={`text-xs ${costColors[path.cost]}`}>{path.cost}</Badge>
                    <Badge variant="outline" className={`text-xs ${pathwayColors[path.pathway]}`}>{path.pathway}</Badge>
                  </div>
                  <Button className="w-full gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Browse All Pathways */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Explore All Pathways</h2>
            <Tabs defaultValue="STEM" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="STEM">STEM</TabsTrigger>
                <TabsTrigger value="Entrepreneurship">Entrepreneurship</TabsTrigger>
                <TabsTrigger value="Leadership">Leadership</TabsTrigger>
                <TabsTrigger value="Creativity">Creativity</TabsTrigger>
                <TabsTrigger value="Sports">Sports</TabsTrigger>
                <TabsTrigger value="Social Impact">Social Impact</TabsTrigger>
              </TabsList>

              {(["STEM", "Entrepreneurship", "Leadership", "Creativity", "Sports", "Social Impact"] as const).map((strength) => (
                <TabsContent key={strength} value={strength} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {pathsByStrength(strength).map((path) => (
                      <div key={path.id} className="bg-card border rounded-lg p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-3xl">{path.icon}</div>
                          <Badge className={`text-xs ${pathwayColors[path.pathway]}`}>{path.pathway}</Badge>
                        </div>
                        <h3 className="font-bold mb-2">{path.title}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{path.description}</p>
                        <div className="space-y-2 mb-4 text-xs">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            <span>{path.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-3 w-3" />
                            <span>{path.cost}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-3 w-3" />
                            <span>Entry: {path.entryLevel}</span>
                          </div>
                        </div>
                        {path.organization && (
                          <div className="mb-3 p-2 rounded bg-primary/5 text-xs font-medium text-primary">
                            📌 {path.organization}
                          </div>
                        )}
                        <Button size="sm" variant="outline" className="w-full">
                          Explore
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
