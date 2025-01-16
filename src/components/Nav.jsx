import React from 'react'
import Logo from './Logo'

import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Nav = () => {
  return (
    <>
      <nav className='flex gap-12 items-center'>
        <div className='lg:hidden'>
          <FaBars />
        </div>
        <Logo />
        <ul className='absolute top-0 h-full bg-black w-full p-4 z-50 max-w-md lg:relative lg:flex justify-start gap-4'>
          <li><a href="" className='hover:text-yellow-400 transition-colors font-semibold'>Home</a></li>
          <li><a href="" className='hover:text-yellow-400 transition-colors font-semibold'>Movies</a></li>
          <li><a href="" className='hover:text-yellow-400 transition-colors font-semibold'>Series</a></li>
          <li className='relative group'><a href="" className='hover:text-yellow-400 transition-colors font-semibold'>Categories</a>
            <ul className='absolute z-50 left-0 hidden group-hover:flex flex-col bg-black text-white rounded shadow-lg w-40 pt-2'>
              <li className="hover:bg-yellow-400 hover:text-black px-4 py-2 transition">
                <a href="#">Action</a>
              </li>
              <li className="hover:bg-yellow-400 hover:text-black px-4 py-2 transition">
                <a href="#">Comedy</a>
              </li>
              <li className="hover:bg-yellow-400 hover:text-black px-4 py-2 transition">
                <a href="#">Drama</a>
              </li>
            </ul>
          </li>
          <MdClose className='text-white absolute top-4 text-2xl right-10 md:hidden'/>
          <li>

          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav