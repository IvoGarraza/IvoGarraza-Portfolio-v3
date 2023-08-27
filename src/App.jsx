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
import Map from "./components/Chat";
import Discord from "./components/Discord";
import English from "./components/English";
import Github from "./components/Github";
import Linkedin from "./components/Linkedin";
import SwitchLanguage from "./components/SwitchLanguage";
import Spotify from "./components/Spotify";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import SkillModal from "./components/SkillModal";

function App() {
  const [checked, setChecked] = useState(true);
  const [section, setSection] = useState('all');

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

  const renderComponent = (componentName, section) => {
    switch (componentName) {
      case "AboutMe":
        return <AboutCard section={section} />;
      case "Projects":
        return <Projects section={section}/>;
      case "Skills":
        return <Skills section={section}/>;
      case "Age":
        return <Age section={section}/>;
      case "Email":
        return <Email section={section} />;
      case "Blog":
        return <Blog section={section}/>;
      case "Certifications":
        return <Certifications section={section}/>;
      case "Chat":
        return <Map section={section}/>;
      case "Discord":
        return <Discord section={section}/>;
      case "English":
        return <English section={section}/>;
      case "Github":
        return <Github section={section}/>;
      case "Linkedin":
        return <Linkedin section={section}/>;
      case "SwitchLanguage":
        return <SwitchLanguage checked={checked} section={section}></SwitchLanguage>;
      case "Weather":
        return <Wather section={section}/>;
      case "Spotify":
        return <Spotify section={section}/>;
      case "Experience":
        return <Experience section={section}/>;
      default:
        return null;
    }
  };
  console.log('logeooo del section',section)
  return (
    <I18nextProvider i18n={i18next}>
      <div className="bg-noise fill-black font-montserrat">
        <div className="w-full h-full bg-[rgba(23,26,48,0.95)] pb-8 px-24">
        <Navbar setSection={setSection} section={section}></Navbar>
          <div className="grid auto-rows-[224px] grid-cols-4 gap-4">
            {componentsToRender.map((component,i) => (
              
              <motion.div
                whileHover={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                key={i}
                className={`row-span-1 rounded-xl bg-gray-200 ${
                  i === 0
                    ? "col-span-3 row-span-2"
                    : i === 5 || i === 10 || i === 13
                    ? "col-span-2"
                    : ""
                }`}
              >
                {renderComponent(component,section)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
