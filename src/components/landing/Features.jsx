import {
  FiZap,
  FiUsers,
  FiBarChart,
  FiShield,
  FiRefreshCw,
  FiSmartphone,
  FiClock,
  FiGlobe,
  FiSettings,
} from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized platform that keeps your team moving at the speed of thought.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      icon: FiUsers,
      title: "Team Collaboration",
      description:
        "Seamlessly collaborate with your team in real-time, share ideas, and build amazing things together.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: FiBarChart,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your team's productivity and project progress with beautiful, actionable analytics.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: FiShield,
      title: "Enterprise Security",
      description:
        "Your data is protected with bank-level security, end-to-end encryption, and compliance with industry standards.",
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
    {
      icon: FiRefreshCw,
      title: "Smart Automation",
      description:
        "Automate repetitive tasks and workflows so your team can focus on what matters most - creating value.",
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: FiSmartphone,
      title: "Mobile First",
      description:
        "Access your work anywhere, anytime with our beautiful mobile apps designed for productivity on the go.",
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
    },
    {
      icon: FiClock,
      title: "Time Tracking",
      description:
        "Built-in time tracking helps you understand where your time goes and optimize your workflow for maximum efficiency.",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
    },
    {
      icon: FiGlobe,
      title: "Global Collaboration",
      description:
        "Work seamlessly with team members across different time zones with real-time updates and notifications.",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: FiSettings,
      title: "Custom Workflows",
      description:
        "Create custom workflows that match your team's unique processes and automate repetitive tasks effortlessly.",
      color: "from-gray-400 to-slate-500",
      bgColor: "from-gray-50 to-slate-50",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-[80%] max-w-none px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Features that make you
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              bloom
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg lg:text-xl">
            Discover the powerful features that help teams of all sizes achieve
            more, collaborate better, and grow faster than ever before.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group transform rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-200 hover:shadow-xl sm:rounded-2xl sm:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`inline-flex rounded-lg bg-gradient-to-br p-2.5 ${feature.bgColor} mb-4 shadow-sm transition-shadow duration-200 group-hover:shadow-md sm:mb-6 sm:rounded-xl sm:p-3`}
              >
                <feature.icon
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${
                    feature.title === "Lightning Fast"
                      ? "text-orange-500"
                      : feature.title === "Team Collaboration"
                      ? "text-blue-500"
                      : feature.title === "Advanced Analytics"
                      ? "text-emerald-500"
                      : feature.title === "Enterprise Security"
                      ? "text-red-500"
                      : feature.title === "Smart Automation"
                      ? "text-purple-500"
                      : feature.title === "Mobile First"
                      ? "text-cyan-500"
                      : feature.title === "Time Tracking"
                      ? "text-indigo-500"
                      : feature.title === "Global Collaboration"
                      ? "text-green-500"
                      : feature.title === "Custom Workflows"
                      ? "text-gray-600"
                      : "text-blue-500"
                  }`}
                />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {feature.description}
              </p>

              <div className="mt-4 flex items-center text-blue-600 transition-colors duration-200 group-hover:text-emerald-600 sm:mt-6">
                <span className="text-xs font-medium sm:text-sm">
                  Learn more
                </span>
                <svg
                  className="ml-2 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
