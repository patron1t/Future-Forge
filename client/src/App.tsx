import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import StudentDashboard from "@/pages/student-dashboard";
import ProfessionalsPage from "@/pages/professionals";
import SponsorshipPage from "@/pages/sponsorship";
import PlacementsPage from "@/pages/placements";
import ProfessionalDashboard from "@/pages/professional-dashboard";
import CounselorDashboard from "@/pages/counselor-dashboard";
import WellnessPage from "@/pages/wellness";
import DigitalFootprintPage from "@/pages/digital-footprint";
import AuthPage from "@/pages/auth";
import AssessmentPage from "@/pages/assessment";
import CareerMapPage from "@/pages/career-map";
import OnboardingPage from "@/pages/onboarding";
import KioskWelcomePage from "@/pages/kiosk-welcome";
import KioskAssessmentPage from "@/pages/kiosk-assessment";
import KioskResultsPage from "@/pages/kiosk-results";
import PortfolioPage from "@/pages/portfolio";
import PortfolioViewPage from "@/pages/portfolio-view";
import OpportunitiesPage from "@/pages/opportunities";
import InboxPage from "@/pages/inbox";
import ActionPlanPage from "@/pages/action-plan";
import ResourcesPage from "@/pages/resources";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/onboarding" component={OnboardingPage} />
      <Route path="/assessment" component={AssessmentPage} />
      <Route path="/career-map" component={CareerMapPage} />
      <Route path="/kiosk" component={KioskWelcomePage} />
      <Route path="/kiosk-assessment" component={KioskAssessmentPage} />
      <Route path="/kiosk-results" component={KioskResultsPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/portfolio-view" component={PortfolioViewPage} />
      <Route path="/opportunities" component={OpportunitiesPage} />
      <Route path="/action-plan" component={ActionPlanPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/inbox" component={InboxPage} />
      <Route path="/student-dashboard" component={StudentDashboard} />
      <Route path="/professionals" component={ProfessionalsPage} />
      <Route path="/sponsorship" component={SponsorshipPage} />
      <Route path="/placements" component={PlacementsPage} />
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
