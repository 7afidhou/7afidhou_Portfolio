"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Works() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
         <div data-aos="fade-right" className=" h-screen mx-8 mt-10 flex justify-between">
        <p
          
          className="text-secondary font-bold text-6xl mb-5"
        >
          Recent <span className="text-primary">Works</span>
        </p>
      </div>
   
    </div>
  );
}
