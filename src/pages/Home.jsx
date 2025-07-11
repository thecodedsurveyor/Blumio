import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Faqs from "../components/Faqs";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="pt-0 lg:pt-0">
      <Hero />
      <Clients />
      <Features />
      <Testimonial />
      <div className="mt-4 bg-white px-4 xl:mt-20 xl:px-20">
        <Faqs />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
