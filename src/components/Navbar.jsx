import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex justify-center items-center text-[1.8em] my-0 mx-auto py-4 mt-2'>
        <ul className='flex gap-8 cursor-pointer '>
            <li className='hover:text-[rgb(224,195,179)]'>Home</li>
            <li className='hover:text-[rgb(224,195,179)]'>About</li>
            <li className='hover:text-[rgb(224,195,179)]'>Services</li>
        </ul>
    </nav>
  )
}

export default Navbar
