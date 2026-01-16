import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='w-full bg-[#0a192f] py-10 border-t border-gray-800'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center gap-6'>

                {/* Logo - Matching your Navbar style */}
                <div className='cursor-pointer'>
                    <Link to="home" smooth={true} duration={500}>
                        <h1 className='text-3xl font-bold text-pink-600 tracking-tighter'>
                            Atique Shahriar Arnob <span className='text-white'>.</span>
                        </h1>
                    </Link>
                </div>

                {/* Social Icons */}
                <div className='flex items-center gap-8'>
                    <a href="https://github.com/" target="_blank" rel="noreferrer"
                        className='text-gray-400 hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1'>
                        <FaGithub size={25} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
                        className='text-gray-400 hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1'>
                        <FaLinkedin size={25} />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer"
                        className='text-gray-400 hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1'>
                        <FaFacebook size={25} />
                    </a>
                </div>

                {/* Navigation Links - Simple version of Navbar */}
                <ul className='flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest font-medium text-gray-500'>
                    <li><Link to="home" smooth={true} duration={500} className='hover:text-pink-600 cursor-pointer'>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className='hover:text-pink-600 cursor-pointer'>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} className='hover:text-pink-600 cursor-pointer'>Skills</Link></li>
                    <li><Link to="education" smooth={true} duration={500} className='hover:text-pink-600 cursor-pointer'>Education</Link></li>
                </ul>

                {/* Copyright Line */}
                <div className='pt-4 border-t border-gray-800 w-full text-center'>
                    <p className='text-gray-600 text-xs'>
                        Designed and Built by <span className='text-gray-400'>Atique Shahriar</span> © {year}
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;