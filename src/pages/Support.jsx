import {
  FaHeadset,
  FaComments,
  FaEnvelope,
  FaPhone,
  FaBook,
  FaVideo,
  FaUsers,
  FaRocket,
  FaClock,
  FaCheckCircle,
  FaQuestionCircle,
  FaLifeRing,
} from "react-icons/fa";

const Support = () => {
  const supportChannels = [
    {
      icon: <FaComments className="text-4xl text-blue-600" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat",
      color: "bg-blue-600",
    },
    {
      icon: <FaEnvelope className="text-4xl text-green-600" />,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "24/7",
      responseTime: "< 2 hours",
      action: "Send Email",
      color: "bg-green-600",
    },
    {
      icon: <FaPhone className="text-4xl text-purple-600" />,
      title: "Phone Support",
      description: "Speak directly with our support experts",
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate",
      action: "Call Now",
      color: "bg-purple-600",
    },
  ];

  const supportCategories = [
    {
      icon: <FaRocket className="text-3xl text-blue-600" />,
      title: "Getting Started",
      description: "Setup guides and onboarding help",
      articles: 15,
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Account & Billing",
      description: "Subscription, payments, and account management",
      articles: 12,
    },
    {
      icon: <FaBook className="text-3xl text-purple-600" />,
      title: "Features & How-To",
      description: "Learn how to use all Blumio features",
      articles: 28,
    },
    {
      icon: <FaLifeRing className="text-3xl text-orange-600" />,
      title: "Troubleshooting",
      description: "Solutions for common issues and errors",
      articles: 18,
    },
  ];

  const quickHelp = [
    {
      question: "How do I reset my password?",
      answer:
        "Click 'Forgot Password' on the login page and follow the email instructions.",
    },
    {
      question: "How do I invite team members?",
      answer:
        "Go to Settings > Team and click 'Invite Members' to send invitations.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your data from Settings > Data Export in multiple formats.",
    },
    {
      question: "How do I upgrade my plan?",
      answer:
        "Visit Settings > Billing to view and upgrade your subscription plan.",
    },
  ];

  const stats = [
    { number: "99.9%", label: "Customer Satisfaction" },
    { number: "< 2 min", label: "Average Response Time" },
    { number: "24/7", label: "Support Availability" },
    { number: "50+", label: "Support Articles" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaHeadset className="mx-auto mb-6 text-6xl" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            We're Here to Help
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Get the support you need to succeed with Blumio. Our team is ready
            to help you 24/7.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Start Live Chat
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Browse Help Center
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Choose Your Support Channel
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Multiple ways to get help, all designed to get you back on track
              quickly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-6 text-center">{channel.icon}</div>
                <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                  {channel.title}
                </h3>
                <p className="mb-6 text-center text-gray-600">
                  {channel.description}
                </p>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Availability:</span>
                    <span className="font-semibold text-gray-800">
                      {channel.availability}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-semibold text-gray-800">
                      {channel.responseTime}
                    </span>
                  </div>
                </div>

                <button
                  className={`w-full rounded-lg ${channel.color} px-6 py-3 font-semibold text-white transition-colors hover:opacity-90`}
                >
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Browse by Category
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Find help articles organized by topic and feature area.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {supportCategories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-gray-50 p-8 text-center transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                <div className="mb-6">{category.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
                <p className="mb-4 text-gray-600">{category.description}</p>
                <div className="text-sm font-semibold text-blue-600">
                  {category.articles} articles
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Quick Help
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Common questions and quick answers to get you unstuck fast.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {quickHelp.map((item, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="mb-3 flex items-start gap-3">
                    <FaQuestionCircle className="mt-1 text-blue-600" />
                    <h3 className="font-semibold text-gray-800">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 text-green-600" />
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Support */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-blue-900 p-12 text-center text-white">
            <FaUsers className="mx-auto mb-6 text-6xl" />
            <h2 className="mb-4 text-3xl font-bold">Enterprise Support</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Need priority support for your organization? Our Enterprise
              support includes dedicated account management and priority
              response times.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-gray-100">
                Learn More
              </button>
              <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Additional Resources
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              More ways to learn and get help with Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <FaVideo className="mx-auto mb-4 text-4xl text-blue-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Video Tutorials
              </h3>
              <p className="mb-6 text-gray-600">
                Step-by-step video guides covering all features and workflows.
              </p>
              <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
                Watch Now
              </button>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <FaUsers className="mx-auto mb-4 text-4xl text-green-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Community Forum
              </h3>
              <p className="mb-6 text-gray-600">
                Connect with other users and get help from the community.
              </p>
              <button className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-green-700">
                Join Forum
              </button>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <FaClock className="mx-auto mb-4 text-4xl text-purple-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Status Page
              </h3>
              <p className="mb-6 text-gray-600">
                Check real-time status and get updates on service issues.
              </p>
              <button className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-purple-700">
                View Status
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
