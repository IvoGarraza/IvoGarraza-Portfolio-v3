import React from 'react'
import github from '../assets/github2.jpg'

const Github = () => {
  return (
    <div className='flex w-full h-full items-center justify-center rounded-xl bg-noise'>
      <a href='https://github.com/IvoGarraza' className='w-full h-full bg-octavo rounded-xl items-center flex justify-center'>
        <img className='w-44' src={github}></img>
      </a>
    </div>
  )
}

export default Github