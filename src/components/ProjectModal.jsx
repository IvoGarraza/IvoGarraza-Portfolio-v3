import React, { useState } from 'react'

const ProjectModal = ({project, handle}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className='w-[95%] h-[90%] p-6 flex flex-col justify-between items-center bg-white rounded-md relative'>
        <div className='bg-red-600 p-2 px-4 rounded-md cursor-pointer absolute right-3 top-3' onClick={handle}>
            <span className='text-white font-bold' >X</span>
        </div>
        <h3 className='text-black font-bold text-2xl'>{project.title}</h3>
        <div className='text-center'>
            <span>{project.descripcionLarga}</span>
        </div>
        <div className='flex sm:flex-row flex-col'>
            <a className={` bg-noveno p-2 text-white rounded-md font-medium ${!project.link ?'hidden':'flex'}`} href={project.link}>Link del Sitio</a>
            <a className=' bg-noveno p-2 text-white rounded-md font-medium ml-2'>Link del Repositorio</a>
        </div>
    </div>
  )
}

export default ProjectModal