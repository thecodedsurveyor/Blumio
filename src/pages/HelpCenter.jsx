import {
  FaSearch,
  FaQuestionCircle,
  FaBook,
  FaVideo,
  FaComments,
  FaHeadset,
  FaRocket,
  FaUsers,
  FaCog,
  FaShieldAlt,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const HelpCenter = () => {
  const categories = [
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: "Getting Started",
      description: "Learn the basics of Blumio and set up your account",
      articleCount: 12,
      color: "bg-blue-50",
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Team Management",
      description: "Manage your team, permissions, and collaboration",
      articleCount: 18,
      color: "bg-green-50",
    },
    {
      icon: <FaCog className="text-4xl text-purple-600" />,
      title: "Features & Settings",
      description: "Explore all features and customize your workspace",
      articleCount: 25,
      color: "bg-purple-50",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-600" />,
      title: "Security & Privacy",
      description: "Account security, privacy settings, and compliance",
      articleCount: 8,
      color: "bg-orange-50",
    },
  ];

  const popularArticles = [
    {
      title: "How to create your first project",
      views: "15.2k views",
      category: "Getting Started",
    },
    {
      title: "Setting up team permissions",
      views: "12.8k views",
      category: "Team Management",
    },
    {
      title: "Integrating with Slack",
      views: "9.4k views",
      category: "Features & Settings",
    },
    {
      title: "Two-factor authentication setup",
      views: "7.9k views",
      category: "Security & Privacy",
    },
    {
      title: "Managing task priorities",
      views: "6.7k views",
      category: "Features & Settings",
    },
    {
      title: "Inviting team members",
      views: "5.3k views",
      category: "Team Management",
    },
  ];

  const faqs = [
    {
      question: "How do I upgrade my plan?",
      answer:
        "You can upgrade your plan at any time from your account settings. Go to Billing > Plans and select the plan that best fits your needs.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
    },
    {
      question: "How do I export my data?",
      answer:
        "You can export your data from Settings > Data Export. We support multiple formats including CSV, JSON, and PDF.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Yes! We have native mobile apps for both iOS and Android. Download them from the App Store or Google Play Store.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click 'Forgot Password' on the login page and follow the instructions sent to your email address.",
    },
  ];

  const supportOptions = [
    {
      icon: <FaComments className="text-3xl text-blue-600" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat",
    },
    {
      icon: <FaEnvelope className="text-3xl text-green-600" />,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 2 hours",
      action: "Send Email",
    },
    {
      icon: <FaPhone className="text-3xl text-purple-600" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Business hours",
      action: "Schedule Call",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaQuestionCircle className="mx-auto mb-6 text-6xl" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            How can we help you?
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Find answers to your questions, learn how to use Blumio effectively,
            and get the support you need.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full rounded-lg py-4 pl-12 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Browse by Category
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Find the help you need organized by topic and feature area.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`group cursor-pointer rounded-xl ${category.color} p-8 transition-all hover:-translate-y-2 hover:shadow-lg`}
              >
                <div className="mb-6">{category.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
                <p className="mb-4 text-gray-600">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.articleCount} articles
                  </span>
                  <FaChevronRight className="text-gray-400 group-hover:text-gray-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Popular Articles
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              The most helpful articles based on community feedback.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-lg border bg-white p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <FaChevronRight className="text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Quick answers to common questions about Blumio.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Still Need Help?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Our support team is here to help you succeed with Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-8 text-center"
              >
                <div className="mb-6">{option.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {option.title}
                </h3>
                <p className="mb-4 text-gray-600">{option.description}</p>
                <div className="mb-6 text-sm text-gray-500">
                  {option.availability}
                </div>
                <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <FaBook className="mx-auto mb-4 text-4xl text-blue-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                User Guide
              </h3>
              <p className="mb-6 text-gray-600">
                Comprehensive documentation covering all features and workflows.
              </p>
              <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
                Read Guide
              </button>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <FaVideo className="mx-auto mb-4 text-4xl text-green-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Video Tutorials
              </h3>
              <p className="mb-6 text-gray-600">
                Step-by-step video guides to help you master Blumio quickly.
              </p>
              <button className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-green-700">
                Watch Videos
              </button>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <FaHeadset className="mx-auto mb-4 text-4xl text-purple-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Training Sessions
              </h3>
              <p className="mb-6 text-gray-600">
                Live training sessions and webinars for teams and organizations.
              </p>
              <button className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-purple-700">
                Book Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
