import {
  FaTasks,
  FaUsers,
  FaClock,
  FaChartBar,
  FaCalendarAlt,
  FaComments,
  FaFileAlt,
  FaBell,
  FaShieldAlt,
  FaMobile,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTasks className="text-4xl text-blue-600" />,
      title: "Task Management",
      description:
        "Create, assign, and track tasks with powerful organization tools.",
      details: [
        "Custom task priorities",
        "Due date tracking",
        "Status workflows",
        "Task dependencies",
      ],
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time collaboration features.",
      details: [
        "Real-time updates",
        "Team chat",
        "File sharing",
        "Activity feeds",
      ],
    },
    {
      icon: <FaClock className="text-4xl text-purple-600" />,
      title: "Time Tracking",
      description:
        "Monitor time spent on tasks and projects for better productivity.",
      details: [
        "Automatic time tracking",
        "Manual time entry",
        "Time reports",
        "Productivity insights",
      ],
    },
    {
      icon: <FaChartBar className="text-4xl text-orange-600" />,
      title: "Analytics & Reports",
      description: "Gain insights into team performance and project progress.",
      details: [
        "Performance dashboards",
        "Custom reports",
        "Progress tracking",
        "Team metrics",
      ],
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-red-600" />,
      title: "Calendar Integration",
      description:
        "Sync with your favorite calendar apps for seamless scheduling.",
      details: [
        "Google Calendar sync",
        "Outlook integration",
        "Deadline reminders",
        "Meeting scheduling",
      ],
    },
    {
      icon: <FaComments className="text-4xl text-indigo-600" />,
      title: "Communication",
      description:
        "Stay connected with built-in messaging and comment systems.",
      details: [
        "Task comments",
        "Team messaging",
        "Mention notifications",
        "Discussion threads",
      ],
    },
    {
      icon: <FaFileAlt className="text-4xl text-teal-600" />,
      title: "Document Management",
      description: "Store and organize all your project files in one place.",
      details: [
        "File attachments",
        "Version control",
        "Document sharing",
        "Search functionality",
      ],
    },
    {
      icon: <FaBell className="text-4xl text-yellow-600" />,
      title: "Smart Notifications",
      description:
        "Stay informed with intelligent, customizable notifications.",
      details: [
        "Custom notification rules",
        "Email alerts",
        "Mobile push notifications",
        "Digest summaries",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl text-gray-600" />,
      title: "Security & Privacy",
      description: "Enterprise-grade security to protect your sensitive data.",
      details: [
        "End-to-end encryption",
        "Two-factor authentication",
        "Role-based permissions",
        "Audit logs",
      ],
    },
    {
      icon: <FaMobile className="text-4xl text-pink-600" />,
      title: "Mobile Apps",
      description: "Access your work anywhere with native mobile applications.",
      details: [
        "iOS & Android apps",
        "Offline functionality",
        "Push notifications",
        "Touch-optimized interface",
      ],
    },
    {
      icon: <FaCloud className="text-4xl text-cyan-600" />,
      title: "Cloud Sync",
      description: "Your data is automatically synced across all devices.",
      details: [
        "Real-time synchronization",
        "Automatic backups",
        "Cross-device access",
        "Data redundancy",
      ],
    },
    {
      icon: <FaRocket className="text-4xl text-violet-600" />,
      title: "Integrations",
      description: "Connect with 100+ popular tools and services.",
      details: [
        "Slack integration",
        "GitHub sync",
        "Zapier automation",
        "API access",
      ],
    },
  ];

  const stats = [
    { number: "100+", label: "Integrations", color: "text-blue-600" },
    { number: "99.9%", label: "Uptime", color: "text-green-600" },
    { number: "24/7", label: "Support", color: "text-purple-600" },
    { number: "SOC 2", label: "Compliant", color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Powerful Features for Modern Teams
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Discover why over 100,000 teams choose Blumio for their project
            management needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Blumio provides all the tools your team needs to collaborate
              effectively and deliver projects on time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mb-6 text-gray-600">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of teams who have transformed their productivity with
            Blumio&apos;s powerful features.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-colors hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
