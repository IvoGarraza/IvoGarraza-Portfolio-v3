import { changeLanguage } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const English = () => {
  const [t, i18n] = useTranslation("global")
  const [language, setLanguage] = useState("en")


  const toggleLanguage = () =>{
    if(language==="en"){
      setLanguage("es")
    }else {
      setLanguage("en")
    }
  }
  
  return (
    <div className="w-full h-full rounded-xl bg-noise text-[#fff]" onClick={toggleLanguage}>
      <div className="flex flex-col font-bold justify-center items-center rounded-xl bg-purple-800 w-full h-full">
        <span className="text-4xl mb-2">ENGLISH</span>
        <div className="flex flex-row items-center justify-center ">
          <span className={`mx-1 ${language==="es" ?'text-black':'text-white'}`}>ES</span>
          <span className={`mx-1 ${language==="en"?'text-black':'text-white'}`}>EN</span>
        </div>
      </div>
    </div>
  );
};

export default English;
