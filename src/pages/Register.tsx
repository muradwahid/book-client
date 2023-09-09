/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { registerUser } from '../redux/user/userSlice';

const Register = () => {
  const dispatch=useAppDispatch()
  const handleRegister = (event:any) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email, password)
    dispatch(registerUser({email,password}))
  }
  return (
    <div className='flex justify-center mt-8'>
      <div>
        <h2 className='text-2xl font-semibold uppercase text-center mb-6'>Register</h2>
        <form onSubmit={handleRegister} action="" className='min-w-[250px] max-w-[300px]'>
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-gray-700' htmlFor="">Email:</label>
            <input type="text" placeholder="Email" name="email" className="input input-bordered w-full " />
          </div>
          <div className='flex flex-col gap-2 mt-3'>
            <label className='font-medium text-gray-700' htmlFor="">Password:</label>
            <input type="text" placeholder="Password" name='password' className="input input-bordered w-full max-w-xs" />
          </div>
          <input type="submit" value='Submit' className="btn btn-primary mt-3 w-full" />
        </form>
        <p>Already have an account? <Link to='/login' className='text-blue-700'>please login</Link></p>
        <div>
          <button className='btn btn-secondary w-full mt-3'>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;