import React from 'react'
import { Outlet } from 'react-router-dom'
import DoctorNavbar from '../components/doctor/DoctorNavbar'
import DoctorFooter from '../components/doctor/DoctorFooter'

const DoctorLayout = () => {
    return (
        <div>
            <DoctorNavbar />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <DoctorFooter />
        </div>
    )
}

export default DoctorLayout
