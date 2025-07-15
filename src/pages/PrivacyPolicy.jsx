import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaGlobe,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaShieldAlt className="mx-auto mb-6 text-6xl" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
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
                  1. Information We Collect
                </h2>

                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Personal Information
                </h3>
                <p className="mb-6 text-gray-600">
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us
                  for support. This includes:
                </p>
                <ul className="mb-6 list-disc pl-6 text-gray-600">
                  <li>Name and email address</li>
                  <li>Profile information and preferences</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us</li>
                  <li>Content you create using our services</li>
                </ul>

                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Usage Information
                </h3>
                <p className="mb-6 text-gray-600">
                  We automatically collect certain information about your use of
                  our services, including:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>
                    Device information (IP address, browser type, operating
                    system)
                  </li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Performance and error data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  2. How We Use Your Information
                </h2>
                <p className="mb-6 text-gray-600">
                  We use the information we collect to:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Detect and prevent fraud and abuse</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  3. Information Sharing
                </h2>
                <p className="mb-6 text-gray-600">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>With your consent or at your direction</li>
                  <li>
                    With service providers who assist us in operating our
                    business
                  </li>
                  <li>
                    To comply with legal obligations or protect our rights
                  </li>
                  <li>In connection with a business transfer or merger</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  4. Data Security
                </h2>
                <p className="mb-6 text-gray-600">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>End-to-end encryption for data in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee training on data protection practices</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  5. Your Rights and Choices
                </h2>
                <p className="mb-6 text-gray-600">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="mb-8 list-disc pl-6 text-gray-600">
                  <li>Access and update your account information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of marketing communications</li>
                  <li>Disable cookies through your browser settings</li>
                </ul>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  6. International Data Transfers
                </h2>
                <p className="mb-8 text-gray-600">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your information in
                  accordance with applicable data protection laws.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  7. Children's Privacy
                </h2>
                <p className="mb-8 text-gray-600">
                  Our services are not intended for children under 13. We do not
                  knowingly collect personal information from children under 13.
                  If you believe we have collected information from a child
                  under 13, please contact us immediately.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  8. Changes to This Policy
                </h2>
                <p className="mb-8 text-gray-600">
                  We may update this privacy policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on this page and updating the "Last updated" date.
                </p>

                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  9. Contact Us
                </h2>
                <p className="mb-4 text-gray-600">
                  If you have any questions about this privacy policy, please
                  contact us:
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <FaEnvelope className="text-blue-600" />
                    <span className="font-semibold">Email:</span>
                    <span>privacy@blumio.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGlobe className="text-blue-600" />
                    <span className="font-semibold">Address:</span>
                    <span>123 Privacy Street, San Francisco, CA 94105</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">
              Related Information
            </h2>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                <FaUserShield />
                Terms of Service
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700">
                <FaLock />
                Security Overview
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700">
                <FaEnvelope />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
