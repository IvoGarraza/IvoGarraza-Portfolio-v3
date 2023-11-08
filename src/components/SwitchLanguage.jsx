import React, { useState } from "react";
import "./SwitchLanguaje.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SwitchLanguage = ({ checked, section }) => {
  const [activo, setActivo] = useState(true)
  const [t,i18n ] = useTranslation("global");

  const toogleMode = () =>{
    setActivo(!activo)
  }
  
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all'].includes(section)?1:0.2}} className="flex flex-col items-center justify-center  w-full h-full bg-secundario" onClick={toogleMode}>
     
        <h2 className="font-bold mb-4 sm:text-2xl text-md text-white">{t('dark')}</h2>
        <label class="switch" >
          <input type="checkbox" class="cb" checked={activo}/>
          <span class="toggle">
            <span class="left">off</span>
            <span class="right">on</span>
          </span>
        </label>
      
    </motion.div>
  );
};

export default SwitchLanguage;
