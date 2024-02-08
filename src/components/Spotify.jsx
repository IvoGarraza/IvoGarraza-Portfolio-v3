import React, { useEffect, useState, useRef } from "react";
import spotify from "../assets/spotify.png";
import { motion } from "framer-motion";
import styles from "../assets/styles/Spotify.module.css";
import play from '../assets/play.svg'
import pause from '../assets/pause.svg'
import { music } from "../constants";
import song1 from '../assets/covers/PromesasSobreElBidet.mp3'





const Spotify = ({ section }) => {
  const [isPlay, setIsPlay ] = useState(false) 
  const audioRef = useRef(null)

  

  const handlePlay = () =>{
    audioRef.current.play();
    document.getElementById("music").play();
    console.log('audioooooo play', audioRef, isPlay)
    

  }

  const handlePause = () =>{
    audioRef.current.pause();
    document.getElementById("music").pause()
    console.log('audioooooo pause', audioRef, isPlay)
/*     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createBufferSource();

    // Cargar la pista de audio
    fetch(song1)
      .then(response => response.arrayBuffer())
      .then(data => audioContext.decodeAudioData(data))
      .then(buffer => {
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0);
      })
      .catch(error => console.error('Error al cargar la pista de audio', error)); */
  }

  useEffect(()=>{
    if(isPlay){
      handlePlay()
    }else{
      handlePause()
    }
  },[isPlay])

  useEffect(() => {
    document.getElementById("music").volume = 0.5;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }}
      className="relative w-full h-full flex items-center justify-center rounded-xl bg-[#480ca8ee] cursor-pointer"
      onClick={()=>(setIsPlay(!isPlay))}
    >
     {/* <button onClick={play}>play</button> */}
        <img className="absolute w-full opacity-60" src={music[0].img}></img>
        <div className="font-bold text-white z-10 w-full h-full  flex flex-col justify-center p-2">
          <h3 className="sm:text-xl text-sm">{music[0].title}</h3>
          <span className="font-light sm:text-lg text-xs">{music[0].artist}</span>
          <span className="font-semibold sm:text-sm text-xs">{music[0].album}</span>
        </div>
        <div className="absolute top-3 left-3"> 
          <img className="sm:w-10 w-6" src={spotify}></img>
        </div>
        <div id="audiovisual" className={`absolute bottom-2  w-1/3 sm:left-2 left-6 sm:h-12 h-6 ${styles.audiovisual}`}>
          <div id='botonPlay' >
            <img className="sm:w-6 " src={isPlay?pause:play}></img>
          </div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio1"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio2"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio3"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio4"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio5"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio6"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio7"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio8"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio9"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio1"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio2"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio3"></div>
          <div className={isPlay?styles.audiowire:styles.audiowireStop} id="audio4"></div>
          
        </div>
        <audio ref={audioRef}  id="music" src={song1} ></audio>
  
    </motion.div>
  );
};

export default Spotify;
