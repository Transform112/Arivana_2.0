import React from 'react'
import { motion } from "motion/react";

const Section2 = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.section
                className='flex flex-col justify-center items-center p-10'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <motion.div
                    className='border-1 border-base-300 mt-20 p-1 rounded-full'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className='sm:text-lg text-sm font-bold border-1 border-base-300 p-2 rounded-full flex items-center justify-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    ><img src="/asset 11.png" alt="" className='w-8'/> Interviews Aced with Arivana AI</motion.div>
                </motion.div>
                <motion.h1
                    className='sm:text-5xl text-xl font-medium mt-10'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >So Effortless You’ll Want</motion.h1>
                <motion.h1
                    className='sm:text-5xl text-xl font-medium'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >to Practice Every Day</motion.h1>
                <motion.div
                    className="overflow-hidden sm:max-w-2xl max-w-xs mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <motion.div
                        className="flex items-center gap-4 w-max animate-carousel-scroll"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        {["https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
                            "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
                            "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
                            "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
                            "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
                            "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
                            "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
                            "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
                            "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
                            "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
                            "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
                            "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
                            "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
                            "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                        ].map((src, idx) => (
                            <motion.div
                                className="carousel-item"
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.05 }}
                            >
                                <motion.img
                                    src={src}
                                    className="rounded-box"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: idx * 0.05 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

export default Section2
