import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container mx-auto min-h-[calc(100vh-270px)]">
          <Outlet></Outlet>
        </div>
        <div className='bg-base-200 mt-8 md:mt-16'>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;