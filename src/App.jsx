import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18next, { t } from "i18next";
import global_en from "./languages/en/global.json";
import global_es from "./languages/es/global.json";
import { useTranslation } from "react-i18next";
import AboutCard from "./components/AboutCard";
import { componentsToRender } from "./components/index";
import Skills from "./components/SkillsCard";
import Projects from "./components/Projects";
import Wather from "./components/Wather";
import Age from "./components/Age";
import Email from "./components/Email";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import Chat from "./components/Chat";
import Discord from "./components/Discord";
import English from "./components/English";
import Github from "./components/Github";
import Linkedin from "./components/Linkedin";
import SwitchLanguage from "./components/SwitchLanguage";
import Spotify from "./components/Spotify";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import Experience from "./components/Experience";

function App() {
  const [checked, setChecked] = useState(true);

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

  const renderComponent = (componentName) => {
    switch (componentName) {
      case "AboutMe":
        return <AboutCard />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Age":
        return <Age />;
      case "Email":
        return <Email />;
      case "Blog":
        return <Blog />;
      case "Certifications":
        return <Certifications />;
      case "Chat":
        return <Chat />;
      case "Discord":
        return <Discord />;
      case "English":
        return <English />;
      case "Github":
        return <Github />;
      case "Linkedin":
        return <Linkedin />;
      case "SwitchLanguage":
        return <SwitchLanguage checked={checked}></SwitchLanguage>;
      case "Weather":
        return <Wather />;
      case "Spotify":
        return <Spotify />;
      case "Experience":
        return <Experience />;
      default:
        return null;
    }
  };

  return (
    <I18nextProvider i18n={i18next}>
      <div className="bg-noise fill-black font-montserrat">
        <div className="w-full h-full bg-[rgba(29,34,62,0.91)] py-12 px-24">
          <div className="grid auto-rows-[192px] grid-cols-4 gap-4">
            {componentsToRender.map((component, i) => (
              <motion.div
                whileHover={{ scale: 0.95 }}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.100}}
                key={i}
                className={`row-span-1 rounded-xl bg-gray-200 ${
                  i === 0
                    ? "col-span-3 row-span-2"
                    : i === 8 || i === 10 || i === 13
                    ? "col-span-2"
                    : ""
                }`}
              >
                {renderComponent(component)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
