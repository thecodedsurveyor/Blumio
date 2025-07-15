type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => (
  <button
    type="button"
    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    aria-expanded={isOpen}
    onClick={onClick}
  >
    <span className="sr-only">Open main menu</span>
    <div className="relative h-6 w-6">
      <span
        className={`absolute block h-0.5 w-full transform bg-current transition duration-500 ease-in-out ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute block h-0.5 w-full transform bg-current transition duration-500 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute block h-0.5 w-full transform bg-current transition duration-500 ease-in-out ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </div>
  </button>
);
