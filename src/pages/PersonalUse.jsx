import {
  FaUser,
  FaCalendarCheck,
  FaListUl,
  FaHome,
  FaGraduationCap,
  FaHeart,
  FaBriefcase,
  FaCamera,
  FaBook,
  FaPlane,
  FaDumbbell,
  FaShoppingCart,
  FaStar,
  FaCheck,
  FaArrowRight,
  FaMobile,
  FaCloud,
  FaBell,
} from "react-icons/fa";

const PersonalUse = () => {
  const features = [
    {
      icon: <FaListUl className="text-3xl text-blue-500" />,
      title: "Personal Task Management",
      description:
        "Organize your daily tasks, set priorities, and track your personal productivity with ease.",
    },
    {
      icon: <FaCalendarCheck className="text-3xl text-green-500" />,
      title: "Goal Setting & Tracking",
      description:
        "Set meaningful goals, break them into actionable steps, and track your progress over time.",
    },
    {
      icon: <FaHome className="text-3xl text-orange-500" />,
      title: "Life Organization",
      description:
        "Manage household tasks, family schedules, and personal projects all in one place.",
    },
    {
      icon: <FaBell className="text-3xl text-purple-500" />,
      title: "Smart Reminders",
      description:
        "Never miss important deadlines with intelligent reminders and notifications.",
    },
    {
      icon: <FaMobile className="text-3xl text-blue-600" />,
      title: "Mobile First",
      description:
        "Access your tasks and projects anywhere with our beautiful mobile apps.",
    },
    {
      icon: <FaCloud className="text-3xl text-gray-500" />,
      title: "Sync Everywhere",
      description:
        "Your data syncs seamlessly across all your devices - phone, tablet, and computer.",
    },
  ];

  const useCases = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-500" />,
      title: "Student Life",
      description:
        "Manage assignments, track study goals, and organize your academic schedule.",
      examples: [
        "Assignment tracking",
        "Study schedules",
        "Exam preparation",
        "Research projects",
      ],
    },
    {
      icon: <FaHome className="text-3xl text-green-500" />,
      title: "Home Management",
      description:
        "Keep your household running smoothly with organized task management.",
      examples: [
        "Cleaning schedules",
        "Maintenance tasks",
        "Family calendars",
        "Meal planning",
      ],
    },
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      title: "Personal Projects",
      description:
        "Bring your creative ideas to life with structured project planning.",
      examples: [
        "Creative writing",
        "Art projects",
        "Home improvement",
        "Learning new skills",
      ],
    },
    {
      icon: <FaBriefcase className="text-3xl text-purple-500" />,
      title: "Freelance Work",
      description:
        "Manage your freelance projects and client work efficiently.",
      examples: [
        "Client projects",
        "Invoice tracking",
        "Time management",
        "Portfolio building",
      ],
    },
    {
      icon: <FaDumbbell className="text-3xl text-orange-500" />,
      title: "Health & Fitness",
      description: "Track your fitness goals and maintain healthy habits.",
      examples: [
        "Workout plans",
        "Nutrition tracking",
        "Health goals",
        "Habit building",
      ],
    },
    {
      icon: <FaPlane className="text-3xl text-blue-600" />,
      title: "Travel Planning",
      description:
        "Plan memorable trips with detailed itineraries and checklists.",
      examples: [
        "Trip planning",
        "Packing lists",
        "Budget tracking",
        "Activity scheduling",
      ],
    },
  ];

  const benefits = [
    {
      title: "Better Organization",
      description: "Keep all aspects of your life organized in one place",
      stat: "90%",
      metric: "more organized",
    },
    {
      title: "Increased Productivity",
      description: "Accomplish more with focused task management",
      stat: "3x",
      metric: "more productive",
    },
    {
      title: "Reduced Stress",
      description: "Feel calmer knowing everything is tracked and planned",
      stat: "75%",
      metric: "less stressed",
    },
    {
      title: "Goal Achievement",
      description: "Turn your dreams into reality with actionable plans",
      stat: "85%",
      metric: "achieve goals",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Graduate Student",
      quote:
        "Blumio helped me stay on top of my thesis, coursework, and part-time job. I couldn't have graduated without it!",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Freelance Designer",
      quote:
        "As a freelancer, staying organized is crucial. Blumio keeps all my projects, clients, and deadlines in perfect order.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Busy Parent",
      quote:
        "Between work, kids, and household tasks, Blumio is my lifesaver. It helps me balance everything without dropping the ball.",
      rating: 5,
    },
  ];

  const pricingFeatures = [
    "Unlimited personal tasks",
    "Goal tracking",
    "Mobile apps",
    "Cloud sync",
    "Smart reminders",
    "File attachments (5GB)",
    "Basic templates",
    "Email support",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Organize Your Life, Achieve Your Goals
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                Transform how you manage your personal life with Blumio. From
                daily tasks to long-term goals, stay organized and productive in
                every aspect of your life.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
                  Start Free
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <img
                src="/images/personal-productivity.svg"
                alt="Personal productivity illustration"
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
              Transform Your Personal Productivity
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Join millions of individuals who have revolutionized their
              personal organization with Blumio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 text-4xl font-bold text-purple-600">
                  {benefit.stat}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
                <div className="mt-2 text-sm font-semibold text-purple-600">
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
              Everything You Need for Personal Success
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Powerful yet simple tools designed specifically for personal
              productivity and life organization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-8 transition-transform hover:scale-105"
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Perfect for Every Area of Your Life
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              See how Blumio can help you stay organized and productive in
              different aspects of your life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {useCase.title}
                </h3>
                <p className="mb-4 text-gray-600">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-500"
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

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              Discover how Blumio has transformed the lives of individuals just
              like you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-8">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Start Your Journey to Better Organization
            </h2>
            <p className="text-xl text-gray-600">
              Get started with Blumio Personal - completely free with all
              essential features.
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Personal Plan
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-purple-600">
                    Free
                  </span>
                  <span className="text-gray-600">/forever</span>
                </div>
                <p className="text-gray-600">Perfect for individual use</p>
              </div>

              <div className="mb-8 space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheck className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-purple-700">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Life?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join millions of people who have already discovered the power of
            organized living with Blumio. Start your journey today - it's
            completely free!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
              Start Free Today
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
              Download Mobile App <FaArrowRight />
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90">
            No credit card required • Always free • Available on all devices
          </p>
        </div>
      </section>
    </div>
  );
};

export default PersonalUse;
