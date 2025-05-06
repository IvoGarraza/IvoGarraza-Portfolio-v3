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
      className="w-full h-full flex flex-col font-bold justify-center items-center bg-primario text-[#fff] relative"
      onClick={toggleLanguage}
    >
      <div className="fill-white absolute top-2 right-2 opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </div>

      <div className="flex flex-row bg-secundario w-1/2 h-1/3 items-center justify-around relative rounded-md cursor-pointer">
        <motion.div
          animate={{
            left: language === "es" ? "4%" : "52%",
          }}
          transition={{ duration: 0.3 }}
          className="absolute w-[42%] h-[85%] bg-white rounded-md "
        ></motion.div>
        <div
          className={`transition-all ${
            language === "es" ? "text-black z-10" : "text-white"
          }`}
        >
          ES
        </div>
        <div
          className={`transition-all ${
            language === "en" ? "text-black z-10" : "text-white"
          }`}
        >
          EN
        </div>
      </div>
      <span className="text-3xl font-light uppercase mt-2">
        {t("language")}
      </span>
    </motion.div>
  );
};

export default English;
