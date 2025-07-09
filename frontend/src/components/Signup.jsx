import React from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import Login from './Login.jsx'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
const Signup = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
    // Handle login logic here
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:5001/user/signup",userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data){
       
            toast.success('signup successfull');
            navigate(from, { replace: true })
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    }).catch((error) => {
      if(error.response){
        toast.error('Error: ' + error.response.data.message);
      }
      
    }) 

    
  }

  return (
    <>
    <div className='flex h-screen items-center justify-center '>
        <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md">
  <div className="model-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
      <span>Name:</span>
      <br />
      <input className='w-80 px-3 py-1 border rounded-md outline-none' type='text' placeholder='Enter your fullname'{...register("fullname", { required: true })} />
      {errors.fullname && <span className="text-red-500">This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span>Email:</span>
      <br />
      <input className='w-80 px-3 py-1 border rounded-md outline-none' type='email' placeholder='Enter your email'{...register("email", { required: true })} />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span>Password:</span>
      <br />
      <input className='w-80 px-3 py-1 border rounded-md outline-none' type='password' placeholder='Enter your password'{...register("password", { required: true })} />
      {errors.password && <span className="text-red-500">This field is required</span>}
    </div>
     <div className='flex justify-around mt-4'>
      <button className='bg-purple-400 text-white rounded-md px-3 py-1 hover:bg-purple-600 hover:text-white duration-200 cursor-pointer'>Signup</button>
      <p>
       Have account?{""} 
             <button  className='underline text-blue-500 cursor-pointer'onClick={()=> document.getElementById('my_modal_3').showModal()}>Login</button>{""}
             <Login />
      </p>

     </div>
     </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup