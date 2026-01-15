import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaJava
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
        { id: 6, src: <FaNodeJs />, title: 'Node JS' },
        { id: 7, src: <SiExpress />, title: 'Express JS' }, // Added Express
        { id: 8, src: <SiMongodb />, title: 'MongoDB' },
        { id: 9, src: <FaJava />, title: 'Java' },        // Added Java
        { id: 10, src: <FaGithub />, title: 'GitHub' },
    ];

    return (
        <section name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* Section Header */}
                <div className="mb-8">
                    <p className='text-5xl font-bold inline border-b-4 border-pink-600 uppercase tracking-widest text-white'>
                        Skills
                    </p>
                    <p className=' text-xl py-6 text-gray-400'>// Technologies I master as a self-taught engineer</p>
                </div>

                {/* Skills Grid - Updated to 5 columns on large screens */}
                <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-8 text-center py-8'>
                    {techs.map((item) => (
                        <div
                            key={item.id}
                            className='bg-[#112240] py-8 rounded-lg shadow-md hover:shadow-pink-600/40 hover:text-pink-600 border border-transparent hover:border-pink-600/30 transition-all duration-500 group cursor-pointer'
                        >
                            <div className='text-6xl flex justify-center mb-4 transition-colors duration-500'>
                                {item.src}
                            </div>
                            <p className='font-bold tracking-wider uppercase text-xs'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;