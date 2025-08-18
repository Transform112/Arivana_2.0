import React from 'react'

const Section1 = () => {
    return (
        <div className='flex flex-col  py-10 px-5 items-center'>
            <div className='border-2 border-base-300 mt-20 py-3 rounded-full p-2'>
                <span id='whychooseus' className='text-lg font-bold border-1 border-base-300 p-2 rounded-full'>❓ Why choose us </span>
            </div>
            <h1 className='sm:text-5xl text-3xl font-semibold text-center pt-8'>Effortless Interview Preparation &</h1><p className='text-center sm:text-5xl text-3xl font-semibold '> Builds Confidence</p>
            <div className='flex w-full gap-10 pt-10 sm:flex-nowrap flex-wrap justify-center'>
                <div className=' rounded-xl h-150 w-full sm:w-1/3  p-6  shadow-xl shadow-gray-300'>
                    <div className='h-1/3 w-full bg-amber-950  rounded-lg'></div>
                    <div>
                        <h1 className='sm:text-2xl text-xl font-semibold pt-5'> Preparing the hard way </h1>
                        <h2 className='text-[#474747] text-lg pb-5'>Endless hours, no clear feedback.</h2>
                        <hr />
                        <h3 className='sm:text-xl text-lg font-semibold pt-5'>Why this Sucks:</h3>
                        <ul className='space-y-5 mt-5'>
                            <li className='text-[#474747a7] text-sm font-medium'>Lose 8–10 hrs/week on unfocused prep</li>

                            <li className='text-[#474747a7] text-sm font-medium'>Spend $200–$500/month on coaches</li>

                            <li className='text-[#474747a7] text-sm font-medium'>Mentally drained from guessing</li>

                            <li className='text-[#474747a7] text-sm font-medium'>Miss job offers due to weak answers</li>
                        </ul>
                    </div>
                </div>
                <div className=' h-150 w-full sm:w-1/3  p-6 shadow-xl shadow-gray-300 rounded-xl'>
                    <div className='h-1/3 w-full bg-amber-950  rounded-lg'>
                    </div>
                    <div>
                        <h1 className='sm:text-2xl text-lg font-semibold pt-5'> Preparing with Arivana AI </h1>
                        <h2 className='text-[#474747] text-lg pb-5'>AI-driven interviews + instant feedback.</h2>
                        <hr />
                        <h3 className='sm:text-xl text-lg font-semibold pt-5'>Why this Works:</h3>
                        <ul className='space-y-3 mt-5'>
                            <li className='text-[#474747a7] text-sm font-medium'>Save 8–10 hrs/week with targeted practice</li>

                            <li className='text-[#474747a7] text-sm font-medium'>Save $200–$500/month on coaching</li>

                            <li className='text-[#474747a7] text-sm font-medium'>No guesswork — instant improvements</li>

                            <li className='text-[#474747a7] text-sm font-medium'>Land more offers with confident answers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
