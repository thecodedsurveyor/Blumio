import {
  FaCode,
  FaBook,
  FaRocket,
  FaShieldAlt,
  FaCloud,
  FaUsers,
  FaCog,
  FaKey,
} from "react-icons/fa";

const API = () => {
  const features = [
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      title: "RESTful API",
      description: "Clean, intuitive REST API with comprehensive endpoints",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: "Secure Authentication",
      description: "OAuth 2.0 and API key authentication with rate limiting",
    },
    {
      icon: <FaCloud className="text-4xl text-purple-600" />,
      title: "Real-time Updates",
      description: "WebSocket support for real-time data synchronization",
    },
    {
      icon: <FaRocket className="text-4xl text-orange-600" />,
      title: "High Performance",
      description: "99.9% uptime with sub-200ms response times globally",
    },
  ];

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/tasks",
      description: "Retrieve all tasks",
      color: "bg-green-100 text-green-800",
    },
    {
      method: "POST",
      path: "/api/v1/tasks",
      description: "Create a new task",
      color: "bg-blue-100 text-blue-800",
    },
    {
      method: "PUT",
      path: "/api/v1/tasks/{id}",
      description: "Update a specific task",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      method: "DELETE",
      path: "/api/v1/tasks/{id}",
      description: "Delete a specific task",
      color: "bg-red-100 text-red-800",
    },
  ];

  const useCases = [
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "Team Integrations",
      description: "Build custom integrations for your team's workflow",
    },
    {
      icon: <FaCog className="text-3xl text-green-600" />,
      title: "Automation",
      description: "Automate task creation and management processes",
    },
    {
      icon: <FaCloud className="text-3xl text-purple-600" />,
      title: "Data Sync",
      description: "Synchronize data with external systems and tools",
    },
  ];

  const codeExample = `// Create a new task
const createTask = async (taskData) => {
  const response = await fetch('https://api.blumio.com/v1/tasks', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  });
  
  return response.json();
};

// Example usage
const newTask = await createTask({
  title: 'Complete API integration',
  description: 'Integrate with Blumio API',
  priority: 'high',
  assignee: 'user@example.com'
});`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Blumio API
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                Build powerful integrations with our comprehensive REST API.
                Access all Blumio features programmatically with
                enterprise-grade security and reliability.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
                  Get API Key
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
                  View Documentation
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm text-gray-400">Terminal</span>
              </div>
              <pre className="text-sm text-green-400">
                <code>
                  {`curl -X POST https://api.blumio.com/v1/tasks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "New Task",
    "priority": "high"
  }'`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Developer-First API
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Built by developers, for developers. Our API is designed to be
              intuitive, powerful, and reliable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Key API Endpoints
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Access all Blumio functionality through our comprehensive API
              endpoints.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`rounded px-3 py-1 text-sm font-semibold ${endpoint.color}`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="text-gray-800">{endpoint.path}</code>
                </div>
                <span className="text-gray-600">{endpoint.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Get Started in Minutes
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                Our API is designed to be simple and intuitive. Get up and
                running with just a few lines of code.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaKey className="text-blue-600" />
                  <span>Get your API key from the dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaBook className="text-green-600" />
                  <span>Read our comprehensive documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaRocket className="text-purple-600" />
                  <span>Start building your integration</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm text-gray-400">JavaScript</span>
              </div>
              <pre className="text-sm text-gray-300">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              What You Can Build
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Endless possibilities with our flexible and powerful API.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-8 text-center"
              >
                <div className="mb-6">{useCase.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Start Building Today</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of developers who are building amazing integrations
            with the Blumio API.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Get API Key
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default API;
