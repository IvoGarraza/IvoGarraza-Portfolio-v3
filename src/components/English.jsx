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
      <div className="bg-slate-400 w-2/3 h-2/3 rounded-md"></div>
    </motion.div>
  );
};

export default English;
