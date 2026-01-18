"use client";
import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Works() {
 const [webdevSelected, setWebdevSelected] = useState(false);
 const [iotSelected, setIotSelected] = useState(false);
 const [allSelected, setAllSelected] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div data-aos="fade-right" className="flex flex-col justify-center h-94 mx-8 ">
            <p className="text-secondary font-bold text-6xl mb-5"> Recent <span className="text-primary">Works</span></p>
           <div className="flex gap-2">
    <button className={`font-bold text-secondary  bg-1/2 px-4 py-2 rounded-2xl cursor-pointer ${allSelected ? 'bg-primary' : 'bg-[#393E46]'}`} onClick={()=>{setAllSelected(true);setWebdevSelected(false);setIotSelected(false);}}>All</button>
    <button className={`font-bold text-secondary  bg-1/2 px-4 py-2 rounded-2xl cursor-pointer ${webdevSelected ? 'bg-primary' : 'bg-[#393E46]'}`} onClick={()=>{setWebdevSelected(true);setAllSelected(false);setIotSelected(false);}}>Web Development</button>
    <button className={`font-bold text-secondary  bg-1/2 px-4 py-2 rounded-2xl cursor-pointer ${iotSelected ? 'bg-primary' : 'bg-[#393E46]'}`} onClick={()=>{setIotSelected(true);setAllSelected(false);setWebdevSelected(false);}}>IoT</button>
   </div>

   <div >

   </div>
    </div>
  );
}
