import React from 'react'
import github from '../assets/github2.jpg'
import link from '../assets/link.svg'
import { motion } from 'framer-motion'
import ardilla from '../assets/giphy.gif'
const Github = ({section}) => {
  return (
    
      <motion.a       initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }} href='https://github.com/IvoGarraza' className='w-full h-full bg-black rounded-xl items-center flex justify-center relative'>
        <img src={ardilla} className='absolute z-0 w-auto h-full opacity-70'></img>
        <img className="sm:w-6 w-4 opacity-70 absolute top-3 right-3 z-10" src={link}></img>
        <img className='sm:w-16 w-10 top-2 left-2 z-10 absolute ' src={github}></img>
        <div className='flex flex-col z-10 text-white absolute bottom-3 left-3 sm:text-2xl'>
          <span className='font-bold'>Github</span>
          <span>My github profile</span>
        </div>
      </motion.a>
    
  )
}

export default Github