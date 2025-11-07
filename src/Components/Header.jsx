import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='mt-5 actay font-[500] px-10   flex items-center justify-between w-full'>
        <h1 className='text-2xl mx-1'>MediMind</h1>
         <div className='h-full text-[1.2vw] flex items-center justify-between  w-[20%]'>
        <h2>Home</h2>
        <h2>Site</h2>

         </div>
         <div className='h-full flex items-center justify-center  '>
            <Button text="Login/Signup" className="bg-[#232A27] px-9 py-3 text-[1vw]"/>
         </div>
      
    </div>
  )
}

export default Header
