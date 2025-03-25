
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth, RequireUser, RequireTherapist } from "./context/AuthContext";
import Index from "./pages/Index";
import Therapists from "./pages/Therapists";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Appointments from "./pages/Appointments";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TherapistDashboard from "./pages/TherapistDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/therapists" element={<Therapists />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected routes */}
            <Route path="/appointments" element={
              <RequireAuth>
                <Appointments />
              </RequireAuth>
            } />
            
            {/* User-specific routes */}
            <Route path="/dashboard" element={
              <RequireUser>
                <Dashboard />
              </RequireUser>
            } />
            
            {/* Therapist-specific routes */}
            <Route path="/therapist-dashboard" element={
              <RequireTherapist>
                <TherapistDashboard />
              </RequireTherapist>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
