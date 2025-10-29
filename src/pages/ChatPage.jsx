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
        `https://n8n-digitalmakers.duckdns.org/webhook-test/chat-portfolio`,
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
          onClick={() => TapSound()}
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
          className="sm:w-1/3 sm:h-full h-1/3 w-full flex items-center sm:justify-center justify-around sm:flex-col flex-row"
        >
          <div className="w-1/4">
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
          <div className="rounded-md flex items-center justify-center w-3/4 h-auto">
            <AnimatePresence>
              {messages.length > 0 &&
              messages.some((msg) => msg.role === "assistant") ? (
                messages.map(
                  (msg, index) =>
                    msg.role === "assistant" && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-white text-black rounded-xl w-full max-w-xs p-3 mt-2 text-center mx-auto"
                      >
                        {msg.content}
                      </motion.div>
                    )
                )
              ) : isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white rounded-xl w-full max-w-xs p-4 text-center mx-auto"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <p>Procesando tu mensaje...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-transparent text-white rounded-xl text-2xl w-full max-w-xs p-4 text-center mx-auto"
                >
                  <div className="flex flex-col items-center gap-2">
                    <p>Envía un mensaje para comenzar a chatear</p>
                    <p className="text-lg text-slate-300 mt-1">
                      Escribe tu pregunta y presiona ENVIAR
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          className="sm:w-1/3 w-full bg-slate-600 sm:h-5/6 h-2/3 border-[4px] border-slate-300 flex flex-col items-center rounded-lg justify-between overflow-hidden pt-2"
        >
          <div className="h-1/6 w-auto mb-4">
            <WelcomeSign></WelcomeSign>
          </div>
          <div className="w-11/12 h-4/6  bg-slate-800 rounded-lg text-white p-2 grid grid-cols-1 grid-rows-3 gap-2">
            <div className="w-full text-xl grid grid-col-1 grid-rows-2 gap-2 rounded-lg">
              <div className="bg-slate-400 h-full w-auto flex flex-row justify-around items-center rounded-lg">
                <span>Modelo:</span>
                <span className="bg-slate-800 text-blue-500 sm:p-2 p-1 w-1/3 flex items-center justify-center rounded-lg">
                  GPT-4o
                </span>
              </div>
              <div className="bg-slate-400 h-full w-auto flex flex-row justify-around items-center rounded-lg">
                <span>Conciencia:</span>
                <span className="bg-slate-800 text-red-500 sm:p-2 p-1 w-1/3 flex items-center justify-center rounded-lg">
                  Ivo Garraza
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-4 gap-2  row-span-2">
              <div className=" row-span-full grid grid-cols-1 grid-rows-4 gap-2">
                <div className="row-span-1 flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Latencia:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center sm:p-2 p-1 rounded-lg text-yellow-400">
                    1.05s
                  </span>
                </div>
                <div className="row-span-1 flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Modo Seguro:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center sm:p-2 p-1 rounded-lg text-green-500">
                    Activado
                  </span>
                </div>
                <div className="row-span-1 flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Retrato:
                  <span className="bg-slate-800 w-2/5 flex items-center justify-center sm:p-2 p-1 rounded-lg text-blue-500">
                    DALL·E 3
                  </span>
                </div>
                <div className="row-span-1 flex flex-row justify-around items-center  rounded-lg">
                  Inspirado en:
                  <a
                    className="w-1/3"
                    href="https://www.playbalatro.com/"
                    target="_blank"
                  >
                    <img src={balatroLogo} className=""></img>
                  </a>
                </div>
              </div>
              <div className="row-span-full grid-cols-1 grid grid-rows-4 gap-2">
                <div className="row-span-1 text-xl flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Idioma:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center sm:p-2 p-1 rounded-lg text-yellow-400">
                    <span className="">ES</span> / <span className="">EN</span>
                  </span>
                </div>
                <div className="row-span-3 grid grid-cols-1 grid-rows-3 pb-2 sm:px-2 px-3 bg-slate-400 rounded-lg">
                  <div className="row-span-1 text-3xl flex items-center justify-center">
                    Proveedor:
                  </div>
                  <div className="row-span-2 bg-slate-800 rounded-lg w-full flex flex-col items-center justify-center">
                    <span className="text-xl text-green-300">Open I.A.</span>
                    <img src={openImage} className="w-2/5"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/6"></div>
          <form
            onSubmit={handleSubmit}
            className="h-1/6 w-full p-4 flex flex-row justify-around bottom-0"
          >
            <input
              className="w-4/5 sm:my-2 mx-2 px-4 rounded-md"
              placeholder="Escribe un mensaje..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              onClick={() => TapSound()}
              type="submit"
              className="group px-4 h-12 bg-green-500 text-white border-[2px] hover:border-verde border-negro hover:bg-negro transition flex items-center justify-center rounded-md sm:my-2 sm:mr-4"
            >
              ENVIAR
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPage;
