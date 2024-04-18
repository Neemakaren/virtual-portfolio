import React from 'react'

const Footer = () => {
  let date = new Date()
  date.getFullYear()
  
  return (
    <section className='py-8 bg-[rgb(224,195,179)]'>
      <h3 className='flex items-center justify-center text-2xl'>Virtual Assistant Services</h3>
      <a href="mailto:richard@example.com" className="flex items-center justify-center text-3xl">
        Contact Me:
                  gladyskibugi843@gmail.com
                </a>
    </section>
  )
}

export default Footer