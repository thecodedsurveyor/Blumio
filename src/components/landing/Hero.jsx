import { FiArrowRight, FiPlay } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 pb-8 pt-20 sm:pb-16 sm:pt-24">
      <div className="mx-auto w-[80%] max-w-none px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 px-3 py-1.5 sm:px-4 sm:py-2">
              <BsStars className="h-3 w-3 text-blue-600 sm:h-4 sm:w-4" />
              <span className="text-xs font-medium text-gray-700 sm:text-sm">
                Trusted by 50,000+ teams worldwide
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-gray-900">Transform your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                workflow into
              </span>
              <br />
              <span className="text-gray-900">pure magic</span>
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
              Blumio brings all your projects, tasks, and team collaboration
              into one beautiful, intuitive platform. Watch your productivity
              bloom like never before.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/login"
                className="group flex transform items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
              >
                <span>Start growing today</span>
                <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>

              <button className="group flex transform items-center justify-center space-x-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg sm:px-8 sm:py-4 sm:text-lg">
                <FiPlay className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                <span>Watch demo</span>
              </button>
            </div>

            <div className="flex flex-col items-start space-y-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 sm:text-sm lg:space-x-8">
              <div>✓ Free 14-day trial</div>
              <div>✓ No credit card required</div>
              <div>✓ Cancel anytime</div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative mt-8 lg:mt-0">
            <div className="rotate-1 transform rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 p-4 transition-transform duration-500 hover:rotate-0 sm:rotate-3 sm:rounded-3xl sm:p-6 lg:p-8">
              <div className="rounded-xl bg-white p-3 shadow-xl sm:rounded-2xl sm:p-4 lg:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="h-2 w-2 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                    </div>
                    <div className="text-xs text-gray-400">blumio.app</div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-3 w-3/4 rounded bg-gradient-to-r from-blue-200 to-emerald-200 sm:h-4"></div>
                    <div className="h-3 w-1/2 rounded bg-gray-200 sm:h-4"></div>
                    <div className="h-3 w-2/3 rounded bg-gradient-to-r from-emerald-200 to-blue-200 sm:h-4"></div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:rounded-xl sm:p-4">
                      <div className="mb-2 h-6 w-6 rounded-md bg-blue-500 sm:h-8 sm:w-8 sm:rounded-lg"></div>
                      <div className="mb-1 h-2 w-full rounded bg-blue-300 sm:h-3"></div>
                      <div className="h-1.5 w-2/3 rounded bg-blue-200 sm:h-2"></div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 p-3 sm:rounded-xl sm:p-4">
                      <div className="mb-2 h-6 w-6 rounded-md bg-emerald-500 sm:h-8 sm:w-8 sm:rounded-lg"></div>
                      <div className="mb-1 h-2 w-full rounded bg-emerald-300 sm:h-3"></div>
                      <div className="h-1.5 w-2/3 rounded bg-emerald-200 sm:h-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-2 -top-2 flex h-12 w-12 animate-bounce items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-emerald-400 sm:-right-4 sm:-top-4 sm:h-16 sm:w-16 sm:rounded-2xl">
              <BsStars className="h-6 w-6 text-white sm:h-8 sm:w-8" />
            </div>

            <div className="absolute -bottom-2 -left-2 flex h-10 w-10 animate-pulse items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-blue-400 sm:-bottom-4 sm:-left-4 sm:h-12 sm:w-12 sm:rounded-xl">
              <span className="text-sm font-bold text-white sm:text-base">
                ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
