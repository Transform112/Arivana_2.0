
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { cn } from "@/lib/utils";

export function Footer({ copyright, logo, links, social, ...rest }) {
  return (
    <footer
      className="text-xl pt-6  
bg-gradient-to-b
from-[#06b5d400]
via-[#2564eb31]
to-[#6365f16f] dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      {...rest}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto px-6 mt-20 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 ">

          
          <div className="lg:col-span-2 ">
            <div className=" flex items-center gap-2 mb-4">
              
              <img src="/logo.png" alt="Logo" className="w-10 h-10" />
              <h2 className="text-2xl font-semibold">Arivana</h2>
            </div>
            <p className="  text-gray-600 text-lg mb-6">
              Custom software. Built for your vision — by Arivana.
            </p>
            <p className="text-gray-500 text-lg">
              © 2025  All rights reserved.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li><a href="#">Schedule a Demo</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Social</h3>
            <ul className="space-y-2 text-gray-600 text-md flex flex-col">
              <li className="flex items-center gap-2">
                <SocialLinks links={social} />
              </li>
            </ul>

          </div>
          
          

        </div>
         
        
      </div>

      </div>
     
    <div className="w-100 mt-20 relative ">
      <img className=" opacity-5" src="/Arivana.png" />
    </div>


    </footer>
  );
}
