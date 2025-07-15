import { Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

type MobileMenuProps = {
  isOpen: boolean;
  navItems: NavItem[];
};

export const MobileMenu = ({ isOpen, navItems }: MobileMenuProps) => {
  const { closeMenu } = useMenu();

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navItems.map((item) =>
          item.isExternal ? (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.href}
              to={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ),
        )}
        <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
          <Link
            to="/login"
            className="block w-full rounded-md px-3 py-2 text-center text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            onClick={closeMenu}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700"
            onClick={closeMenu}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
