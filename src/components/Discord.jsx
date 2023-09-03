import React, { useEffect } from 'react'
import discord from '../assets/discord.gif'
import {motion} from 'framer-motion'
import link from '../assets/link.svg'


const Discord = ({section}) => {

  return (
    
      <motion.a initial={{opacity:1}} animate={{opacity: ['all','contact'].includes(section)? 1: 0.1}} href='https://www.discordapp.com/users/641839122180210710' className='w-full h-full bg-[#390ca3f0] flex rounded-xl items-center justify-center relative'>
        <img className="sm:w-6 w-4 opacity-70 absolute top-3 right-3" src={link}></img>
        <img  className='sm:w-44 w-24' src={discord}></img>
      </motion.a>
  
  )
}

export default Discord