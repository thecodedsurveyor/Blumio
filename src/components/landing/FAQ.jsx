import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Blumio and how does it work?",
      answer:
        "Blumio is a comprehensive project management and team collaboration platform that helps teams organize their work, track progress, and achieve their goals. It combines task management, team communication, file sharing, and analytics in one intuitive interface.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial, and you can cancel anytime.",
    },
    {
      question: "Can I use Blumio with my existing tools?",
      answer:
        "Absolutely! Blumio integrates with over 100 popular tools including Slack, Google Workspace, Microsoft 365, GitHub, and many more. Our API also allows for custom integrations.",
    },
    {
      question: "Is my data secure with Blumio?",
      answer:
        "Security is our top priority. We use bank-level encryption, comply with SOC 2 Type II standards, and offer enterprise-grade security features including SSO, two-factor authentication, and advanced access controls.",
    },
    {
      question: "How much does Blumio cost?",
      answer:
        "We offer flexible pricing plans starting from free for small teams up to enterprise solutions. Our paid plans start at $8 per user per month with annual billing. Check our pricing page for detailed information.",
    },
    {
      question: "Can I migrate my data from other project management tools?",
      answer:
        "Yes! We provide migration tools and dedicated support to help you seamlessly transfer your data from other platforms like Asana, Trello, Monday.com, and more.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Everything you need to know about Blumio. Can&apos;t find the answer
            you&apos;re looking for? Feel free to reach out to our team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
            >
              <button
                className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-200 hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="pr-4 text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <FiPlus className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Still have questions? We&apos;re here to help.
          </p>
          <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
