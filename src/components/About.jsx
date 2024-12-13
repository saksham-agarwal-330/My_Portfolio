import React from 'react';
import aboutpic from '../assets/aboutpic.jpg';
import { ABOUT_TEXT } from '../constant';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="mt-12 scroll-mt-40">
            <h1 className="bg-gradient-to-r from-red-900 via-slate-500 to-purple-500 bg-clip-text md:leading-tight text-5xl md:text-7xl tracking-tight text-transparent text-center my-20">
                About Me
            </h1>
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-8">
                {/* Left Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex justify-center">
                        <img
                            src={aboutpic}
                            alt="Saksham Agarwal"
                            className="rounded-2xl shadow-lg w-96 h-auto sm:w-96 sm:h-96 lg:w-128 lg:h-128 object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-gray-700 text-center lg:text-left">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
