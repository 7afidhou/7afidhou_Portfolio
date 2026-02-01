"use client"
import React,{useEffect} from 'react'
import { FiHome } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { LuPhone } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);    
const smoothScroll = (targetId, duration = 800, offset = 0) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start - offset;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };



  return (
    <div  className='text-secondary flex flex-col items-center w-full'>
        <div data-aos="fade-right" className='flex gap-10 '>
            <button onClick={() => smoothScroll("home", 600)}  className='flex cursor-pointer'>
                <FiHome size={24} className='mr-2'/>
             <p>Home</p>
            </button>

            <button onClick={() => smoothScroll("about", 600)}   className='flex cursor-pointer'>
                <RxPerson size={24} className='mr-2'/>
                <p>About Me</p>
            </button>

            <button onClick={() => smoothScroll("contact", 600)}  className='flex cursor-pointer'>
                <LuPhone size={24} className='mr-2'/>
                <p>Contact </p>
            </button>


        </div>

        <div  className='flex gap-5 mt-10 mb-20'>
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
