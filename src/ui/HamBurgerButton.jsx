import { useMenuContext } from "../context/MenuContext";

const HamburgerButton = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <div className="xl:hidden">
      <button
        id="btn"
        onClick={() => setBtnOpen((btn) => !btn)}
        type="button"
        className={`button ${
          btnOpen ? "open" : ""
        } hamburger z-50 block focus:outline-none lg:hidden`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export { HamburgerButton };
