import React from 'react'


const Section7 = () => {
    return (
        <div>
            <section className='flex flex-col px-10 items-center gap-5'>
                <div className='border-1 border-base-300 mt-20 p-1 rounded-full'>
                    <div className=' sm:text-lg text-sm font-bold border-1 border-base-300 p-2 rounded-full text-[#474747]'>⁉️ FAQs</div>
                </div>
                <h1 id='faqs' className='sm:text-4xl text-xl font-bold mt-10'>Frequently Asked Questions</h1>

                <div className=' flex  flex-col gap-5'>
                    <div className="collapse collapse-plus  border border-base-300 p-3  bg-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold text-xl">How realistic is the AI interview experience?</div>
                        <div className="collapse-content text-lg text-[#474747] ">Our AI asks real-world role-based questions and responds just like a human interviewer..</div>
                    </div>
                    <div className="collapse collapse-plus  border border-base-300 p-3  bg-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold text-xl">Do I need a camera or mic?</div>
                        <div className="collapse-content text-lg text-[#474747]">No. Just type your answers if you prefer — Arivana works in text and voice.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-300 border border-base-300 p-3 ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold text-xl">What roles are supported?</div>
                        <div className="collapse-content text-lg text-[#474747]">Currently Software Engineering, Product, and Data roles. More coming soon.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-300 border border-base-300 p-3 ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold text-xl">How do I update my profile information?</div>
                        <div className="collapse-content text-lg text-[#474747]">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-300 border border-base-300 p-3 ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold text-xl">Where can I get support?</div>
                        <div className="collapse-content text-lg text-[#474747]">You can reach us anytime at support@arivana.ai</div>
                    </div>
                </div>

                
                     <div className=' flex gap-2 items-center justify-center font-bold mt-20'> <img src="https://i.ibb.co/4ZwkxqHd/logo.png" alt="logo" className='max-w-8 '/><span className='text-xl'>Arivana Ai</span></div>
                    
                

            </section>
        </div>
    )
}

export default Section7
