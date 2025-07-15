import {
  FaApple,
  FaGooglePlay,
  FaMobile,
  FaSync,
  FaBell,
  FaPlane,
  FaFingerprint,
  FaDownload,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const MobileApps = () => {
  const features = [
    {
      icon: <FaSync className="text-4xl text-blue-600" />,
      title: "Real-time Sync",
      description: "Your data stays synchronized across all devices instantly.",
    },
    {
      icon: <FaBell className="text-4xl text-green-600" />,
      title: "Push Notifications",
      description:
        "Stay updated with smart notifications for tasks and updates.",
    },
    {
      icon: <FaPlane className="text-4xl text-purple-600" />,
      title: "Offline Access",
      description: "Work on your tasks even without an internet connection.",
    },
    {
      icon: <FaFingerprint className="text-4xl text-orange-600" />,
      title: "Secure Access",
      description: "Biometric authentication and enterprise-grade security.",
    },
  ];

  const stats = [
    { number: "4.8", label: "App Store Rating", icon: <FaStar /> },
    { number: "1M+", label: "Downloads", icon: <FaDownload /> },
    { number: "50K+", label: "Reviews", icon: <FaUsers /> },
    { number: "99.9%", label: "Uptime", icon: <FaMobile /> },
  ];

  const screenshots = [
    {
      title: "Task Dashboard",
      description: "Overview of all your tasks and projects",
    },
    {
      title: "Team Collaboration",
      description: "Chat and collaborate with your team",
    },
    {
      title: "Time Tracking",
      description: "Track time spent on tasks effortlessly",
    },
    {
      title: "Calendar View",
      description: "See your schedule at a glance",
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
                Blumio on the Go
              </h1>
              <p className="mb-8 text-xl md:text-2xl">
                Take your productivity anywhere with our powerful mobile apps
                for iOS and Android. Full functionality, beautiful design, and
                seamless synchronization.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-800">
                  <FaApple className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-800">
                  <FaGooglePlay className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-96 w-48 rounded-3xl bg-white p-4 shadow-2xl">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-b from-blue-500 to-purple-600"></div>
                </div>
                <div className="absolute -right-8 top-16 h-96 w-48 rounded-3xl bg-white p-4 shadow-2xl">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-b from-green-500 to-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 flex justify-center text-3xl text-blue-600">
                  {stat.icon}
                </div>
                <div className="mb-2 text-4xl font-bold text-gray-800">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Everything You Need, Anywhere
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Our mobile apps provide the full Blumio experience with features
              designed specifically for mobile productivity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
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

      {/* Screenshots */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Beautiful Design, Powerful Features
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Experience the intuitive interface designed for mobile
              productivity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 h-64 w-32 rounded-2xl bg-gradient-to-b from-blue-500 to-purple-600 shadow-lg"></div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600">{screenshot.description}</p>
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
              What Users Are Saying
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                rating: 5,
                text: "The mobile app is incredibly smooth and has all the features I need. Perfect for managing tasks on the go!",
                author: "Sarah M.",
                role: "Project Manager",
              },
              {
                rating: 5,
                text: "Love the offline functionality. I can work on my tasks even when I'm traveling without internet.",
                author: "Mike R.",
                role: "Developer",
              },
              {
                rating: 5,
                text: "The notifications are smart and not overwhelming. Keeps me updated without being distracting.",
                author: "Lisa K.",
                role: "Designer",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
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
          <h2 className="mb-6 text-4xl font-bold">Download Blumio Today</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join millions of users who manage their tasks and projects with
            Blumio&apos;s mobile apps.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-800">
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-800">
              <FaGooglePlay className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;
