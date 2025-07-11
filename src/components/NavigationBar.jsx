import { HamburgerButton } from "../ui/HamBurgerButton";
import { MobileMenu } from "../ui/MobileMenu";

const NavigationBar = () => {
  return (
    <>
      <div className="flex px-4 py-4 lg:hidden">
        <a href="#">
          <img src="./images/logo.svg" className="w-32" alt="logo" />
        </a>
      </div>
      {/* Menu */}
      <div className="absolute right-8 top-8">
        <HamburgerButton />
        <MobileMenu />
      </div>
      <nav className="container mx-auto hidden w-full items-center gap-12 px-4 lg:flex 2xl:gap-28">
        <ul className="flex items-center gap-14">
          <a href="#">
            <img src="./images/logo.svg" alt="logo" />
          </a>
          <ul className="flex items-center gap-14">
            <li>
              <a className="transition-all hover:text-blue-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="transition-all hover:text-blue-500" href="#">
                Solutions
              </a>
            </li>
            <li>
              <a className="transition-all hover:text-blue-500" href="#">
                Resources
              </a>
            </li>
            <li>
              <a className="transition-all hover:text-blue-500" href="#">
                Enterprises
              </a>
            </li>
            <li>
              <a className="transition-all hover:text-blue-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </ul>

        <ul className="ml-auto flex items-center gap-12">
          <li>
            <img src="./images/world.svg" alt="world-globe" />
          </li>
          <ul className="flex items-center gap-8">
            <li>
              <a className="transition-all hover:text-blue-500" href="#">
                Contact Sales
              </a>
            </li>
            <li>
              <a className="transition-all hover:text-blue-500" href="#">
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="3xl:px-8 rounded-md bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600"
              >
                Get Started
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
