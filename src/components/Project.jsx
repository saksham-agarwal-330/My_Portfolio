import React from 'react';
import { PROJECTS } from '../constant';
import { motion } from 'framer-motion';

const Project = () => {
    return (
        <section id='projects' className="mt-12 scroll-mt-40">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-red-900 via-slate-500 to-purple-500 bg-clip-text md:leading-tight text-5xl md:text-7xl tracking-tight text-transparent text-center my-20">
                Projects
            </motion.h1>
            <div className="space-y-8 sm:space-y-12">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 sm:gap-4 lg:gap-8"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-2xl object-cover w-full h-48 md:h-64 lg:h-48"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h2 className="text-4xl lg:text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-neutral-400 py-2">{project.description}</p>
                            <div className="flex flex-wrap mt-3">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-transparent bg-gradient-to-r from-purple-800 via-slate-500 to-pink-500 bg-clip-text text-sm mr-2 mb-2"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;