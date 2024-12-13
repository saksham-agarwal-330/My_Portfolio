import React, { useRef, useState } from 'react';
import { CONTACT } from '../constant';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = (props) => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const Service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const Template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const Public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(Service_id, Template_id, form.current, Public_key)
            .then(() => {
                setLoading(false);
                form.current.reset();
                alert('Your Query has been submitted successfully!');
            })
            .catch((error) => {
                setLoading(false);
                console.error('FAILED...', error.text);
                alert('Something went wrong, Please try again later!');
            });
    };

    return (
        <section id='contact' className='mt-10 scroll-mt-40 pb-4 mb-6'>

            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-red-900 via-slate-500 to-purple-500 bg-clip-text md:leading-tight text-5xl md:text-7xl tracking-tight text-transparent text-center my-20 ">
                Get in touch
            </motion.h1>
            <div className="flex flex-col gap-10 sm:flex-row">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4 pt-8 sm:pt-0 md:pt-8">
                    <h2 className='bg-gradient-to-r from-purple-800 via-slate-500 to-pink-500 bg-clip-text text-3xl tracking-tight text-transparent'>Let's talk</h2>
                    <p className='text-xl max-w-xl'>
                        I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
                    </p>
                    <div className="flex flex-col gap-8">
                        {CONTACT.map((detail, index) => (
                            <div key={index} className="flex items-center gap-5 sm:gap-2 md:gap-5">
                                <img src={detail.icon} alt={detail.alt} className="h-10 w-10" />
                                <p>{detail.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start gap-7 w-full lg:w-1/2">
                    <form ref={form} onSubmit={sendEmail} className="contact-form space-y-6">
                        <input
                            type="text"
                            placeholder='Enter your name'
                            name='user_name'
                            required
                            className={`w-full p-3 ${props.theme === 'light' ? 'bg-gray-100' : 'bg-slate-800'} shadow-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            name='user_email'
                            required
                            className={`w-full p-3 ${props.theme === 'light' ? 'bg-gray-100' : 'bg-slate-800'} shadow-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        />
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            required
                            placeholder='Enter your message'
                            className={`w-full p-3 ${props.theme === 'light' ? 'bg-gray-100' : 'bg-slate-800'} shadow-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 text-white rounded-lg hover:bg-purple-600 transition"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
