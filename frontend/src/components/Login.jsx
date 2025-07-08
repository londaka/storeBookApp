import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // Handle login logic here
    console.log(data)
    document.getElementById("my_modal_3").close()
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >✕</button>
            <h3 className="font-bold text-lg mb-4">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email:</span>
              <br />
              <input
                className='w-80 px-3 py-1 border rounded-md outline-none'
                type='email'
                placeholder='Enter your email'
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password:</span>
              <br />
              <input
                className='w-80 px-3 py-1 border rounded-md outline-none'
                type='password'
                placeholder='Enter your password'
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-purple-400 text-white rounded-md px-3 py-1 hover:bg-purple-600 hover:text-white duration-200 cursor-pointer'
              >Login</button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login