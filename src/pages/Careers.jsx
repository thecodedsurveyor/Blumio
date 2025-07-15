import {
  FaRocket,
  FaUsers,
  FaHeart,
  FaGlobe,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaGraduationCap,
  FaLaptop,
  FaPlane,
  FaMedkit,
  FaChevronRight,
} from "react-icons/fa";

const Careers = () => {
  const values = [
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: "Innovation First",
      description:
        "We push boundaries and embrace new technologies to solve complex problems.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Team Collaboration",
      description:
        "We believe the best results come from diverse teams working together.",
    },
    {
      icon: <FaHeart className="text-4xl text-red-600" />,
      title: "Customer Obsession",
      description:
        "Our customers' success drives everything we do and every decision we make.",
    },
    {
      icon: <FaGlobe className="text-4xl text-purple-600" />,
      title: "Global Impact",
      description:
        "We're building tools that help teams around the world work better together.",
    },
  ];

  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-3xl text-green-600" />,
      title: "Competitive Salary",
      description: "Above-market compensation with equity options",
    },
    {
      icon: <FaMedkit className="text-3xl text-blue-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
    },
    {
      icon: <FaLaptop className="text-3xl text-purple-600" />,
      title: "Remote Friendly",
      description: "Work from anywhere with flexible hours",
    },
    {
      icon: <FaPlane className="text-3xl text-orange-600" />,
      title: "Unlimited PTO",
      description: "Take time off when you need it, no questions asked",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses and conferences",
    },
    {
      icon: <FaUsers className="text-3xl text-pink-600" />,
      title: "Team Events",
      description: "Regular team building and company-wide events",
    },
  ];

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Build beautiful, responsive user interfaces using React and modern web technologies.",
      requirements: [
        "5+ years React experience",
        "TypeScript proficiency",
        "Design system experience",
      ],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      description:
        "Drive product strategy and execution for our core task management platform.",
      requirements: [
        "3+ years PM experience",
        "SaaS background",
        "Data-driven mindset",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Scale our infrastructure and improve deployment processes for global users.",
      requirements: [
        "AWS/GCP experience",
        "Kubernetes knowledge",
        "CI/CD expertise",
      ],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / London",
      type: "Full-time",
      description:
        "Help enterprise customers maximize value from Blumio and drive adoption.",
      requirements: [
        "B2B SaaS experience",
        "Enterprise customer focus",
        "Excellent communication",
      ],
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Design intuitive user experiences that delight millions of users worldwide.",
      requirements: [
        "4+ years UX design",
        "Figma expertise",
        "User research experience",
      ],
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      description:
        "Drive growth through content marketing, SEO, and digital campaigns.",
      requirements: [
        "Growth marketing experience",
        "Content strategy",
        "Analytics proficiency",
      ],
    },
  ];

  const stats = [
    { number: "150+", label: "Team Members" },
    { number: "25+", label: "Countries" },
    { number: "4.9/5", label: "Glassdoor Rating" },
    { number: "95%", label: "Employee Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Join Our Mission
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Help us build the future of team collaboration and productivity.
            Join a team that&apos;s passionate about making work better for
            everyone.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              View Open Positions
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              These core values guide how we work, make decisions, and treat
              each other every day.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Why Work With Us?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We offer competitive benefits and a supportive environment where
              you can do your best work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-6 text-center"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Open Positions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Join our growing team and help shape the future of productivity
              software.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
                        {position.title}
                      </h3>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                        {position.department}
                      </span>
                    </div>

                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock />
                        <span>{position.type}</span>
                      </div>
                    </div>

                    <p className="mb-4 text-gray-600">{position.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <FaChevronRight className="text-gray-400 group-hover:text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Our Culture
              </h2>
              <p className="mb-6 text-xl text-gray-600">
                We&apos;re building more than just software – we&apos;re
                building a company culture that values growth, creativity, and
                work-life balance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">
                    Flexible work arrangements with remote-first culture
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">
                    Continuous learning and professional development
                    opportunities
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">
                    Inclusive environment where everyone&apos;s voice is heard
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">
                    Regular team events and company-wide celebrations
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <div className="text-center">
                <FaUsers className="mx-auto mb-4 text-6xl text-blue-600" />
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Join Our Team
                </h3>
                <p className="text-gray-600">
                  Ready to make an impact? We&apos;d love to hear from you, even
                  if you don&apos;t see a perfect match in our current openings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Join Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Take the next step in your career and help us build the future of
            team productivity.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-colors hover:bg-gray-100">
              Apply Now
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">
              Refer a Friend
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
