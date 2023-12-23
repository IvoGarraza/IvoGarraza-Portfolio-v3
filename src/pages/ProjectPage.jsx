import React, { useRef } from 'react'
import { projects } from '../constants'
import ProjectsCard from '../components/ProjectsCard'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './ProjectPage.css'

const ProjectPage = () => {
  const {t} = useTranslation("global")
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <div className='bg-noise w-full h-[100vh] relative '>
        <div className='bg-[rgba(23,26,48,0.95)] h-full flex items-center flex-col sm:justify-between justify-center'>
        <Link to='/' className='group top-10 left-10 absolute'>
        <svg className="fill-white opacity-70 w-8 rotate-180  group-hover:translate-x-[20px] transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </Link>
          <span className='text-3xl text-white font-bold my-12 top-0 '>{t("projects.title")}</span>
          {/* <div ref={ref} className='w-full h-full grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-4 gap-4 px-24 pb-12 justify-items-center'> */}
          <div id='projectsContainer' className='flex flex-row w-full overflow-x-scroll mb-12'>
            <div className='flex flex-row scroll'>
              {projects.map((project, index)=>(
                <ProjectsCard isInView={isInView} project={project}></ProjectsCard>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectPage