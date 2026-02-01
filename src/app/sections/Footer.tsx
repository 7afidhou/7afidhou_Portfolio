import React from 'react'
import { FiHome } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { LuPhone } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

import Link from 'next/link';

export default function Footer() {
  return (
    <div className='text-secondary flex flex-col items-center w-full'>
        <div className='flex gap-10 '>
            <div className='flex'>
                <FiHome size={24} className='mr-2'/>
             <p>Home</p>
            </div>

            <div className='flex'>
                <RxPerson size={24} className='mr-2'/>
                <p>About Me</p>
            </div>

            <div className='flex'>
                <LuPhone size={24} className='mr-2'/>
                <p>Contact </p>
            </div>


        </div>

        <div className='flex gap-5 my-10 '>
            <a href='https://www.linkedin.com/in/abdelhafidh-mohamed-haouari-51283a314' target="_blank" className='bg-additional size-10 rounded-full flex justify-center items-center'>
                <FaLinkedinIn size={24}  className='text-secondary'/>
            </a>

            <a href="https://wa.me/213777986379" target="_blank" className='bg-additional size-10 rounded-full flex justify-center items-center'>
                <FaWhatsapp size={24} className='text-secondary'/>
            </a>

            <a href="https://github.com/7afidhou" target="_blank" className='bg-additional size-10 rounded-full flex justify-center items-center'>
                <GrGithub size={24}  className='text-secondary'/>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdelhafidhhaouari2@gmail.com" target="_blank" className='bg-additional size-10 rounded-full flex justify-center items-center'>
                <SiGmail size={24}  className='text-secondary'/>
            </a>
        </div>
    </div>
  )
}
