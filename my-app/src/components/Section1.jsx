import React from 'react'
import { motion } from "motion/react";

const Section1 = () => {
    return (
        <motion.div
            className='flex flex-col py-10 px-5 items-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className='border-2 border-base-300 mt-20  rounded-full p-2'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <motion.span
                    id='whychooseus'
                    className='text-lg font-bold border-1 border-base-300 p-1 rounded-full flex items-center justify-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                ><img src="/asset 10.png" alt="" className='w-8'/> Why choose us </motion.span>
            </motion.div>
            <motion.h1
                className='sm:text-5xl text-3xl font-semibold text-center pt-8'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >Effortless Interview Preparation &</motion.h1>
            <motion.p
                className='text-center sm:text-5xl text-3xl font-semibold '
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            > Builds Confidence</motion.p>
            <motion.div
                className='flex w-full gap-10 pt-10 sm:flex-nowrap flex-wrap justify-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <motion.div
                    className='rounded-xl h-150 w-full sm:w-1/3 p-6 shadow-xl shadow-gray-300'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className='h-1/3 w-full bg-amber-950 rounded-lg'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    />
                    <div>
                        <motion.h1
                            className='sm:text-2xl text-xl font-semibold pt-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        > Preparing the hard way </motion.h1>
                        <motion.h2
                            className='text-[#474747] text-lg pb-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >Endless hours, no clear feedback.</motion.h2>
                        <motion.hr
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        />
                        <motion.h3
                            className='sm:text-xl text-lg font-semibold pt-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >Why this Sucks:</motion.h3>
                        <motion.ul
                            className='space-y-5 mt-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <li className='text-[#474747] text-md'>Lose 8–10 hrs/week on unfocused prep</li>
                            <li className='text-[#474747] text-md'>Spend $200–$500/month on coaches</li>
                            <li className='text-[#474747] text-md'>Mentally drained from guessing</li>
                            <li className='text-[#474747] text-md'>Miss job offers due to weak answers</li>
                        </motion.ul>
                    </div>
                </motion.div>
                <motion.div
                    className='h-150 w-full sm:w-1/3 p-6 shadow-xl shadow-gray-300 rounded-xl'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <motion.div
                        className='h-1/3 w-full bg-amber-950 rounded-lg'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    />
                    <div>
                        <motion.h1
                            className='sm:text-2xl text-lg font-semibold pt-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        > Preparing with Arivana AI </motion.h1>
                        <motion.h2
                            className='text-[#474747] text-lg pb-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >AI-driven interviews + instant feedback.</motion.h2>
                        <motion.hr
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        />
                        <motion.h3
                            className='sm:text-xl text-lg font-semibold pt-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >Why this Works:</motion.h3>
                        <motion.ul
                            className='space-y-3 mt-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <li className='text-[#474747] text-md'>Save 8–10 hrs/week with targeted practice</li>
                            <li className='text-[#474747] text-md'>Save $200–$500/month on coaching</li>
                            <li className='text-[#474747] text-md'>No guesswork — instant improvements</li>
                            <li className='text-[#474747] text-md'>Land more offers with confident answers</li>
                        </motion.ul>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Section1
