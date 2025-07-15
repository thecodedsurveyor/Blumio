import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaRocket,
  FaBuilding,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    inquiryType: "sales",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-3xl text-blue-600" />,
      title: "Phone Support",
      description: "Speak with our sales team",
      contact: "+1 (555) 123-4567",
      hours: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <FaEnvelope className="text-3xl text-green-600" />,
      title: "Email Support",
      description: "Send us a message anytime",
      contact: "sales@blumio.com",
      hours: "Response within 24 hours",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-purple-600" />,
      title: "Visit Our Office",
      description: "Meet us in person",
      contact: "123 Business Ave, Suite 100",
      hours: "San Francisco, CA 94105",
    },
  ];

  const salesOptions = [
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "Team & Premium",
      description: "Perfect for growing teams up to 100 members",
      features: [
        "Unlimited projects",
        "Advanced reporting",
        "Priority support",
      ],
      price: "Starting at $10.99/month",
    },
    {
      icon: <FaBuilding className="text-4xl text-purple-500" />,
      title: "Enterprise",
      description: "Advanced security and compliance for large organizations",
      features: ["Custom integrations", "SSO & LDAP", "Dedicated support"],
      price: "Custom pricing",
    },
    {
      icon: <FaRocket className="text-4xl text-green-500" />,
      title: "Startup Program",
      description:
        "Special pricing for qualified startups and small businesses",
      features: ["50% off first year", "Free migration", "Startup resources"],
      price: "Special rates available",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Business Ave, Suite 100",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "New York",
      address: "456 Corporate Blvd, Floor 25",
      zipcode: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
    },
    {
      city: "London",
      address: "789 Innovation Street",
      zipcode: "London, UK EC1A 1BB",
      phone: "+44 20 7123 4567",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-emerald-600 to-purple-600 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-[80%] max-w-none px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-base sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
            Ready to transform your team's productivity? Let's talk about how
            Blumio can help your organization succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-24">
        <div className="mx-auto w-[80%] max-w-none px-4">
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4">{method.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {method.title}
                </h3>
                <p className="mb-4 text-gray-600">{method.description}</p>
                <div className="mb-2 font-semibold text-blue-600">
                  {method.contact}
                </div>
                <div className="text-sm text-gray-500">{method.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Sales Options */}
      <section className="bg-white py-24">
        <div className="mx-auto w-[80%] max-w-none px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media & Press</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us about your project and how we can help..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Send Message <FaArrowRight />
                </button>
              </form>
            </div>

            {/* Sales Options */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Find Your Perfect Plan
              </h2>
              <div className="space-y-6">
                {salesOptions.map((option, index) => (
                  <div key={index} className="rounded-xl border bg-gray-50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{option.icon}</div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800">
                          {option.title}
                        </h3>
                        <p className="mb-4 text-gray-600">
                          {option.description}
                        </p>
                        <ul className="mb-4 space-y-2">
                          {option.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="font-semibold text-blue-600">
                          {option.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-24">
        <div className="mx-auto w-[80%] max-w-none px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at one of our locations around the world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {offices.map((office, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {office.city}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-500" />
                    <div>
                      <div>{office.address}</div>
                      <div>{office.zipcode}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-green-500" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 py-24 text-white">
        <div className="mx-auto w-[80%] max-w-none px-4 text-center">
          <FaQuestionCircle className="mx-auto mb-6 text-5xl text-white" />
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Quick Answers?
          </h2>
          <p className="mb-8 text-xl text-white">
            Check out our comprehensive FAQ section or browse our help
            documentation.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Visit FAQ
            </button>
            <button className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
              Help Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
