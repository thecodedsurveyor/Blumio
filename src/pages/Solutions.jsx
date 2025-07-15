import {
  FaBuilding,
  FaUsers,
  FaUser,
  FaHome,
  FaRocket,
  FaGraduationCap,
  FaHeart,
  FaCode,
  FaPalette,
  FaCogs,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

const Solutions = () => {
  const byCompanySize = [
    {
      icon: <FaBuilding className="text-4xl text-blue-600" />,
      title: "Enterprise",
      description:
        "Comprehensive solutions for large organizations with advanced security, compliance, and scalability features.",
      features: [
        "Advanced security & compliance",
        "Custom integrations",
        "Dedicated support",
        "Enterprise SSO",
      ],
      users: "1000+ employees",
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Small & Medium Business",
      description:
        "Perfect for growing teams that need powerful collaboration tools without enterprise complexity.",
      features: [
        "Team collaboration tools",
        "Project templates",
        "Time tracking",
        "Basic integrations",
      ],
      users: "10-1000 employees",
    },
    {
      icon: <FaUser className="text-4xl text-purple-600" />,
      title: "Personal Use",
      description:
        "Individual productivity tools to organize your personal tasks, goals, and daily routines.",
      features: [
        "Personal task management",
        "Goal tracking",
        "Habit building",
        "Mobile apps",
      ],
      users: "Individual users",
    },
    {
      icon: <FaHome className="text-4xl text-orange-600" />,
      title: "Remote Work",
      description:
        "Essential tools for distributed teams to stay connected and productive from anywhere.",
      features: [
        "Virtual collaboration",
        "Async communication",
        "Time zone management",
        "Digital whiteboard",
      ],
      users: "Remote teams",
    },
  ];

  const byIndustry = [
    {
      icon: <FaRocket className="text-4xl text-red-500" />,
      title: "Startups",
      description:
        "Fast-moving tools for early-stage companies building innovative products.",
      features: [
        "Rapid prototyping",
        "Lean workflows",
        "Investor reporting",
        "Growth tracking",
      ],
    },
    {
      icon: <FaGraduationCap className="text-4xl text-indigo-500" />,
      title: "Education",
      description:
        "Learning management and collaboration tools for educational institutions.",
      features: [
        "Course management",
        "Student collaboration",
        "Assignment tracking",
        "Grade integration",
      ],
    },
    {
      icon: <FaHeart className="text-4xl text-pink-500" />,
      title: "Nonprofits",
      description:
        "Specialized tools for mission-driven organizations and volunteer coordination.",
      features: [
        "Volunteer management",
        "Donation tracking",
        "Event planning",
        "Grant reporting",
      ],
    },
    {
      icon: <FaCode className="text-4xl text-cyan-500" />,
      title: "Software Development",
      description:
        "Developer-focused tools for agile teams and technical project management.",
      features: [
        "Sprint planning",
        "Code integration",
        "Bug tracking",
        "Release management",
      ],
    },
  ];

  const byUseCase = [
    {
      icon: <FaCogs className="text-4xl text-gray-600" />,
      title: "Project Management",
      description:
        "End-to-end project planning, execution, and delivery management.",
      features: [
        "Gantt charts",
        "Resource allocation",
        "Risk management",
        "Budget tracking",
      ],
    },
    {
      icon: <FaPalette className="text-4xl text-yellow-500" />,
      title: "Creative Teams",
      description:
        "Visual collaboration tools for designers, marketers, and creative professionals.",
      features: [
        "Design reviews",
        "Brand management",
        "Campaign planning",
        "Asset library",
      ],
    },
    {
      icon: <FaChartBar className="text-4xl text-emerald-500" />,
      title: "Operations",
      description:
        "Streamline business operations with workflow automation and process optimization.",
      features: [
        "Process automation",
        "SOP management",
        "Quality control",
        "Performance metrics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Solutions for Every Team
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Discover how Blumio adapts to your unique needs, whether you're a
            startup, enterprise, or anywhere in between.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-600 transition-colors hover:bg-gray-100">
            Find Your Solution <FaArrowRight />
          </button>
        </div>
      </section>

      {/* By Company Size */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Solutions by Company Size
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              From solo entrepreneurs to Fortune 500 companies, we have the
              right solution for your team size.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {byCompanySize.map((solution, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {solution.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-blue-600">
                  {solution.users}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Industry-Specific Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Tailored features and workflows designed for your industry's
              unique challenges.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {byIndustry.map((solution, index) => (
              <div
                key={index}
                className="rounded-xl border bg-gray-50 p-6 transition-colors hover:border-blue-500"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {solution.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Use Case */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Solutions by Use Case
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Specialized workflows and features for different types of work and
              collaboration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {byUseCase.map((solution, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-6">{solution.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  {solution.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Trusted by Teams Worldwide
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white bg-opacity-10 p-6">
              <div className="mb-2 text-3xl font-bold">100,000+</div>
              <div className="text-lg">Active Teams</div>
            </div>
            <div className="rounded-xl bg-white bg-opacity-10 p-6">
              <div className="mb-2 text-3xl font-bold">50M+</div>
              <div className="text-lg">Tasks Completed</div>
            </div>
            <div className="rounded-xl bg-white bg-opacity-10 p-6">
              <div className="mb-2 text-3xl font-bold">99.9%</div>
              <div className="text-lg">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Let us help you choose the right plan and features for your team's
            unique needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-green-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-green-700">
              Get Personalized Demo
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
