import { changeLanguage } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const English = ({section}) => {
  const [t, i18n] = useTranslation("global")
  const [language, setLanguage] = useState("en")


  const toggleLanguage = () =>{
    if(language==="en"){
      setLanguage("es")
      i18n.changeLanguage("es")
    }else {
      setLanguage("en")
      i18n.changeLanguage("en")
    }
  }
  
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all'].includes(section)?1:0.2}} className="w-full h-full flex flex-col font-bold justify-center items-center bg-primario text-[#fff] cursor-pointer" onClick={toggleLanguage}>
        <span className="sm:text-4xl text-xl mb-2">{language === "en"? 'ENGLISH' : 'ESPAÑOL' }</span>
        <div className="flex flex-row items-center justify-center text-md">
          <span className={`mx-1 ${language==="es" ?'text-white':'text-black'}`}>ES</span>
          <span className={`mx-1 ${language==="en"?'text-white':'text-black'}`}>EN</span>
        </div>
        <span className="sm:text-xs text-[10px] font-light">{t('click')}</span>
    </motion.div>
  );
};

export default English;
