import React from 'react'
import linkedin from '../assets/linkedin.png'
import { motion } from 'framer-motion'

const Linkedin = ({section}) => {
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','contact'].includes(section)? 1: 0.2}} className='w-full h-full items-center bg-noise justify-center rounded-xl'>
      <a href='https://www.linkedin.com/in/ivogarraza' className='w-full h-full bg-[#390ca3f0] flex rounded-xl items-center justify-center'>
        <img  className='w-28' src={linkedin}></img>
      </a>
    </motion.div>
  )
}

export default Linkedin