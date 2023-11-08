import React, { useState } from "react";
import fullstack from "../assets/fullstack.svg";
import ConfettiExplosion from "react-confetti-explosion";
import { motion } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { certifications } from "../constants";

const Certifications = ({ section }) => {
  const [isExploding, setIsExploding] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickRight = () => {
    if (currentIndex < certifications.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleHover = () => {
    setIsExploding(true);
  };
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all", "about"].includes(section) ? 1 : 0.2 }}
      className="relative flex flex-row items-center justify-between bg-noveno w-full h-full py-6 font-bold text-black"
      onMouseEnter={handleHover}
    >
      <div className="absolute w-full h-full z-20 left-0 flex justify-center items-center pointer-events-none">
        {isExploding && (
          <ConfettiExplosion
            className=""
            width={1600}
            force={0.8}
            onComplete={() => setIsExploding(false)}
          />
        )}
      </div>
      <ChevronLeftIcon className=" fill-white w-12 cursor-pointer" onClick={handleClickLeft}></ChevronLeftIcon>
        <div className="flex flex-col text-white text-sm sm:text-lg transition-all">
          <span className="">{certifications[currentIndex].title}</span>
          <span className="font-normal">{certifications[currentIndex].institucion}</span>
          <span className={`font-light ${certifications[currentIndex].estado == '(En curso)'?'text-yellow-400':'text-green-400'} `}>{certifications[currentIndex].estado}</span>
        </div>
      <div>
        <img className="sm:w-36 w-24" src={fullstack} />
      </div>
      <ChevronRightIcon className=" fill-white w-12 cursor-pointer" onClick={handleClickRight}></ChevronRightIcon>
    </motion.div>
  );
};

export default Certifications;
