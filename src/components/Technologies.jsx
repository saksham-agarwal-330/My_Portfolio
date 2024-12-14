import React from 'react';
import { SKILLS_ICON } from '../constant';
import { motion } from 'framer-motion';
const Technologies = () => {
    return (
        <section id='skills' className="mt-12 scroll-mt-40">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-purple-950 via-slate-500 to-blue-950 bg-clip-text leading-snug md:leading-snug text-4xl md:text-7xl tracking-tight text-transparent text-center my-20">
                Technologies
            </motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap items-center justify-center  gap-8 lg:gap-14">
                {SKILLS_ICON.map(({ src, alt = '' }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        key={index}
                        className="rounded-2xl border-4 border-neutral-600 p-4 md:p-6"
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Technologies;
