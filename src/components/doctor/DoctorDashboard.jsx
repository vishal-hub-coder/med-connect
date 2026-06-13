import React from "react";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  XCircle,
  Users,
  Star,
  Bell,
  MessageCircle,
} from "lucide-react";

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Doctor Dashboard
        </h1>
        <p className="text-gray-500">
          Manage your appointments and patients
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

        <div className="bg-white p-5 rounded-2xl shadow">
          <Clock className="text-yellow-500" />
          <h2 className="text-xl font-bold mt-2">12</h2>
          <p className="text-gray-500">Pending</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <CheckCircle className="text-green-500" />
          <h2 className="text-xl font-bold mt-2">25</h2>
          <p className="text-gray-500">Accepted</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <XCircle className="text-red-500" />
          <h2 className="text-xl font-bold mt-2">5</h2>
          <p className="text-gray-500">Rejected</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <Users className="text-blue-500" />
          <h2 className="text-xl font-bold mt-2">40</h2>
          <p className="text-gray-500">Patients</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <Star className="text-orange-500" />
          <h2 className="text-xl font-bold mt-2">4.8</h2>
          <p className="text-gray-500">Rating</p>
        </div>

      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        {/* Today's Appointments */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CalendarDays />
            Today’s Appointments
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center border p-4 rounded-xl">
              <div>
                <h3 className="font-semibold">Rahul Sharma</h3>
                <p className="text-sm text-gray-500">Cardiology</p>
              </div>
              <span className="text-yellow-500 font-semibold">Pending</span>
            </div>

            <div className="flex justify-between items-center border p-4 rounded-xl">
              <div>
                <h3 className="font-semibold">Anita Verma</h3>
                <p className="text-sm text-gray-500">ICU Care</p>
              </div>
              <span className="text-green-500 font-semibold">Accepted</span>
            </div>

            <div className="flex justify-between items-center border p-4 rounded-xl">
              <div>
                <h3 className="font-semibold">Amit Singh</h3>
                <p className="text-sm text-gray-500">General Checkup</p>
              </div>
              <span className="text-red-500 font-semibold">Rejected</span>
            </div>

          </div>

        </div>

        {/* Right Panel */}
        <div className="space-y-6">

          {/* Notifications */}
          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
              <Bell />
              Notifications
            </h2>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>New booking request from Rahul</li>
              <li>Appointment accepted by you</li>
              <li>New message from patient</li>
            </ul>

          </div>

          {/* Quick Chat */}
          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
              <MessageCircle />
              Quick Chat
            </h2>

            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
              Open Chat
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DoctorDashboard;