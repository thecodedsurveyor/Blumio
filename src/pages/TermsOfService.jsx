import {
  FaGavel,
  FaHandshake,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaGavel className="mx-auto mb-6 text-6xl" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Terms of Service
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            These terms govern your use of Blumio and our services. Please read
            them carefully.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <FaCalendarAlt />
            <span>Last updated: December 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-8 text-gray-600">
                  By accessing or using Blumio's services, you agree to be bound
                  by these Terms of Service and our Privacy Policy. If you do
                  not agree to these terms, you may not use our services.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  2. Description of Service
                </h2>
                <p className="mb-6 text-gray-600">
                  Blumio provides a cloud-based task management and team
                  collaboration platform. Our services include:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>Task creation, assignment, and tracking</li>
                  <li>Team collaboration tools</li>
                  <li>Project management features</li>
                  <li>Time tracking and reporting</li>
                  <li>Integration with third-party services</li>
                  <li>Mobile and web applications</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  3. User Accounts
                </h2>
                <p className="mb-6 text-gray-600">
                  To use our services, you must create an account. You agree to:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                  <li>Use the service only for lawful purposes</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  4. Acceptable Use
                </h2>
                <p className="mb-6 text-gray-600">
                  You agree not to use our services to:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our services</li>
                  <li>Use our services for competitive analysis</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  5. Subscription and Payment
                </h2>
                <p className="mb-6 text-gray-600">
                  Our services are available under various subscription plans:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>Subscription fees are billed in advance</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We may change pricing with 30 days notice</li>
                  <li>Failure to pay may result in service suspension</li>
                  <li>You can cancel your subscription at any time</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  6. Intellectual Property
                </h2>
                <p className="mb-6 text-gray-600">
                  Blumio retains all rights to our services, including:
                </p>
                <ul className="mb-6 list-disc pl-6 text-gray-600">
                  <li>Software, code, and technology</li>
                  <li>Trademarks, logos, and branding</li>
                  <li>Documentation and content</li>
                  <li>User interface and design</li>
                </ul>
                <p className="mb-8 text-gray-600">
                  You retain ownership of your data and content created using
                  our services.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  7. Data and Privacy
                </h2>
                <p className="mb-8 text-gray-600">
                  We process your data in accordance with our Privacy Policy.
                  You are responsible for ensuring you have the right to upload
                  and process any data through our services.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  8. Service Availability
                </h2>
                <p className="mb-6 text-gray-600">
                  We strive to provide reliable service but cannot guarantee:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>Uninterrupted access to our services</li>
                  <li>Error-free operation</li>
                  <li>Compatibility with all devices or software</li>
                  <li>Availability during maintenance periods</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  9. Limitation of Liability
                </h2>
                <p className="mb-8 text-gray-600">
                  To the maximum extent permitted by law, Blumio shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including loss of profits, data, or
                  business interruption.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  10. Termination
                </h2>
                <p className="mb-6 text-gray-600">
                  Either party may terminate these terms:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>You may cancel your account at any time</li>
                  <li>We may suspend or terminate accounts for violations</li>
                  <li>We may discontinue services with reasonable notice</li>
                  <li>Upon termination, your access will be revoked</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  11. Changes to Terms
                </h2>
                <p className="mb-8 text-gray-600">
                  We may modify these terms at any time. Material changes will
                  be communicated through our services or by email. Continued
                  use constitutes acceptance of new terms.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  12. Governing Law
                </h2>
                <p className="mb-8 text-gray-600">
                  These terms are governed by the laws of the State of
                  California, United States, without regard to conflict of law
                  principles.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  13. Contact Information
                </h2>
                <p className="mb-4 text-gray-600">
                  For questions about these terms, please contact us:
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <FaEnvelope className="text-blue-600" />
                    <span className="font-semibold">Email:</span>
                    <span>legal@blumio.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGlobe className="text-blue-600" />
                    <span className="font-semibold">Address:</span>
                    <span>123 Legal Street, San Francisco, CA 94105</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <FaExclamationTriangle className="mx-auto mb-4 text-4xl text-yellow-600" />
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Important Notice
            </h2>
            <p className="mb-6 text-gray-600">
              These terms constitute a legally binding agreement. Please read
              them carefully and contact us if you have any questions before
              using our services.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                <FaHandshake />
                Privacy Policy
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700">
                <FaEnvelope />
                Contact Legal Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
