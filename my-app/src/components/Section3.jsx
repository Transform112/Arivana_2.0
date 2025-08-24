import React from 'react'
import { motion } from "motion/react";

const Section3 = () => {
    return (
        <motion.div
            className='flex flex-col items-center p-5'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className='border-1 border-base-300 mt-20 p-1 rounded-full'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <motion.div
                    id='features'
                    className='text-lg font-bold border-1 border-base-300 p-2 rounded-full text-[#474747] flex justify-center items-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                ><img src="/asset 11.png" alt="" className='w-8'/> Features </motion.div>
            </motion.div>
            <motion.h2
                className='sm:text-4xl text-xl font-medium mt-10'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >Everything You Need </motion.h2>
            <motion.h2
                className='sm:text-4xl text-xl font-medium'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >For Smarter Interview Prep </motion.h2>
            <motion.div
                className='flex flex-wrap justify-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <motion.div
                    className='flex flex-col gap-5 mt-10 items-center sm:justify-center'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className='flex gap-2'>
                            <motion.img src="https://framerusercontent.com/images/kGl4rFMP6t55xn0CnsvGLvaXk.webp" className='w-8' alt="" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                            <span className='text-xl font-bold'>Engaging Questions</span>
                        </div>
                        <p className='text-[#474747]'>Get role-specific, realistic interview questions instantly.</p>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className='flex gap-2'>
                            <motion.img src="https://framerusercontent.com/images/VQmHLH0A5oOrQdzo2xOAQQsuk.webp" className='w-8' alt="" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                            <span className='text-xl font-bold'>Zero Learning Curve</span>
                        </div>
                        <p className='text-[#474747]'>Just answer like you’re in a real interview — no setup.</p>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className='flex gap-2'>
                            <motion.img src="https://framerusercontent.com/images/5HOPhdm60rgv2QcFHxjuRDB5cg.png" className='w-8' alt="" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                            <span className='text-xl font-bold'>Auto Transcripts</span>
                        </div>
                        <p className='text-[#474747]'>Every answer transcribed perfectly, even with accents.</p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className='flex flex-col sm:mt-10 mt-5 gap-5 items-center sm:justify-center'
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <motion.div
                        className='flex flex-col gap-3 sm:w-120 w-full max-w-md mx-2 py-5  border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200  sm:px-8 bg-white'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className='flex gap-2 '>
                            <motion.img src="https://framerusercontent.com/images/PnnOJvAaoRUpX69maYRITfj1xZY.webp" className='w-8' alt="" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                            <span className='text-xl font-bold'>Realistic AI Interviewer</span>
                        </div>
                        <p className='text-[#474747]'>Natural conversation — no robotic feel .</p>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className='flex gap-2'>
                            <motion.img src="https://framerusercontent.com/images/PnnOJvAaoRUpX69maYRITfj1xZY.webp" className='w-8 ' alt="" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                            <span className='text-xl font-bold'>Personalised Feedback</span>
                        </div>
                        <p className='text-[#474747]'>AI analyses your strengths & areas to improve .  </p>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className='flex gap-2'>
                            <motion.img src="https://framerusercontent.com/images/LMxmhUwrllI0jM0Xvy84fvwoYyI.webp" className='w-8 ' alt="" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                            <span className='text-xl font-bold'>Answer Improve Mode</span>
                        </div>
                        <p className='text-[#474747]'>Get refined versions of your answers instantly  .     </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Section3
