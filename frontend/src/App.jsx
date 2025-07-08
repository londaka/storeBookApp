import React from 'react'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/courses.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Signup from './components/Signup.jsx'


const App = () => {
  return (
    <>
    
    {/*<Home />
    <Course />*/}
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App