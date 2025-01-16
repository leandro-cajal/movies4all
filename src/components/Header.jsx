import React from 'react'
import Nav from './Nav'
import SearchBar from './SearchBar'
import { FaUser } from 'react-icons/fa';


const Header = () => {
  return (
    <>
      <div className='w-full bg-black'>
        <header className='max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-white'>
          <Nav />
          <div className='flex gap-6 items-center'>
            <SearchBar />
            <FaUser className='text-2xl cursor-pointer hover:text-yellow-400 transition-colors' />
          </div>
        </header>
      </div>
    </>
  )
}

export default Header