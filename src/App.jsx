import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./pages/ProjectPage";
import ChatPage from "./pages/ChatPage"
import Chat from "./pages/Chat"
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./languages/en/global.json";
import global_es from "./languages/es/global.json";

function App() {
  i18next.init({
    interpolation: { escapeValue: false }, // Evita la necesidad de escapar contenido
    lng: "en", // Idioma predeterminado
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });
  return (
    <I18nextProvider i18n={i18next}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
    </I18nextProvider>
  );
}

export default App;
