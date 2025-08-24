
import { motion } from "motion/react";


const Section7 = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.section
                className='flex flex-col px-10 items-center gap-5'
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
                        className='sm:text-lg text-sm font-bold border-1 border-base-300 p-2 rounded-full text-[#474747] flex justify-center items-center gap-2'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    ><img src="asset 10.png" alt="" className="w-8"/> FAQs</motion.div>
                </motion.div>
                <motion.h1
                    id='faqs'
                    className='sm:text-4xl text-xl font-bold mt-10'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >Frequently Asked Questions</motion.h1>
                <motion.div
                    className='flex flex-col gap-5'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {[{
                        title: "How realistic is the AI interview experience?",
                        content: "Our AI asks real-world role-based questions and responds just like a human interviewer..",
                        checked: true
                    }, {
                        title: "Do I need a camera or mic?",
                        content: "No. Just type your answers if you prefer — Arivana works in text and voice.",
                        checked: false
                    }, {
                        title: "What roles are supported?",
                        content: "Currently Software Engineering, Product, and Data roles. More coming soon.",
                        checked: false
                    }, {
                        title: "How do I update my profile information?",
                        content: "Go to \"My Account\" settings and select \"Edit Profile\" to make changes.",
                        checked: false
                    }, {
                        title: "Where can I get support?",
                        content: "You can reach us anytime at support@arivana.ai",
                        checked: false
                    }].map((faq, idx) => (
                        <motion.div
                            className="collapse collapse-plus border border-base-300 p-3 bg-base-300"
                            key={faq.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                        >
                            <input type="radio" name="my-accordion-3" defaultChecked={faq.checked} />
                            <div className="collapse-title font-semibold text-xl">{faq.title}</div>
                            <div className="collapse-content text-lg text-[#474747]">{faq.content}</div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className='flex gap-2 items-center justify-center font-bold mt-20'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    <motion.img src="https://i.ibb.co/4ZwkxqHd/logo.png" alt="logo" className='max-w-8' initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                    <span className='text-xl'>Arivana Ai</span>
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

export default Section7
