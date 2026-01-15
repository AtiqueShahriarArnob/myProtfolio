import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full min-h-[70vh] bg-[#0a192f] text-gray-300 flex items-center py-20">
            <div className="max-w-[1000px] mx-auto px-8 w-full">

                {/* Section Header */}
                <div className="mb-10">
                    <p className="text-5xl font-bold inline border-b-4 border-pink-600">
                        About Me
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 w-full">

                    {/* Left Column: The Professional Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-2xl sm:text-3xl italic font-light text-white leading-relaxed">
                            "Everybody in this country should learn how to program a computer, because it teaches you how to think."
                        </p>
                        <p className="mt-4 text-pink-600 font-bold text-lg">— Steve Jobs</p>
                    </motion.div>

                    {/* Right Column: Your Refined Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-400 space-y-6"
                    >
                        <p>
                            My hobby is <span className="text-white font-medium">playing football</span>,
                            which keeps me active and energized. This discipline translates into my
                            professional life, where my goal is to become a skilled software engineer,
                            creating innovative solutions to real-world problems.
                        </p>

                        <p>
                            I don't just want to write code; I strive to build complex, impactful
                            architectures. I am constantly exploring the depths of the
                            <span className="text-white font-medium"> MERN stack</span> to refine
                            my logic-building skills and technical foundations.
                        </p>

                        <p>
                            This is just the beginning of an exciting adventure in the tech world!
                        </p>

                        <p className="text-pink-600 font-bold uppercase tracking-widest text-sm">
                            The journey continues.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;