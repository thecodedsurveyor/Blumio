import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaBook,
  FaCalendarAlt,
  FaChartLine,
  FaUserGraduate,
  FaSchool,
  FaLaptop,
  FaClipboardList,
  FaAward,
  FaComments,
  FaFileAlt,
  FaStar,
  FaCheck,
  FaArrowRight,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";

const Education = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-3xl text-blue-500" />,
      title: "Classroom Management",
      description:
        "Organize lessons, track student progress, and manage assignments with intuitive classroom tools.",
    },
    {
      icon: <FaUsers className="text-3xl text-green-500" />,
      title: "Student Collaboration",
      description:
        "Foster teamwork and peer learning with collaborative projects and group assignment tools.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-purple-500" />,
      title: "Academic Planning",
      description:
        "Plan curricula, schedule classes, and coordinate academic activities across terms and semesters.",
    },
    {
      icon: <FaChartLine className="text-3xl text-orange-500" />,
      title: "Progress Tracking",
      description:
        "Monitor student performance, track learning outcomes, and generate detailed progress reports.",
    },
    {
      icon: <FaClipboardList className="text-3xl text-red-500" />,
      title: "Assignment Management",
      description:
        "Create, distribute, and grade assignments with automated workflows and rubric-based scoring.",
    },
    {
      icon: <FaComments className="text-3xl text-blue-600" />,
      title: "Parent Communication",
      description:
        "Keep parents informed with automated updates, progress reports, and communication tools.",
    },
    {
      icon: <FaFileAlt className="text-3xl text-green-600" />,
      title: "Resource Library",
      description:
        "Organize and share educational resources, lesson plans, and teaching materials.",
    },
    {
      icon: <FaAward className="text-3xl text-yellow-500" />,
      title: "Assessment Tools",
      description:
        "Create and manage assessments, quizzes, and exams with automated grading and analytics.",
    },
  ];

  const userTypes = [
    {
      icon: <FaChalkboardTeacher className="text-3xl text-blue-500" />,
      title: "Teachers & Educators",
      description:
        "Streamline lesson planning, grading, and student communication.",
      benefits: [
        "Automated grading workflows",
        "Lesson plan templates",
        "Student progress tracking",
        "Parent communication tools",
      ],
    },
    {
      icon: <FaUserGraduate className="text-3xl text-green-500" />,
      title: "Students",
      description:
        "Stay organized with assignments, projects, and study schedules.",
      benefits: [
        "Assignment tracking",
        "Study schedule planning",
        "Collaboration tools",
        "Progress monitoring",
      ],
    },
    {
      icon: <FaSchool className="text-3xl text-purple-500" />,
      title: "Schools & Institutions",
      description: "Manage curriculum, faculty, and institutional operations.",
      benefits: [
        "Curriculum management",
        "Faculty coordination",
        "Resource allocation",
        "Performance analytics",
      ],
    },
    {
      icon: <FaUsers className="text-3xl text-orange-500" />,
      title: "Administrators",
      description: "Oversee academic operations and institutional planning.",
      benefits: [
        "Academic calendar management",
        "Resource planning",
        "Performance reporting",
        "Policy implementation",
      ],
    },
  ];

  const benefits = [
    {
      title: "Improved Student Engagement",
      description: "Students are 75% more engaged with organized learning",
      stat: "75%",
      metric: "more engaged",
    },
    {
      title: "Time Savings for Teachers",
      description: "Teachers save 10+ hours per week on administrative tasks",
      stat: "10+",
      metric: "hours saved",
    },
    {
      title: "Better Learning Outcomes",
      description: "Schools report 40% improvement in learning outcomes",
      stat: "40%",
      metric: "better outcomes",
    },
    {
      title: "Enhanced Communication",
      description: "95% improvement in parent-teacher communication",
      stat: "95%",
      metric: "better communication",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal",
      institution: "Lincoln Elementary School",
      quote:
        "Blumio transformed how our teachers manage their classrooms. Student engagement and learning outcomes have never been better.",
      rating: 5,
    },
    {
      name: "Mark Thompson",
      role: "High School Teacher",
      institution: "Roosevelt High School",
      quote:
        "I save hours every week on lesson planning and grading. I can focus more on what matters - teaching my students.",
      rating: 5,
    },
    {
      name: "Prof. Lisa Chen",
      role: "University Professor",
      institution: "State University",
      quote:
        "Managing large classes is so much easier now. The collaboration tools help students learn from each other effectively.",
      rating: 5,
    },
  ];

  const useCases = [
    {
      title: "K-12 Schools",
      description:
        "Comprehensive classroom management for elementary, middle, and high schools.",
      features: [
        "Grade book management",
        "Parent portals",
        "Behavior tracking",
        "IEP management",
      ],
      icon: <FaSchool className="text-2xl text-blue-500" />,
    },
    {
      title: "Higher Education",
      description:
        "Advanced tools for universities and colleges to manage courses and research.",
      features: [
        "Course management",
        "Research collaboration",
        "Student advising",
        "Thesis tracking",
      ],
      icon: <FaGraduationCap className="text-2xl text-green-500" />,
    },
    {
      title: "Online Learning",
      description: "Support for remote and hybrid learning environments.",
      features: [
        "Virtual classrooms",
        "Assignment submission",
        "Discussion forums",
        "Progress tracking",
      ],
      icon: <FaLaptop className="text-2xl text-purple-500" />,
    },
    {
      title: "Training Programs",
      description: "Corporate training and professional development programs.",
      features: [
        "Training modules",
        "Certification tracking",
        "Skills assessment",
        "Compliance reporting",
      ],
      icon: <FaAward className="text-2xl text-orange-500" />,
    },
  ];

  const integrations = [
    {
      name: "Google Classroom",
      icon: <FaGoogle className="text-2xl text-blue-500" />,
    },
    {
      name: "Microsoft Teams",
      icon: <FaMicrosoft className="text-2xl text-blue-600" />,
    },
    {
      name: "Canvas LMS",
      icon: <FaBook className="text-2xl text-green-500" />,
    },
    { name: "Zoom", icon: <FaLaptop className="text-2xl text-purple-500" /> },
    {
      name: "Blackboard",
      icon: <FaChalkboardTeacher className="text-2xl text-orange-500" />,
    },
    {
      name: "Moodle",
      icon: <FaGraduationCap className="text-2xl text-red-500" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Teacher Plan",
      price: "Free",
      description: "Perfect for individual teachers",
      features: [
        "Up to 30 students",
        "Basic assignment management",
        "Grade book",
        "Parent communication",
        "Mobile app access",
      ],
    },
    {
      name: "School Plan",
      price: "$199",
      period: "/month",
      description: "For schools and institutions",
      features: [
        "Unlimited students & teachers",
        "Advanced analytics",
        "Custom workflows",
        "Priority support",
        "Admin dashboard",
        "Integration support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Transform Education with Blumio
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                Empower teachers, engage students, and enhance learning outcomes
                with our comprehensive education management platform designed
                for modern classrooms.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                  Start Free for Teachers
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
                  Schedule School Demo
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <img
                src="/images/education-hero.svg"
                alt="Education and learning illustration"
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
              Proven Results in Education
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Join thousands of educators who have transformed their teaching
              with Blumio.
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
              Everything Educators Need
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Comprehensive tools designed specifically for modern educational
              environments.
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

      {/* User Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Built for Every Education Role
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Tailored solutions for teachers, students, administrators, and
              institutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {userTypes.map((userType, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 text-center">{userType.icon}</div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-800">
                  {userType.title}
                </h3>
                <p className="mb-4 text-center text-gray-600">
                  {userType.description}
                </p>
                <div className="space-y-2">
                  {userType.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <FaCheck className="text-green-500" />
                      {benefit}
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
              Perfect for Every Educational Setting
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              From K-12 schools to universities and corporate training programs.
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

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Integrates with Your Existing Tools
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Seamlessly connect with popular education platforms and tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {integration.name}
                </h3>
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
              What Educators Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from teachers and administrators who have transformed
              their education experience.
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
                      {testimonial.institution}
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
              Education-Friendly Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Affordable solutions designed for educational budgets.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
                  {plan.price === "Free"
                    ? "Get Started Free"
                    : "Start Free Trial"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Classroom?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join thousands of educators who have already discovered the power of
            organized, efficient teaching with Blumio. Start free today!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Start Free for Teachers
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
              Schedule School Demo <FaArrowRight />
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90">
            No credit card required • Free for individual teachers • Special
            school pricing available
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;
