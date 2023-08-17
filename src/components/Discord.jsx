import React from 'react'
import discord from '../assets/discord.gif'

const Discord = () => {
  return (
    <div className='w-full h-full flex items-center justify-center bg-noise rounded-xl'>
      <div className='w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.95)] rounded-xl'>
        <img src={discord} onMouseOver={() => this.gif.play()}  onMouseLeave={() => this.gif.pause()}></img>
      </div>
    </div>
  )
}

export default Discord