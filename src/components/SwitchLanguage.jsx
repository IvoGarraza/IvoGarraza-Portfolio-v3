import React from "react";
import "./SwitchLanguaje.css";
import { motion } from "framer-motion";

const SwitchLanguage = ({ checked, section }) => {
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all'].includes(section)?1:0.2}} className="flex flex-col items-center justify-center  w-full h-full bg-secundario">
     
        <h2 className="font-bold mb-4 sm:text-2xl text-md text-white">DARK MODE</h2>
        <label class="switch">
          <input type="checkbox" class="cb" />
          <span class="toggle">
            <span class="left">off</span>
            <span class="right">on</span>
          </span>
        </label>
      
    </motion.div>
  );
};

export default SwitchLanguage;
