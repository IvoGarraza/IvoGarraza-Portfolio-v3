import React from "react";
import { motion } from "framer-motion";

const Assistant = ({ description }) => {
  return (
    <div className="fixed w-12 h-12 bottom-24 right-8 bg-secundario">
      <div className="w-2 h-2 bg-white absolute top-3 right-2 rounded-full"></div>
      <div className="w-2 h-2 bg-white absolute top-3 left-2 rounded-full"></div>
      <div className="w-2/3 h-1 bg-black absolute left-2 bottom-2"></div>
      
        {description && (
          
          <motion.div
          initial={{y:100, opacity:0}}
          animate={{y:0, opacity:1}}
          className="bg-white w-44 h-24 -left-48 bottom-0 rounded-md absolute">
            <div className="w-0 h-0 border-b-[16.6px] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent absolute -right-4 bottom-6 rotate-90"></div>
            <span className="text-black">{description}</span>
          </motion.div>
        )}
      
    </div>
  );
};

export default Assistant;
