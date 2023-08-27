import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


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
    <motion.div initial={{opacity:1}} animate={{opacity: ['all'].includes(section)?1:0.2}} className='bg-noise rounded-xl overflow-hidden h-full w-full'>
      <div className='h-full bg-[#390ca3f0] p-6'>
      {weatherData ? (
        <div className='text-white flex flex-row items-center justify-center h-full'>
          <div className='flex flex-col text-center'>
            <h2>{weatherData.location.name}</h2>
            <p>{t('weather.temp')} {weatherData.current.temp_c}°C</p>
            <p>{t('weather.condition')} {weatherData.current.condition.text}</p>
            <span>{t('weather.time')} {weatherData.location.localtime.split(' ')[1]}</span>
          </div>
          <div>
            <img className='w-24' src={weatherData.current.condition.icon}/>
          </div>
          {/* You can display other weather data here */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
      </div>
    </motion.div>
  )
}

export default Wather