import {
  FaRocket,
  FaChartLine,
  FaDollarSign,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaShield,
  FaGlobe,
  FaCode,
  FaBullhorn,
  FaHandshake,
  FaAward,
  FaStar,
  FaCheck,
  FaArrowRight,
  FaFire,
  FaTarget,
  FaGem,
} from "react-icons/fa";

const Startups = () => {
  const features = [
    {
      icon: <FaRocket className="text-3xl text-blue-500" />,
      title: "Rapid Scaling",
      description:
        "Scale your team and operations quickly with flexible project management that grows with your startup.",
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: "Growth Tracking",
      description:
        "Monitor key metrics, track OKRs, and visualize your startup's growth with powerful analytics.",
    },
    {
      icon: <FaDollarSign className="text-3xl text-purple-500" />,
      title: "Budget Management",
      description:
        "Keep tight control over your burn rate with built-in budget tracking and expense management.",
    },
    {
      icon: <FaUsers className="text-3xl text-orange-500" />,
      title: "Team Collaboration",
      description:
        "Foster collaboration across your growing team with real-time communication and shared workspaces.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Innovation Pipeline",
      description:
        "Manage your product roadmap, feature requests, and innovation pipeline in one central place.",
    },
    {
      icon: <FaClock className="text-3xl text-red-500" />,
      title: "Time-to-Market",
      description:
        "Accelerate your time-to-market with agile project management and streamlined workflows.",
    },
    {
      icon: <FaShield className="text-3xl text-gray-600" />,
      title: "Investor Reporting",
      description:
        "Generate professional reports for investors with automated data collection and visualization.",
    },
    {
      icon: <FaGlobe className="text-3xl text-blue-600" />,
      title: "Global Remote Teams",
      description:
        "Coordinate distributed teams across time zones with advanced collaboration tools.",
    },
  ];

  const startupStages = [
    {
      stage: "Pre-Seed",
      title: "Idea to MVP",
      description:
        "Organize your ideas, validate concepts, and build your first product.",
      features: [
        "Idea management",
        "MVP planning",
        "Team formation",
        "Basic project tracking",
      ],
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
    },
    {
      stage: "Seed",
      title: "Product-Market Fit",
      description:
        "Iterate quickly, gather feedback, and find your product-market fit.",
      features: [
        "Customer feedback",
        "Rapid iteration",
        "Growth metrics",
        "Team scaling",
      ],
      icon: <FaFire className="text-3xl text-orange-500" />,
    },
    {
      stage: "Series A",
      title: "Scale & Growth",
      description:
        "Scale your operations, expand your team, and accelerate growth.",
      features: [
        "Department organization",
        "Process optimization",
        "Advanced analytics",
        "Investor reporting",
      ],
      icon: <FaChartLine className="text-3xl text-green-500" />,
    },
    {
      stage: "Series B+",
      title: "Market Leadership",
      description:
        "Establish market leadership and prepare for enterprise-level operations.",
      features: [
        "Enterprise features",
        "Advanced security",
        "Custom workflows",
        "Priority support",
      ],
      icon: <FaGem className="text-3xl text-purple-500" />,
    },
  ];

  const benefits = [
    {
      title: "Faster Time-to-Market",
      description: "Launch products 50% faster with streamlined workflows",
      stat: "50%",
      metric: "faster launches",
    },
    {
      title: "Improved Team Productivity",
      description: "Startup teams report 3x productivity improvement",
      stat: "3x",
      metric: "more productive",
    },
    {
      title: "Better Investor Relations",
      description: "90% of startups improve investor communication",
      stat: "90%",
      metric: "better reporting",
    },
    {
      title: "Reduced Operational Costs",
      description: "Save up to $10K monthly on tools and processes",
      stat: "$10K",
      metric: "monthly savings",
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      company: "TechFlow",
      stage: "Series A",
      quote:
        "Blumio helped us scale from 5 to 50 people seamlessly. It's the backbone of our operations.",
      rating: 5,
    },
    {
      name: "Sarah Kim",
      role: "Founder",
      company: "EcoStart",
      stage: "Seed",
      quote:
        "As a first-time founder, Blumio's templates and workflows saved me months of figuring things out.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "AILabs",
      stage: "Series B",
      quote:
        "The investor reporting features are incredible. We can generate comprehensive reports in minutes.",
      rating: 5,
    },
  ];

  const useCases = [
    {
      title: "Product Development",
      description:
        "Manage your product roadmap, feature development, and release cycles.",
      icon: <FaCode className="text-2xl text-blue-500" />,
      features: [
        "Roadmap planning",
        "Sprint management",
        "Feature tracking",
        "Release coordination",
      ],
    },
    {
      title: "Marketing & Growth",
      description:
        "Plan and execute growth strategies, marketing campaigns, and user acquisition.",
      icon: <FaBullhorn className="text-2xl text-green-500" />,
      features: [
        "Campaign planning",
        "Growth metrics",
        "Content calendar",
        "Lead tracking",
      ],
    },
    {
      title: "Fundraising",
      description:
        "Organize your fundraising process, track investor relations, and manage due diligence.",
      icon: <FaHandshake className="text-2xl text-purple-500" />,
      features: [
        "Investor pipeline",
        "Due diligence",
        "Pitch deck versions",
        "Meeting tracking",
      ],
    },
    {
      title: "Operations",
      description:
        "Streamline daily operations, manage resources, and optimize workflows.",
      icon: <FaTarget className="text-2xl text-orange-500" />,
      features: [
        "Process optimization",
        "Resource allocation",
        "Workflow automation",
        "Performance tracking",
      ],
    },
  ];

  const pricingFeatures = [
    "Unlimited team members",
    "Advanced analytics & reporting",
    "Investor dashboard",
    "Custom workflows",
    "Priority support",
    "Advanced integrations",
    "Security & compliance",
    "Dedicated success manager",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Built for Startup Success
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                From idea to IPO, Blumio scales with your startup. Streamline
                operations, track growth, and focus on what matters most -
                building your vision.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
                  Start Free Trial
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
                  Book Startup Demo
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <img
                src="/images/startup-growth.svg"
                alt="Startup growth and scaling"
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
              Why Startups Choose Blumio
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Join thousands of startups that have accelerated their growth with
              Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 text-4xl font-bold text-purple-600">
                  {benefit.stat}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
                <div className="mt-2 text-sm font-semibold text-purple-600">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Stages */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Perfect for Every Stage of Your Journey
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              From pre-seed to Series B and beyond, Blumio adapts to your
              startup's evolving needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {startupStages.map((stage, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-8">
                <div className="mb-4 text-center">{stage.icon}</div>
                <div className="mb-2 text-center text-sm font-semibold uppercase tracking-wide text-purple-600">
                  {stage.stage}
                </div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-800">
                  {stage.title}
                </h3>
                <p className="mb-4 text-center text-gray-600">
                  {stage.description}
                </p>
                <div className="space-y-2">
                  {stage.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <FaCheck className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Startup-Focused Features
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Powerful tools designed specifically for the unique challenges and
              opportunities of startup life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105"
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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Everything Your Startup Needs
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Comprehensive solutions for every aspect of your startup
              operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-8">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {useCase.title}
                </h3>
                <p className="mb-4 text-gray-600">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <FaCheck className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              What Startup Founders Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from founders who have scaled their startups with
              Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
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
                    <div className="text-xs font-semibold text-purple-600">
                      {testimonial.stage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Startup-Friendly Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Special pricing for startups with all the features you need to
              scale.
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="mb-8 text-center">
                <div className="mb-2 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-600">
                  🚀 STARTUP PLAN
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Growth Plan
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-purple-600">
                    $99
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Everything you need to scale</p>
              </div>

              <div className="mb-8 space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheck className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-purple-700">
                Start Free Trial
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                💡 <strong>Startup Discount:</strong> Get 50% off for your first
                6 months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Scale Your Startup?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of successful startups that have chosen Blumio to
            power their growth. Start your free trial today and see the
            difference.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
              Start Free 30-Day Trial
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
              Book Startup Demo <FaArrowRight />
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90">
            No credit card required • 50% startup discount • Dedicated success
            manager
          </p>
        </div>
      </section>
    </div>
  );
};

export default Startups;
