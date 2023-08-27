import React from "react";
import email from "../assets/email.webp";
import { motion } from "framer-motion";


const Email = ({ section }) => {
  console.log("log del section", section);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all", "contact"].includes(section) ? 1 : 0.2 }}
      className="w-full h-full bg-noise rounded-xl overflow-hidden"
    >
      <div className="flex items-center justify-center bg-noveno h-full rounded-xl">
        {/* <img className='w-48 fill-white' src={email}></img> */}
      </div>
    </motion.div>
  );
};

export default Email;
