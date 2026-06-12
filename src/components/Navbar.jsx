import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaComments,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          CareConnect
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="font-medium hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/bookings"
            className="font-medium hover:text-blue-600"
          >
            Bookings
          </Link>

          <Link
            to="/chat"
            className="font-medium hover:text-blue-600 flex items-center gap-2"
          >
            <FaComments />
            Chat
          </Link>

          {/* Notification Bell */}
          <button className="relative">

            <FaBell
              size={20}
              className="cursor-pointer"
            />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              3
            </span>

          </button>

          {/* Profile */}
          <Link
            to="/profile"
            className="flex items-center gap-2"
          >
            <FaUserCircle size={32} />

            <div>
              <h3 className="font-semibold">
                {user?.fullName || "User"}
              </h3>

              <p className="text-xs text-gray-500">
                {user?.role}
              </p>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-5 flex flex-col gap-5">

          <Link to="/">Dashboard</Link>

          <Link to="/bookings">
            Bookings
          </Link>

          <Link
            to="/chat"
            className="flex items-center gap-2"
          >
            <FaComments />
            Chat
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3"
          >
            <FaUserCircle size={30} />

            <div>
              <h3>{user?.fullName}</h3>

              <p className="text-sm text-gray-500">
                {user?.role}
              </p>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;