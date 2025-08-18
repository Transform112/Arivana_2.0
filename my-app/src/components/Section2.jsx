import React from 'react'

const Section2 = () => {
    return (
        <div>

            <section className='flex flex-col justify-center items-center p-10  '>

                <div className='border-1 border-base-300 mt-20 p-1 rounded-full'>
                    <div className=' sm:text-lg text-sm font-bold border-1 border-base-300 p-2 rounded-full'>⭐ Interviews Aced with Arivana AI</div>
                </div>
                <h1 className='sm:text-5xl text-xl font-medium mt-10'>So Effortless You’ll Want</h1>
                <h1 className='sm:text-5xl text-xl font-medium '>to Practice Every Day</h1>

                <div className="overflow-hidden   sm:max-w-2xl max-w-xs mt-10 ">
                    <div className="flex items-center gap-4 w-max  animate-carousel-scroll ">
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
                            <div className="carousel-item" key={idx}>
                                <img src={src} className="rounded-box" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2
