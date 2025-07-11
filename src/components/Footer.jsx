/* eslint-disable react/no-unescaped-entities */
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
          <a href="#">
            <img src="./images/logo.svg" alt="logo" />
          </a>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            praesentium ullam laborum iure esse possimus vitae quidem voluptate!
            Aspernatur, rerum.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="rounded-full bg-blue-500 p-2 text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="rounded-full bg-blue-500 p-2 text-white">
              <FaGoogle />
            </a>
            <a href="#" className="rounded-full bg-blue-500 p-2 text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="rounded-full bg-blue-500 p-2 text-white">
              <FaInstagram />
            </a>
            <a href="#" className="rounded-full bg-blue-500 p-2 text-white">
              <FaXTwitter />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Tasker</h3>

          <a className="transition-all hover:text-blue-500" href="#">
            Home
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Product
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            What's New
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Pricing
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Premium
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Business
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Enterprise
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Customer Success
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Asana Templates
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Trust Security
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Status
          </a>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Solutions</h3>

          <a className="transition-all hover:text-blue-500" href="#">
            Enterprise
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Small business
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Personal use
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Remote work
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Startups
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Eduction
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Nonprofits
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Engineering
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Product
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Design
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Managers
          </a>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Download</h3>

          <a className="transition-all hover:text-blue-500" href="#">
            IOS & Android
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Mac & Windows
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Web Clipper
          </a>
          <h3 className="font-bold text-black">Build</h3>
          <a className="transition-all hover:text-blue-500" href="#">
            Integrations
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Templates
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            API docs
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Guides & tutorial
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Find a consultant
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Become an affiliate
          </a>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-black">Get Started</h3>

          <a className="transition-all hover:text-blue-500" href="#">
            Switch from Confluence
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Switch from Asana
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Switch from Evernote
          </a>
          <h3 className="font-bold text-black">Resources</h3>
          <a className="transition-all hover:text-blue-500" href="#">
            Pricing
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            About us
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Careers
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Media kit
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Email us{" "}
          </a>
          <a className="transition-all hover:text-blue-500" href="#">
            Cookie settings
          </a>
        </li>
      </ul>

      <p className="mt-24 text-center">
        &copy; 2023 Tasker, with love by Coded Surveyor
      </p>
    </footer>
  );
};

export default Footer;
