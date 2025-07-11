import { BiChevronDown } from "react-icons/bi";

const Faqs = () => {
  return (
    <section id="faq">
      {/* FAQ Section */}
      <h3 className="pb-4 pt-8 text-center text-blue-500 xl:pt-20">FAQ`s</h3>
      <h2 className="mb-6 text-center text-xl font-bold text-black md:text-4xl xl:text-3xl">
        Commonly Asked Questions
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2">
        {/* Accordion */}
        <div id="faq-accordion">
          {/* Main Container */}
          <div className="container mx-auto mb-20 px-6 xl:mb-32">
            {/* Accordion Container */}
            <div className="m-8 mx-auto max-w-2xl space-y-8 overflow-hidden">
              {/* Tab 1 */}
              <div
                className="group rounded-xl border border-gray-500 p-8 py-1
                 shadow-sm outline-none"
                tabIndex={1}
              >
                {/* Tab Flex Container */}
                <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                  {/* Tab Title */}
                  <h3 className="ease font-bold text-black transition duration-500 group-hover:text-red-500">
                    Q1. What is Bookmark?
                  </h3>
                  {/* Arrow */}
                  <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                    <BiChevronDown className="text-3xl" />
                  </div>
                </div>
                {/* Inner Content */}
                <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                  <p className="py-2 text-justify text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Tab 2 */}
              <div
                className="group rounded-xl border border-gray-500 p-8 py-1
                 shadow-sm outline-none"
                tabIndex={2}
              >
                {/* Tab Flex Container */}
                <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                  {/* Tab Title */}
                  <h3 className="ease font-bold text-black transition duration-500 group-hover:text-red-500">
                    Q2. How can I request a new browser?
                  </h3>
                  {/* Arrow */}
                  <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                    <BiChevronDown className="text-3xl" />
                  </div>
                </div>
                {/* Inner Content */}
                <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                  <p className="py-2 text-justify text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Tab 3 */}
              <div
                className="group rounded-xl border border-gray-500 p-8 py-1
                 shadow-sm outline-none"
                tabIndex={2}
              >
                {/* Tab Flex Container */}
                <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                  {/* Tab Title */}
                  <h3 className="ease font-bold text-black transition duration-500 group-hover:text-red-500">
                    Q3. Is there a mobile app?{" "}
                  </h3>
                  {/* Arrow */}
                  <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                    <BiChevronDown className="text-3xl" />
                  </div>
                </div>
                {/* Inner Content */}
                <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                  <p className="py-2 text-justify text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Tab 4 */}
              <div
                className="group rounded-xl border border-gray-500 p-8 py-1
                 shadow-sm outline-none"
                tabIndex={1}
              >
                {/* Tab Flex Container */}
                <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                  {/* Tab Title */}
                  <h3 className="ease font-bold text-black transition duration-500 group-hover:text-red-500">
                    Q4. What about other Chromium browsers?
                  </h3>
                  {/* Arrow */}
                  <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                    <BiChevronDown className="text-3xl" />
                  </div>
                </div>
                {/* Inner Content */}
                <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                  <p className="py-2 text-justify text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-10 mt-0 xl:mt-32">
          <img
            src="./images/lady-laptop.svg"
            alt="lady"
            className=" w-3/4 xl:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
