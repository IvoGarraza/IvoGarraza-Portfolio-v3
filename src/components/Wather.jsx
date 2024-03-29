import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SunComponent from '../assets/weatherStyles/SunComponent';
import NightComponent from '../assets/weatherStyles/NightComponent';
import CloudComponent from '../assets/weatherStyles/CloudComponent';
import {MapPinIcon} from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline';


const Wather = ({section}) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=bf8172e9d5824415a54215431231808&q=cordoba&aqi=no');
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  const {t} = useTranslation("global")

  console.log(weatherData)
//Link de css para distintos tiempos https://codepen.io/akhil_001/pen/XNqQjw maldito ladron xd

  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all'].includes(section)?1:0.2}} className='h-full relative bg-[#390ca3f0] p-6'>
      
      {weatherData ? (
        <div className='text-white flex flex-row items-center sm:justify-center justify-between h-full w-full '>
          {/* <div className='absolute w-full bottom-0 h-12 bg-blue-400 '></div> */}
          <div className='w-[60%] sm:pl-6 pl-2'>
            <div className='flex flex-col items-left font-bold sm:text-xl text-lg'>
              <span className='sm:text-2xl text-lg'>{t('weather.temp')} <span className='text-yellow-500'>{weatherData.current.temp_c}°C</span></span>
              <div className='flex flex-row items-center font-normal'>
                <span className='sm:text-md text-sm'>{t('weather.condition')} {weatherData.current.condition.text}</span>
                <img className='w-10 sm:flex hidden ml-2' src={weatherData.current.condition.icon}/>
              </div>
              <div className='flex flex-row items-center'>
                <MapPinIcon className='sm:w-6 w-4'></MapPinIcon>
                <span className='font-light sm:text-md text-sm ml-1'>{weatherData.location.name}</span>
              </div>
              <div className='flex flex-row items-center'>
                <ClockIcon className='sm:w-6 w-4'></ClockIcon>
                <span className='font-light sm:text-md text-sm ml-1 '>{t('weather.time')} {weatherData.location.localtime.split(' ')[1]}</span>
              </div>
            </div>
          </div>
          <div className='sm:w-[40%] z-10'>
            {weatherData.current.condition.text ==='Sunny'?<SunComponent/>:<NightComponent/>}
            {/* <SunComponent /> */}
            {/* <NightComponent/> */}
            {/* <CloudComponent/> */}
          </div>
        </div>
        
      ) : (
        <p>Loading weather data...</p>
      )}
      
    </motion.div>
  )
}

export default Wather