import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Experience = ({section}) => {
  const {t} = useTranslation("global")
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='flex flex-col items-center bg-primario w-full h-full justify-center' >
            <span className='font-medium sm:text-2xl text-lg text-white'>{t('exp.experience')}</span>
            <span className='font-bold sm:text-7xl text-5xl text-white'>+2</span>
            <span className='font-light sm:text-md text-lg text-white'>{t('exp.years')}</span>
    </motion.div>
  )
}

export default Experience