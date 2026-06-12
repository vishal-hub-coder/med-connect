import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PrivateRoute from './routes/PrivateRoute'
import Register from './pages/Register'
import Loader from './components/Loader'

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
