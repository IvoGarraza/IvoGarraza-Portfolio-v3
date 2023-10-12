import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./ProjectCard.css";
import { logos, logos2 } from "../assets/logos";

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
  return (
    <div className="group w-96 h-44 relative overflow-hidden rounded-md">
      <img src={project.img} className="absolute h-auto w-full"></img>
      <div className="absolute h-1/3 group-hover:h-full transition-all w-full bg-primario flex flex-col items-center justify-center bottom-0">
        <span className="font-bold text-white flex text-xl mb-2">{project.title}</span>
        <span className="group-hover:flex text-center transition-opacity text-white hidden mb-2"> {project.description}</span>
        <div className="group-hover:flex hidden">
          <span className="text-white">Tecnologias usadas:</span>
          <div>
            {project.tec.map((img,index)=>(
              <img className="w-4" src={renderImage(img)}></img>
            ))}
          </div>
        </div>
        <button className="group-hover:flex hidden transition-opacity bg-noveno p-2 text-white rounded-md font-medium">{project.boton}</button>
      </div>
    </div>
  );
};

export default ProjectsCard;
