import React, { useState } from 'react'
import fullstack from '../assets/fullstack.svg'
import ConfettiExplosion from 'react-confetti-explosion'
import { motion } from 'framer-motion'

const Certifications = ({section}) => {
  const [isExploding, setIsExploding] = useState(false)

  const handleHover = () => {
    setIsExploding(true);
  };
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='flex flex-row items-center justify-around bg-noveno w-full h-full p-6 font-bold text-black' onMouseEnter={handleHover}>
      <div className="absolute w-full h-full z-20 left-0 flex justify-center items-center pointer-events-none">
        {isExploding && (
          <ConfettiExplosion
            className=""
            width={1600}
            force={0.8}
            onComplete={() => setIsExploding(false)}
          />
        )}
      </div>
        <div className='flex flex-col text-white text-sm sm:text-lg'>
          <span>Desarrollador Web FullStack .NET</span>
          <span className='font-normal'>Instituto Superior Politecnico de Córdoba</span>
          <span className='font-light text-yellow-300'>(En curso)</span>
        </div>
        <div>
          <img className='sm:w-36 w-24' src={fullstack}/>
        </div>
    </motion.div>
  )
}

export default Certifications