import {
  FaCookie,
  FaToggleOn,
  FaToggleOff,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaVideo,
  FaSave,
} from "react-icons/fa";
import { useState } from "react";

const CookieSettings = () => {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Always enabled
    analytics: true,
    marketing: false,
    preferences: true,
    functional: true,
  });

  const handleToggle = (type) => {
    if (type === "necessary") return; // Can't disable necessary cookies
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const cookieTypes = [
    {
      id: "necessary",
      title: "Necessary Cookies",
      description:
        "Essential cookies required for the website to function properly. These cannot be disabled.",
      icon: <FaShieldAlt className="text-3xl text-red-600" />,
      required: true,
      examples: [
        "Authentication",
        "Security",
        "Load balancing",
        "Form submission",
      ],
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description:
        "Cookies that enhance your experience and remember your preferences.",
      icon: <FaCookie className="text-3xl text-blue-600" />,
      required: false,
      examples: [
        "Language preferences",
        "Theme settings",
        "Region selection",
        "Accessibility options",
      ],
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description:
        "Help us understand how you use our website to improve performance and user experience.",
      icon: <FaChartLine className="text-3xl text-green-600" />,
      required: false,
      examples: [
        "Google Analytics",
        "Page views",
        "User behavior",
        "Performance metrics",
      ],
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description:
        "Used to deliver personalized advertisements and track marketing campaign effectiveness.",
      icon: <FaUsers className="text-3xl text-purple-600" />,
      required: false,
      examples: [
        "Ad targeting",
        "Social media",
        "Campaign tracking",
        "Retargeting",
      ],
    },
    {
      id: "preferences",
      title: "Preference Cookies",
      description:
        "Remember your choices and provide enhanced, personalized features.",
      icon: <FaVideo className="text-3xl text-orange-600" />,
      required: false,
      examples: [
        "Video preferences",
        "Content personalization",
        "Feature settings",
        "Display options",
      ],
    },
  ];

  const handleSaveSettings = () => {
    // Save cookie settings to localStorage or send to server
    localStorage.setItem("cookieSettings", JSON.stringify(cookieSettings));
    alert("Cookie settings saved successfully!");
  };

  const handleAcceptAll = () => {
    setCookieSettings({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      functional: true,
    });
  };

  const handleRejectAll = () => {
    setCookieSettings({
      necessary: true, // Can't disable necessary
      analytics: false,
      marketing: false,
      preferences: false,
      functional: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FaCookie className="mx-auto mb-6 text-6xl" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Cookie Settings
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Manage your cookie preferences and control how we use cookies to
            enhance your experience on Blumio.
          </p>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                About Cookies
              </h2>
              <p className="text-gray-600">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences, analyzing how you
                use our site, and enabling certain features.
              </p>
            </div>

            <div className="space-y-6">
              {cookieTypes.map((type) => (
                <div
                  key={type.id}
                  className="rounded-xl bg-white p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{type.icon}</div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-gray-800">
                          {type.title}
                        </h3>
                        <p className="mb-4 text-gray-600">{type.description}</p>

                        <div className="mb-4">
                          <h4 className="mb-2 font-semibold text-gray-700">
                            Examples:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {type.examples.map((example, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>

                        {type.required && (
                          <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
                            Always Active
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="ml-4">
                      <button
                        onClick={() => handleToggle(type.id)}
                        disabled={type.required}
                        className={`text-3xl transition-colors ${
                          type.required
                            ? "cursor-not-allowed text-gray-400"
                            : cookieSettings[type.id]
                            ? "text-green-600 hover:text-green-700"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        {cookieSettings[type.id] ? (
                          <FaToggleOn />
                        ) : (
                          <FaToggleOff />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    onClick={handleAcceptAll}
                    className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-700"
                  >
                    Reject All (Except Necessary)
                  </button>
                </div>

                <button
                  onClick={handleSaveSettings}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <FaSave />
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Managing Cookies in Your Browser
                </h3>
                <p className="mb-4 text-gray-600">
                  You can also manage cookies directly through your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>View and delete existing cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear cookies when you close your browser</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Need Help?
                </h3>
                <p className="mb-4 text-gray-600">
                  If you have questions about our cookie policy or need help
                  managing your preferences, we&apos;re here to help.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
                    Contact Support
                  </button>
                  <button className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-green-700">
                    Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookieSettings;
