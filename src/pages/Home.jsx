import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import TrustedBy from "../components/landing/TrustedBy";
import Features from "../components/landing/Features";
import Showcase from "../components/landing/Showcase";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="py-16">
        <TrustedBy />
      </div>
      <div className="py-20">
        <Features />
      </div>
      <div className="py-20">
        <Showcase />
      </div>
      <div className="py-20">
        <Testimonials />
      </div>
      <div className="py-20">
        <FAQ />
      </div>
      <div className="py-16">
        <CTA />
      </div>
    </div>
  );
};

export default Home;
