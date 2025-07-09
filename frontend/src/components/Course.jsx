import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Course = () => {

  const [book, setBook] =useState([])
  useEffect(() => {
    const getBook = async() => {
      try {
      const res = await axios.get('http://localhost:5001/book')
      console.log(res.data)
      setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])
  
  return (
    <>
    <div className='max-w-screen-2xl  mx-auto md:px-20 px-4 overflow-x-hidden pb-24'>
      <div className='mt-28 items-center justify-center text-center'>
       <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-purple-400'>Here!:)</span></h1>
       <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam incidunt ex in doloremque, expedita consequatur deserunt? Nesciunt reiciendis, quisquam quo rerum doloremque sequi, quod temporibus, voluptatem sunt quis inventore totam. Nulla repudiandae aperiam qui, voluptas corporis at. Omnis ipsam debitis consectetur dolorem ad aspernatur et iste facere vero eaque.</p>
      <Link to='/'>
       <button className='mt-6 bg-purple-400 text-white px-4 py-2 rounded-md hover:bg-purple-600 duration-300 cursor-pointer'>Back</button>
      </Link>
      </div>
         <div className='mt-12 gap-50 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item)=>(
             <Cards key={item.id} item={item} />
            ))
          }
         </div>
    </div>
    </>
  )
}

export default Course