import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
/*   const [checked, setChecked] = useState(true);
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
  console.log('logeooo del section',section) */
  return (
/*     <I18nextProvider i18n={i18next}>
      <Navbar setSection={setSection} section={section}></Navbar>
      <div className="bg-noise fill-black font-montserrat">
        <div className="w-full h-full bg-[rgba(23,26,48,0.95)] pt-24 pb-8 px-24">
          <div className="grid auto-rows-[224px] grid-cols-4 gap-4">
            {componentsToRender.map((component,i) => (
              
              <motion.div
                whileHover={{ scale: 0.95 }}
                initial={{ opacity: 0, scale:1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                key={i}
                className={`row-span-1 rounded-xl overflow-hidden bg-gray-200 ${
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
    </I18nextProvider> */

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/projects"  element={<ProjectPage/>}></Route>
    </Routes>
  );
}

export default App;
