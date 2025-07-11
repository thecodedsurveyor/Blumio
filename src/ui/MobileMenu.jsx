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
        <a
          onClick={() => setBtnOpen(false)}
          href="#features"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Products
        </a>
        <a
          onClick={() => setBtnOpen(false)}
          href="#download"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Solutions
        </a>
        <a
          onClick={() => setBtnOpen(false)}
          href="#faq"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Resources
        </a>
        <a
          onClick={() => setBtnOpen(false)}
          href="#faq"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Enterprises
        </a>
        <a
          onClick={() => setBtnOpen(false)}
          href="#faq"
          className="hover:text-softRed w-full border-b border-white pb-2 text-center"
        >
          Pricing
        </a>
        <a
          href="#"
          className="rounded-md bg-blue-500 px-8 py-2 text-white transition-all hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export { MobileMenu };
