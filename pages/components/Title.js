import React from 'react';

export default function Title({className}) {
    return (
      <div className='w-full flex flex-col items-center justify-center sm:col-span-2'>
        <div className='flex items-center w-full justify-center'>
          <img src='logo.png' alt="Logo" className='w-1/12 min-w-80' />
          <h1 className='text-text font-krona uppercase text-3xl md:text-4xl lg:text-5xl'>
            Orbital
          </h1>
        </div>
        <h3 className='uppercase text-text-transparent font-space text-xs md:text-sm lg:text-md mt-1 font-bold tracking-widest'>
          a covid safe interactive art installation 
        </h3>
      </div>
    )
  }
  