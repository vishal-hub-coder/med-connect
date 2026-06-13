import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

import Loader from './components/Loader'

import PrivateRoute from './routes/PrivateRoute'
import RoleRoute from './routes/RoleRoute'

import MainLayout from './layouts/MainLayout'
import DoctorLayout from './layouts/DoctorLayout'
import NurseLayout from './layouts/NurseLayout'
import AdminLayout from './layouts/AdminLayout'

import DoctorDashboard from './components/doctor/DoctorDashboard'
import NurseDashboard from './components/nurse/NurseDashboard'
import Admindashboard from './components/admin/Admindashboard'
import DoctorProfile from './components/doctor/DoctorProfile'

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />


            <Route element={<RoleRoute allowedRoles={["patient"]} />}>
              <Route
                path="/patient/dashboard"
                element={<Dashboard />}
              />
            </Route>
          </Route>

          <Route element={<DoctorLayout />}>
            <Route element={<RoleRoute allowedRoles={["doctor"]} />}>
              <Route
                path="/doctor/dashboard"
                element={<DoctorDashboard />}
              />

            </Route>
            <Route path='/doctor/profile' element={<DoctorProfile/>}/>
          </Route>

          <Route element={<NurseLayout />}>
            <Route element={<RoleRoute allowedRoles={["nurse"]} />}>
              <Route
                path="/nurse/dashboard"
                element={<NurseDashboard />}
              />
            </Route>
          </Route>

          <Route element={<AdminLayout />}>
            <Route element={<RoleRoute allowedRoles={["admin"]} />}>
              <Route
                path="/admin/dashboard"
                element={<Admindashboard />}
              />
            </Route>
          </Route>

        </Route>

      </Routes>
    </Suspense>
  )
}

export default App