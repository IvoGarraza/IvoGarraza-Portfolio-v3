import React from "react";
import { logos } from "../assets/logos";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CircleStackIcon,
  CogIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const variantsCard = {
  uno: { scale: 0.8 },
  dos: { scale: 1 },
  aparition: { opacity: 1, scale: 1 },
  hidden: { opacity: 0 },
};
let transitionDuration = 0.3;
let delayDuration = 0.0;

const SkillModal = ({isOpen,setIsOpen}) => {
  const { t } = useTranslation("global");

  return (
    <div className="bg-white w-11/12 h-5/6 flex flex-col items-center justify-around rounded-xl p-6 relative">
      <h3 className="font-bold">{t("skill")}</h3>
      <button className="w-8 h-8 absolute top-0 right-0 rounded-full text-red-600 font-bold" 
      onClick={()=>setIsOpen(!isOpen)}>
        X
      </button>
      <div className="flex sm:flex-row flex-col items-center justify-between w-full">
        <div className="flex flex-row">
          <div className="sm:flex grid grid-cols-2 grid-rows-2 sm:flex-col items-center text-white text-lg font-bold">
            <div className="flex flex-row bg-slate-400 rounded-full px-2 my-1">
              <ComputerDesktopIcon className="w-6 text-black fill-white"></ComputerDesktopIcon>
              <span>Frontend</span>
            </div>
            <div className="flex flex-row bg-slate-400 rounded-full px-2 my-1 focus:bg-primario">
              <CogIcon className="w-6 text-black fill-white"></CogIcon>
              <span>Backend</span>
            </div>
            <div className="flex flex-row bg-slate-400 rounded-full px-2 my-1">
              <CircleStackIcon className="w-6 text-black fill-white"></CircleStackIcon>
              <span>Database</span>
            </div>
            <div className="flex flex-row bg-slate-400 rounded-full px-2 my-1">
              <WrenchScrewdriverIcon className="w-6 text-black fill-white"></WrenchScrewdriverIcon>
              <span>Tools</span>
            </div>
          </div>
          <div className="sm:flex hidden flex-col justify-around ml-2 relative">
            <div className="w-4 h-4 bg-slate-600 rounded-full z-10"></div>
            <div className="w-4 h-4 bg-slate-600 rounded-full z-10"></div>
            <div className="w-4 h-4 bg-slate-600 rounded-full z-10"></div>
            <div className="w-4 h-4 bg-slate-600 rounded-full z-10"></div>
            <div className="h-[85%] w-1 left-1/3 absolute bg-slate-600"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full place-items-center gap-4">
          {logos.map((logo, index) => {
            const row = Math.floor(index / 3);
            const delay = (index % 3) * 0.05 + row * 0.1;
            const transition = { duration: 0.05, delay: delay };
            return (
              <motion.div
                variants={variantsCard}
                whileHover="uno"
                initial="hidden"
                animate="aparition"
                transition={transition}
                className="border-2 p-6 h-32 border-b-black rounded-md"
              >
                <img className="w-16" src={logo} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
