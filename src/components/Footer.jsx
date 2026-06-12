import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-auto">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">
            CareConnect
          </h1>

          <p className="text-sm leading-7 text-gray-400">
            Connecting patients with trusted doctors and nurses.
            Manage bookings, chats, notifications and healthcare
            services in one platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-5">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3">
            <Link to="/" className="hover:text-blue-400">
              Dashboard
            </Link>

            <Link to="/profile" className="hover:text-blue-400">
              Profile
            </Link>

            <Link to="/bookings" className="hover:text-blue-400">
              Bookings
            </Link>

            <Link to="/chat" className="hover:text-blue-400">
              Chat
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-5">
            Services
          </h2>

          <div className="flex flex-col gap-3">
            <p>Doctor Consultation</p>
            <p>Home Nursing</p>
            <p>Emergency Care</p>
            <p>Video Consultation</p>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-5">
            Support
          </h2>

          <div className="flex flex-col gap-3">
            <p>Email: support@careconnect.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Delhi, India</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-5">

        <div className="text-sm text-gray-400 flex items-center gap-2">
          © {new Date().getFullYear()} CareConnect. Made with
          <FaHeart className="text-red-500" />
          in India.
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gray-700 transition"
          >
            <FaGithub />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;