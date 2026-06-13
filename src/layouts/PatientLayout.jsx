import React from 'react'
import { Outlet } from 'react-router-dom'
import PatientNavbar from '../components/patient/PatientNavbar'
import PatientFooter from '../components/patient/PatientFooter'

const PatientLayout = () => {
  return (
    <div>
        <PatientNavbar/>
      <main>
        <Outlet/>
      </main>
      <PatientFooter/>
    </div>
  )
}

export default PatientLayout
