import { useMenuContext } from "../context/MenuContext";

const HamburgerButton = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <div className="lg:hidden">
      <button
        id="btn"
        onClick={() => setBtnOpen((btn) => !btn)}
        type="button"
        className={`relative z-50 flex h-8 w-8 flex-col items-center justify-center transition-all duration-300 focus:outline-none ${
          btnOpen ? "open" : ""
        }`}
        aria-label="Toggle menu"
      >
        <span
          className={`hamburger-line transition-all duration-300 ${
            btnOpen ? "translate-y-2 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`hamburger-line transition-all duration-300 ${
            btnOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`hamburger-line transition-all duration-300 ${
            btnOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export { HamburgerButton };
