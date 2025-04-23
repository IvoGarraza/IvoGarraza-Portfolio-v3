import { changeLanguage } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./English.css";

const English = ({ section }) => {
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState("es");
  const [checked, setChecked] = useState(false);

  const toggleLanguage = (e) => {
    e.stopPropagation();
    if (language === "en") {
      setLanguage("es");
      i18n.changeLanguage("es");
      setChecked(true);
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
      setChecked(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }}
      className="w-full h-full flex flex-col font-bold justify-center items-center bg-primario text-[#fff]"
      onClick={toggleLanguage}
    >
      {/*       <label class="relative inline-flex items-center cursor-pointer">
        <input class="sr-only peer" value="" type="checkbox" />
        <div class="peer rounded-md outline-none duration-100 after:duration-500 w-28 h-14 bg-secundario peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['ES'] after:absolute after:outline-none after:rounded-md after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['EN'] peer-checked:after:border-white"></div>
      </label> */}
      {/* <span className="uppercase text-7xl">{language}</span> */}
      <div className="flex flex-row bg-secundario w-1/2 h-1/3 items-center justify-around relative rounded-md cursor-pointer">
        <motion.div
          animate={{
            left: language === "es" ? "4%" : "52%",
          }}
          transition={{ duration: 0.3 }}
          className="absolute w-[42%] h-[85%] bg-white rounded-md "
        ></motion.div>
        <div className={`transition-all ${language === "es" ? "text-black z-10" : "text-white"}`}>
          ES
        </div>
        <div className={`transition-all ${language === "en" ? "text-black z-10" : "text-white"}`}>
          EN
        </div>
      </div>
      <span className="text-3xl font-light uppercase">{t("language")}</span>
      {/* <span className="font-light text-xs">{t("click")}</span> */}
    </motion.div>
  );
};

export default English;
