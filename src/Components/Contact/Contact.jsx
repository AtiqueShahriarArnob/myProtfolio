
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className='w-full bg-[#0a192f] text-gray-300 py-24'>
            <div className='max-w-[800px] mx-auto px-8 flex flex-col justify-center w-full'>
                <div className="pb-8 text-center md:text-left">
                    <p className='text-5xl font-bold inline border-b-4 border-pink-600 text-white uppercase tracking-widest'>
                        Contact Me
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='border border-gray-700 bg-[#112240]/20 rounded-2xl p-8 md:p-12 shadow-xl hover:border-pink-600/50 transition-all duration-500'
                >
                    <div className='grid gap-10'>
                        <div className='grid md:grid-cols-2 gap-8'>
                            <div className='flex items-center gap-4'>
                                <FaEnvelope className='text-pink-600 text-2xl' />
                                <div className='flex flex-col'>
                                    <span className='text-xs uppercase text-gray-500 font-bold tracking-widest'>Email</span>
                                    <a href="mailto:atiqueshahriar009@gmail.com" className='text-lg hover:text-pink-600 transition-colors'>atiqueshahriar009@gmail.com</a>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaPhoneAlt className='text-pink-600 text-2xl' />
                                <div className='flex flex-col'>
                                    <span className='text-xs uppercase text-gray-500 font-bold tracking-widest'>Phone</span>
                                    <a href="tel:+8801611375084" className='text-lg hover:text-pink-600 transition-colors'>+8801611375084</a>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[1px] bg-gray-700'></div>

                        <div className='flex flex-col sm:flex-row gap-4'>
                            <a href="https://wa.me/8801611375084" target="_blank" rel="noopener noreferrer" className='flex-1 flex items-center justify-center gap-3 bg-transparent border-2 border-pink-600 py-3 rounded-lg font-bold hover:bg-pink-600 hover:text-white transition-all duration-300 group'>
                                <FaWhatsapp className='text-xl group-hover:scale-110' /> Chat on WhatsApp
                            </a>


                            <Link to="/contactPage" className='flex-1 flex items-center justify-center gap-3 bg-pink-600 border-2 border-pink-600 py-3 rounded-lg font-bold text-white hover:bg-transparent hover:text-pink-600 transition-all duration-300 group cursor-pointer'>
                                <FaComments className='text-xl group-hover:scale-110' /> Direct Message
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;