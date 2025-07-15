import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/landing/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Enterprise from "./pages/Enterprise";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NewDashboard from "./pages/NewDashboard";

// New pages
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";
import MobileApps from "./pages/MobileApps";
import API from "./pages/API";
import Security from "./pages/Security";
import Updates from "./pages/Updates";
import HelpCenter from "./pages/HelpCenter";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Support from "./pages/Support";
import CookieSettings from "./pages/CookieSettings";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = () => {
  const location = useLocation();

  // Define pages that require authentication or authorization
  // These pages should not show navbar or footer
  const authPages = ["/dashboard", "/dash", "/profile", "/login"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className="min-h-screen">
      {!isAuthPage && <NavigationBar />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dash" element={<NewDashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* Product Pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/api" element={<API />} />
          <Route path="/security" element={<Security />} />
          <Route path="/updates" element={<Updates />} />

          {/* Support & Resources */}
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/support" element={<Support />} />

          {/* Company Pages */}
          <Route path="/careers" element={<Careers />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-settings" element={<CookieSettings />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
