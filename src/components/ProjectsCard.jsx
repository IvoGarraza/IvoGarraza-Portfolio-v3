import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "./ProjectCard.css";
import { logos, logos2 } from "../assets/logos";
import { createPortal } from "react-dom";
import SkillModal from "./SkillModal";
import ProjectModal from "./ProjectModal";

const renderImage =(params) =>{
 switch (params) {
  case 'html':
    return logos2.html
  case 'css':
    return logos2.css
  default:
    break;
 } 
}

const ProjectsCard = ({ project, isInView }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div className="group w-72 h-96 mx-2 relative overflow-hidden rounded-xl">
      <img src={project.img} className="absolute h-auto w-[150%]"></img>
      <div className="absolute h-1/3 group-hover:h-full transition-all w-full bg-primario flex flex-col items-center justify-center bottom-0">
        <span className="font-bold text-white flex text-xl mb-2">{project.title}</span>
        <span className="group-hover:flex text-center px-2 transition-opacity text-white hidden mb-2"> {project.description}</span>
        <div className="group-hover:flex hidden">
          <div>
            {createPortal(
              <AnimatePresence>
                {isOpen &&(
                  <motion.div>
                    <div className="fixed top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center z-50 bg-[rgba(0,0,0,0.2)]">
                      <ProjectModal project={project} handle={handleClick}></ProjectModal>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>,document.body
            )}
          </div>
        </div>
        {/* <button className="group-hover:flex hidden transition-opacity bg-noveno p-2 text-white rounded-md font-medium" onClick={handleClick}>{project.boton}</button> */}
        <div className="flex flex-row w-full justify-around text-white">
          <a href={project.repositorio} className="p-2 bg-noveno rounded-md group-hover:flex hidden">Repositorio</a>
          <a href={project.link} className="p-2 bg-noveno rounded-md group-hover:flex hidden">Ver sitio</a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
