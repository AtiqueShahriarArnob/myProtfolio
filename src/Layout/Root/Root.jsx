import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Pages/Footer/Footer';


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-[80px]">
                <Outlet />

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;