import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutCard = () => {
  const {t} = useTranslation("global");
  return (
    <div className='p-6 bg-purple-800 w-full h-full rounded-xl'>
        <span className='text-white'>{t('presentation')}</span>
    </div>
  )
}

export default AboutCard