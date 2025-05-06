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
        whileHover={{scale:1.02}}
        className="w-full h-full text-4xl text-center flex flex-col rounded-xl items-center justify-center relative overflow-hidden"
        onClick={() => playBackgroundMusic()}
      >
        {/* Renderiza el modal usando createPortal */}
        <video
          src={background}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <span className="text-white z-10 font-retro ">Habla con<br/> mi I.A.</span>
        <span className="bg-green-400 z-10 text-white font-retro p-4 rounded-lg ">CHATEAR</span>
      </motion.div>
    </Link>
  );
};

export default Discord;
