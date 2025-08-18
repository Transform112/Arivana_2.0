import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 z-50 flex justify-center font-semibold'>
      <div className='z-10   sm:w-4xl w-80  h-18 flex items-center justify-between px-3 rounded-full  mt-10 text-lg bg-white drop-shadow-base-300 drop-shadow-md'>
        <div className=' flex gap-2 items-center justify-center '> <img src="https://i.ibb.co/4ZwkxqHd/logo.png" alt="logo" className='max-w-8'/>Arivana Ai</div>
        <div className=' gap-3 hidden sm:flex md:flex'>
          <span><a href="#whychooseus">Why us</a></span>

          <span><a href="#features">Features</a></span>

          <span><a href="#pricing">Pricing</a></span>

          <span><a href="#testimonial">Testionial</a></span>

          <span><a href="#faqs">FAQs</a></span>

          <span><a href="#blog">Blog</a></span>

        </div>
<a 
  href="https://forms.gle/yopTUjj47ctXQkZb8" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="bg-gradient-to-b from-gray-900 to-black py-4 px-8 rounded-full text-white sm:flex hidden">
    Try Now
  </button>
</a>

        <button className='bg-gray-200 group py-4 px-8 rounded-full border-1 border-gray-300 relative   sm:hidden flex '>
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg" alt="" className='w-4'/>
        
          <div className=' absolute hidden group-focus:block group-hover:block z-10 top-20 right-0 text-black rounded-lg px-10  text-sm border-1 border-gray-300 bg-white'>
            <ul className='flex flex-col items-start gap-2 mt-5 text-xl justify-baseline'>
            <li><a href="#whychooseus">Why us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonial">Testionial</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
          </div>
        
        </button>
      </div>
      
      
    </div>
    
  )
}

export default Navbar
