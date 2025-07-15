import {
  FaTasks,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaMobile,
  FaCloud,
  FaRocket,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const Products = () => {
  const features = [
    {
      icon: <FaTasks className="text-4xl text-blue-500" />,
      title: "Task Management",
      description:
        "Organize, prioritize, and track your tasks with powerful project management tools that keep your team aligned and productive.",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-green-500" />,
      title: "Smart Scheduling",
      description:
        "AI-powered scheduling that automatically optimizes your calendar and suggests the best times for meetings and focused work.",
    },
    {
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "Team Collaboration",
      description:
        "Real-time collaboration features including shared workspaces, instant messaging, and file sharing for seamless teamwork.",
    },
    {
      icon: <FaChartLine className="text-4xl text-red-500" />,
      title: "Analytics & Reporting",
      description:
        "Comprehensive insights into productivity patterns, team performance, and project progress with customizable dashboards.",
    },
    {
      icon: <FaMobile className="text-4xl text-indigo-500" />,
      title: "Mobile Apps",
      description:
        "Native iOS and Android apps that sync seamlessly with the web platform, ensuring you stay productive on the go.",
    },
    {
      icon: <FaCloud className="text-4xl text-cyan-500" />,
      title: "Cloud Storage",
      description:
        "Secure cloud storage with unlimited file uploads, version control, and automatic backups to keep your data safe.",
    },
  ];

  const products = [
    {
      name: "Blumio Free",
      price: "Free",
      description:
        "Perfect for individuals and small teams getting started with task management.",
      features: [
        "Up to 15 team members",
        "Unlimited personal tasks",
        "Basic integrations",
        "Community support",
      ],
      icon: <FaRocket className="text-2xl text-blue-500" />,
    },
    {
      name: "Blumio Premium",
      price: "$10.99/month",
      description:
        "Advanced features for growing teams and businesses that need more power.",
      features: [
        "Unlimited team members",
        "Advanced reporting",
        "Priority integrations",
        "24/7 support",
      ],
      icon: <FaShieldAlt className="text-gold-500 text-2xl" />,
    },
    {
      name: "Blumio Enterprise",
      price: "Custom pricing",
      description:
        "Tailored solutions for large organizations with enterprise-grade security.",
      features: [
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "Custom training",
      ],
      icon: <FaCloud className="text-2xl text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-[80%] max-w-none px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Powerful Tools for Every Team
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-base sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
            Transform the way your team works with our comprehensive suite of
            productivity tools designed for modern workplaces.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-gray-100">
            Start Free Trial <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-24">
        <div className="mx-auto w-[80%] max-w-none px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Discover the powerful features that make Blumio the choice of over
              100,000+ teams worldwide.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="bg-white py-24">
        <div className="mx-auto w-[80%] max-w-none px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect plan for your team size and needs.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-xl border-2 border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="mb-6 text-center">
                  {product.icon}
                  <h3 className="mb-2 mt-4 text-2xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="mb-4 text-3xl font-bold text-blue-600">
                    {product.price}
                  </div>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-24 text-white">
        <div className="mx-auto w-[80%] max-w-none px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of teams who have already revolutionized their
            productivity with Blumio.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
              Start Free Trial
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
