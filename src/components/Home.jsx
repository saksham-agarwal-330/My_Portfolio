import React from 'react';
import sakshamprofile from '../assets/sakshamprofile.png';
import { MY_SHORT_INTRO } from '../constant';
import { delay, motion } from 'framer-motion';

const animate = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const Home = ({ theme }) => {
  const bgColor = theme === 'light' ? 'bg-gray-100' : 'bg-slate-800';

  return (
    <section id="home" className="mt-12 scroll-mt-40 pb-4">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-18">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col text-center md:text-left lg:items-start">
            <motion.h1 variants={animate(0)} initial="hidden" animate="visible" className="pb-4 text-6xl font-thin md:text-4xl lg:mt-16 lg:text-6xl xl:text-7xl lg:pb-12">
              Saksham Agarwal
            </motion.h1>
            <motion.span variants={animate(0.2)} initial="hidden" animate="visible" className="bg-gradient-to-r from-purple-950 via-slate-500 to-blue-950 bg-clip-text text-transparent text-4xl tracking-tight md:text-3xl lg:text-4xl">
              Full Stack Developer
            </motion.span>
            <motion.p variants={animate(0.4)} initial="hidden" animate="visible" className={`my-2 max-w-xl py-2 lg:py-6 font-light tracking-tight text-gray-700`}>
              {MY_SHORT_INTRO}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
              src={sakshamprofile}
              alt="Profile picture of Saksham Agarwal"
              className={`rounded-lg shadow-lg max-w-xs lg:max-w-screen-lg ${bgColor}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
