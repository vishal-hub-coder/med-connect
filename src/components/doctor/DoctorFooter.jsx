
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorFooter = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              CareConnect
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              Smart healthcare platform connecting doctors, nurses and
              patients with secure communication and appointment management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link
                to="/doctor/dashboard"
                className="block hover:text-blue-400 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/doctor/bookings"
                className="block hover:text-blue-400 transition"
              >
                Appointments
              </Link>

              <Link
                to="/doctor/patients"
                className="block hover:text-blue-400 transition"
              >
                Patients
              </Link>

              <Link
                to="/doctor/reviews"
                className="block hover:text-blue-400 transition"
              >
                Reviews
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Support
            </h3>

            <div className="space-y-3">
              <Link
                to="/help"
                className="block hover:text-blue-400 transition"
              >
                Help Center
              </Link>

              <Link
                to="/privacy-policy"
                className="block hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block hover:text-blue-400 transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@careconnect.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>New Delhi, India</span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} CareConnect. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xl">

              <a
                href="#"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="hover:text-blue-600 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default DoctorFooter;

