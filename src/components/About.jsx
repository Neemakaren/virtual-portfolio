import React from 'react'
import img from '../assets/2.png'

const About = () => {
  return (
    <div className='shadow-md py-4 mb-6'>
       <div className='about-con '>
            <h3 className='about-head flex items-center justify-center mb-2 font-bold text-2xl'><span>ABOUT ME</span></h3>
            <div className='u'></div>
      <div className="con-1">
        <div className="about-content">
            <div className="flex flex-col items-center justify-center">
            <p className='p-[10px] text-[1.1em] j text-[#5a5b5d]'>As a Virtual Assistant, I wear many hats when it comes to providing support for small business owners entrepreneurs and executives. My goal is to assist and help create more time in your schedule for you to be able to focus on the more important aspects of your business. 
            </p>
            </div>
            <div className="underline-1"></div>
        </div>
        <img src={img} alt="" className='about-img' />
        <div className="flex flex-col items-center justify-center">
        <p className='p-[10px] text-[1.1em] j text-[#5a5b5d]'>Allow me to evaluate your business needs and create a custom plan of action to meet your specific requirements and budget. No task or project is too big or too small! 
            </p>
        <p className='p-[10px] text-[1.1em] j text-[#5a5b5d]'>Over the years, I’ve had the opportunity to work on a number of incredible projects alongside very busy executives. I like working behind the scenes making sure that you have everything you need.
            </p>

        </div>

      </div>
    </div>

    </div>
   
  )
}

export default About