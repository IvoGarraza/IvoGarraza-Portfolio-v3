import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Bot from "../assets/svg/bot/Bot";
import balatroCard from "../assets/logos/Retrato pixelado del Joker.png";
import openImage from "../assets/logos/icono.png";
import WelcomeSign from "../components/SignChatea/SignChatea.jsx";
import {
  playBackgroundMusic,
  playVoice,
  stopBackgroundMusic,
  TapSound,
} from "../utils/utils.jsx";
import { Link } from "react-router-dom";
import balatroLogo from "../assets/logos/balatro.png";
import TvEffect from "../components/TvEffect/TvEffect.jsx";
import { useFullscreen } from "../hooks/hooks.js";
import ExitFullscreen from "../assets/svg/fullscreen/ExitFullscreen.jsx";
import EnterFullscreen from "../assets/svg/fullscreen/EnterFullscreen.jsx";
import StatsChat from "../components/ChatPage/StatsChat.jsx";
const API_KEY = ProcessingInstruction.enc;

const ChatPage = () => {
  const [messages, setMessages] = useState([]); //Estado para el mensaje recibido
  const [userInput, setUserInput] = useState(""); //Estado para el input del usuario
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef(null); // Para limpiar los timeouts

  const handleSubmit = async (e) => {
    setIsLoading(true);
    try {
      const request = axios.post(
        `https://n8n-digitalmakers.duckdns.org/webhook/chat-portfolio`,
        {
          message: userInput,
        }
      );
      console.log(request.data)
      /* setMessages(request.data) */
      return request.data
      
    } catch (error) {
      console.log('Error de axios:',error)
      return error
    }

  };

  // hook para poner en pantalla completa
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  return (
    <div className="bg-noise w-full h-[100vh] relative overflow-hidden font-retro">
      <div
        className="sm:flex fixed sm:w-14 w-8 h-10 sm:right-10 sm:top-10 right-2 top-2 cursor-pointer"
        onClick={() => {
          toggleFullscreen();
          LoopMusic();
        }}
      >
        {isFullscreen ? (
          <ExitFullscreen></ExitFullscreen>
        ) : (
          <EnterFullscreen></EnterFullscreen>
        )}
      </div>
      <TvEffect></TvEffect>
      <div className="bg-[rgba(33,75,33,0.95)] w-full h-full flex sm:items-center sm:flex-row flex-col sm:justify-center justify-center">
        <Link
          to="/"
          /*  onClick={() => TapSound()} */
          className="group sm:top-10 top-5 sm:left-10 left-5 absolute bg-yellow-400 sm:p-4 p-2 rounded-lg hover:translate-x-[20px] transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 22 22"
            id="memory-arrow-left-bold"
            className="sm:w-10 w-4 group-hover:fill-black"
          >
            <path d="M12 20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H3V9H4V8H5V7H6V6H7V5H8V4H9V3H10V2H12V7H20V15H12V20M10 16V13H18V9H10V6H9V7H8V8H7V9H6V10H5V12H6V13H7V14H8V15H9V16H10Z" />
          </svg>
        </Link>
        <motion.div
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          className="sm:w-1/2 sm:h-full h-1/3 w-full flex items-center sm:justify-center justify-around sm:flex-col flex-col"
        >
          <div className="w-auto">
            <motion.img
              initial="idle"
              /* animate={isAnimating ? "animate" : "idle"} */
              whileHover="hover"
              /* variants={imageVariants} */
              transition={{ duration: 0.05 }}
              src={balatroCard}
              className="sm:w-44 w-full sm:ml-0 ml-2 sm:mb-0 -mb-10"
            ></motion.img>
          </div>
          <div className="flex items-center justify-center w-full">
            {messages ? (isLoading ? (<div class="flex flex-row gap-2">
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>) : (<p className="bg-white p-2 text-center h-full w-[80%] rounded-md">{messages}</p>)) : (<span className="flex flex-col text-center">
              <span className="text-white">Envia un mensaje</span>
              <span className="text-white">Escribe un mensaje y dale al boton "Enviar"</span>
            </span>)}
          </div>
        </motion.div>
        <div className=" flex items-center justify-start w-1/2 h-full"><StatsChat setMessages={setMessages} setIsLoading={setIsLoading}/* setBotMensaje={setBotMensaje} isLoading={isLoading} setIsLoading={setIsLoading} */></StatsChat></div>

      </div>
    </div>
  );
};

export default ChatPage;
