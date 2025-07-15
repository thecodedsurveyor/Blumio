import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiPlantFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto w-[80%] max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 p-1.5 sm:rounded-xl sm:p-2">
              <RiPlantFill className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              Blumio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#features"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Features
            </a>
            <Link
              to="/solutions"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Solutions
            </Link>
            <Link
              to="/pricing"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/login"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="transform rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 bg-white/95 py-4 backdrop-blur-md md:hidden">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Features
              </a>
              <Link
                to="/solutions"
                className="px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Solutions
              </Link>
              <Link
                to="/pricing"
                className="px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                About
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="mx-4 transform rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2 text-center font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
