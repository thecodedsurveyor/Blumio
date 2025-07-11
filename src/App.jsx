import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Enterprise from "./pages/Enterprise";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <NavigationBar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <div className="bg-white px-4 xl:px-20">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
