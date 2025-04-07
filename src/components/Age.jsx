import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Age = ({section}) => {
  const {t}= useTranslation("global")

  return (

      <motion.div  initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className='bg-octavo w-full h-full flex flex-col items-center rounded-xl justify-center text-white'>
        <h3 className='sm:text-2xl text-lg'>{t('age.age')}</h3>
        <h2 className='font-bold sm:text-7xl text-4xl mb-2'>24</h2>
        <h3 className='font-light sm:text-2xl text-lg'>{t('age.old')}</h3>
      </motion.div>

  )
}

export default Age