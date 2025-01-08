import React from 'react'

const Nav = () => {
  return (
    <>
        <nav className='flex gap-12 items-center'>
            <a href='' className='font-bold uppercase text-black py-8 text-xs rounded-full bg-yellow-400'>Movies 4 All</a>
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