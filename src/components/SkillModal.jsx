import React, { useState } from "react";
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
  exit:{scale:0}
};
let transitionDuration = 0.3;
let delayDuration = 0.0;

const SkillModal = ({ isOpen, setIsOpen, handleClick }) => {
  const { t } = useTranslation("global");
  const [stack, setStack] = useState("all");

  /*   const handleClick = () => {
    setIsOpen(false);
  }; */

  return (
    <motion.div
    initial={{y:100}}
    animate={{y:0}}
    exit={{y:1000}}
    className="bg-white w-11/12 h-5/6 flex flex-col items-center justify-around rounded-xl sm:p-6 pt-12 pb-12 relative sm:overflow-hidden overflow-y-auto">
      <h3 className="font-bold">{t("skill")}</h3>

      <div className="flex sm:flex-row flex-col items-center justify-between w-full ">
        <div className="flex flex-row">
          <div className="sm:flex grid grid-cols-2 grid-rows-2 sm:flex-col items-center text-white text-lg font-bold">
            <div
              className={`flex flex-row ${
                stack == "frontend" ? "bg-orange-400" : "bg-slate-400"
              } transition-all rounded-full px-2 my-1 hover:bg-orange-400 cursor-pointer`}
              onClick={() => setStack("frontend")}
            >
              <ComputerDesktopIcon className="w-6 text-black fill-white"></ComputerDesktopIcon>
              <span>Frontend</span>
            </div>
            <div
              className={`flex flex-row ${
                stack == "backend" ? "bg-orange-400" : "bg-slate-400"
              } transition-all rounded-full px-2 my-1 hover:bg-orange-400 cursor-pointer`}
              onClick={() => setStack("backend")}
            >
              <CogIcon className="w-6 text-black fill-white"></CogIcon>
              <span>Backend</span>
            </div>
            <div
              className={`flex flex-row ${
                stack == "database" ? "bg-orange-400" : "bg-slate-400"
              } transition-all hover:bg-orange-400 cursor-pointer rounded-full px-2 my-1`}
              onClick={() => setStack("database")}
            >
              <CircleStackIcon className="w-6 text-black fill-white"></CircleStackIcon>
              <span>Database</span>
            </div>
            <div
              className={`flex flex-row ${
                stack == "tools" ? "bg-orange-400" : "bg-slate-400"
              } transition-all hover:bg-orange-400 cursor-pointer bg-slate-400 rounded-full px-2 my-1`}
              onClick={() => setStack("tools")}
            >
              <WrenchScrewdriverIcon className="w-6 text-black fill-white"></WrenchScrewdriverIcon>
              <span>Tools</span>
            </div>
          </div>
        </div>
          <div className="grid sm:grid-cols-5 grid-cols-3 w-full place-items-center gap-4">
            {logos.filter((logo, index) => {
                // Aquí colocas tu condición de filtrado
                return logo.name !== "Node" || logo.name !== "React" || logo.name !== "TailwindCSS" || logo.name !== "PostgreSQL";
              }).map((logo, index) => {
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
                  className=" p-6 h-32 flex flex-col items-center justify-between text-center"
                >
                  <img
                    className={`sm:w-16 w-10 ${
                      stack == logo.stack || stack == "all"
                        ? "grayscale-0"
                        : "grayscale"
                    }`}
                    src={logo.img}
                  />
                  <span className="font-medium sm:text-lg text-xs">
                    {logo.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        
      </div>
    </motion.div>
  );
};

export default SkillModal;
