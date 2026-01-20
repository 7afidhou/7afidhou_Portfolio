import React from 'react'

export default function Contact() {
  return (
    <div className='h-screen mx-8 flex justify-between pt-6' id='contact' >
          <p className="text-secondary font-bold text-6xl mb-6"> Contact <span className="text-primary">Me</span></p>
  <div className=' w-[70%]'>
    <div className='flex gap-20 mb-8 w-full pr-10'>
        <div>
            <p className='text-secondary font-bold'>Your Name</p>
            <input className='bg-additional w-[100%] mt-2 rounded-xl text-secondary px-4 py-2 placeholder:text-secondary/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Name'  type="text" />
        </div>
        <div>
            <p className='text-secondary font-bold'>Your Email</p>
            <input className='bg-additional mt-2 rounded-xl text-secondary px-4 py-2 placeholder:text-secondary/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Email'  type="email" />


        </div>
    </div>
    <div className='pr-20'>
        <p className='text-secondary font-bold '>Your Message</p>
        <textarea className='bg-additional text-left align-top h-64 w-full mt-2 rounded-xl text-secondary px-4 py-2 placeholder:text-secondary/20 placeholder:font-bold  focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Message'  type="text" />

    </div>
    <button className='px-4 py-1 shadow-additional rounded-2xl bg-primary text-secondary mt-4 font-bold'><p className='drop-shadow-2xl'>Send Message</p></button>
  </div>
    </div>
  )
}
