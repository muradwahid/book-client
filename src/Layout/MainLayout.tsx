import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';

const MainLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;