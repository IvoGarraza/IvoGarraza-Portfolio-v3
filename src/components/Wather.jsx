import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SunComponent from '../assets/weatherStyles/SunComponent';
import NightComponent from '../assets/weatherStyles/NightComponent';
import CloudComponent from '../assets/weatherStyles/CloudComponent';


const Wather = ({section}) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=bf8172e9d5824415a54215431231808&q=cordoba&aqi=no');
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
    <motion.div initial={{opacity:1}} animate={{opacity: ['all'].includes(section)?1:0.2}} className='h-full  bg-[#390ca3f0] p-6'>
      
      {weatherData ? (
        <div className='text-white flex flex-row items-center sm:justify-center justify-between h-full w-full'>
          <div className='w-[60%]'>
            <div className='flex flex-col items-center font-bold sm:text-xl text-lg'>
              <h2>{weatherData.location.name}</h2>
              <p>{t('weather.temp')} {weatherData.current.temp_c}°C</p>
              <p>{t('weather.condition')} {weatherData.current.condition.text}</p>
              <span>{t('weather.time')} {weatherData.location.localtime.split(' ')[1]}</span>
              <img className='w-12 sm:flex hidden' src={weatherData.current.condition.icon}/>
            </div>
          </div>
          <div className='sm:w-[40%] '>
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