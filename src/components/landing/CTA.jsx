import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTA = () => {
  const benefits = [
    "Free 14-day trial",
    "No credit card required",
    "Cancel anytime",
    "24/7 customer support",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white blur-xl"></div>
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-white blur-xl"></div>
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white blur-xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
          Ready to make your team
          <br />
          <span className="text-yellow-300">bloom with productivity?</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Join over 50,000 teams who have transformed their workflow with
          Blumio. Start your journey to better collaboration today.
        </p>

        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/login"
            className="group flex transform items-center justify-center space-x-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Start your free trial</span>
            <FiArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
            Schedule a demo
          </button>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center justify-center space-x-2 text-blue-100"
            >
              <FiCheck className="h-4 w-4 text-yellow-300" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
