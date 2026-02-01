"use client"; // important if you're in Next 13+ with app directory
import React,{useEffect} from 'react'
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {

    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false, 
      });
    }, []);
  return (
    <div id='home' className='mx-24 mt-10 flex justify-between '>
      <div className='mt-20' data-aos="fade-right">
        <p className='text-7xl uppercase text-secondary font-bold'>Web</p>
        <p className='text-8xl uppercase text-primary font-bold'>Developer</p>
        <div className='flex gap-4 mt-5'>
          <button className='bg-primary text-secondary px-5 py-2 rounded-3xl font-bold cursor-pointer'>Hire Me</button>
          <a href="/Haouari-Abdelhafidh-CV.pdf" download><button className='bg-additional text-secondary px-5 py-2 rounded-3xl font-bold cursor-pointer'>Download CV</button></a>
        </div>
      </div>
      <Image data-aos="fade-left" src="/Me.png" width={320} height={2} alt=''></Image>
    </div>
  )
}
