import React, { useEffect } from 'react'
import discord from '../assets/discord.gif'
import {motion} from 'framer-motion'
import link from '../assets/link.svg'
import discord2 from '../assets/discord.webp'
import { useTranslation } from 'react-i18next'


const Discord = ({section}) => {
  const [t,i18n ] = useTranslation("global");

  return (
    
      <motion.a initial={{opacity:1}} animate={{opacity: ['all','contact'].includes(section)? 1: 0.1}} href='https://www.discordapp.com/users/641839122180210710' className='w-full h-full bg-[#390ca3f0] flex flex-col rounded-xl items-center justify-center relative'>
        <img className="sm:w-6 w-4 opacity-70 absolute top-3 right-3" src={link}></img>
        <img  className='sm:w-44 w-24' src={discord2}></img>
        <div className='flex flex-row bg-slate-300 px-2 rounded-full items-center'>
          <div className='w-[10px] h-[10px] bg-green-500 rounded-full'></div>
          <span className='ml-2'>{t('discord.on')}</span>
        </div>
      </motion.a>
  
  )
}

export default Discord