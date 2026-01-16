
import { FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';

const ResumePage = () => {
    return (
        <div className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[120px] pb-20 px-4'>
            <div className='max-w-[900px] mx-auto'>


                <div className='text-center mb-10'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tight'>Atique Shahriar Arnob</h1>
                    <p className='text-pink-600 text-sm md:text-base font-bold mb-4 uppercase tracking-widest'>
                        Frontend Developer | React.js Developer | MERN Stack
                    </p>
                    <div className='flex flex-col items-center gap-2 text-sm text-gray-400'>
                        <p className='flex items-center gap-2'>
                            <FaEnvelope className='text-pink-600' /> atiqueshahriar009@gmail.com
                            <span className='hidden md:inline mx-2 text-gray-700'>|</span>
                            <FaPhoneAlt className='text-pink-600' /> +8801611375084
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaGithub className='text-pink-600' />
                            <a href="https://github.com/AtiqueShahriarArnob" target="_blank" rel="noreferrer" className='hover:text-white transition-colors underline decoration-pink-600/30'>
                                github.com/AtiqueShahriarArnob
                            </a>
                        </p>
                    </div>
                </div>


                <div className='mb-12'>
                    <h2 className='text-2xl font-bold text-white mb-2 italic uppercase'>Technical Skills</h2>
                    <div className='w-full h-[1px] bg-pink-600 mb-8'></div>
                    <div className='grid grid-cols-2 gap-x-12 gap-y-4'>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> React.js
                            </li>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> MongoDB
                            </li>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> Tailwind CSS
                            </li>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> Firebase Auth
                            </li>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> Java
                            </li>
                        </ul>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> Node.js
                            </li>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> HTML & CSS
                            </li>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> JavaScript
                            </li>
                            <li className='flex items-center gap-3 text-gray-200 font-semibold'>
                                <span className='w-2 h-2 bg-pink-600 rounded-full'></span> Python
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='mb-12'>
                    <h2 className='text-2xl font-bold text-white mb-2 italic uppercase'>Education</h2>
                    <div className='w-full h-[1px] bg-pink-600 mb-8'></div>
                    <div className='space-y-8'>
                        <div>
                            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2'>
                                <h3 className='text-xl font-bold text-white'>Bachelor's in Computer Science</h3>
                                <span className='text-pink-600 font-bold'>2022 - Present</span>
                            </div>
                            <p className='text-gray-400'>Independent University, Bangladesh (IUB)</p>
                        </div>
                        <div>
                            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2'>
                                <h3 className='text-xl font-bold text-white'>Higher Secondary Certificate (HSC)</h3>
                                <span className='text-pink-600 font-bold'>2020</span>
                            </div>
                            <p className='text-gray-400'>Adamjee Cantonment College</p>
                        </div>
                    </div>
                </div>


                <div className='mb-12'>
                    <h2 className='text-2xl font-bold text-white mb-2 italic uppercase'>Hobbies & Interests</h2>
                    <div className='w-full h-[1px] bg-pink-600 mb-8'></div>
                    <ul className='space-y-4'>
                        <li className='flex items-start gap-3 text-gray-300 font-semibold'>
                            <span className='text-pink-600 mt-1'>▹</span>
                            Gaming
                        </li>
                        <li className='flex items-start gap-3 text-gray-300 font-semibold'>
                            <span className='text-pink-600 mt-1'>▹</span>
                            Exploring and learning about emerging technologies
                        </li>
                        <li className='flex items-start gap-3 text-gray-300 font-semibold'>
                            <span className='text-pink-600 mt-1'>▹</span>
                            Problem-solving and building tech-related projects
                        </li>
                    </ul>
                </div>


                <div className='mb-12'>
                    <h2 className='text-2xl font-bold text-white mb-2 italic uppercase'>Contact</h2>
                    <div className='w-full h-[1px] bg-pink-600 mb-8'></div>
                    <p className='text-gray-300 font-bold leading-relaxed'>
                        I'm open to new opportunities and collaborations! Feel free to reach out to me via email.
                    </p>
                </div>




            </div>
        </div>
    );
};

export default ResumePage;