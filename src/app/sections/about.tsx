
"use client"; // important if you're in Next 13+ with app directory
import React,{ useEffect } from 'react'
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


export default function About() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
    });
  }, []);


  return (
    <div id="about" className='pt-6' >
      <div className='h-[75vh] mx-8 max-w-[50%]' data-aos="fade-right">
        <p  className='text-secondary font-bold text-6xl mb-5'>About <span className='text-primary'>Me</span></p> 
        <p className='text-secondary text-2xl'>Hello world, I am Haouari Abdelhafidh , a Graduated Computer Science Engieneer specialized in IoT, Networking and CyberSecurity as well
          also I am a self-taught Web Developer, I love to create beautiful and functional websites and web applications. 
        </p>
      </div>
      {/* <Image /> */}
    </div>
  )
}
