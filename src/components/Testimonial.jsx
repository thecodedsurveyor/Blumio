import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render as well

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMdScreen) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMdScreen]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const testimonialsToShow = isMdScreen
    ? testimonials
    : [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
      ];

  return (
    <section className="mt-8 flex flex-col items-center p-4 xl:px-20">
      <h3 className="text-md mb-4 text-blue-500">Testimonials</h3>
      <p className="text-center text-xl font-bold leading-snug text-black xl:w-1/3 xl:text-4xl">
        Check What Our Clients Think About Us
      </p>
      <div
        className={`mt-8 flex ${
          isMdScreen ? "flex-wrap justify-center" : "flex-col"
        } gap-4 text-black md:flex-row xl:mt-36 xl:gap-12`}
      >
        {testimonialsToShow.map((testimonial, index) => (
          <div
            key={index}
            className="relative mt-20 flex flex-col items-center gap-2 rounded-xl border border-gray-300 bg-white p-8 md:mt-0"
          >
            <img
              className="absolute -top-16 rounded-full"
              src={testimonial.image}
              alt="profile"
            />
            <h3 className="mt-4 text-2xl font-bold text-black">
              {testimonial.name}
            </h3>
            <p>{testimonial.role}</p>
            <p className="text-center">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
      {!isMdScreen && (
        <div className="mt-16 flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-4 w-4 rounded-full border border-black ${
                index === activeIndex ? "bg-black" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonial;
