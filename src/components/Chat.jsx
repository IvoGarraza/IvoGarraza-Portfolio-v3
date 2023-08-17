import React from 'react'
import map from '../assets/maps.png'
import map2 from '../assets/map.png'
import pin from '../assets/pin.png'
import me from '../assets/me.png'

const Chat = () => {
  return (
    <div className='group w-full h-full bg-center rounded-xl' style={{backgroundImage:`url(${map2})`}}>
      <div className='bg-[rgba(0,0,0,0.2)] w-full h-full flex flex-col justify-between'>
        <div className='w-full h-[90%] flex items-center justify-center'>
          <img className='rounded-full border-white border-4 h-24 group-hover:animate-bounce' src={me}></img>
        </div>
        <div className='flex items-end justify-end w-full h-[10%]'>
          <div className='flex flex-row items-center mr-2 mb-2'>
            <span className='font-bold text-black flex'>Córdoba, Argentina</span>
            <img className='w-6' src={pin}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat