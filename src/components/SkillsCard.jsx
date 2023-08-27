import React, { useState } from "react";
import { logos } from "../assets/logos/index";
import { AnimatePresence, motion } from "framer-motion";
import SkillModal from "./SkillModal";
import { createPortal } from "react-dom";
import { ReactDOM } from "react-dom";

const SkillsCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex w-full h-full items-center bg-noise justify-center cursor-pointer rounded-xl"
      onClick={handleClick}
      whileHover={{ scale: 0.95 }}
    >
      <div className="flex w-full h-full bg-terciario rounded-xl">
        <div className="grid grid-cols-4 grid-rows-3 w-full h-full items-center self-center justify-center place-items-center grayscale rounded-xl ">
          {logos.map((logo) => (
            <img className="w-8" src={logo}></img>
          ))}
        </div>
      </div>
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div>
              <div className="fixed top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center bg-[rgba(0,0,0,0.2)]">
  {/*               <div className="w-full flex justify-end">
                  <button className="bg-red-600 text-white p-2 rounded-md items-end mr-16 mb-2">Close</button>
                </div> */}
                <SkillModal></SkillModal>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,document.body
      )}
    </div>
  );
};

export default SkillsCard;
