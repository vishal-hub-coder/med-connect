import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginAction } from '../features/auth/authThunk';
import Loader from '../components/Loader';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error } = useSelector((state) => state.auth);
  const from = location.state?.from?.pathname || "/dashboard";

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(formData, navigate, from));
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2070"
          alt="Login Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-12 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20">
              <span className="text-3xl">🔐</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4 tracking-tight">Welcome Back</h1>
          <p className="text-xl text-blue-100 max-w-md">
            Sign in to continue to your dashboard and manage your projects effortlessly.
          </p>

          {/* Decorative Elements */}
          <div className="absolute bottom-12 left-12 text-sm opacity-75">
            Trusted by thousands of teams worldwide
          </div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-12 right-12 w-32 h-32 bg-white/10 backdrop-blur-3xl rounded-3xl rotate-12" />
        <div className="absolute bottom-32 left-24 w-24 h-24 bg-white/10 backdrop-blur-3xl rounded-3xl -rotate-12" />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden mb-10 text-center">
            <div className="w-14 h-14 mx-auto bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-4">
              🔐
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">Sign In</h2>
              <p className="text-gray-600 mt-2">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400">✉️</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-2xl outline-none transition-all text-gray-900 placeholder-gray-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400">🔒</span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-2xl outline-none transition-all text-gray-900 placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Extra Options */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-indigo-600 rounded border-gray-300"
                  />
                  <label className="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Forgot password?
                </a>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-4 rounded-2xl border border-red-100">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              {/* <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-4 rounded-2xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-4 rounded-2xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
              >
                {loading ? (
                  <>
                    <Loader />
                    <span>Signing In...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 py-3.5 rounded-2xl transition-all">
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 py-3.5 rounded-2xl transition-all">
                <span>GitHub</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-8">
              Don't have an account?{" "}
              <a href="/register" className="text-indigo-600 font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;