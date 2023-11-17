import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import me from '../assets/me2.png'
import { motion } from 'framer-motion';
import styles from './../assets/styles/About.module.css'
import { InformationCircleIcon } from '@heroicons/react/24/solid';



const AboutCard = ({section}) => {
  const [t,i18n ] = useTranslation("global");




  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='group p-6 overflow-hidden bg-purple-800 w-full h-full rounded-xl relative'>
      <div className={`${styles.water} absolute w-full h-full`}>
      </div>
        <div className='flex flex-col absolute z-10 w-1/2 sm:w-full'>
          <span className='text-white font-bold sm:text-4xl text-md sm:mb-2'>{t('saludo')}👋</span>
          <br className='sm:flex hidden'/>
          <span className='text-white font-bold sm:text-2xl text-xs'>{t('nombre')}</span>
          <span className='text-white w-[70%] sm:text-2xl text-xs z-10'>{t('presentation')}</span>
        </div>
        <img src={me} className='group-hover:w-[63%]  w-[60%] absolute transition-all sm:-top-10 sm:-right-44 -right-12 top-10'></img>
        <InformationCircleIcon className='fill-white sm:w-12 w-8 absolute sm:top-96 sm:left-6 top-4 right-4'></InformationCircleIcon>
    </motion.div>
  )
}

export default AboutCard