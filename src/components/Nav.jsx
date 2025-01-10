import React from 'react'
import Logo from './Logo'

const Nav = () => {
  return (
    <>
        <nav className='flex gap-12 items-center'>
            <Logo />
            <ul className=' flex justify-start gap-4'>
                <li><a href="" className='hover:text-yellow-400 transition-colors font-semibold'>Home</a></li>
                <li><a href="" className='hover:text-yellow-400 transition-colors font-semibold'>Movies</a></li>
                <li><a href="" className='hover:text-yellow-400 transition-colors font-semibold'>Series</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav