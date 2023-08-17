import React from 'react'
import github from '../assets/github2.jpg'

const Github = () => {
  return (
    <div className='flex w-full h-full items-center justify-center rounded-xl bg-noise'>
      <div className='w-full h-full bg-[rgba(57,57,57,0.95)] rounded-xl items-center flex justify-center'>
        <img className='w-44' src={github}></img>
      </div>
    </div>
  )
}

export default Github