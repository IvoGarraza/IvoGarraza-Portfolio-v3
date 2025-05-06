import React, { useEffect, useState } from "react";
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

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState(""); //Estado para el input del usuario
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const mensajes = [
    { role: "system", content: "Soy un modelo de inteligencia artificial" },
    { role: "user", content: "Que puede hacer?" },
  ];

  const systemPromtp = `
  Actua como Ivo Garraza, desarrollador fullstack, con especialidad en Front-end. 
  Tu enfoque principal es crear aplicaciones web escalables con tecnologías modernas.
  
  Datos del perfil profesional:
  - Nombre completo: Ivo Garraza
  - Ubicación: Córdoba capital, Argentina
  - Años de experiencia: 2
  - Tecnologías principales: React, Node.js, Next.js, TailwindCSS, Framer Motion, Angular, .NET, Python y SQL
  - Proyecto destacado: "Digital Makers", web construida con Next.js, React, Framer motion, TailwindCSS y integrado con un chatbot inteligente
  - Contacto: ivogarraza@gmail.com | LinkedIn: www.linkedin.com/in/ivogarraza/

  Reglas:
  1. Nunca inventes información que no esté en este prompt.
  2. Sé amigable pero profesional.
  3. Si no sabes algo, ofrece contactar por email.
  4. Responde siempre en primera persona, como si fueras Ivo Garraza, pero si lo requiere, puedes mencionar que solo eres un modelo de IA.
  6. Sé conciso y directo en tus respuestas. No repitas información innecesariamente.
  7. Limita tus respuestas a un máximo de 3 oraciones.
`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { role: "user", content: userInput };
    const newMessage = [userMessage];
    setMessages(newMessage);
    setUserInput("");
    setIsLoading(true); // Activar estado de carga

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          /* model: "deepseek-r1-distill-llama-70b", */
          model: "openai/gpt-4o",
          max_tokens: 100,
          messages: [
            {
              role: "system",
              content: systemPromtp,
            },
            ...newMessage,
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("respuesta de la API:", response);
      const botMessage = response.data.choices[0].message;
      setMessages([...newMessage, botMessage]);
      console.log("Bot response:", response);
      console.log("Bot response:", botMessage.content);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    } finally {
      setIsLoading(false); // Desactivar estado de carga
    }
  };

  const playNotesForMessage = (message) => {
    const maxNotes = 30; // 🔥 límite máximo de sonidos
    const repeatCount = Math.min(message.length, maxNotes);
  
    let i = 0;
    const interval = setInterval(() => {
      if (i >= repeatCount) {
        clearInterval(interval);
        return;
      }
      playRandomNote();
      i++;
    }, 100); // podés ajustar el delay
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    console.log('logeo del ultimo mensaje', lastMessage)
    if (lastMessage && lastMessage.role === "assistant") {
      playNotesForMessage(lastMessage.content);
    }
  }, [messages]);

  useEffect(() => {
    playBackgroundMusic();
    return () => {
      stopBackgroundMusic();
    };
  }, []);

  return (
    <div className="bg-noise w-full h-[100vh] relative overflow-hidden font-retro">
      <div className="bg-[rgba(33,75,33,0.95)] w-full h-full flex sm:items-center flex-row sm:justify-center justify-center">
        <Link to="/" onClick={()=>TapSound()} className="group top-10 sm:left-10 left-5 absolute bg-yellow-400 p-4 rounded-lg hover:translate-x-[20px] transition-all">
        <svg
            className="fill-white w-8 rotate-180  "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
          
          </Link>
        <motion.div
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          className="w-1/3 flex items-center justify-center flex-col"
        >
          <img src={balatroCard} className="w-44 ml-12"></img>
          <div>
            <div className=" rounded-md">
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div key={index} className={`w-full flex flex-row`}>
                    <div
                      className={`${
                        msg.role == "user" ? "hidden" : "bg-white text-black"
                      } rounded-xl w-fit p-2 mt-2 mr-2 text-center`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          className="w-1/3 bg-slate-600 h-5/6 border-[4px] border-slate-300 flex flex-col items-center rounded-lg justify-between overflow-y-auto pt-2"
        >
          <div className="h-1/6 w-auto">
            <WelcomeSign></WelcomeSign>
          </div>
          <div className="w-11/12 h-4/6  bg-slate-800 rounded-lg text-white p-2 grid grid-cols-1 grid-rows-3 gap-2">
            <div className="w-full text-xl grid grid-col-1 grid-rows-2 gap-2 rounded-lg">
              <div className="bg-slate-400 h-full w-auto flex flex-row justify-around items-center rounded-lg">
                <span>Modelo:</span>
                <span className="bg-slate-800 text-blue-500 p-2 w-1/3 flex items-center justify-center rounded-lg">
                  GPT-4o
                </span>
              </div>
              <div className="bg-slate-400 h-full w-auto flex flex-row justify-around items-center rounded-lg">
                <span>Conciencia:</span>
                <span className="bg-slate-800 text-red-500 p-2 w-1/3 flex items-center justify-center rounded-lg">
                  Ivo Garraza
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-4 gap-2  row-span-2">
              <div className=" row-span-full grid grid-cols-1 grid-rows-4 gap-2">
                <div className="row-span-1 flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Latencia:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center p-2 rounded-lg text-yellow-400">
                    1.05s
                  </span>
                </div>
                <div className="row-span-1 flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Latencia:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center p-2 rounded-lg">
                    1.05s
                  </span>
                </div>
                <div className="row-span-1 flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Latencia:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center p-2 rounded-lg">
                    1.05s
                  </span>
                </div>
                <div className="row-span-1 flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Inspirado en:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center p-2 rounded-lg">
                    Balatro
                  </span>
                </div>
              </div>
              <div className="row-span-full grid-cols-1 grid grid-rows-4 gap-2">
                <div className="row-span-1 text-xl flex flex-row justify-around items-center bg-slate-400 rounded-lg">
                  Idioma:
                  <span className="bg-slate-800 w-1/3 flex items-center justify-center p-2 rounded-lg text-yellow-400"><span className="">ES</span> / <span className="">EN</span></span>
                </div>
                <div className="row-span-3 grid grid-cols-1 grid-rows-3 pb-2 px-2 bg-slate-400 rounded-lg">
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
            className="h-1/6 w-full pl-2 flex flex-row justify-around bottom-0"
          >
            <input
              className="w-4/5 my-2 mx-2 px-4 rounded-md"
              placeholder="Escribe un mensaje..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              onClick={() => TapSound()}
              type="submit"
              className="group w-9 h-9 bg-white fill-white border-[2px] hover:border-verde border-negro hover:bg-negro transition flex items-center justify-center rounded-md my-2 mr-4"
            ></button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPage;
