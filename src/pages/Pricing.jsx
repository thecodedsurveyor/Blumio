import {
  FaCheck,
  FaTimes,
  FaUsers,
  FaRocket,
  FaBuilding,
  FaArrowRight,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      icon: <FaUsers className="text-3xl text-gray-600" />,
      description:
        "Perfect for individuals and small teams just getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      features: {
        "Team members": "Up to 15",
        Projects: "3 projects",
        "Tasks per project": "Unlimited",
        "File storage": "100MB",
        "Basic integrations": true,
        "Mobile apps": true,
        "Email support": true,
        "Advanced reporting": false,
        "Custom fields": false,
        "Time tracking": false,
        "Project templates": false,
        "Priority support": false,
        "Advanced security": false,
        "Custom integrations": false,
      },
      cta: "Get Started Free",
    },
    {
      name: "Premium",
      icon: <FaRocket className="text-3xl text-blue-600" />,
      description: "Advanced features for growing teams and businesses",
      monthlyPrice: 10.99,
      annualPrice: 119,
      popular: true,
      features: {
        "Team members": "Unlimited",
        Projects: "Unlimited",
        "Tasks per project": "Unlimited",
        "File storage": "10GB",
        "Basic integrations": true,
        "Mobile apps": true,
        "Email support": true,
        "Advanced reporting": true,
        "Custom fields": true,
        "Time tracking": true,
        "Project templates": true,
        "Priority support": true,
        "Advanced security": false,
        "Custom integrations": false,
      },
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: <FaBuilding className="text-3xl text-purple-600" />,
      description:
        "Tailored solutions for large organizations with enterprise needs",
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      features: {
        "Team members": "Unlimited",
        Projects: "Unlimited",
        "Tasks per project": "Unlimited",
        "File storage": "Unlimited",
        "Basic integrations": true,
        "Mobile apps": true,
        "Email support": true,
        "Advanced reporting": true,
        "Custom fields": true,
        "Time tracking": true,
        "Project templates": true,
        "Priority support": true,
        "Advanced security": true,
        "Custom integrations": true,
      },
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer:
        "Yes, both Premium and Enterprise plans come with a 14-day free trial. No credit card required to start.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "You can export all your data before canceling. We keep your data for 30 days after cancellation in case you want to reactivate.",
    },
    {
      question: "Do you offer discounts for nonprofits or education?",
      answer:
        "Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Contact our sales team for more information.",
    },
  ];

  const addOns = [
    {
      name: "Advanced Analytics",
      description: "Detailed insights and custom reporting dashboards",
      price: "$5/month per user",
    },
    {
      name: "Premium Support",
      description: "24/7 phone and chat support with 1-hour response time",
      price: "$10/month per organization",
    },
    {
      name: "Additional Storage",
      description: "Extra file storage beyond your plan limits",
      price: "$2/month per 10GB",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Choose the perfect plan for your team. Start free and scale as you
            grow.
          </p>

          {/* Billing Toggle */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <span
              className={`font-semibold ${
                !isAnnual ? "text-white" : "text-gray-300"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative h-8 w-16 rounded-full bg-white bg-opacity-20 transition-colors"
            >
              <div
                className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-8" : "translate-x-1"
                }`}
              ></div>
            </button>
            <span
              className={`font-semibold ${
                isAnnual ? "text-white" : "text-gray-300"
              }`}
            >
              Annual
            </span>
            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold text-white">
              Save 20%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                  plan.popular
                    ? "scale-105 border-2 border-blue-500"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 transform items-center gap-2 rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white">
                    <FaStar /> Most Popular
                  </div>
                )}

                <div className="mb-8 text-center">
                  <div className="mb-4">{plan.icon}</div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-gray-600">{plan.description}</p>

                  <div className="mb-6">
                    {plan.monthlyPrice === null ? (
                      <div className="text-4xl font-bold text-gray-800">
                        Custom
                      </div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-gray-800">
                          $
                          {isAnnual && plan.annualPrice
                            ? Math.round(plan.annualPrice / 12)
                            : plan.monthlyPrice}
                          <span className="text-lg text-gray-600">/month</span>
                        </div>
                        {isAnnual && plan.annualPrice && (
                          <div className="text-sm text-gray-500">
                            Billed annually (${plan.annualPrice}/year)
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <button
                    className={`w-full rounded-lg py-3 font-semibold transition-colors ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="mb-4 font-semibold text-gray-800">
                    What's included:
                  </h4>
                  {Object.entries(plan.features).map(
                    ([feature, value], idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700">{feature}</span>
                        <div className="flex items-center">
                          {typeof value === "boolean" ? (
                            value ? (
                              <FaCheck className="text-green-500" />
                            ) : (
                              <FaTimes className="text-gray-300" />
                            )
                          ) : (
                            <span className="text-sm font-semibold text-gray-600">
                              {value}
                            </span>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your plan with additional features and services.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {addOns.map((addon, index) => (
              <div key={index} className="rounded-xl border bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {addon.name}
                </h3>
                <p className="mb-4 text-gray-600">{addon.description}</p>
                <div className="text-lg font-semibold text-blue-600">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <FaQuestionCircle className="mt-1 flex-shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
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
            Join thousands of teams who trust Tasker to manage their projects
            and boost productivity.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-colors hover:bg-gray-100">
              Start Free Trial <FaArrowRight />
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
