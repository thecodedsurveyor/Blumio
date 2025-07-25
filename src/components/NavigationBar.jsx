import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HamburgerButton } from "../ui/HamBurgerButton";
import { MobileMenu } from "../ui/MobileMenu";
import { MenuProvider } from "../context/MenuContext";
import { FaTasks } from "react-icons/fa";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MenuProvider>
      {/* Mobile Header */}
      <div className="flex items-center justify-between bg-white px-4 py-4 shadow-sm lg:hidden">
        <Link to="/">
          <div className="flex items-center gap-2">
            <FaTasks className="h-6 w-6 text-blue-600" />
            <span
              className="text-xl font-bold text-gray-800"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Blumio
            </span>
          </div>
        </Link>
        <HamburgerButton />
      </div>

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Desktop Navigation */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 hidden transition-all duration-300 lg:block ${
          isScrolled
            ? "border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2 transition-all duration-300">
                <FaTasks className="h-8 w-8 text-blue-600" />
                <span
                  className="text-2xl font-bold text-gray-800"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Blumio
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden items-center space-x-8 lg:flex">
              <Link
                to="/products"
                className="group relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Products
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/solutions"
                className="group relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Solutions
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/resources"
                className="group relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Resources
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/enterprise"
                className="group relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Enterprise
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/pricing"
                className="group relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="hidden items-center space-x-4 lg:flex">
              <Link
                to="/dashboard"
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <Link
                to="/contact"
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Contact Sales
              </Link>
              <Link
                to="/login"
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Sign In
              </Link>
              <Link
                to="/pricing"
                className="transform rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="hidden h-20 lg:block"></div>
    </MenuProvider>
  );
};

export default NavigationBar;
