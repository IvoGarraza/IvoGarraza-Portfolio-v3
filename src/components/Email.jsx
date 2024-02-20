import React from "react";
import email from "../assets/email.webp";
import { motion } from "framer-motion";
import link from "../assets/link.svg";
import {EnvelopeIcon} from '@heroicons/react/24/solid'

const Email = ({ section }) => {
  console.log("log del section", section);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all", "contact"].includes(section) ? 1 : 0.2 }}
      className="flex items-center justify-center bg-noveno h-full relative"
    >
      <a
        href="mailto:ivogarraza@gmail.com?Subject=Hola%20Ivo!"
        className="w-full h-full flex items-center justify-center"
      >
        <img className="sm:w-6 w-4 opacity-70 absolute top-3 right-3" src={link}></img>
        {/* <img className="sm:w-48 w-32 " src={email}></img> */}
        <EnvelopeIcon className="sm:w-44 w-24 fill-white opacity-80 "/>
      </a>
    </motion.div>
  );
};

export default Email;
