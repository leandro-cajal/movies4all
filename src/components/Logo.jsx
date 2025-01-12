import React from 'react';

const Logo = () => {
  return (
    <div
      className=" hover:scale-110 transition-all flex flex-col justify-center gap-0 text-xs cursor-pointer font-bold uppercase w-[72px] h-[72px] rounded-full bg-gradient-to-r from-black to-yellow-600"
      style={{
        background: 'linear-gradient(125deg, black 50%, #FFA500 50%)',
      }}
    >
        <p>
        Movies
        </p>
      <p className='text-center text-sm pl-1 -my-1'>
        4
      </p> 
      <p className='text-right pr-3'>All</p>
    </div>
  );
};

export default Logo;
