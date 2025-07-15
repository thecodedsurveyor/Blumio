import { FiTwitter, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { RiPlantFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "API", href: "/api" },
        { name: "Security", href: "/security" },
        { name: "Roadmap", href: "/updates" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/resources" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/resources" },
        { name: "Partners", href: "/contact" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/help-center" },
        { name: "Help Center", href: "/help-center" },
        { name: "Community", href: "/resources" },
        { name: "Templates", href: "/resources" },
        { name: "Webinars", href: "/resources" },
        { name: "Status", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookie-settings" },
        { name: "GDPR", href: "/privacy-policy" },
        { name: "Compliance", href: "/security" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiGithub, href: "#", label: "GitHub" },
    { icon: FiMail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-[80%] max-w-none px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="mb-4 flex items-center space-x-2 sm:mb-6">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 p-1.5 sm:rounded-xl sm:p-2">
                <RiPlantFill className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
                Blumio
              </span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-gray-400 sm:mb-6 sm:text-base">
              Transforming team collaboration and productivity, one workflow at
              a time. Help your team bloom.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-lg bg-gray-800 p-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-6 sm:mt-12 sm:pt-8 md:flex-row">
          <p className="text-xs text-gray-400 sm:text-sm">
            © 2024 Blumio. All rights reserved. Made with ❤️ for productive
            teams.
          </p>
          <div className="mt-3 flex space-x-4 sm:mt-4 sm:space-x-6 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-xs text-gray-400 transition-colors duration-200 hover:text-white sm:text-sm"
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-xs text-gray-400 transition-colors duration-200 hover:text-white sm:text-sm"
            >
              Terms
            </Link>
            <Link
              to="/cookie-settings"
              className="text-xs text-gray-400 transition-colors duration-200 hover:text-white sm:text-sm"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
