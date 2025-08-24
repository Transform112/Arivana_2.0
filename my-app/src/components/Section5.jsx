
import { motion } from "motion/react";


const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Arivana AI made my interview prep so much easier. The feedback is spot on!"
  },
  {
    name: "Priya Singh",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I loved the realistic questions and instant transcripts. Highly recommended!"
  },
  {
    name: "Rahul Verma",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "The AI interviewer feels natural and the feedback helped me improve fast."
  },
  {
    name: "Sneha Patel",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Arivana AI is a game changer for job seekers. The answer improve mode is awesome!"
  },
  {
    name: "Vikram Joshi",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    quote: "The mock interviews are so realistic, I felt fully prepared for my real one!"
  },
  {
    name: "Meera Nair",
    role: "HR Specialist",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    quote: "Arivana AI's feedback is detailed and actionable. It helped me improve quickly."
  },
  {
    name: "Karan Gupta",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    quote: "I love the instant transcripts and the personalized feedback. Super useful!"
  },
  {
    name: "Riya Mehta",
    role: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    quote: "The AI interviewer is so natural, it feels like a real conversation."
  },
  {
    name: "Arjun Desai",
    role: "Business Analyst",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "The answer improve mode is a lifesaver. My responses got much better!"
  },
  {
    name: "Neha Kapoor",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    quote: "Arivana AI helped me ace my interviews with confidence."
  },
  {
    name: "Siddharth Rao",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "The platform is easy to use and the feedback is very insightful."
  },
  {
    name: "Anjali Menon",
    role: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    quote: "I recommend Arivana AI to anyone looking to improve their interview skills!"
  }
];

const Section5 = () => {
  return (
    <motion.section
      className="w-full py-16 flex flex-col items-center bg-gray-50 "
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
          id='testimonial'
          className='sm:text-lg text-sm font-bold border-1 border-base-300 p-2 rounded-full text-[#474747] flex justify-center items-center gap-2'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        > <img src="asset 23.webp" alt="" className="w-8"/> Testimonials </motion.div>
      </motion.div>
      <motion.h2
        className="text-2xl sm:text-4xl font-bold mb-8 text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >What Our Users Say</motion.h2>
      <motion.div
        className="w-full max-w-6xl px-4 flex flex-col gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="overflow-hidden w-full py-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex gap-8 min-w-max animate-carousel-scroll">
            {testimonials.slice(0, 4).map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[250px] max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
              >
                <motion.img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-1 border-gray-200" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="text-center">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
            {testimonials.slice(0, 4).map((t, idx) => (
              <motion.div
                key={"dup1-" + idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[250px] max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
              >
                <motion.img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-1 border-gray-200" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="text-center">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="overflow-hidden w-full py-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex gap-8 min-w-max animate-carousel-scroll-right">
            {testimonials.slice(4, 8).map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[250px] max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
              >
                <motion.img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-1 border-gray-200" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="text-center">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
            {testimonials.slice(4, 8).map((t, idx) => (
              <motion.div
                key={"dup2-" + idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[250px] max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
              >
                <motion.img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-1 border-gray-200" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="text-center">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="overflow-hidden w-full py-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex gap-8 min-w-max animate-carousel-scroll">
            {testimonials.slice(8, 12).map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[250px] max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
              >
                <motion.img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-1 border-gray-200" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="text-center">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
            {testimonials.slice(8, 12).map((t, idx) => (
              <motion.div
                key={"dup3-" + idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[250px] max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
              >
                <motion.img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-1 border-gray-200" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="text-center">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Section5
