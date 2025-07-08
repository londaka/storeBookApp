import React from 'react'
import banner from '../assets/Banner.jpg'

const Banner = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 my-10'>
     <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
      <div className='space-y-12'>
         <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-purple-500'>new everyday!!!</span></h1>
         <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nam!</p>
         <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
      </div>
      <button class="mt-6 btn bg-purple-400">Primary</button>
     </div>
     <div className='order-1 mt-20 ml-50 w-full md:w-1/2'>
      <img className='w-92 h-92 rounded-2xl' src={banner} alt=''/>
     </div>
    </div>
    </>
  )
}

export default Banner