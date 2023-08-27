import React, { useEffect } from 'react'
import discord from '../assets/discord.gif'
import {motion} from 'framer-motion'

const Discord = ({section}) => {

  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','contact'].includes(section)? 1: 0.1}} className='w-full h-full items-center bg-noise justify-center rounded-xl'>
      <a href='https://www.discordapp.com/users/641839122180210710' className='w-full h-full bg-[#390ca3f0] flex rounded-xl items-center justify-center'>
        <img  className='w-44' src={discord}></img>
      </a>
    </motion.div>
  )
}

export default Discord