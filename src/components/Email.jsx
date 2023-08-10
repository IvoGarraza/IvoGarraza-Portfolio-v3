import React from 'react'
import email from '../assets/email.webp'

const Email = () => {
  return (
    <div className='flex items-center justify-center bg-blue-400 rounded-xl'>
      <img className='w-48 fill-white' src={email}></img>
    </div>
  )
}

export default Email