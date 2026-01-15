import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import myImg from '../../assets/Adobe Express - file.png';

const Hero = () => {
    return (
        <div className='w-full min-h-screen bg-[#0a192f] flex items-center'>
            <div className='max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-12 items-center w-full'>


                <div className='flex flex-col justify-center'>
                    <h2 className='text-[#e04343] text-4xl font-bold mb-2'>Hello</h2>

                    <h1 className='text-white text-5xl sm:text-6xl font-bold mb-4'>
                        I am {' '}
                        <span className='text-white'>
                            <Typewriter
                                words={['Atique Shahriar Arnob']}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={80}
                            />
                        </span>
                    </h1>

                    <p className='text-gray-300 text-lg leading-relaxed text-justify'>
                        I am a dedicated Web Developer in Front-End Development, specializing in
                        React.js and proficient in the MERN stack (MongoDB, Express.js, React.js,
                        Node.js). My passion for web development drives me to create efficient,
                        responsive, and user-friendly applications. While my primary focus has
                        been on front-end development—crafting visually appealing and interactive
                        user interfaces—I am equally enthusiastic about exploring back-end development.
                    </p>


                    <div className='flex gap-6 text-2xl text-white mt-6 mb-8'>
                        <a href="#" className='hover:text-[#3b82f6] duration-300'><FaGithub /></a>
                        <a href="#" className='hover:text-[#3b82f6] duration-300'><FaLinkedin /></a>
                        <a href="#" className='hover:text-[#3b82f6] duration-300'><FaFacebook /></a>
                    </div>

                    <button className='w-fit bg-pink-600 hover:bg-pink-800 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg'>
                        Download Resume
                    </button>
                </div>


                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className='flex justify-center'
                >
                    <img
                        src={myImg}
                        alt="Atique Shahriar Arnob"
                        className='w-full max-w-[500px] h-auto object-contain pointer-events-none'
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;