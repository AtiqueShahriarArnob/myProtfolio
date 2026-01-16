import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaBootstrap
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress
} from 'react-icons/si';

const Skills = () => {
    const techs = [
        { id: 1, src: <FaHtml5 />, title: 'HTML' },
        { id: 2, src: <FaCss3Alt />, title: 'CSS' },
        { id: 3, src: <FaJsSquare />, title: 'JavaScript' },
        { id: 4, src: <FaReact />, title: 'React' },
        { id: 5, src: <SiTailwindcss />, title: 'Tailwind' },
        { id: 6, src: <FaBootstrap />, title: 'Bootstrap' },
        { id: 7, src: <FaNodeJs />, title: 'Node JS' },
        { id: 8, src: <SiExpress />, title: 'Express JS' },
        { id: 9, src: <SiMongodb />, title: 'MongoDB' },
        { id: 10, src: <FaGithub />, title: 'GitHub' },
    ];


    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };


    const itemEffect = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>


                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <p className='text-5xl font-bold inline border-b-4 border-pink-600 uppercase tracking-widest text-white'>
                        Skills
                    </p>
                    <p className='text-xl py-6 text-gray-400'>// Technologies I master as a self-taught engineer</p>
                </motion.div>


                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='w-full grid grid-cols-2 md:grid-cols-5 gap-8 text-center py-8'
                >
                    {techs.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemEffect}
                            whileHover={{ scale: 1.05 }}
                            className='bg-[#112240] py-8 rounded-lg shadow-md hover:shadow-pink-600/40 hover:text-pink-600 border border-transparent hover:border-pink-600/30 transition-all duration-300 group cursor-pointer'
                        >
                            <div className='text-6xl flex justify-center mb-4 group-hover:rotate-6 transition-transform duration-300'>
                                {item.src}
                            </div>
                            <p className='font-bold tracking-wider uppercase text-xs'>{item.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;