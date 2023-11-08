import { changeLanguage } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./English.css";

const English = ({ section }) => {
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState("en");
  const [checked, setChecked] = useState(false)

  const toggleLanguage = (e) => {
    e.stopPropagation();
    if (language === "en") {
      setLanguage("es");
      i18n.changeLanguage("es");
      setChecked(true)
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
      setChecked(false)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }}
      className="w-full h-full flex flex-col font-bold justify-center items-center bg-primario text-[#fff] cursor-pointer"
      onClick={toggleLanguage}
    >
      {/* <span className="sm:text-4xl text-xl mb-2">
        {language === "en" ? "ENGLISH" : "ESPAÑOL"}
      </span> */}
      <div className="flex flex-row items-center justify-center text-md">
        {/*           <span className={`mx-1 ${language==="es" ?'text-white':'text-black'}`}>ES</span>
          <span className={`mx-1 ${language==="en"?'text-white':'text-black'}`}>EN</span> */}
        <div className="relative w-full ">
          <div class="container" /* onClick={toggleLanguage} */>
            {/* <input type="checkbox" name="check" id="check" hidden="true" checked={`${checked}`} /> */}
            <label for="check" class={`toggleLang relative ${checked?'bg-sexto':'bg-secundario'} duration-100 sm:h-32 sm:w-12 h-24 w-10`} onClick={toggleLanguage}>
              <div class={`toggle__circle bg-white rounded-full w-[80%] h-[40%] absolute transition  ease-in ${checked?'bottom-2  ':'top-2 '}`} ></div>
            </label>
            <div class="toggle-text text-white sm:text-4xl text-2xl flex p-2">
              <span className={`${checked?'opacity-70':'opacity-100'}`}>ENGLISH</span>
              <span className={`${checked?'opacity-100':'opacity-70'}`}>ESPAÑOL</span>
            </div>
          </div>
        </div>
      </div>
      <span className="sm:text-xs text-[10px] font-light">{t("click")}</span>
    </motion.div>
  );
};

export default English;
