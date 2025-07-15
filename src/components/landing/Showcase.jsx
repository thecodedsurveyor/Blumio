import { FiTrendingUp, FiTarget, FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";

const Showcase = () => {
  const stats = [
    {
      icon: FiTrendingUp,
      label: "Productivity Increase",
      value: "400%",
      color: "text-emerald-600",
    },
    {
      icon: FiTarget,
      label: "Project Success Rate",
      value: "98%",
      color: "text-blue-600",
    },
    {
      icon: FiAward,
      label: "Customer Satisfaction",
      value: "99.9%",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-[80%] max-w-none px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 px-4 py-2">
              <span className="text-sm font-medium text-gray-700">
                ✨ Boost Your Productivity
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Turn your vision into
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                reality
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-gray-600">
              Join thousands of teams who've transformed their workflow with
              Blumio. Our intuitive platform helps you manage projects,
              collaborate seamlessly, and achieve your goals faster than ever
              before.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="mb-2 flex items-center justify-center sm:justify-start">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/login"
              className="inline-block transform rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start your free trial
            </Link>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-2xl">
              <div className="overflow-hidden rounded-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Project Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-white/30"></div>
                      <div className="h-3 w-3 rounded-full bg-white/30"></div>
                      <div className="h-3 w-3 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="rounded-full bg-white/20 px-3 py-1 text-sm">
                      Active Projects: 12
                    </div>
                    <div className="rounded-full bg-white/20 px-3 py-1 text-sm">
                      Team Members: 24
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-blue-50 p-4">
                      <div className="mb-3 h-8 w-8 rounded-lg bg-blue-500"></div>
                      <div className="mb-2 h-3 rounded bg-blue-200"></div>
                      <div className="h-2 w-2/3 rounded bg-blue-100"></div>
                    </div>
                    <div className="rounded-xl bg-emerald-50 p-4">
                      <div className="mb-3 h-8 w-8 rounded-lg bg-emerald-500"></div>
                      <div className="mb-2 h-3 rounded bg-emerald-200"></div>
                      <div className="h-2 w-2/3 rounded bg-emerald-100"></div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="h-3 w-1/3 rounded bg-gray-300"></div>
                      <div className="h-6 w-16 rounded bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 rounded bg-gray-200"></div>
                      <div className="h-2 w-3/4 rounded bg-gray-200"></div>
                      <div className="h-2 w-1/2 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-6 -top-6 flex h-20 w-20 animate-bounce items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>

            <div className="absolute -bottom-6 -left-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg">
              <span className="text-xl">💡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
