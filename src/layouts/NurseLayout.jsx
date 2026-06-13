import React from 'react'
import { Outlet } from 'react-router-dom'
import NurseNavbar from '../components/nurse/NurseNavbar'
import NurseFooter from '../components/nurse/NurseFooter'

const NurseLayout = () => {
  return (
    <div>
        <NurseNavbar/>
      <main>
        <Outlet/>
      </main>
      <NurseFooter/>    
    </div>
  )
}

export default NurseLayout
