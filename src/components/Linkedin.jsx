import React from 'react'
import linkedin from '../assets/linkedin.png'
import { motion } from 'framer-motion'
import link from '../assets/link.svg'

const Linkedin = ({section}) => {
  return (
    
      <motion.a initial={{opacity:1}} animate={{opacity: ['all','contact'].includes(section)? 1: 0.2}} href='https://www.linkedin.com/in/ivogarraza' className='w-full h-full bg-[#390ca3f0] flex items-center justify-center relative'>
        <img className="sm:w-6 w-4 opacity-70 absolute top-3 right-3" src={link}></img>
        <img  className='sm:w-28 w-16 fill-[#fff] ' src={linkedin}></img>
      </motion.a>
    
  )
}

export default Linkedin