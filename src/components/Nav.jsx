import React, { useState } from 'react'

import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      <nav className='flex gap-12 items-center'>
        <div className='lg:hidden'>
          <FaBars onClick={() => setMenuOpen(true)} />
        </div>
        <a href='' className='group whitespace-nowrap px-6 py-2 relative border-none rounded-lg cursor-pointer overflow-hidden bg-transparent flex items-center justify-center before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-[conic-gradient(#facc15,#facc15,#facc15,#facc15,#facc15)] before:animate-spin-slow before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:bg-black after:rounded-md'>
          <h1 className='text-yellow-400 text-lg font-bold relative z-10 group-hover:text-white transition-colors'>Movies 4 All</h1>
        </a>

        <ul className={`absolute top-0 h-full bg-black w-full left-0 p-4 z-50 max-w-md transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:flex lg:translate-x-0 justify-start gap-4`}>
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
          <MdClose onClick={() => setMenuOpen(false)} className='text-white absolute top-4 text-2xl right-5 lg:hidden' />
          <li>

          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav