/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20 pb-8 text-black">
      <ul className="grid grid-cols-1 gap-8 xl:grid-cols-6 xl:gap-20">
        <li className="items-left col-span-2 flex flex-col justify-start gap-8">
          <Link to="/">
            <img src="./images/logo.svg" alt="logo" />
          </Link>

          <p>
            Tasker is the modern task management platform that helps teams work
            better together. From startups to enterprises, we provide the tools
            you need to stay organized, collaborate effectively, and achieve
            your goals.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
            >
              <FaGoogle />
            </a>
            <a
              href="#"
              className="rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
            >
              <FaXTwitter />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Product</h3>

          <Link className="transition-all hover:text-blue-500" to="/">
            Home
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/products">
            Features
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/pricing">
            Pricing
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/enterprise">
            Enterprise
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Integrations
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Mobile Apps
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            API
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/about">
            Security
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Updates
          </Link>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Solutions</h3>

          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Enterprise
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Small Business
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Personal Use
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Remote Work
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Startups
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Education
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Nonprofits
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Project Management
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/solutions">
            Team Collaboration
          </Link>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Resources</h3>

          <Link className="transition-all hover:text-blue-500" to="/resources">
            Help Center
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Tutorials
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Templates
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Guides
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Webinars
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Case Studies
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/resources">
            Best Practices
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/contact">
            Community Forum
          </Link>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Company</h3>

          <Link className="transition-all hover:text-blue-500" to="/about">
            About Us
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/about">
            Careers
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/about">
            News & Press
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/contact">
            Contact Us
          </Link>
          <Link className="transition-all hover:text-blue-500" to="/contact">
            Support
          </Link>
          <a className="transition-all hover:text-blue-500" href="#">
            Privacy Policy
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Terms of Service
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Cookie Settings
          </a>
        </li>
      </ul>

      <p className="mt-24 text-center">
        &copy; 2024 Tasker, crafted with love by Coded Surveyor
      </p>
    </footer>
  );
};

export default Footer;
