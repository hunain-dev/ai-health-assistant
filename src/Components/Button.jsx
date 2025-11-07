import React from 'react'

const Button = ({ text, className}) => {
  return (
    <button 
      className={`actay text-white py-3 cursor-pointer   rounded-3xl ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
