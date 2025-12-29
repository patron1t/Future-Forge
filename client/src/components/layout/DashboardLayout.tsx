import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Compass, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Briefcase,
  Heart
} from "lucide-react";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardLayout({ children, type = "student" }: { children: React.ReactNode, type?: "student" | "professional" }) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const studentLinks = [
    { href: "/student-dashboard", icon: LayoutDashboard, label: "Overview" },
    { href: "/career-map", icon: Compass, label: "My Career Map" },
    { href: "/digital-footprint", icon: User, label: "Digital Footprint" },
    { href: "/wellness", icon: Heart, label: "Wellness Hub" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];

  const professionalLinks = [
    { href: "/professional-dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/scout", icon: Compass, label: "Scout Talent" },
    { href: "/jobs", icon: Briefcase, label: "Post Opportunities" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];

  const links = type === "student" ? studentLinks : professionalLinks;

  return (
    <div className="flex min-h-screen bg-muted/10">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r bg-background transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src={logo} alt="Career Plug AI" className="h-8 w-auto" />
              <span className="font-heading text-lg font-bold text-primary">Career Plug</span>
            </a>
          </Link>
          <button 
            className="ml-auto md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-4rem)] justify-between py-6">
          <nav className="space-y-1 px-4">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </Link>
              );
            })}
          </nav>

          <div className="px-4">
            <div className="mb-4 flex items-center gap-3 rounded-lg border p-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="overflow-hidden">
                <p className="truncate text-sm font-medium">John Doe</p>
                <p className="truncate text-xs text-muted-foreground">Grade 11 Student</p>
              </div>
            </div>
            <Link href="/auth">
              <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                <LogOut className="h-4 w-4" />
                Log Out
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background/80 backdrop-blur-md px-4 md:px-6">
          <button 
            className="mr-4 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold md:text-xl">
            {links.find(l => l.href === location)?.label || "Dashboard"}
          </h1>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
