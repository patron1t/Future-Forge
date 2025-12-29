import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import StudentDashboard from "@/pages/student-dashboard";
import ProfessionalsPage from "@/pages/professionals";
import ProfessionalDashboard from "@/pages/professional-dashboard";
import CounselorDashboard from "@/pages/counselor-dashboard";
import WellnessPage from "@/pages/wellness";
import DigitalFootprintPage from "@/pages/digital-footprint";
import AuthPage from "@/pages/auth";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/student-dashboard" component={StudentDashboard} />
      <Route path="/professionals" component={ProfessionalsPage} />
      <Route path="/professional-dashboard" component={ProfessionalDashboard} />
      <Route path="/counselor-dashboard" component={CounselorDashboard} />
      <Route path="/wellness" component={WellnessPage} />
      <Route path="/digital-footprint" component={DigitalFootprintPage} />
      <Route path="/auth" component={AuthPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
