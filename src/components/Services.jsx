import React from 'react'
import img1 from '../assets/img-5.jpg'
import img2 from '../assets/img-6.jpg'
import img3 from '../assets/img-7.jpg'
import img4 from '../assets/img-8.png'
import img5 from '../assets/img-9.jpg'
import img6 from '../assets/img-10.jpg'
import img7 from '../assets/img-12.jpg'



const Services = () => {
  return (
    <section className=' my-8 mx-auto px-2 lg:px-40 shadow-md pb-8'>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='mb-2 font-bold text-4xl'>Services</h4>
        <div className='u'></div>
        <p className='m-auto mt-4 max-w-lg  text-center info-text text-[#a2a3a4] lg:text-2xl pb-6'>Skip feeling overwhelmed and take your brand to the next level.</p>
      </div>
      <div className='grid grid-cols-21 gap-6  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 cursor-pointer'>
        <div className='p-4 border'>
            <img src={img6} alt="" className='w-full'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <h2 className='text-black text-[25px] lg:text-[1.6em] j'>Travel planning</h2>
              <p className='text-[1.2em]'>All travel hotel and activities booking</p>   
            </div>
        </div>
        <div className=' p-4  border'>
            <img src={img7} alt="" className='w-full object-fill'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <h2 className='text-black text-[25px] lg:text-[1.6em] j'>Calendar Management</h2>
              <p className='text-[1.2em]'>Calendly, Google Calendar</p>  
            </div>
        </div>
        <div className='p-4  border'>
            <img src={img5} alt="" className='w-full object-cover'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <h2 className='text-black text-[25px] lg:text-[1.6em] j'>Inbox Management</h2>
              <p className='text-[1.2em]'>Gmail, Microsoft Outlook</p> 
            </div>
        </div>
        <div className='p-4  border'>
            <img src={img1} alt="" className='w-full object-fill'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <h2 className='text-black text-[25px] lg:text-[1.6em] j'>Website Design</h2>
              <p className='text-[1.2em]'>Wordpress, Javascript, HTML, CSS. SEO</p> 
            </div>
        </div>
        <div className='p-4  border'>
            <img src={img4} alt="" className='w-full object-cover'/>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <h2 className='text-black text-[25px] lg:text-[1.6em] j'>Project Management</h2>
              <p className='text-[1.2em]'>Trello, Asana</p> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services;

