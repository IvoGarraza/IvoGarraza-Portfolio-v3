import React, { useState } from "react";
import "./SwitchLanguaje.css";
/* import "./Moon&Sun.css" */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SwitchLanguage = ({ section, activo, setActivo }) => {
  const [active, setActive] = useState(true);
  const [t, i18n] = useTranslation("global");

  const toogleMode = () => {
    setActivo(!activo);
  };
  const toogleSwicth = () => {
    setActive(!active);
  };
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }}
      className={`relative cursor-pointer flex flex-col items-center justify-center w-full h-full ${
        activo ? "bg-[#001]" : "bg-[#6DC8FC]"
      }`}
      onClick={() => {
        toogleMode();
        toogleSwicth();
      }}
    >
      <h2 className="font-bold mb-4 sm:text-2xl text-md text-white z-10 absolute top-4">
        {t("dark")}
      </h2>
      {/*       <label class="switch sm:w-[5rem] sm:h-[2.5rem] w-[2rem] h-[1rem] z-10 absolute bottom-4" onClick={()=>{toogleMode();toogleSwicth()}}>
        <input type="checkbox" class="cb" checked={active} onClick={()=>{toogleMode();toogleSwicth()}}/>
        <span class="toggle">
          <span class="left">off</span>
          <span class="right">on</span>
        </span>
      </label> */}

      <div className="absolute" id="bdy" onClick={()=>{toogleMode();toogleSwicth()}}>
        <div
          className={`sm:w-28 sm:h-28 w-14 h-14 ${
            activo ? "bg-[#fff]" : "bg-[#F6D602] border-[#f5eb71] border-[5px]"
          }  transition-all rounded-full relative`}
        >
          <div
            className={`sm:w-4 sm:h-4 w-2 h-2 rounded-full bg-[#ccd] sm:bottom-10 sm:left-3 bottom-4 left-3 absolute ${
              activo ? "flex" : "hidden"
            }`}
          ></div>
          <div
            className={`sm:w-2 sm:h-2 w-1 h-1 rounded-full bg-[#ccd] sm:bottom-6 sm:left-8 bottom-2 left-6 absolute ${
              activo ? "flex" : "hidden"
            }`}
          ></div>
          <div
            className={`absolute ${
              activo
                ? "bg-[#001]"
                : "bg-[#6DC8FC] transition-colors translate-x-20 -translate-y-12"
            } transition-transform duration-300 sm:w-32 sm:h-32 w-12 h-12 sm:-top-10 sm:-right-10 -top-2 -right-2 rounded-full`}
          ></div>
        </div>
      </div>
      <div class="checkbox-wrapper-8 absolute bottom-3" onClick={()=>{toogleMode();toogleSwicth()}}>
        <input type="checkbox" id="cb3-8" class="tgl tgl-skewed" checked={active} onClick={()=>{toogleMode();toogleSwicth()}}/>
        <label
          for="cb3-8"
          data-tg-on="ON"
          data-tg-off="OFF"
          class="tgl-btn rounded-md"
          onClick={()=>{toogleMode();toogleSwicth()}}
        ></label>
      </div>
    </motion.div>
  );
};

export default SwitchLanguage;
