import AboutCard from "./AboutCard";
import Age from "./Age";
import Projects from "./Projects";
import Skills from "./SkillsCard";
import Email from "./Email"
import Blog from "./Blog"
import Certification from './Certifications'
import Chat from './Chat'
import Discord from './Discord'
import English from './English'

export const componentsToRender = [
  {name:"AboutMe",
    description: 'Esta sección trata sobre mí.',
  },
  {name:"SwitchLanguage",
    description:'Aquí se muestran mis proyectos más importantes.'
  },
  {name:"English",
    description:'Mis habilidades en inglés se muestran aquí.'
  },
  {name:"Experience",
    description:'experiencia'
  },
  {name:"Age",
    description:'edad'
  },
  {name:"Projects",
    description:'projectos'
  },
  {name:"Email",
    description:'email'
  },
  {name:"Github",
    description:'github'
  },
  {name:"Blog",
    description:'blog'
  },
  {name:"Skills",
    description:'habilidades'
  },
  {name:"Certifications",
    description:'certificaciones'
  },
  {name:"Chat",
    description:'chat'
  },
  {name:"Linkedin",
    description:'linkedin'
  },
  {name:"Weather",
    description:'clima'
  },
  {name:"Discord",
    description:'discord'
  },
  {name:"Spotify",
    description:'musica'
  },
];

const descriptions = {
  AboutMe: 'Esta sección trata sobre mí.',
  Projects: 'Aquí se muestran mis proyectos más importantes.',
  Skills: 'Mis habilidades técnicas están detalladas aquí.',
  Age: 'Conoce mi edad y otros detalles personales.',
  Email: 'Puedes contactarme aquí por correo.',
  Blog: 'Explora mis publicaciones en el blog.',
  Certifications: 'Mis certificaciones y logros.',
  Chat: 'Accede a una herramienta de chat interactiva.',
  Discord: 'Conéctate conmigo en Discord.',
  English: 'Mis habilidades en inglés se muestran aquí.',
  Github: 'Explora mi perfil de GitHub.',
  Linkedin: 'Conéctate conmigo en LinkedIn.',
  SwitchLanguage: 'Cambia el idioma de la aplicación.',
  Weather: 'Consulta el estado del clima aquí.',
  Spotify: 'Mira mi actividad en Spotify.',
  Experience: 'Aquí detallo mi experiencia laboral.',
};

/* const renderComponent = (componentName) => {
  switch (componentName) {
    case "AboutMe":
      return <AboutCard/>;
    case "Projects":
      return <Skills/>;
    case "Skills":
      return <Projects/>;
    case "Age":
      return <Age/>;
    case "Email":
        return <Email/>
    case "Blog":
        return <Blog/>
    case "Certifications":
        return <Certification/>
    case "Chat":
        return <Chat/>
    case "Discord":
        return <Discord/>
    case "English":
        return <English/>
    default:
      return null;
  }
};

export default renderComponent */
