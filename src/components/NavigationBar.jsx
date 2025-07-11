import { Link } from "react-router-dom";
import { HamburgerButton } from "../ui/HamBurgerButton";
import { MobileMenu } from "../ui/MobileMenu";

const NavigationBar = () => {
  return (
    <>
      <div className="flex px-4 py-4 lg:hidden">
        <Link to="/">
          <img src="./images/logo.svg" className="w-32" alt="logo" />
        </Link>
      </div>
      {/* Menu */}
      <div className="absolute right-8 top-8">
        <HamburgerButton />
        <MobileMenu />
      </div>
      <nav className="container mx-auto hidden w-full items-center gap-12 px-4 lg:flex 2xl:gap-28">
        <ul className="flex items-center gap-14">
          <Link to="/">
            <img src="./images/logo.svg" alt="logo" />
          </Link>
          <ul className="flex items-center gap-14">
            <li>
              <Link
                className="transition-all hover:text-blue-500"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-blue-500"
                to="/solutions"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-blue-500"
                to="/resources"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-blue-500"
                to="/enterprise"
              >
                Enterprise
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-blue-500"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </ul>

        <ul className="ml-auto flex items-center gap-12">
          <li>
            <img src="./images/world.svg" alt="world-globe" />
          </li>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                className="transition-all hover:text-blue-500"
                to="/contact"
              >
                Contact Sales
              </Link>
            </li>
            <li>
              <Link className="transition-all hover:text-blue-500" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="3xl:px-8 rounded-md bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
