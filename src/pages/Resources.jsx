import {
  FaBook,
  FaVideo,
  FaDownload,
  FaQuestionCircle,
  FaUsers,
  FaCode,
  FaGraduationCap,
  FaNewspaper,
  FaArrowRight,
  FaClock,
  FaEye,
} from "react-icons/fa";

const Resources = () => {
  const resourceCategories = [
    {
      icon: <FaBook className="text-4xl text-blue-600" />,
      title: "Documentation",
      description:
        "Comprehensive guides and API documentation to help you get the most out of Tasker.",
      items: [
        "Getting Started Guide",
        "Advanced Features",
        "API Reference",
        "Integration Docs",
      ],
      link: "/docs",
    },
    {
      icon: <FaVideo className="text-4xl text-red-600" />,
      title: "Video Tutorials",
      description:
        "Step-by-step video guides covering everything from basic setup to advanced workflows.",
      items: [
        "Quick Start Videos",
        "Feature Deep Dives",
        "Best Practices",
        "Webinar Recordings",
      ],
      link: "/tutorials",
    },
    {
      icon: <FaDownload className="text-4xl text-green-600" />,
      title: "Templates & Tools",
      description:
        "Ready-to-use templates and tools to accelerate your team's productivity.",
      items: [
        "Project Templates",
        "Workflow Automations",
        "Checklists",
        "Resource Kits",
      ],
      link: "/templates",
    },
    {
      icon: <FaQuestionCircle className="text-4xl text-purple-600" />,
      title: "Support Center",
      description:
        "Get help when you need it with our comprehensive support resources.",
      items: ["FAQ", "Troubleshooting", "Contact Support", "Community Forum"],
      link: "/support",
    },
  ];

  const popularGuides = [
    {
      title: "Getting Started with Tasker",
      description:
        "A complete beginner's guide to setting up your first project and team.",
      readTime: "5 min read",
      views: "12.5k views",
      category: "Getting Started",
    },
    {
      title: "Advanced Task Automation",
      description:
        "Learn how to automate repetitive tasks and workflows to save time.",
      readTime: "8 min read",
      views: "8.2k views",
      category: "Automation",
    },
    {
      title: "Team Collaboration Best Practices",
      description:
        "Proven strategies for effective remote team collaboration and communication.",
      readTime: "6 min read",
      views: "15.1k views",
      category: "Collaboration",
    },
    {
      title: "Integrating with Third-party Tools",
      description:
        "Connect Tasker with your existing tools and workflows seamlessly.",
      readTime: "10 min read",
      views: "6.8k views",
      category: "Integrations",
    },
    {
      title: "Project Management Fundamentals",
      description:
        "Essential project management concepts and how to apply them in Tasker.",
      readTime: "12 min read",
      views: "20.3k views",
      category: "Project Management",
    },
    {
      title: "Security and Privacy Guide",
      description:
        "Understanding Tasker's security features and best practices for data protection.",
      readTime: "7 min read",
      views: "4.9k views",
      category: "Security",
    },
  ];

  const learningPaths = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-500" />,
      title: "Tasker Fundamentals",
      description:
        "Master the basics of task management and team collaboration.",
      courses: 6,
      duration: "2 hours",
      level: "Beginner",
    },
    {
      icon: <FaUsers className="text-3xl text-green-500" />,
      title: "Team Leadership",
      description:
        "Learn advanced features for managing and leading productive teams.",
      courses: 8,
      duration: "3 hours",
      level: "Intermediate",
    },
    {
      icon: <FaCode className="text-3xl text-purple-500" />,
      title: "Developer Integration",
      description: "Deep dive into APIs, webhooks, and custom integrations.",
      courses: 5,
      duration: "4 hours",
      level: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Resources & Learning
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Everything you need to master Tasker and transform your team's
            productivity.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition-colors hover:bg-gray-100">
            Start Learning <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Explore Our Resources
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Find the right resources to help you succeed, whether you're just
              getting started or looking to master advanced features.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {category.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-1 font-semibold text-blue-600 transition-colors hover:text-blue-700">
                  Explore <FaArrowRight className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Popular Guides
            </h2>
            <p className="text-xl text-gray-600">
              Most read articles and guides from our community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {popularGuides.map((guide, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-xl border bg-gray-50 p-6 transition-colors hover:border-blue-500"
              >
                <div className="mb-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                    {guide.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {guide.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{guide.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{guide.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Learning Paths
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Structured learning paths to help you progress from beginner to
              expert.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-6">{path.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  {path.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {path.description}
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Courses:</span>
                    <span className="font-semibold">{path.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Duration:</span>
                    <span className="font-semibold">{path.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Level:</span>
                    <span
                      className={`font-semibold ${
                        path.level === "Beginner"
                          ? "text-green-600"
                          : path.level === "Intermediate"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {path.level}
                    </span>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                  Start Learning Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaNewspaper className="mx-auto mb-6 text-5xl" />
          <h2 className="mb-6 text-4xl font-bold">Stay Updated</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Get the latest tips, tutorials, and feature updates delivered to
            your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-4 py-3 text-gray-900"
            />
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
