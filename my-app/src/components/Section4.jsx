import React, { useState } from 'react'
import { motion } from "motion/react";

const Section4 = () => {
    const billChange = () =>{
        const toggle = document.querySelector("#toggle")
        if(toggle.checked){
            setYearly(true)
        }else{
            setYearly(false)
        }
        
        
    }

    const [yearly, setYearly] = useState(false);

    return (
        <motion.div
            className='flex flex-col items-center '
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
                    id='pricing'
                    className='sm:text-lg text-sm font-bold border-1 border-base-300 p-2 rounded-full text-[#474747] flex justify-center items-center gap-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                ><img src="/asset 18.png" alt="" className='w-8'/> Pricing</motion.div>
            </motion.div>
            <motion.p
                className='sm:text-4xl text-2xl font-medium mt-10 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >Start Preparing Smarter — Without </motion.p>
            <motion.p
                className='sm:text-4xl text-2xl font-medium text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >Breaking the Bank</motion.p>
            <motion.div
                className='flex center gap-3 text-lg font-bold mt-10'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <span>Billed Monthly</span>
                <input
                    type="checkbox"
                    id='toggle'
                    onClick={billChange}
                    className="toggle border-gray-200 bg-white checked:border-orange-500 checked:bg-orange-400 checked:text-black"
                />
                <span>Billed Yearly</span>
            </motion.div>
            <motion.div
                className='mt-5 flex flex-wrap gap-2 w-full justify-center items-center p-2'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                {[{
                    img: "https://framerusercontent.com/images/jgVdpmhK03pQ0sFqgkrmN1u1Y.svg",
                    title: "Starter",
                    desc: "Perfect for Job Seekers Getting Started Early",
                    price: yearly ? '₹1,299' : '₹1,499',
                    priceDesc: yearly ? '/ per month' : '/ month',
                    interviews: "~ 4 AI mock interviews",
                    badge: "Most Popular",
                    badgeClass: "badge-warning",
                    features: [
                        { text: "50 Credits", active: true },
                        { text: "Role-based interview questions", active: true },
                        { text: "Instant AI feedback", active: true },
                        { text: "Transcript + answer suggestions", active: true },
                        { text: "Basic performance analytics", active: false },
                        { text: "invite members (coming soon)", active: false, lineThrough: true }
                    ],
                    button: "Subscribe"
                }, {
                    img: "https://framerusercontent.com/images/En4lEj9XDauBGTWPq8rrDGuUk.svg",
                    title: "Pro",
                    desc: "For Serious Candidates & Career Switchers",
                    price: yearly ? '₹3,099' : '₹3,499',
                    priceDesc: yearly ? '/ per month' : '/ month',
                    interviews: "~ 10 AI mock interviews",
                    badge: "Recommended",
                    badgeClass: "badge-success",
                    features: [
                        { text: "150 Credits", active: true },
                        { text: "Everything in Starter, plus:", active: true },
                        { text: "Custom interview scenarios", active: true },
                        { text: "Deeper feedback reports", active: true },
                        { text: "Soft-skills scoring", active: false },
                        { text: "Invite up to 3 members ", active: false }
                    ],
                    button: "Subscribe"
                }, {
                    img: "https://framerusercontent.com/images/pm0nOe4YNOAoYGJMRClXCtMFWE.svg",
                    title: "Teams",
                    desc: "For Colleges, Bootcamps & Career Services",
                    price: yearly ? '₹4,999' : '₹5,499',
                    priceDesc: yearly ? '/ per month' : '/ month',
                    interviews: "~ 15 AI mock interviews",
                    badge: "Enterprise",
                    badgeClass: "badge-info",
                    features: [
                        { text: "300 Credits", active: true },
                        { text: "Everything in Pro, plus:", active: true },
                        { text: "Multiple student accounts", active: true },
                        { text: "Shared analytics dashboard", active: true },
                        { text: "Admin controls (coming soon)", active: false },
                        { text: "API access (coming soon)", active: false }
                    ],
                    button: "Enquire"
                }].map((card, idx) => (
                    <motion.div
                        className="card w-full max-w-sm mx-2 bg-white shadow-sm border-1 border-gray-300 rounded-2xl px-4 sm:px-8"
                        key={card.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                    >
                        <div className='border-b-1 border-gray-50 flex flex-col gap-5 p-4 py-8 rounded-b-2xl shadow-sm'>
                            <div><img src={card.img} alt="" /></div>
                            <div>
                                <h1 className='text-2xl font-semibold'>{card.title}</h1>
                                <p className='text-[#474747]'>{card.desc}</p>
                            </div>
                            <div>
                                <span className='text-4xl'>{card.price}</span><span>{card.priceDesc}</span>
                                <p className='text-[#474747]'>{card.interviews}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <span className={`badge badge-sm ${card.badgeClass}`}>{card.badge}</span>
                            <div className="flex justify-between"></div>
                            <ul className="mt-3 flex flex-col gap-2 text-sm">
                                {card.features.map((feature, fidx) => (
                                    <li key={feature.text} className={feature.active ? '' : 'opacity-50'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`size-4 me-2 inline-block ${feature.active ? 'text-success' : 'text-base-content/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className={feature.lineThrough ? 'line-through' : ''}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-black py-6 rounded-xl text-white  btn-block">{card.button}</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Section4
