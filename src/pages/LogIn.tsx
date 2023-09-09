/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { googleSignIn, loginUser } from '../redux/user/userSlice';

const LogIn = () => {
  const google = new GoogleAuthProvider()
  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
    dispatch(googleSignIn(google))
  }
  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.gmail.value;
    const password = event.target.password.value
    dispatch(loginUser({ email, password }));
    if (user?.email) {
      navigate('/')
    }
  }
  return (
    <div className='flex justify-center mt-8'>
      <div>
        <h2 className='text-2xl font-semibold uppercase text-center mb-6'>Login</h2>
        <form onSubmit={handleLogin} action="" className='min-w-[250px] max-w-[300px]'>
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-gray-700' htmlFor="">Email:</label>
            <input type="text" name='gmail' placeholder="Email" className="input input-bordered w-full " />
          </div>
          <div className='flex flex-col gap-2 mt-3'>
            <label className='font-medium text-gray-700' htmlFor="">Password:</label>
            <input type="text" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
          </div>
          <input type="submit" value='Submit' className="btn btn-primary mt-3 w-full" />
        </form>
        <div>
          <button onClick={handleGoogleSignIn} className='btn btn-secondary w-full mt-3'>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;