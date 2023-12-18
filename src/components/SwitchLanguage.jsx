import React, { useState } from "react";
import "./SwitchLanguaje.css";
/* import "./Moon&Sun.css" */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SwitchLanguage = ({ section, activo, setActivo }) => {
  const [active, setActive] = useState(true)
  const [t, i18n] = useTranslation("global");

  const toogleMode = () => {
    setActivo(!activo);
  };
  const toogleSwicth= ()=>{
    setActive(!active)
  }
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }}
      className={ `relative cursor-pointer flex flex-col items-center justify-center  w-full h-full ${activo?'bg-[#001]':'bg-[#6DC8FC]'}`}
      onClick={()=>{toogleMode();toogleSwicth()}}
    >
      <h2 className="font-bold mb-4 sm:text-2xl text-md text-white z-10 absolute top-4">
        {t("dark")}
      </h2>
      <label class="switch z-10 absolute bottom-4" onClick={()=>{toogleMode();toogleSwicth()}}>
        <input type="checkbox" class="cb" checked={active} onClick={()=>{toogleMode();toogleSwicth()}}/>
        <span class="toggle">
          <span class="left">off</span>
          <span class="right">on</span>
        </span>
      </label>
      <div className="absolute" id="bdy">
        <div className={`w-28 h-28 ${activo?'bg-[#fff]':'bg-[#F6D602] border-[#f5eb71] border-[5px]'}  transition-all rounded-full relative`}>
          <div className={`w-4 h-4 rounded-full bg-[#ccd] bottom-10 left-3 absolute ${activo?'flex':'hidden'}`}></div>
          <div className={`w-2 h-2 rounded-full bg-[#ccd] bottom-6 left-8 absolute ${activo?'flex':'hidden'}`}></div>
          <div className={`absolute ${activo?'bg-[#001]':'bg-[#6DC8FC] transition-colors translate-x-20 -translate-y-12'} transition-transform duration-300 w-32 h-32 -top-10 -right-10 rounded-full`}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SwitchLanguage;
