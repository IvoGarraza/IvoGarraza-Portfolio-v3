import React, { useState } from "react";
import { logos } from "../assets/logos/index";
import { AnimatePresence, motion } from "framer-motion";
import SkillModal from "./SkillModal";
import { createPortal } from "react-dom";
import { ReactDOM } from "react-dom";
import { TapSound } from "../utils/utils";

const SkillsCard = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all", "about"].includes(section) ? 1 : 0.2 }}
      className="flex w-full h-full items-center bg-terciario justify-center cursor-pointer rounded-xl"
      onClick={() => setIsOpen(true)}
    >
      <div className="flex w-full h-full">
        <div className="grid grid-cols-4 grid-rows-3 w-full h-full items-center self-center justify-center place-items-center grayscale rounded-xl ">
          {logos.slice(0, 12).map((logo) => (
            <img className="sm:w-8 w-5" src={logo.img}></img>
          ))}
        </div>
      </div>
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}}>
              <div className="fixed top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center z-50 bg-[rgba(0,0,0,0.2)]">
                <button
                  className="w-8 h-8 absolute sm:top-4 sm:right-14 top-8 right-8 rounded-md p-1 bg-red-600 text-white font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                    TapSound()
                  }}
                >
                  X
                </button>

                <SkillModal
                /*                   isOpen={isOpen}
                  handleClick={handleClick}
                  setIsOpen={setIsOpen} */
                ></SkillModal>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
};

export default SkillsCard;
