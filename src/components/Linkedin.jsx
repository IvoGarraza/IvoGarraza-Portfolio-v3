import React from 'react'
import linkedin from '../assets/linkedin.png'

const Linkedin = () => {
  return (
    <div className='w-full h-full items-center bg-noise justify-center rounded-xl'>
      <div className='w-full h-full bg-[rgba(105,66,160,0.9)] flex rounded-xl items-center justify-center'>
        <img  className='w-28' src={linkedin}></img>
      </div>
    </div>
  )
}

export default Linkedin