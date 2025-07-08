import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import FreeBook from '../components/FreeBook.jsx'

const Home = () => {
  return (
    
    <>
    <Navbar />
    <div className='pt-20'>
      <Banner />
      <FreeBook />
      
    </div>
    <Footer />
    </>
  )
}

export default Home