import React, { useEffect, useState } from "react";
import discord from "../assets/discord.gif";
import { AnimatePresence, motion } from "framer-motion";
import link from "../assets/link.svg";
import discord2 from "../assets/discord.webp";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import ChatbotModal from "./ChatbotModal";
import { Link } from "react-router-dom";

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
      className="w-full h-full bg-[#390ca3f0] flex flex-col rounded-xl items-center justify-center relative"
      onClick={() => setOpenBot(true)}
    >
      {/* Renderiza el modal usando createPortal */}
      {createPortal(
        <AnimatePresence>
          {openBot && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleCloseModal} // Cierra el modal al hacer clic fuera
          >
            <div
              /* className="bg-white p-6 rounded-lg shadow-lg" */
              onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
            >
              <ChatbotModal onClose={handleCloseModal} />
            </div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body // Renderiza el modal directamente en el body
      )}
    </motion.div>
    </Link>
  );
};

export default Discord;
