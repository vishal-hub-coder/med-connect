import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Bell,
  MessageCircle,
  CalendarDays,
  Users,
  LayoutDashboard,
  Star,
  LogOut,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const DoctorNavbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =() =>{
    dispatch(logout());
    navigate("/login");
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/doctor/dashboard">
            <h1 className="text-2xl font-bold text-blue-600">
              CareConnect
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/doctor/dashboard"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link
              to="/doctor/bookings"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <CalendarDays size={18} />
              Appointments
            </Link>

            <Link
              to="/doctor/patients"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Users size={18} />
              Patients
            </Link>

            <Link
              to="/doctor/reviews"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Star size={18} />
              Reviews
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">

            <button className="relative">
              <Bell className="text-gray-700" />
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center">
                3
              </span>
            </button>

            <button className="relative">
              <MessageCircle className="text-gray-700" />
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-500 text-white text-xs flex justify-center items-center">
                5
              </span>
            </button>

            <Link
              to="/doctor/profile"
              className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-xl transition"
            >
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div>
                <h4 className="font-semibold">
                  Dr. Vishal
                </h4>

                <p className="text-xs text-gray-500">
                  Cardiologist
                </p>
              </div>
            </Link>

            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-red-600">
              <LogOut size={18} />
              Logout
            </button>

          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t p-5 space-y-4">

          <Link
            to="/doctor/dashboard"
            className="block"
          >
            Dashboard
          </Link>

          <Link
            to="/doctor/bookings"
            className="block"
          >
            Appointments
          </Link>

          <Link
            to="/doctor/patients"
            className="block"
          >
            Patients
          </Link>

          <Link
            to="/doctor/reviews"
            className="block"
          >
            Reviews
          </Link>

          <Link
            to="/doctor/chat"
            className="block"
          >
            Chat
          </Link>

          <button className="w-full bg-red-500 text-white py-3 rounded-xl">
            Logout
          </button>

        </div>
      )}
    </nav>
  );
};

export default DoctorNavbar;