import axios from "axios";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState([]); //Estado para el mensaje de la IA
  const [loading, setLoading] = useState(false); //Estado para la carga
  const [userInput, setUserInput] = useState(""); //Estado para el mensaje del usuario

  const handleSubmit = async (e) => {
    console.log("Se activo el submit");
    e.preventDefault();
    setLoading(true);
    try {
      const request = await axios.post(
        "https://n8n-digitalmakers.duckdns.org/webhook-test/chat-portfolio",
        {
          message: userInput,
        }
      );
      console.log(request.data.content);
      setMessage(request.data.content);
      setLoading(false);
      return request.data.content;
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      return error;
    } // Lógica para manejar el envío del mensaje
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen bg-slate-800">
      <div className="w-1/2 bg-white h-16 flex items-center justify-center">
        <h2>Chat</h2>
      </div>
      <div className="w-1/2 h-full bg-slate-200 flex items-center justify-center">
        <span className="bg-purple-400 p-1 rounded-md">
          {loading ? "Cargando..." : message}
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center w-1/2 h-1/6 bg-slate-400 rounded-b-xl"
      >
        <input
          type="text"
          placeholder="Escribe tu mensaje"
          className="rounded-md p-2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button type="submit" className="bg-green-400 p-2 rounded-md">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;
