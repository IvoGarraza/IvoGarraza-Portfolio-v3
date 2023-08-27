import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Age = ({section}) => {
  const {t}= useTranslation("global")

  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='flex flex-col items-center justify-center h-full bg-noise rounded-xl p-0 m-0 text-[#fff] '>
      <div className='bg-octavo w-full h-full flex flex-col items-center rounded-xl justify-center'>
        <h3 className='text-2xl'>{t('age.age')}</h3>
        <h2 className='font-bold text-8xl'>23</h2>
        <h3 className='font-medium text-2xl'>{t('age.old')}</h3>
      </div>
    </motion.div>
  )
}

export default Age