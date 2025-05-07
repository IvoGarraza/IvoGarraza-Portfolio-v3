import React, { useEffect, useState } from "react";
import discord from "../assets/discord.gif";
import { AnimatePresence, motion } from "framer-motion";
import link from "../assets/link.svg";
import discord2 from "../assets/discord.webp";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import ChatbotModal from "./ChatbotModal";
import { Link } from "react-router-dom";
import background from "./../assets/covers/videoplayback.mp4";
import { playBackgroundMusic } from "../utils/utils";
import balatro from '../assets/logos/balatro.png'

const Discord = ({ section }) => {
  const [t, i18n] = useTranslation("global");
  const [openBot, setOpenBot] = useState(false);

  const handleCloseModal = (e) => {
    e.stopPropagation(); // Evita que el evento se propague al contenedor principal
    setOpenBot(false);
  };

  return (
    <Link to="/chat">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: ["all", "contact"].includes(section) ? 1 : 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="w-full h-full text-4xl text-center flex flex-col rounded-xl items-center justify-start relative overflow-hidden"
        onClick={() => playBackgroundMusic()}
      >
        <div className="absolute flex flex-row bottom-0 left-0 z-10 text-white font-retro w-full h-1/6 items-center justify-start pl-4 pb-2 text-xs ">
          <span>Inspirado en:</span>
          <img src={balatro} className="w-1/4 ml-2"></img>
        </div>
        <video
          src={background}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <span className="text-white z-10 font-retro sm:mt-4 mt-2 text-lg">
          Habla con
          <br /> mi I.A.
        </span>
        <div className=" z-10 sm:w-1/2 w-1/2 h-1/4 sm:mt-4 relative sm:text-xl text-xs text-white font-retro">
          <div
            className={`bg-green-400 w-full active:translate-x-1 active:translate-y-1 transition-all absolute h-full flex items-center justify-center rounded-md z-[1]`}
          >
            CHATEAR
          </div>
          <div className="bg-black w-full absolute translate-x-1 translate-y-1 h-full flex items-center justify-center rounded-md z-[0]"></div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Discord;
