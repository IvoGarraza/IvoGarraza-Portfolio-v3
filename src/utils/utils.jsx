import tap from '../assets/sounds/tap.wav'
import lopp from '../assets/sounds/loop2.wav'
import { useEffect, useRef } from "react";

export const TapSound = () => {
    const sound = new Audio(tap)
    sound.play()
};

const LoopMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    console.log('use effectttttttt')
    audioRef.current = new Audio(lopp);
    audioRef.current.loop = true;
    audioRef.current.play()

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [lopp]);

  return null; // No renderiza nada en pantalla
};

export default LoopMusic
