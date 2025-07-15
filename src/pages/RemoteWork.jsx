import {
  FaHome,
  FaGlobe,
  FaVideo,
  FaComments,
  FaClock,
  FaChartLine,
  FaShield,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaMobile,
  FaWifi,
  FaStar,
  FaCheck,
  FaArrowRight,
  FaLaptop,
  FaHeadset,
  FaCloud,
} from "react-icons/fa";

const RemoteWork = () => {
  const features = [
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: "Distributed Team Management",
      description:
        "Coordinate remote teams across different time zones with centralized project management and clear communication.",
    },
    {
      icon: <FaComments className="text-3xl text-green-500" />,
      title: "Async Communication",
      description:
        "Enable effective asynchronous communication with threaded discussions, status updates, and progress tracking.",
    },
    {
      icon: <FaClock className="text-3xl text-purple-500" />,
      title: "Time Zone Coordination",
      description:
        "Schedule meetings and deadlines across multiple time zones with intelligent scheduling tools.",
    },
    {
      icon: <FaChartLine className="text-3xl text-orange-500" />,
      title: "Remote Productivity Tracking",
      description:
        "Monitor team productivity and project progress with visual dashboards and automated reporting.",
    },
    {
      icon: <FaVideo className="text-3xl text-red-500" />,
      title: "Virtual Collaboration",
      description:
        "Integrate with video conferencing tools and create virtual workspaces for seamless collaboration.",
    },
    {
      icon: <FaShield className="text-3xl text-gray-600" />,
      title: "Secure Remote Access",
      description:
        "Ensure data security with enterprise-grade encryption and secure remote access controls.",
    },
    {
      icon: <FaFileAlt className="text-3xl text-blue-600" />,
      title: "Document Collaboration",
      description:
        "Share, edit, and collaborate on documents in real-time with version control and access permissions.",
    },
    {
      icon: <FaMobile className="text-3xl text-green-600" />,
      title: "Mobile-First Design",
      description:
        "Stay connected and productive from anywhere with our mobile-optimized interface and apps.",
    },
  ];

  const challenges = [
    {
      challenge: "Communication Gaps",
      solution: "Centralized Communication Hub",
      description:
        "Keep all team communications in one place with threaded discussions and notifications.",
      icon: <FaComments className="text-2xl text-blue-500" />,
    },
    {
      challenge: "Time Zone Coordination",
      solution: "Smart Scheduling Tools",
      description:
        "Automatically find optimal meeting times and set deadlines across time zones.",
      icon: <FaClock className="text-2xl text-green-500" />,
    },
    {
      challenge: "Productivity Tracking",
      solution: "Visual Progress Dashboards",
      description:
        "Monitor team productivity with real-time dashboards and automated reports.",
      icon: <FaChartLine className="text-2xl text-purple-500" />,
    },
    {
      challenge: "Document Management",
      solution: "Collaborative Workspaces",
      description:
        "Organize and share documents with version control and secure access.",
      icon: <FaFileAlt className="text-2xl text-orange-500" />,
    },
  ];

  const benefits = [
    {
      title: "Improved Communication",
      description:
        "Teams report 60% better communication with centralized tools",
      stat: "60%",
      metric: "better communication",
    },
    {
      title: "Increased Productivity",
      description: "Remote teams become 45% more productive with proper tools",
      stat: "45%",
      metric: "more productive",
    },
    {
      title: "Reduced Meetings",
      description: "Async communication reduces unnecessary meetings by 40%",
      stat: "40%",
      metric: "fewer meetings",
    },
    {
      title: "Better Work-Life Balance",
      description: "85% of remote workers report improved work-life balance",
      stat: "85%",
      metric: "better balance",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Remote Team Lead",
      company: "TechCorp",
      quote:
        "Blumio transformed how our distributed team collaborates. We're more connected than ever, despite being across 5 time zones.",
      rating: 5,
    },
    {
      name: "Marcus Kim",
      role: "VP of Engineering",
      company: "StartupXYZ",
      quote:
        "Managing a fully remote engineering team was challenging until we found Blumio. Now our productivity is through the roof.",
      rating: 5,
    },
    {
      name: "Sarah Ahmed",
      role: "Project Manager",
      company: "Global Solutions",
      quote:
        "The async communication features are game-changing. Our team can collaborate effectively across different time zones.",
      rating: 5,
    },
  ];

  const integrations = [
    { name: "Slack", icon: "💬", description: "Team communication" },
    { name: "Zoom", icon: "📹", description: "Video conferencing" },
    { name: "Google Drive", icon: "📁", description: "File storage" },
    {
      name: "Microsoft Teams",
      icon: "👥",
      description: "Collaboration platform",
    },
    { name: "Calendly", icon: "📅", description: "Meeting scheduling" },
    { name: "Notion", icon: "📝", description: "Documentation" },
  ];

  const pricingFeatures = [
    "Unlimited remote team members",
    "Advanced time zone tools",
    "Async communication features",
    "Video integration",
    "Mobile apps",
    "Advanced security",
    "Custom workflows",
    "24/7 priority support",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Empower Your Remote Team
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                Bridge the distance with powerful remote work tools. Keep your
                distributed team connected, productive, and aligned, no matter
                where they are in the world.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                  Start Free Trial
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <img
                src="/images/remote-work-hero.svg"
                alt="Remote work team collaboration"
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
              Why Remote Teams Choose Blumio
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Join thousands of remote teams that have revolutionized their
              collaboration with Blumio.
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
                <div className="mt-2 text-sm font-semibold text-blue-600">
                  {benefit.metric}
                </div>
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
              Built for Remote Work Success
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Comprehensive tools designed specifically for distributed teams
              and remote collaboration.
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

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Solving Remote Work Challenges
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We understand the unique challenges of remote work and have built
              solutions for each one.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {challenges.map((item, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center gap-4">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.challenge}
                    </h3>
                    <div className="text-sm text-gray-500">Challenge</div>
                  </div>
                </div>
                <div className="mb-4 rounded-lg bg-green-50 p-4">
                  <h4 className="mb-2 font-bold text-green-800">
                    {item.solution}
                  </h4>
                  <p className="text-green-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Integrates with Your Remote Work Stack
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Connect with the tools your remote team already uses and loves.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-6 text-center"
              >
                <div className="mb-4 text-4xl">{integration.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {integration.name}
                </h3>
                <p className="text-gray-600">{integration.description}</p>
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
              What Remote Teams Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from distributed teams that have transformed their
              remote work experience.
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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Remote Work Plan
            </h2>
            <p className="text-xl text-gray-600">
              Everything your remote team needs to collaborate effectively.
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Remote Team Plan
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-blue-600">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Per team (up to 25 members)</p>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Remote Team?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of remote teams that have already discovered the
            power of effective distributed collaboration with Blumio.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Start Free 14-Day Trial
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Schedule Demo <FaArrowRight />
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90">
            No credit card required • Cancel anytime • Setup in minutes
          </p>
        </div>
      </section>
    </div>
  );
};

export default RemoteWork;
