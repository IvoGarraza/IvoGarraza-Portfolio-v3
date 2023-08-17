import React from 'react'
import spotify from '../assets/spotify.png'

const Spotify = () => {
  return (
    <div className='w-full h-full items-center justify-center flex rounded-xl bg-noise'>
      <div className='w-full h-full flex items-center justify-center rounded-xl bg-[rgba(116,116,116,0.89)]'>
        <img className='w-36' src={spotify}></img>
      </div>
    </div>
  )
}

export default Spotify