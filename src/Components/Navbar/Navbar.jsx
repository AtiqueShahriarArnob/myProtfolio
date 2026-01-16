
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../public/assets/asa-7-logo-png-transparent.png';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const navLinks = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Projects', link: '/projects' },
        { id: 3, title: 'Resume', link: '/resume' },
        { id: 4, title: 'Contact', link: '/contactPage' },
    ];

    return (
        <nav className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300 z-50 border-b border-gray-800'>
            <div className='flex-shrink-0'>
                <Link to='/'>
                    <img src={logo} alt="Logo" className="w-[100px] brightness-0 invert" />
                </Link>
            </div>


            <ul className='hidden md:flex absolute left-1/2 transform -translate-x-1/2'>
                {navLinks.map(({ id, title, link }) => (
                    <li key={id} className='px-4 cursor-pointer font-medium hover:text-pink-600 duration-200'>
                        <Link to={link}>{title}</Link>
                    </li>
                ))}
            </ul>








        </nav>
    );
};

export default Navbar;