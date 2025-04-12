import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState(""); //Estado para el input del usuario
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const mensajes = [
    { role: 'system', content: 'Soy un modelo de inteligencia artificial' },
    { role: 'user', content: 'Que puede hacer?' },
    { role: 'system', content: 'Soy un modelo de inteligencia artificial' },
  ]


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
    const newMessage = [...messages, userMessage];
    setMessages(newMessage);
    setUserInput("");
    setIsLoading(true); // Activar estado de carga

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          /* model: "deepseek-r1-distill-llama-70b", */
          model: 'openai/gpt-4o',
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

      console.log('respuesta de la API:', response.data)
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

  return (
    <div className="bg-noise w-full h-[100vh] relative">
      <div className="bg-[rgba(23,26,48,0.95)] w-full h-full flex sm:items-center flex-col sm:justify-center justify-center">
        <div className="w-4/6 bg-transparent h-5/6 flex flex-col rounded-lg justify-between overflow-y-auto">
          <div className="w-full h-3/5">
            <AnimatePresence>
              {mensajes.map((msg, index) => (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  key={index} className={`w-full flex flex-row`}>
                  <div
                    className={`${msg.role == "user"
                      ? "hidden"
                      : "visible w-12 h-12 overflow-hidden"
                      }`}
                  >
                  </div>
                  <div
                    className={`${msg.role == "user"
                      ? "bg-white ml-auto mr-2"
                      : "bg-purple-400 text-white self-start ml-2"
                      } rounded-xl w-fit p-4 mt-2`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {/* Mostrar mensaje de carga si isLoading es true */}

              {isLoading && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full flex flex-row">
                  <div className="visible w-12 h-12 overflow-hidden">
                  </div>
                  <motion.div

                    className="bg-purple-400 text-white self-start ml-2 rounded-xl w-fit p-4 mt-2">
                    <div className="flex flex-row gap-2">
                      <div className="w-3 h-3 rounded-full bg-white animate-bounce"></div>
                      <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                      <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <form
            onSubmit={handleSubmit}
            className="h-[10%] w-full pl-2 flex flex-row justify-around bottom-0"
          >
            <input
              className="w-4/5 my-2 mx-2 px-4 rounded-full"
              placeholder="Escribe un mensaje..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              type="submit"
              className="group w-9 h-9 bg-white fill-white border-[2px] hover:border-verde border-negro hover:bg-negro transition flex items-center justify-center rounded-full my-2 mr-4"
            >
              {/* <IoSend className="group-hover:fill-verde fill-negro" /> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
