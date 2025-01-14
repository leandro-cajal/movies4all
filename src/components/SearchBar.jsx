import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState (false);
  const HandleClick = () => {
    setSearchInput(!searchInput)
 }
  return (
    <div className='flex items-center gap-2'>
        {
          searchInput && (
            <div>
              <form action="" className=''>
                <input className='bg-white/30 rounded p-1 placeholder:text-white' placeholder='Search for a movie ...' type="text" />
              </form>
            </div>
          )
        }
        <div className='cursor-pointer'>
            <FaSearch onClick={HandleClick} className='text-xl'/>
        </div>
    </div>
  )
}

export default SearchBar