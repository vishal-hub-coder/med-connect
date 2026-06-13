import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { registerAction } from "../features/auth/authThunk";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    role: "doctor",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(formData, navigate));
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" 
          alt="Healthcare" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/30 text-5xl">
              🏥
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Join Our Network</h1>
          <p className="text-xl text-emerald-100 max-w-md">
            Create your account and become part of a smarter healthcare ecosystem.
          </p>

          <div className="mt-12 text-sm opacity-75">
            Trusted by doctors, nurses &amp; patients across India
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-16 w-36 h-36 bg-white/10 backdrop-blur-3xl rounded-3xl rotate-12" />
        <div className="absolute bottom-28 left-20 w-28 h-28 bg-white/10 backdrop-blur-3xl rounded-3xl -rotate-12" />
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden mb-8 text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-600 text-white rounded-3xl flex items-center justify-center text-4xl mb-4">
              🏥
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">Sign Up</h2>
              <p className="text-gray-600 mt-2">Join our healthcare platform today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">👤</div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-2xl outline-none transition-all"
                    placeholder="Dr. Rajesh Sharma"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">📱</div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-2xl outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">✉️</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-2xl outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">🔒</div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-2xl outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Register As</label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-2xl outline-none transition-all appearance-none"
                  >
               <option value="user">User</option>
<option value="doctor">Doctor</option>
<option value="nurse">Nurse</option>
<option value="compounder">Compounder</option>
<option value="caretaker">Caretaker</option>
<option value="physiotherapist">Physiotherapist</option>
<option value="labTechnician">Lab Technician</option>
<option value="admin">Admin</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">▼</div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-4 rounded-2xl border border-red-100">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 rounded-2xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;