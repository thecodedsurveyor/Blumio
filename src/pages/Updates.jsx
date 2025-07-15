import {
  FaRocket,
  FaCalendarAlt,
  FaBug,
  FaPlus,
  FaWrench,
  FaShieldAlt,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";

const Updates = () => {
  const updates = [
    {
      version: "v2.4.0",
      date: "December 15, 2024",
      type: "major",
      title: "AI-Powered Task Suggestions",
      description:
        "Introducing smart task recommendations powered by machine learning",
      changes: [
        {
          type: "feature",
          title: "Smart Task Suggestions",
          description:
            "AI analyzes your work patterns to suggest optimal task priorities",
        },
        {
          type: "feature",
          title: "Automated Time Estimates",
          description:
            "Machine learning provides accurate time estimates for tasks",
        },
        {
          type: "improvement",
          title: "Enhanced Search Performance",
          description:
            "Search results now load 3x faster with improved indexing",
        },
        {
          type: "fix",
          title: "Calendar Sync Issues",
          description: "Fixed synchronization problems with Google Calendar",
        },
      ],
    },
    {
      version: "v2.3.2",
      date: "November 28, 2024",
      type: "minor",
      title: "Performance Improvements",
      description: "Faster load times and enhanced mobile experience",
      changes: [
        {
          type: "improvement",
          title: "Mobile App Performance",
          description: "Reduced app startup time by 40% on mobile devices",
        },
        {
          type: "improvement",
          title: "Dashboard Loading",
          description: "Dashboard now loads 60% faster with optimized queries",
        },
        {
          type: "fix",
          title: "Notification Delays",
          description: "Fixed delays in push notifications for mobile users",
        },
      ],
    },
    {
      version: "v2.3.1",
      date: "November 10, 2024",
      type: "patch",
      title: "Bug Fixes & Security Updates",
      description: "Important security patches and bug fixes",
      changes: [
        {
          type: "security",
          title: "Enhanced Authentication",
          description: "Improved OAuth 2.0 security with additional validation",
        },
        {
          type: "fix",
          title: "File Upload Issues",
          description: "Fixed problems with large file uploads timing out",
        },
        {
          type: "fix",
          title: "Team Permissions",
          description: "Resolved edge cases in team permission management",
        },
      ],
    },
    {
      version: "v2.3.0",
      date: "October 25, 2024",
      type: "major",
      title: "Advanced Team Analytics",
      description: "New analytics dashboard with detailed team insights",
      changes: [
        {
          type: "feature",
          title: "Team Performance Dashboard",
          description:
            "Comprehensive analytics for team productivity and efficiency",
        },
        {
          type: "feature",
          title: "Custom Report Builder",
          description: "Build custom reports with drag-and-drop interface",
        },
        {
          type: "feature",
          title: "Time Tracking Analytics",
          description:
            "Detailed insights into time allocation and productivity patterns",
        },
        {
          type: "improvement",
          title: "Export Capabilities",
          description: "Export reports to PDF, Excel, and CSV formats",
        },
      ],
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "feature":
        return <FaPlus className="text-green-600" />;
      case "improvement":
        return <FaWrench className="text-blue-600" />;
      case "fix":
        return <FaBug className="text-red-600" />;
      case "security":
        return <FaShieldAlt className="text-purple-600" />;
      default:
        return <FaTag className="text-gray-600" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "major":
        return "bg-green-100 text-green-800";
      case "minor":
        return "bg-blue-100 text-blue-800";
      case "patch":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = [
    { number: "24", label: "Updates This Year" },
    { number: "156", label: "Features Added" },
    { number: "98%", label: "Uptime Maintained" },
    { number: "2.4", label: "Current Version" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaRocket className="mx-auto mb-6 text-6xl" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Product Updates
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Stay up to date with the latest features, improvements, and fixes in
            Blumio. We ship updates regularly to make your experience better.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Subscribe to Updates
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Release Notes API
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
                <div className="mb-2 text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Recent Updates
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Here&apos;s what we&apos;ve been working on to improve your Blumio
              experience.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {updates.map((update, index) => (
                <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${getTypeColor(
                          update.type,
                        )}`}
                      >
                        {update.version}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <FaCalendarAlt />
                        <span>{update.date}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    {update.title}
                  </h3>
                  <p className="mb-6 text-gray-600">{update.description}</p>

                  <div className="space-y-4">
                    {update.changes.map((change, changeIndex) => (
                      <div
                        key={changeIndex}
                        className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                      >
                        <div className="mt-1">{getTypeIcon(change.type)}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">
                            {change.title}
                          </h4>
                          <p className="text-gray-600">{change.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Stay Updated
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Get notified about new features, updates, and improvements as soon
              as they&apos;re released.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
              />
              <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                Subscribe
                <FaArrowRight />
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">
              What&apos;s Coming Next?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              We&apos;re working on exciting new features including advanced
              automation, enhanced mobile apps, and deeper integrations.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-colors hover:bg-gray-100">
                View Roadmap
              </button>
              <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">
                Request Feature
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Updates;
