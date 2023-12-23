import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import me from "../assets/me2.png";
import { motion } from "framer-motion";
import styles from "./../assets/styles/About.module.css";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const AboutCard = ({ section }) => {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = useState(false);
  const [hover,setHover] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all", "about"].includes(section) ? 1 : 0.2 }}
      className="group p-6 overflow-hidden bg-purple-800 w-full h-full rounded-xl relative"
    >
      <div className={`${styles.water} absolute w-full h-full`}></div>
      <div className="flex flex-col absolute z-10 w-2/3 sm:w-full">
        <span className="text-white font-bold sm:text-4xl text-md sm:mb-2">
          {t("saludo")}👋
        </span>
        <br className="sm:flex hidden" />
        <span className="text-white font-bold sm:text-2xl text-xs">
          {t("nombre")}
        </span>
        <span className="text-white w-[70%] sm:text-2xl text-xs font-extralight z-10">
          {t("presentation")}
        </span>
      </div>
      <img
        src={me}
        className="group-hover:w-[63%]  w-[60%] absolute transition-all sm:-top-10 sm:-right-44 -right-12 top-24"
      ></img>
      <div className="absolute flex flex-row sm:top-96 sm:left-6 top-4 right-4">
      <InformationCircleIcon onMouseOver={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="fill-white sm:w-12 w-8 cursor-pointer">
      </InformationCircleIcon>
        <div className={`w-44 h-24 bg-black ${hover ? 'flex':'hidden'}`}>

        </div>
      </div>
      <div
        onMouseLeave={() => setOpen(false)}
        onMouseEnter={() => setOpen(true)}
        className={` ${
          open ? "flex" : "hidden"
        } text-white bg-slate-500 absolute bottom-10 left-24 px-4 py-2 rounded-md`}
      >
        <span>Retrato hecho con stable difussion</span>
      </div>
    </motion.div>
  );
};

export default AboutCard;
