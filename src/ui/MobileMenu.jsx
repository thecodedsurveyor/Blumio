import { Link } from "react-router-dom";
import { useMenuContext } from "../context/MenuContext";

const MobileMenu = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <div
      id="menu"
      className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-sm transition-all duration-300 lg:hidden ${
        !btnOpen ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex h-full flex-col items-center justify-center space-y-8 p-6">
        <div className="w-full max-w-sm rounded-2xl bg-white/10 p-8 backdrop-blur-md">
          <div className="flex flex-col space-y-6 text-center">
            <Link
              onClick={() => setBtnOpen(false)}
              to="/products"
              className="border-b border-white/20 py-3 text-xl font-semibold text-white transition-colors duration-200 hover:text-blue-300"
            >
              Products
            </Link>
            <Link
              onClick={() => setBtnOpen(false)}
              to="/solutions"
              className="border-b border-white/20 py-3 text-xl font-semibold text-white transition-colors duration-200 hover:text-blue-300"
            >
              Solutions
            </Link>
            <Link
              onClick={() => setBtnOpen(false)}
              to="/resources"
              className="border-b border-white/20 py-3 text-xl font-semibold text-white transition-colors duration-200 hover:text-blue-300"
            >
              Resources
            </Link>
            <Link
              onClick={() => setBtnOpen(false)}
              to="/enterprise"
              className="border-b border-white/20 py-3 text-xl font-semibold text-white transition-colors duration-200 hover:text-blue-300"
            >
              Enterprise
            </Link>
            <Link
              onClick={() => setBtnOpen(false)}
              to="/pricing"
              className="border-b border-white/20 py-3 text-xl font-semibold text-white transition-colors duration-200 hover:text-blue-300"
            >
              Pricing
            </Link>
          </div>

          <div className="mt-8 flex flex-col space-y-4">
            <Link
              onClick={() => setBtnOpen(false)}
              to="/login"
              className="py-2 text-lg font-medium text-white transition-colors duration-200 hover:text-blue-300"
            >
              Sign In
            </Link>
            <Link
              onClick={() => setBtnOpen(false)}
              to="/pricing"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };
