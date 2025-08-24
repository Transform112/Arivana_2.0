import React from 'react'
import { motion } from "motion/react";

const Header = () => {
    return (
        <motion.div
            className="w-full flex flex-col items-center mt-2 gap-3 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div className='pt-40' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
            <motion.div
                className="flex items-center gap-3 text-gray-900  border-1 rounded-full p-2 border-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <span className="inline-flex items-center gap-2 border-1 rounded-full border-gray-300 p-1.5">
                    <span className="relative flex size-3 ">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-green-600"></span>
                    </span>
                    We're Live</span>
                <span className="font-semibold">& Hiring Ready</span>
            </motion.div>
            <motion.div
                className='p-5 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <motion.h1
                    className='scale-up-center-normal sm:text-5xl text-3xl font-bold '
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >Ace Your Job Interviews </motion.h1>
                <motion.h1
                    className='scale-up-center-normal sm:text-5xl text-3xl font-bold pt-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >With AI-Powered Practice & <span className='text-blue-800 scale-up-center-normal' >Feedback</span></motion.h1>
            </motion.div>
            <motion.h2
                className='sm:text-xl text-lg font-semibold text-[#2b2a2a] ]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >Interview Feedback in Under 15 Minutes</motion.h2>
            <motion.a
                href="https://forms.gle/kxsdUPRRgZrezc2X9"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <motion.button
                    className="cursor-pointer hover:scale-105 duration-300 font-semibold bg-gradient-to-b from-gray-900 to-black py-4 px-8 mt-5 rounded-full text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    Start Your First Mock Interview Now
                </motion.button>
            </motion.a>
            <motion.div
                className="flex -space-x-2 overflow-hidden p-1 justify-center items-center mt-5 "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <motion.img
                    alt=""
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block sm:size-6 size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                />
                <motion.img
                    alt=""
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block sm:size-6 size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                />
                <motion.img
                    alt=""
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    className="inline-block sm:size-6 size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                />
                <motion.img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block sm:size-6 size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                />
                <motion.h3
                    className='pl-7 font-extrabold sm:text-lg text-sm'
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >Trusted by 1,000+ Professionals</motion.h3>
            </motion.div>
            <motion.div
                className='border-1 border-base-300 mt-20 p-1 rounded-full'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
            >
                <motion.div
                    className=' text-lg font-bold border-1 border-base-300 p-2 rounded-full flex items-center justify-center gap-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                ><img src="/asset 9.jpeg" alt="" className='w-8'/> Watch Demo</motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.9 }}
            >
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl overflow-hidden mt-5 sm:w-300 sm:h-150 w-90 h-50 p-2"
                ></iframe>
            </motion.div>
        </motion.div>
    )
}

export default Header
