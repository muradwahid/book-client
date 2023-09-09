import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
const NavBar = () => {
  const {user}=useAppSelector(state=>state.user)
  const [toggle, setToggle] = useState(true);

  const menuItems = <>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/allbook'>All Books</Link>
    </li>
    {
      user?.email ? <li>
        <span>LogOut</span>
      </li> : <>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
      </>
    }
    
 </>

  return (
    <div className='bg-black'>
      <div className='mainContainer mx-auto flex items-center justify-between'>
        <div className='py-3'>
          <p className='text-gray-200 lobsterFont text-4xl'>Books Bazar</p>
        </div>
        <div className='lg:block hidden'>
          <ul className=' text-gray-200 text-xl flex items-center gap-6 navMainList'>
            {
              menuItems
            }
          </ul>
        </div>
        <div onClick={() => setToggle(!toggle)} className='text-gray-200 text-2xl lg:hidden'>
          {
            toggle ? <GiHamburgerMenu /> : <RxCross2 />
          }
        </div>
      </div>
      <div className={`${toggle?"hidden":'block'}`}>
        <div className='lg:hidden block py-4'>
          <ul className=' text-gray-200 text-center grid gap-2'>
            {
              menuItems
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;