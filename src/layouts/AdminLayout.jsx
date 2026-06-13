import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/admin/AdminNavbar'
import AdminFooter from '../components/admin/AdminFooter'

const AdminLayout = () => {
    return (
        <div>
            <AdminNavbar />
            <main>
                <Outlet />
            </main>
            <AdminFooter />
        </div>
    )
}

export default AdminLayout
