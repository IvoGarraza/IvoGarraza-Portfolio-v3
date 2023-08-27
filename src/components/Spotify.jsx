import React from "react";
import spotify from "../assets/spotify.png";
import { motion } from "framer-motion";
import styles from "../assets/styles/Spotify.module.css";

const Spotify = ({ section }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.2 }}
      className="w-full h-full items-center justify-center flex rounded-xl bg-noise"
    >
      <div className="w-full h-full flex items-center justify-center rounded-xl bg-[#480ca8ee]">
        <div>
          <img className="w-12" src={spotify}></img>
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
      
      </div>
    </motion.div>
  );
};

export default Spotify;
