import { Link } from "react-router-dom";
import { useMenuContext } from "../context/MenuContext";

const MobileMenu = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <div
      id="menu"
      className={`fixed inset-0 z-30 bg-black p-6 opacity-90  xl:hidden  ${
        !btnOpen ? "slide close" : "slide open"
      } `}
    >
      <div className="flex flex-col items-center justify-start space-y-6 rounded-sm pt-12 font-bold text-white">
        <Link
          onClick={() => setBtnOpen(false)}
          to="/products"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Products
        </Link>
        <Link
          onClick={() => setBtnOpen(false)}
          to="/solutions"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Solutions
        </Link>
        <Link
          onClick={() => setBtnOpen(false)}
          to="/resources"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Resources
        </Link>
        <Link
          onClick={() => setBtnOpen(false)}
          to="/enterprise"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Enterprise
        </Link>
        <Link
          onClick={() => setBtnOpen(false)}
          to="/pricing"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Pricing
        </Link>
        <Link
          to="/pricing"
          className="rounded-md bg-blue-500 px-8 py-2 text-white transition-all hover:bg-blue-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export { MobileMenu };
