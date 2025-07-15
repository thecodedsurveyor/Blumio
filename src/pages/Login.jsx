import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaMicrosoft,
  FaGithub,
  FaArrowRight,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
    console.log("Login submitted:", formData);
  };

  const socialLogins = [
    {
      name: "Google",
      icon: <FaGoogle />,
      bgColor: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Microsoft",
      icon: <FaMicrosoft />,
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      bgColor: "bg-gray-800 hover:bg-gray-900",
    },
  ];

  const features = [
    "Secure authentication with enterprise-grade security",
    "Single Sign-On (SSO) integration available",
    "Multi-factor authentication support",
    "Seamless access across all devices",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Login Form */}
          <div className="rounded-2xl bg-white p-8 shadow-xl lg:p-12">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl">
                Welcome Back
              </h1>
              <p className="text-lg text-gray-600">
                Sign in to your Blumio account to continue managing your
                projects.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="mb-6 space-y-3">
              {socialLogins.map((social, index) => (
                <button
                  key={index}
                  className={`w-full ${social.bgColor} flex items-center justify-center gap-3 rounded-lg px-4 py-3 font-semibold text-white transition-colors`}
                >
                  {social.icon}
                  Continue with {social.name}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">
                or sign in with email
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-12 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="mr-2 rounded"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Sign In <FaArrowRight />
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Create one for free
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Features & Benefits */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
              <h2 className="mb-6 text-3xl font-bold">
                Everything You Need to Succeed
              </h2>
              <p className="mb-8 text-xl opacity-90">
                Join over 100,000+ teams who trust Blumio to manage their
                projects and boost productivity.
              </p>

              <div className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span className="opacity-90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-white bg-opacity-10 p-4 text-center">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">Uptime</div>
                </div>
                <div className="rounded-lg bg-white bg-opacity-10 p-4 text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
                <div className="rounded-lg bg-white bg-opacity-10 p-4 text-center">
                  <div className="text-2xl font-bold">50M+</div>
                  <div className="text-sm opacity-80">Tasks</div>
                </div>
                <div className="rounded-lg bg-white bg-opacity-10 p-4 text-center">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Features (visible on mobile) */}
        <div className="mt-12 rounded-xl bg-white p-6 shadow-lg lg:hidden">
          <h3 className="mb-4 text-xl font-bold text-gray-800">
            Why Choose Blumio?
          </h3>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Protected by enterprise-grade security. Your data is encrypted and
            secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
