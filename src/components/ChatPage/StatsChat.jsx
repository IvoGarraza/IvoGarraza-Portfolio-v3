import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import WelcomeSign from '../SignChatea/SignChatea';
import balatroLogo from "./../../assets/logos/balatro.png";
import openImage from "./../../assets/logos/icono.png";
import { TapSound } from '../../utils/utils';

const StatsChat = ({setMessages,setIsLoading}) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setUserInput(''); // Limpiar el input del usuario
    if (!userInput.trim()) return; // Evitar enviar mensajes vacíos
    try {
      const response = await axios.post(
        'https://n8n-n8n.1ogg7z.easypanel.host/webhook-test/fb431a5c-6f81-4375-86c7-fa90227393c6',
        { message: userInput },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data.content)
      setMessages(response.data.content); // Actualizar el estado con la respuesta del bot      
      return response.data.content;
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          className="sm:w-3/4 w-full bg-slate-600 sm:h-4/5 h-2/3 border-[4px] border-slate-300 flex flex-col items-center rounded-lg justify-between overflow-hidden pt-2"
        >
          <div className="h-1/6 w-auto mb-4">
            <WelcomeSign></WelcomeSign>
          </div>
          <div className="w-11/12 h-4/6  bg-slate-800 rounded-lg text-white p-2 grid grid-cols-1 grid-rows-3 gap-2">
            <div className="w-full text-xl grid grid-col-1 grid-rows-2 gap-2 rounded-lg">
              <div className="bg-slate-400 h-full w-auto flex flex-row justify-around items-center rounded-lg">
                <span>LLM:</span>
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
                  <div className="row-span-2 bg-slate-800 rounded-lg w-full flex flex-row items-center justify-center">
                    <span className="text-xl text-green-300">OpenRouter</span>
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
  );
};

export default StatsChat;