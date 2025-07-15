import { FC, useEffect } from "react";
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
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import Enterprise from "./pages/Enterprise";
import SmallBusiness from "./pages/SmallBusiness";
import Startups from "./pages/Startups";
import PersonalUse from "./pages/PersonalUse";
import RemoteWork from "./pages/RemoteWork";
import Nonprofits from "./pages/Nonprofits";
import Education from "./pages/Education";
import MobileApps from "./pages/MobileApps";
import Integrations from "./pages/Integrations";
import API from "./pages/API";
import HelpCenter from "./pages/HelpCenter";
import Support from "./pages/Support";
import Updates from "./pages/Updates";
import Security from "./pages/Security";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookieSettings from "./pages/CookieSettings";
import Careers from "./pages/Careers";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

// ScrollToTop component as FC
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: FC = () => (
  <Router>
    <ScrollToTop />
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/small-business" element={<SmallBusiness />} />
      <Route path="/startups" element={<Startups />} />
      <Route path="/personal-use" element={<PersonalUse />} />
      <Route path="/remote-work" element={<RemoteWork />} />
      <Route path="/nonprofits" element={<Nonprofits />} />
      <Route path="/education" element={<Education />} />
      <Route path="/mobile-apps" element={<MobileApps />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/api" element={<API />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/support" element={<Support />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/security" element={<Security />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-settings" element={<CookieSettings />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
