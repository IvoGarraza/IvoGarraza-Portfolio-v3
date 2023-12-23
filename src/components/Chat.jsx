import React from 'react'
import map from '../assets/maps.png'
import map2 from '../assets/map.png'
import pin from '../assets/pin.png'
import me from '../assets/me.png'
import { motion } from 'framer-motion'

const Map = ({section}) => {
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='group w-full h-full bg-center rounded-xl' style={{backgroundImage:`url(${map2})`}}>
      <a href='https://www.google.com/maps/place/C%C3%B3rdoba/@-31.3994532,-64.1942124,12z/data=!3m1!4b1!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu' target="_blank" className='bg-[rgba(0,0,0,0.2)] w-full h-full flex flex-col justify-between'>
        <div className='w-full h-[90%] relative  flex items-center justify-center'>
          <div className='rounded-full bg-white w-1/3 border-white border-4 sm:h-24 h-20 group-hover:animate-ping'></div>
          <img className='rounded-full absolute border-white border-4 sm:h-24 h-20 ' src={me}></img>
        </div>
        <div className='flex items-end justify-end w-full h-[10%]'>
          <div className='flex flex-row items-center mr-2 mb-2'>
            <span className='font-bold text-black flex sm:text-lg text-xs'>Córdoba, Argentina</span>
            <img className='w-6' src={pin}></img>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default Map