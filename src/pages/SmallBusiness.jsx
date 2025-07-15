import {
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaDollarSign,
  FaClock,
  FaShield,
  FaMobile,
  FaCloud,
  FaHeadset,
  FaArrowRight,
  FaStar,
  FaCheck,
} from "react-icons/fa";

const SmallBusiness = () => {
  const features = [
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: "Team Collaboration",
      description:
        "Keep your small team aligned with shared projects, task assignments, and real-time updates.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-green-500" />,
      title: "Project Planning",
      description:
        "Plan and track projects with intuitive timelines, milestones, and deadline management.",
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-500" />,
      title: "Progress Tracking",
      description:
        "Monitor team productivity and project progress with visual dashboards and reports.",
    },
    {
      icon: <FaDollarSign className="text-3xl text-green-600" />,
      title: "Budget Management",
      description:
        "Track project costs, manage budgets, and control expenses with built-in financial tools.",
    },
    {
      icon: <FaClock className="text-3xl text-orange-500" />,
      title: "Time Tracking",
      description:
        "Accurately track time spent on tasks and projects for better resource allocation.",
    },
    {
      icon: <FaShield className="text-3xl text-red-500" />,
      title: "Data Security",
      description:
        "Keep your business data secure with enterprise-grade security and regular backups.",
    },
    {
      icon: <FaMobile className="text-3xl text-blue-600" />,
      title: "Mobile Access",
      description:
        "Manage your business on-the-go with our mobile apps for iOS and Android.",
    },
    {
      icon: <FaCloud className="text-3xl text-gray-500" />,
      title: "Cloud Storage",
      description:
        "Store and share files securely in the cloud with unlimited storage options.",
    },
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      description: "Teams using Blumio report 40% increase in productivity",
      stat: "40%",
    },
    {
      title: "Reduced Costs",
      description: "Save money by eliminating multiple tools and subscriptions",
      stat: "$2,400",
    },
    {
      title: "Faster Delivery",
      description: "Complete projects 25% faster with better coordination",
      stat: "25%",
    },
    {
      title: "Better Communication",
      description: "Reduce email by 60% with centralized communication",
      stat: "60%",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Founder, Creative Studio",
      company: "Design Co.",
      image: "/images/testimonials/sarah.jpg",
      quote:
        "Blumio transformed how we manage client projects. We're more organized, efficient, and our clients love the transparency.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "CEO",
      company: "Tech Startup",
      image: "/images/testimonials/mike.jpg",
      quote:
        "As a growing startup, Blumio scales with us. It's affordable, powerful, and our team adopted it immediately.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      role: "Operations Manager",
      company: "Local Business",
      image: "/images/testimonials/lisa.jpg",
      quote:
        "We've tried many tools, but Blumio is the only one that actually simplified our workflow instead of complicating it.",
      rating: 5,
    },
  ];

  const pricingFeatures = [
    "Up to 10 team members",
    "Unlimited projects",
    "Basic reporting",
    "Mobile apps",
    "Email support",
    "File storage (10GB)",
    "Basic integrations",
    "Task management",
  ];

  const useCases = [
    {
      title: "Marketing Agency",
      description:
        "Manage multiple client campaigns, track deliverables, and coordinate creative teams.",
      icon: <FaChartLine className="text-2xl text-pink-500" />,
    },
    {
      title: "Consulting Firm",
      description:
        "Track billable hours, manage client projects, and deliver reports on time.",
      icon: <FaUsers className="text-2xl text-blue-500" />,
    },
    {
      title: "E-commerce Store",
      description:
        "Coordinate inventory, marketing campaigns, and customer service operations.",
      icon: <FaDollarSign className="text-2xl text-green-500" />,
    },
    {
      title: "Local Service Business",
      description:
        "Schedule appointments, manage field teams, and track service delivery.",
      icon: <FaClock className="text-2xl text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Built for Small Business Success
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                Streamline your operations, boost productivity, and grow your
                business with Blumio's comprehensive project management solution
                designed specifically for small teams.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                  Start Free Trial
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <img
                src="/images/small-business-hero.svg"
                alt="Small business team collaboration"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Why Small Businesses Choose Blumio
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Join thousands of small businesses that have transformed their
              operations with Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 text-4xl font-bold text-blue-600">
                  {benefit.stat}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Everything Your Small Business Needs
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Powerful features designed to help small businesses stay organized
              and efficient.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-6 transition-transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Perfect for Every Type of Small Business
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              See how different industries use Blumio to streamline their
              operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              What Small Business Owners Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real businesses that have grown with Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-8">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Affordable Pricing for Small Business
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our small business plan designed for growing
              teams.
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Small Business Plan
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-blue-600">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">
                  Perfect for teams of up to 10 people
                </p>
              </div>

              <div className="mb-8 space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheck className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of small businesses that have streamlined their
            operations and boosted productivity with Blumio.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-colors hover:bg-gray-100">
              Start Free 14-Day Trial
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">
              Schedule Demo <FaArrowRight />
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90">
            No credit card required • Cancel anytime • 24/7 support
          </p>
        </div>
      </section>
    </div>
  );
};

export default SmallBusiness;
