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
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='h-full rounded-xl overflow-hidden bg-noise' onMouseEnter={handleHover}>
      <div className='flex flex-row items-center justify-around bg-decimo w-full h-full  p-6 font-bold text-black'>
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
        <div className='flex flex-col'>
          <span>Desarrollador Web FullStack .NET</span>
          <span>Instituto Superior Politecnico de Córdoba</span>
        </div>
        <div>
          <img className='w-24' src={fullstack}/>
        </div>
      </div>
    </motion.div>
  )
}

export default Certifications