import React, { useState } from "react";
import spotify from "../assets/spotify.png";
import { motion } from "framer-motion";
import styles from "../assets/styles/Spotify.module.css";
import play from '../assets/play.svg'
import pause from '../assets/pause.svg'
import { music } from "../constants";


const Spotify = ({ section }) => {
  const [isPlay, setIsPlay ] = useState(false) 

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }}
      className="relative w-full h-full flex items-center justify-center rounded-xl bg-[#480ca8ee] "
      onClick={()=>(setIsPlay(!isPlay))}
    >
     
        <img className="absolute w-full opacity-60" src={music[0].img}></img>
        <div className="font-bold text-white z-10 w-full h-full  flex flex-col justify-center p-2">
          <h3 className="sm:text-xl text-sm">{music[0].title}</h3>
          <span className="font-light sm:text-lg text-xs">{music[0].artist}</span>
          <span className="font-semibold sm:text-sm text-xs">{music[0].album}</span>
        </div>
        <div className="absolute top-3 left-3"> 
          <img className="sm:w-10 w-6" src={spotify}></img>
        </div>
        <div id="audiovisual" className={`absolute  bottom-0 w-full sm:h-12 h-6 ${styles.audiovisual}`}>
          <div id='botonPlay' >
            <img className="w-6" src={isPlay?pause:play}></img>
          </div>
          <div className={styles.audiowire} id="audio1"></div>
          <div className={styles.audiowire} id="audio2"></div>
          <div className={styles.audiowire} id="audio3"></div>
          <div className={styles.audiowire} id="audio4"></div>
          <div className={styles.audiowire} id="audio5"></div>
          <div className={styles.audiowire} id="audio6"></div>
          <div className={styles.audiowire} id="audio7"></div>
          <div className={styles.audiowire} id="audio8"></div>
          <div className={styles.audiowire} id="audio9"></div>
          <div className={styles.audiowire} id="audio1"></div>
          <div className={styles.audiowire} id="audio2"></div>
          <div className={styles.audiowire} id="audio3"></div>
          <div className={styles.audiowire} id="audio4"></div>
          
        </div>
  
    </motion.div>
  );
};

export default Spotify;
