import {
  FaSlack,
  FaGithub,
  FaGoogle,
  FaMicrosoft,
  FaDropbox,
  FaTrello,
  FaJira,
  FaBolt,
  FaPlus,
  FaRocket,
  FaCode,
  FaCloud,
} from "react-icons/fa";

const Integrations = () => {
  const popularIntegrations = [
    {
      name: "Slack",
      icon: <FaSlack className="text-4xl text-purple-600" />,
      description:
        "Get notifications and updates directly in your Slack channels",
      category: "Communication",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-4xl text-gray-800" />,
      description: "Sync issues, pull requests, and commits with your tasks",
      category: "Development",
    },
    {
      name: "Google Workspace",
      icon: <FaGoogle className="text-4xl text-red-600" />,
      description:
        "Connect with Gmail, Drive, Calendar, and other Google services",
      category: "Productivity",
    },
    {
      name: "Microsoft 365",
      icon: <FaMicrosoft className="text-4xl text-blue-600" />,
      description: "Integrate with Outlook, Teams, OneDrive, and Office apps",
      category: "Productivity",
    },
    {
      name: "Dropbox",
      icon: <FaDropbox className="text-4xl text-blue-500" />,
      description: "Attach and share files directly from your Dropbox account",
      category: "Storage",
    },
    {
      name: "Trello",
      icon: <FaTrello className="text-4xl text-blue-400" />,
      description: "Import boards and cards from Trello seamlessly",
      category: "Project Management",
    },
    {
      name: "Jira",
      icon: <FaJira className="text-4xl text-blue-700" />,
      description: "Sync issues and sprints with your development workflow",
      category: "Development",
    },
    {
      name: "Zapier",
      icon: <FaBolt className="text-4xl text-orange-500" />,
      description: "Connect with 5000+ apps through automated workflows",
      category: "Automation",
    },
  ];

  const categories = [
    {
      name: "Communication",
      icon: <FaSlack className="text-3xl text-purple-600" />,
      count: 15,
      description: "Stay connected with your team",
    },
    {
      name: "Development",
      icon: <FaCode className="text-3xl text-green-600" />,
      count: 23,
      description: "Streamline your development workflow",
    },
    {
      name: "Productivity",
      icon: <FaRocket className="text-3xl text-blue-600" />,
      count: 18,
      description: "Boost your team's productivity",
    },
    {
      name: "Storage",
      icon: <FaCloud className="text-3xl text-gray-600" />,
      count: 12,
      description: "Manage files and documents",
    },
  ];

  const stats = [
    { number: "100+", label: "Integrations" },
    { number: "5000+", label: "Apps via Zapier" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Connect Your Favorite Tools
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Blumio integrates with 100+ popular tools to streamline your
            workflow and boost productivity.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
              Browse All Integrations
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
              Request Integration
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
                <div className="mb-2 text-4xl font-bold text-purple-600">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Popular Integrations
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Connect with the tools your team already uses and loves.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {popularIntegrations.map((integration, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>{integration.icon}</div>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    {integration.category}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {integration.description}
                </p>
                <button className="mt-4 w-full rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-200">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Browse by Category
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Find integrations organized by use case and functionality.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-gray-50 p-8 text-center transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {category.name}
                </h3>
                <p className="mb-4 text-gray-600">{category.description}</p>
                <div className="text-sm font-semibold text-purple-600">
                  {category.count} integrations
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
            <FaPlus className="mx-auto mb-6 text-6xl" />
            <h2 className="mb-4 text-3xl font-bold">
              Don&apos;t See Your Tool?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              We&apos;re constantly adding new integrations. Request a custom
              integration or use our API to build your own.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                Request Integration
              </button>
              <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
                View API Docs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
