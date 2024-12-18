import React, { useState } from 'react'
import AboutCard from './AboutCard';
import Projects from './Projects';
import SkillsCard from './SkillsCard';
import Age from './Age';
import Email from './Email';
import Blog from './Blog';
import Certifications from './Certifications';
import Map from './Chat';
import Discord from './Discord';
import English from './English';
import Github from './Github';
import Linkedin from './Linkedin';
import SwitchLanguage from './SwitchLanguage';
import Wather from './Wather';
import Spotify from './Spotify';
import Experience from './Experience';
import { I18nextProvider } from 'react-i18next';
import Navbar from './Navbar';
import { componentsToRender } from '.';
import { delay, motion } from "framer-motion";
import i18next, { t } from "i18next";
import global_en from '../languages/en/global.json'
import global_es from '../languages/es/global.json'
import './Home.css'
import { TapSound } from '../utils/utils';
import NavbarDos from './NavbarDos';
import Assistant from './assistant/Assistant';

const Home = () => {
  const [activo, setActivo] = useState(true);
    const [section, setSection] = useState('all');
    const [description, setDescription] = useState(''); // Estado para la descripción del Assistant

    const handleMouseEnter = (componentDescription) => {
      setDescription( componentDescription || ''); // Usa el nombre del componente para buscar la descripción
    };
  
    const handleMouseLeave = () => {
      setDescription('');
    };

    const renderComponent = (componentName, section) => {
      switch (componentName) {
        case "AboutMe":
          return <AboutCard section={section} />;
        case "Projects":
          return <Projects section={section}/>;
        case "Skills":
          return <SkillsCard section={section}/>;
        case "Age":
          return <Age section={section}/>;
        case "Email":
          return <Email section={section} />;
        case "Blog":
          return <Blog section={section}/>;
        case "Certifications":
          return <Certifications section={section}/>;
        case "Chat":
          return <Map section={section}/>;
        case "Discord":
          return <Discord section={section}/>;
        case "English":
          return <English section={section}/>;
        case "Github":
          return <Github section={section}/>;
        case "Linkedin":
          return <Linkedin section={section}/>;
        case "SwitchLanguage":
          return <SwitchLanguage activo={activo} setActivo={setActivo} section={section}></SwitchLanguage>;
        case "Weather":
          return <Wather section={section}/>;
        case "Spotify":
          return <Spotify section={section}/>;
        case "Experience":
          return <Experience section={section}/>;
        default:
          return null;
      }
    };
    console.log('logeooo del section',section)
    return (
      <I18nextProvider i18n={i18next}>
        {/* <Navbar setSection={setSection} section={section}></Navbar> */}
        <NavbarDos setSection={setSection} section={section}></NavbarDos>
       {/*  <div className="bg-noise fill-black font-montserrat"> */}
        <div className='fixed font-retro w-full h-[100vh] opacity-[.04] pointer-events-none bg-noise z-50'></div> 
          <div className={`w-full h-full ${activo?'bg-[#090a13f2]':'bg-slate-50'} transition-all  pt-8 pb-24 sm:px-24 px-4`}>
            <div className="grid sm:auto-rows-[224px] auto-rows-[136px] sm:grid-cols-4 grid-cols-2 gap-4">
              {componentsToRender.map((component,i) => (
                
                <motion.div
                  onClick={()=>TapSound()}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, scale:1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  onMouseEnter={()=>handleMouseEnter(component.description)}
                  onMouseLeave={()=>handleMouseLeave()}
                  key={i}
                  className={`sm:row-span-1 rounded-xl overflow-hidden bg-gray-200 ${i == 1 ? `${activo?'shadow-[0_10px_90px_0px_#fff]':'shadow-[0_10px_90px_0px_#F6D602]'}`:'shadow-none'} ${
                    i === 0
                      ? "sm:col-span-3 sm:row-span-2 col-span-2 row-span-2"
                      : i === 5 || i === 10 || i === 13
                      ? "sm:col-span-2 col-span-2"
                      : ""
                  }`}
                >
                  {renderComponent(component.name,section)}
                </motion.div>
              ))}
            </div>
            <Assistant description={description}></Assistant>
          </div>
       {/*  </div> */}
      </I18nextProvider>
    );
}

export default Home