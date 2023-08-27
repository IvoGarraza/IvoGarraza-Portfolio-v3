import React from "react";
import "./SwitchLanguaje.css";
import { motion } from "framer-motion";

const SwitchLanguage = ({ checked, section }) => {
  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all'].includes(section)?1:0.2}} className="flex flex-col w-full h-full items-center justify-center bg-noise rounded-xl overflow-hidden">
      <div className="flex flex-col items-center justify-center  w-full h-full bg-secundario">
        <h2 className="font-bold mb-4 text-white">DARK MODE</h2>
        <label class="switch">
          <input type="checkbox" class="cb" />
          <span class="toggle">
            <span class="left">off</span>
            <span class="right">on</span>
          </span>
        </label>
      </div>
    </motion.div>
  );
};

export default SwitchLanguage;
