import {
  FaShieldAlt,
  FaLock,
  FaKey,
  FaUserShield,
  FaServer,
  FaEye,
  FaCertificate,
  FaGlobe,
  FaCheck,
  FaFileAlt,
} from "react-icons/fa";

const Security = () => {
  const securityFeatures = [
    {
      icon: <FaLock className="text-4xl text-blue-600" />,
      title: "End-to-End Encryption",
      description:
        "All data is encrypted in transit and at rest using AES-256 encryption",
    },
    {
      icon: <FaKey className="text-4xl text-green-600" />,
      title: "Two-Factor Authentication",
      description:
        "Secure your account with SMS, email, or authenticator app 2FA",
    },
    {
      icon: <FaUserShield className="text-4xl text-purple-600" />,
      title: "Role-Based Access Control",
      description: "Granular permissions and access controls for team members",
    },
    {
      icon: <FaServer className="text-4xl text-orange-600" />,
      title: "Secure Infrastructure",
      description:
        "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime",
    },
    {
      icon: <FaEye className="text-4xl text-red-600" />,
      title: "Audit Logs",
      description:
        "Comprehensive logging and monitoring of all user activities",
    },
    {
      icon: <FaGlobe className="text-4xl text-indigo-600" />,
      title: "Global Compliance",
      description:
        "GDPR, CCPA, and other international privacy regulations compliant",
    },
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls",
      icon: <FaCertificate className="text-3xl text-blue-600" />,
    },
    {
      name: "ISO 27001",
      description: "Information security management systems",
      icon: <FaCertificate className="text-3xl text-green-600" />,
    },
    {
      name: "GDPR Compliant",
      description: "European data protection regulation compliance",
      icon: <FaCertificate className="text-3xl text-purple-600" />,
    },
    {
      name: "HIPAA Ready",
      description: "Healthcare data protection standards",
      icon: <FaCertificate className="text-3xl text-orange-600" />,
    },
  ];

  const securityPractices = [
    "Regular security audits and penetration testing",
    "Encrypted backups with multiple redundancies",
    "24/7 security monitoring and incident response",
    "Employee security training and background checks",
    "Secure development lifecycle (SDLC) practices",
    "Regular vulnerability assessments and patching",
    "Data loss prevention (DLP) measures",
    "Network segmentation and access controls",
  ];

  const privacyFeatures = [
    {
      title: "Data Minimization",
      description: "We only collect data necessary for service functionality",
    },
    {
      title: "User Control",
      description:
        "Full control over your data with export and deletion options",
    },
    {
      title: "Transparent Policies",
      description: "Clear, readable privacy policies with no hidden clauses",
    },
    {
      title: "No Data Selling",
      description:
        "We never sell or share your personal data with third parties",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaShieldAlt className="mx-auto mb-6 text-6xl" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Enterprise-Grade Security
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Your data security is our top priority. We implement
            industry-leading security measures to protect your sensitive
            information.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
              Security Overview
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
              Compliance Center
            </button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Comprehensive Security Features
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Multi-layered security architecture designed to protect your data
              at every level.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
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

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Industry Certifications
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Independently verified security and compliance standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-8 text-center"
              >
                <div className="mb-4">{cert.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Our Security Practices
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                We follow industry best practices and maintain the highest
                security standards to protect your data.
              </p>
              <div className="space-y-4">
                {securityPractices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheck className="mt-1 text-green-600" />
                    <span className="text-gray-700">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <div className="text-center">
                <FaServer className="mx-auto mb-4 text-6xl text-blue-600" />
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Secure by Design
                </h3>
                <p className="text-gray-600">
                  Security is built into every aspect of our platform, from
                  architecture to deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Privacy First
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We believe privacy is a fundamental right. Here&apos;s how we
              protect yours.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {privacyFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-6 text-center"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Security Resources
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Learn more about our security practices and how to keep your
              account secure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <FaFileAlt className="mb-4 text-4xl text-blue-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Security Whitepaper
              </h3>
              <p className="mb-6 text-gray-600">
                Detailed overview of our security architecture and practices.
              </p>
              <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
                Download PDF
              </button>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <FaShieldAlt className="mb-4 text-4xl text-green-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Security Best Practices
              </h3>
              <p className="mb-6 text-gray-600">
                Guidelines for keeping your Blumio account secure.
              </p>
              <button className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-green-700">
                Read Guide
              </button>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <FaUserShield className="mb-4 text-4xl text-purple-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Incident Response
              </h3>
              <p className="mb-6 text-gray-600">
                How we handle security incidents and communicate with users.
              </p>
              <button className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-purple-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Questions About Security?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Our security team is here to help. Contact us for more information
            about our security practices.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
              Contact Security Team
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
              Report Security Issue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
