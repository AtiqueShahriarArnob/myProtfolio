import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/asa-7-logo-png-transparent.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const navLinks = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Projects', link: '/projects' },
        { id: 3, title: 'Resume', link: '/resume' },
        { id: 4, title: 'Contact', link: '/contact' },
    ];

    return (
        <nav className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300 z-50 border-b border-gray-800'>


            <div className='flex-shrink-0'>
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[100px] brightness-0 invert"
                />
            </div>


            <ul className='hidden md:flex absolute left-1/2 transform -translate-x-1/2'>
                {navLinks.map(({ id, title, link }) => (
                    <li key={id} className='px-4 cursor-pointer font-medium hover:text-pink-600 duration-200'>
                        {title}
                    </li>
                ))}
            </ul>


            <div className='hidden md:flex flex-shrink-0'>
                <a
                    href="/resume.pdf"
                    download="My_Resume.pdf"
                    className='bg-pink-600 hover:bg-transparent border-2 border-pink-600 text-white px-5 py-2 rounded-md duration-300 font-bold'
                >
                    Download Resume
                </a>
            </div>


            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-2xl'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                {navLinks.map(({ id, title, link }) => (
                    <li key={id} className='py-6 text-4xl hover:text-pink-600'>
                        {title}
                    </li>
                ))}
                <li className='py-6'>
                    <a href="/resume.pdf" download className='bg-pink-600 text-white px-6 py-3 rounded-md text-xl'>
                        Download Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;