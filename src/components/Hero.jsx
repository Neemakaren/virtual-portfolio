import React from 'react'
import img1 from '../assets/img-1.jpg'

const Hero = () => {
  return (
    <header
        className="w-full min-h-[30em] bg-cover bg-center flex justify-center items-center mt-6  h">
        <div className="flex flex-col justify-center relative items-center w-full h-full backdrop-blur-md bg-black/20 py-8 ">
          <h1 className='text-8xl text-white'>Gladys</h1>
          <h1 className='text-8xl italic font-Playfair text-white pb-6'>Kibugi</h1>
          <p className='text-2xl text-white'>Virtual Assistant Services</p>
        </div>
    </header>
  )
}

export default Hero