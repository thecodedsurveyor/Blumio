import {
  FaShieldAlt,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaCloud,
  FaLock,
  FaPhone,
  FaGraduationCap,
  FaArrowRight,
  FaCheck,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";

const Enterprise = () => {
  const enterpriseFeatures = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Enterprise Security",
      description:
        "Bank-level security with SOC 2, GDPR compliance, and advanced data protection.",
      features: [
        "SOC 2 Type II certified",
        "GDPR & CCPA compliant",
        "End-to-end encryption",
        "Advanced access controls",
      ],
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Unlimited Scale",
      description:
        "Support for organizations of any size with unlimited users and projects.",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced user management",
        "Custom roles & permissions",
      ],
    },
    {
      icon: <FaCogs className="text-4xl text-purple-600" />,
      title: "Custom Integrations",
      description:
        "Seamlessly integrate with your existing enterprise tools and workflows.",
      features: [
        "Custom API development",
        "Enterprise SSO",
        "Directory sync (LDAP/AD)",
        "Custom workflows",
      ],
    },
    {
      icon: <FaChartLine className="text-4xl text-red-600" />,
      title: "Advanced Analytics",
      description:
        "Deep insights into team performance and organizational productivity.",
      features: [
        "Executive dashboards",
        "Custom reporting",
        "Performance analytics",
        "ROI tracking",
      ],
    },
  ];

  const securityFeatures = [
    {
      icon: <FaLock className="text-2xl text-blue-500" />,
      title: "Data Encryption",
      description: "AES-256 encryption at rest and in transit",
    },
    {
      icon: <FaCertificate className="text-2xl text-green-500" />,
      title: "Compliance",
      description: "SOC 2, GDPR, HIPAA, and ISO 27001 certified",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-purple-500" />,
      title: "Access Control",
      description: "Multi-factor authentication and role-based permissions",
    },
    {
      icon: <FaCloud className="text-2xl text-cyan-500" />,
      title: "Data Residency",
      description: "Choose where your data is stored and processed",
    },
  ];

  const supportServices = [
    {
      icon: <FaUserTie className="text-3xl text-blue-500" />,
      title: "Dedicated Account Manager",
      description: "Personal point of contact for all your enterprise needs",
      included: true,
    },
    {
      icon: <FaPhone className="text-3xl text-green-500" />,
      title: "24/7 Priority Support",
      description: "Round-the-clock support with guaranteed response times",
      included: true,
    },
    {
      icon: <FaGraduationCap className="text-3xl text-purple-500" />,
      title: "Custom Training",
      description:
        "Tailored training programs for your team and administrators",
      included: true,
    },
    {
      icon: <FaCogs className="text-3xl text-orange-500" />,
      title: "Implementation Support",
      description: "Guided migration and setup assistance",
      included: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Enterprise-Grade Productivity
              </h1>
              <p className="mb-8 text-xl leading-relaxed md:text-2xl">
                Empower your organization with secure, scalable, and compliant
                task management solutions designed for enterprise needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
                  Schedule Demo <FaArrowRight />
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-8">
              <h3 className="mb-6 text-2xl font-bold">
                Trusted by Enterprise Leaders
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">500+</div>
                  <div className="text-sm text-gray-300">
                    Enterprise Customers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">
                    99.99%
                  </div>
                  <div className="text-sm text-gray-300">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">10M+</div>
                  <div className="text-sm text-gray-300">Enterprise Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300">24/7</div>
                  <div className="text-sm text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Built for Enterprise Scale
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Advanced features and capabilities designed to meet the complex
              needs of large organizations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Security & Compliance First
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Enterprise-grade security measures to protect your most sensitive
              data and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-6 text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8">
            <h3 className="mb-4 text-center text-2xl font-bold text-gray-800">
              Compliance Certifications
            </h3>
            <div className="grid gap-6 text-center md:grid-cols-4">
              <div className="rounded-lg bg-white p-4">
                <div className="font-bold text-blue-600">SOC 2 Type II</div>
                <div className="text-sm text-gray-600">
                  Security & Availability
                </div>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="font-bold text-green-600">GDPR</div>
                <div className="text-sm text-gray-600">Data Protection</div>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="font-bold text-purple-600">ISO 27001</div>
                <div className="text-sm text-gray-600">
                  Information Security
                </div>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="font-bold text-red-600">HIPAA</div>
                <div className="text-sm text-gray-600">
                  Healthcare Compliance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              White-Glove Support
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Comprehensive support services to ensure your success from day
              one.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 text-center shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {service.description}
                </p>
                {service.included && (
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <FaCheck />
                    <span className="text-sm font-semibold">Included</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Let's discuss how Tasker Enterprise can transform your
            organization's productivity.
          </p>
          <div className="mx-auto mb-8 max-w-md rounded-2xl bg-white bg-opacity-10 p-8">
            <h3 className="mb-4 text-2xl font-bold">Enterprise Plan</h3>
            <div className="mb-2 text-4xl font-bold">Custom Pricing</div>
            <p className="text-sm opacity-90">
              Tailored to your organization's needs
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Request Quote
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
