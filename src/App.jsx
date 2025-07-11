import Clients from "./components/Clients";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Newsletter from "./components/Newsletter";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Clients />
      <Features />
      <Testimonial />
      <div className="mt-4 bg-white px-4 xl:mt-20 xl:px-20">
        <Faqs />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default App;
