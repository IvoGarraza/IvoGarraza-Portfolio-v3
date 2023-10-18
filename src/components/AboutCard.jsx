import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import me from '../assets/me2.png'
import { motion } from 'framer-motion';
import styles from './../assets/styles/About.module.css'



const AboutCard = ({section}) => {
  const [t,i18n ] = useTranslation("global");




  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='p-6 overflow-hidden bg-purple-800 w-full h-full rounded-xl relative'>
      <div className={`${styles.water} absolute w-full h-full`}>
      </div>
        <div className='flex flex-col absolute z-10'>
          <span className='text-white font-bold text-4xl mb-2'>{t('saludo')}👋</span>
          <br/>
          <span className='text-white font-bold text-2xl'>{t('nombre')}</span>
          <span className='text-white w-[70%] text-2xl z-10'>{t('presentation')}</span>
        </div>
        <img src={me} className='absolute -top-10 -right-44'></img>
    </motion.div>
  )
}

export default AboutCard