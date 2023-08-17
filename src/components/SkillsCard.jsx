import React, { useState } from 'react'
import { logos } from '../assets/logos/index'
import { AnimatePresence, motion } from 'framer-motion'
import SkillModal from './SkillModal'


const SkillsCard = () => {
  const [isOpen, setIsOpen]= useState(false)

  const handleClick=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex w-full h-full items-center bg-noise justify-center  rounded-xl' onClick={handleClick} whileHover={{ scale: 0.95 }}>
      <div className='flex w-full h-full bg-[rgba(84,46,116,0.95)] rounded-xl'>
        <div className='grid grid-cols-4 grid-rows-3 w-full h-full items-center self-center justify-center place-items-center grayscale rounded-xl '>
          {logos.map((logo)=>(
            <img className='w-8' src={logo}></img>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isOpen&&
        <motion.div>
          <div className='absolute top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.2)]'>
            <SkillModal></SkillModal>
          </div>
        </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default SkillsCard