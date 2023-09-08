import React from 'react';

const Register = () => {
  return (
    <div className='flex justify-center mt-8'>
      <div>
        <h2 className='text-2xl font-semibold uppercase text-center mb-6'>Register</h2>
        <form action="" className='min-w-[250px] max-w-[300px]'>
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-gray-700' htmlFor="">Email:</label>
            <input type="text" placeholder="Email" className="input input-bordered w-full " />
          </div>
          <div className='flex flex-col gap-2 mt-3'>
            <label className='font-medium text-gray-700' htmlFor="">Password:</label>
            <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
          </div>
          <input type="submit" value='Submit' className="btn btn-primary mt-3 w-full" />
        </form>
      </div>
    </div>
  );
};

export default Register;