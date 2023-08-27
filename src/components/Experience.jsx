import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Experience = ({section}) => {
  const {t} = useTranslation("global")
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='w-full h-full flex items-center justify-center bg-noise overflow-hidden rounded-xl'>
        <div className='flex flex-col items-center bg-primario w-full h-full justify-center'>
            <span className='font-bold text-8xl text-white'>+1</span>
            <span className='font-medium text-2xl text-white'>{t('exp')}</span>
        </div>
    </motion.div>
  )
}

export default Experience