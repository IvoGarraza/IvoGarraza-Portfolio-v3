import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutCard = () => {
  const {t} = useTranslation("global");
  return (
    <div>
      <h1>About card</h1>
        <span className='text-white'>{t('presentation')}</span>
    </div>
  )
}

export default AboutCard