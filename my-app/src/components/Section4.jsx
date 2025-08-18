import React, { useState } from 'react'

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
        
        
        <div className='flex flex-col items-center '>
            
            <div className='border-1 border-base-300 mt-20 p-1 rounded-full'>
                    <div id='pricing' className=' sm:text-lg text-sm font-bold border-1 border-base-300 p-2 rounded-full text-[#474747]'>💰 Pricing</div>
                </div>
            <p className='sm:text-4xl text-2xl font-medium mt-10 text-center'>Start Preparing Smarter — Without </p>
            <p className='sm:text-4xl text-2xl font-medium text-center '>Breaking the Bank</p>
            <div className='flex center gap-3 text-lg font-bold mt-10'>
                <span>Billed Monthly</span>
                <input
                    type="checkbox"
                    id='toggle'
                    onClick={billChange}
                    className="toggle border-gray-200 bg-white checked:border-orange-500 checked:bg-orange-400 checked:text-black"
                />
                <span>
                    Billed Yearly</span>
            </div>
            <div className='mt-5 flex flex-wrap gap-2 w-full justify-center items-center '>
                <div className="card w-full max-w-sm mx-2 bg-white shadow-sm border-1 border-gray-100 rounded-2xl px-4 sm:px-8">
                    <div className='border-b-1 border-gray-50 flex flex-col gap-5 p-4 py-8 rounded-b-2xl shadow-sm'>
                        <div><img src="https://framerusercontent.com/images/jgVdpmhK03pQ0sFqgkrmN1u1Y.svg" alt="" /></div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Starter</h1>
                            <p className='text-[#474747]'>Perfect for Job Seekers Getting Started</p>
                        </div>
                        
                        <div>
                            <span className='text-4xl'>{yearly?'₹1,299':'₹1,499'}</span><span>{yearly?'/ per month':'/ month'}</span>
                            <p className='text-[#474747]'>~ 4 AI mock interviews</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <span className="badge badge-sm badge-warning">Most Popular</span>
                        <div className="flex justify-between">
                        </div>
                        <ul className="mt-3 flex flex-col gap-2 text-sm">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>50 Credits</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Role-based interview questions</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Instant AI feedback</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Transcript + answer suggestions</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic performance analytics</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="line-through">invite members (coming soon)</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-black py-6 rounded-xl text-white  btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full max-w-sm mx-2 bg-white shadow-sm border-1 border-gray-100 rounded-2xl px-4 sm:px-8">
                    <div className='border-b-1 border-gray-50 flex flex-col gap-5 p-4 py-8 rounded-b-2xl shadow-sm'>
                        <div><img src="https://framerusercontent.com/images/En4lEj9XDauBGTWPq8rrDGuUk.svg" alt="" /></div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Pro</h1>
                            <p className='text-[#474747]'>For Serious Candidates & Career Switchers</p>
                        </div>
                        <div>
                            <span className='text-4xl'>{yearly?'₹3,099':'₹3,499'}</span><span>{yearly?'/ per month':'/ month'}</span>
                            <p className='text-[#474747]'>~ 10 AI mock interviews</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <span className="badge badge-sm badge-success">Recommended</span>
                        <div className="flex justify-between">
                        </div>
                        <ul className="mt-3 flex flex-col gap-2 text-sm">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>150 Credits</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Starter, plus:</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom interview scenarios</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Deeper feedback reports</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Soft-skills scoring</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Invite up to 3 members </span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-black py-6 rounded-xl text-white  btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full max-w-sm mx-2 bg-white shadow-sm border-1 border-gray-100 rounded-2xl px-4 sm:px-8">
                    <div className='border-b-1 border-gray-50 flex flex-col gap-5 p-4 py-8 rounded-b-2xl shadow-sm'>
                        <div><img src="https://framerusercontent.com/images/pm0nOe4YNOAoYGJMRClXCtMFWE.svg" alt="" /></div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Teams</h1>
                            <p className='text-[#474747]'>For Colleges, Bootcamps & Career Services</p>
                        </div>
                        <div>
                            <span className='text-4xl'>{yearly?'₹4,999':'₹5,499'}</span><span>{yearly?'/ per month':'/ month'}</span>
                            <p className='text-[#474747]'>~ 15 AI mock interviews</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <span className="badge badge-sm badge-info">Enterprise</span>
                        <div className="flex justify-between">
                        </div>
                        <ul className="mt-3 flex flex-col gap-2 text-sm">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>300 Credits</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro, plus:</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Multiple student accounts</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Shared analytics dashboard</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Admin controls (coming soon)</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span >API access (coming soon)</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-black py-6 rounded-xl text-white  btn-block">Enquire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
