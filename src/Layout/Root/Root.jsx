import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-[80px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;