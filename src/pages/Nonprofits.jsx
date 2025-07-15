import {
  FaHeart,
  FaHandsHelping,
  FaDollarSign,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaGift,
  FaVolunteer,
  FaBuilding,
  FaGlobe,
  FaAward,
  FaFileAlt,
  FaHandshake,
  FaUserFriends,
  FaStar,
  FaCheck,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Nonprofits = () => {
  const features = [
    {
      icon: <FaHandsHelping className="text-3xl text-blue-500" />,
      title: "Volunteer Management",
      description:
        "Recruit, schedule, and coordinate volunteers with automated workflows and communication tools.",
    },
    {
      icon: <FaDollarSign className="text-3xl text-green-500" />,
      title: "Fundraising Coordination",
      description:
        "Plan and execute fundraising campaigns, track donations, and manage donor relationships.",
    },
    {
      icon: <FaUsers className="text-3xl text-purple-500" />,
      title: "Program Management",
      description:
        "Organize and track your nonprofit programs, measure impact, and report on outcomes.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-orange-500" />,
      title: "Event Planning",
      description:
        "Coordinate fundraising events, volunteer activities, and community outreach programs.",
    },
    {
      icon: <FaChartLine className="text-3xl text-red-500" />,
      title: "Impact Tracking",
      description:
        "Measure and report on your organization's impact with comprehensive analytics and reporting.",
    },
    {
      icon: <FaGift className="text-3xl text-pink-500" />,
      title: "Grant Management",
      description:
        "Track grant applications, manage deadlines, and ensure compliance with funding requirements.",
    },
    {
      icon: <FaFileAlt className="text-3xl text-blue-600" />,
      title: "Compliance Reporting",
      description:
        "Generate required reports for regulatory compliance and stakeholder communication.",
    },
    {
      icon: <FaHandshake className="text-3xl text-green-600" />,
      title: "Stakeholder Communication",
      description:
        "Keep donors, volunteers, and board members informed with automated updates and reports.",
    },
  ];

  const nonprofitTypes = [
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      title: "Health & Wellness",
      description:
        "Organizations focused on health, medical research, and wellness programs.",
      examples: [
        "Medical research",
        "Mental health support",
        "Community wellness",
        "Healthcare access",
      ],
    },
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: "Social Services",
      description:
        "Organizations providing social support and community services.",
      examples: [
        "Food banks",
        "Homeless shelters",
        "Family services",
        "Senior care",
      ],
    },
    {
      icon: <FaGlobe className="text-3xl text-green-500" />,
      title: "Environmental",
      description:
        "Organizations working on environmental conservation and sustainability.",
      examples: [
        "Conservation efforts",
        "Climate action",
        "Wildlife protection",
        "Sustainability",
      ],
    },
    {
      icon: <FaBuilding className="text-3xl text-purple-500" />,
      title: "Arts & Culture",
      description:
        "Organizations promoting arts, culture, and creative expression.",
      examples: [
        "Museums",
        "Theater groups",
        "Music programs",
        "Cultural preservation",
      ],
    },
    {
      icon: <FaAward className="text-3xl text-orange-500" />,
      title: "Education",
      description:
        "Organizations focused on educational programs and literacy.",
      examples: [
        "Scholarship programs",
        "Tutoring services",
        "Educational resources",
        "Literacy programs",
      ],
    },
    {
      icon: <FaUserFriends className="text-3xl text-pink-500" />,
      title: "Community Development",
      description:
        "Organizations working on community building and development.",
      examples: [
        "Community centers",
        "Youth programs",
        "Housing initiatives",
        "Economic development",
      ],
    },
  ];

  const benefits = [
    {
      title: "Increased Volunteer Engagement",
      description: "Nonprofits see 80% improvement in volunteer retention",
      stat: "80%",
      metric: "better retention",
    },
    {
      title: "Fundraising Efficiency",
      description:
        "Organizations raise 60% more funds with better coordination",
      stat: "60%",
      metric: "more funds raised",
    },
    {
      title: "Time Savings",
      description: "Staff save 15+ hours per week on administrative tasks",
      stat: "15+",
      metric: "hours saved",
    },
    {
      title: "Impact Measurement",
      description: "95% better tracking of program outcomes and impact",
      stat: "95%",
      metric: "better tracking",
    },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Executive Director",
      organization: "Community Hope Foundation",
      quote:
        "Blumio helped us coordinate our volunteers and track our impact like never before. Our fundraising has increased by 40% since we started using it.",
      rating: 5,
    },
    {
      name: "Dr. James Wilson",
      role: "Program Director",
      organization: "Health Access Initiative",
      quote:
        "Managing our health programs across multiple locations was challenging until we found Blumio. Now everything is organized and transparent.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Development Manager",
      organization: "Education First",
      quote:
        "The grant management features are incredible. We never miss deadlines and our compliance reporting is seamless.",
      rating: 5,
    },
  ];

  const useCases = [
    {
      title: "Volunteer Coordination",
      description:
        "Streamline volunteer recruitment, scheduling, and management.",
      features: [
        "Volunteer database",
        "Shift scheduling",
        "Communication tools",
        "Hour tracking",
      ],
      icon: <FaVolunteer className="text-2xl text-blue-500" />,
    },
    {
      title: "Fundraising Campaigns",
      description: "Plan and execute successful fundraising initiatives.",
      features: [
        "Campaign planning",
        "Donor tracking",
        "Event coordination",
        "Impact reporting",
      ],
      icon: <FaDollarSign className="text-2xl text-green-500" />,
    },
    {
      title: "Program Management",
      description: "Organize and track your nonprofit programs effectively.",
      features: [
        "Program planning",
        "Outcome tracking",
        "Resource allocation",
        "Impact measurement",
      ],
      icon: <FaChartLine className="text-2xl text-purple-500" />,
    },
    {
      title: "Grant Management",
      description:
        "Stay on top of grant applications and compliance requirements.",
      features: [
        "Application tracking",
        "Deadline management",
        "Compliance monitoring",
        "Reporting",
      ],
      icon: <FaFileAlt className="text-2xl text-orange-500" />,
    },
  ];

  const pricingFeatures = [
    "Unlimited volunteers & staff",
    "Comprehensive program tracking",
    "Fundraising campaign tools",
    "Grant management system",
    "Impact measurement dashboard",
    "Compliance reporting",
    "Donor relationship management",
    "Priority nonprofit support",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Amplify Your Nonprofit Impact
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                Streamline operations, coordinate volunteers, and maximize your
                mission impact with Blumio's comprehensive nonprofit management
                platform designed for organizations that change the world.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                  Start Free Trial
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
                  Schedule Nonprofit Demo
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <img
                src="/images/nonprofit-impact.svg"
                alt="Nonprofit impact and community service"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Proven Results for Nonprofits
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Join thousands of nonprofits that have amplified their impact with
              Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 text-4xl font-bold text-blue-600">
                  {benefit.stat}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
                <div className="mt-2 text-sm font-semibold text-blue-600">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Everything Your Nonprofit Needs
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Comprehensive tools designed specifically for mission-driven
              organizations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-6 transition-transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nonprofit Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Perfect for Every Type of Nonprofit
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Whether you're focused on health, education, environment, or
              community development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {nonprofitTypes.map((type, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 text-center">{type.icon}</div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-800">
                  {type.title}
                </h3>
                <p className="mb-4 text-center text-gray-600">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <FaCheck className="text-green-500" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Streamline Your Nonprofit Operations
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Comprehensive solutions for every aspect of nonprofit management.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-8">
                <div className="mb-4 text-center">{useCase.icon}</div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-800">
                  {useCase.title}
                </h3>
                <p className="mb-4 text-center text-gray-600">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <FaCheck className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              What Nonprofit Leaders Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from organizations that have transformed their
              operations and impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-blue-600">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features for Nonprofits */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Built with Nonprofits in Mind
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Special features and considerations designed specifically for
              mission-driven organizations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-50 p-8 text-center">
              <FaHeart className="mx-auto mb-4 text-4xl text-red-500" />
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Nonprofit Discounts
              </h3>
              <p className="text-gray-600">
                Special pricing for registered nonprofits with up to 50% off
                regular rates.
              </p>
            </div>
            <div className="rounded-xl bg-green-50 p-8 text-center">
              <FaFileAlt className="mx-auto mb-4 text-4xl text-green-500" />
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Compliance Ready
              </h3>
              <p className="text-gray-600">
                Built-in templates and reports for common nonprofit compliance
                requirements.
              </p>
            </div>
            <div className="rounded-xl bg-purple-50 p-8 text-center">
              <FaHandshake className="mx-auto mb-4 text-4xl text-purple-500" />
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                Priority support from our team who understands the unique
                challenges of nonprofits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Nonprofit-Friendly Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Affordable solutions designed for nonprofit budgets with special
              discounts.
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="mb-8 text-center">
                <div className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                  💙 NONPROFIT PLAN
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Mission Plan
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-blue-600">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Everything your nonprofit needs</p>
              </div>

              <div className="mb-8 space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheck className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
                Start Free Trial
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                💝 <strong>Nonprofit Discount:</strong> Get 50% off with
                501(c)(3) verification
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Amplify Your Impact?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of nonprofits that have transformed their operations
            and maximized their mission impact with Blumio. Start your free
            trial today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Start Free 30-Day Trial
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Schedule Nonprofit Demo <FaArrowRight />
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90">
            No credit card required • 50% nonprofit discount available •
            Dedicated support included
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nonprofits;
