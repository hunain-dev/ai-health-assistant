import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mt-5 actay font-[500] px-10   flex items-center justify-between w-full'>
        <h1 className='text-2xl mx-1'>MediMind</h1>
         <div className='h-full text-[1.2vw] flex items-center justify-between  w-[20%]'>
      <Link to="/"><h2>Home</h2></Link>  
        <Link to="/Site">
        <h2>Site</h2>
        
        </Link>  

         </div>
         <div className='h-full flex items-center justify-center  '>
          <Button text="Login/Signup" className="bg-[#232A27] px-9 py-3 text-[1vw]"/>
        </div>
      
    </div>
  )
}

export default Header
