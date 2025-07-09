import React from 'react'
import Home from './pages/Home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/courses.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Signup from './components/Signup.jsx'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'


const App = () => {
  const [authUser, setAuthUser] = useAuth()
  return (
    <>
    
    {/*<Home />
    <Course />*/}
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={authUser?<Courses />:<Navigate to='/signup'/>} />
      <Route path='/signup' element={<Signup />}/>
    </Routes>
     <Toaster />
    <Footer />
    </>
  )
}

export default App