import tap from '../assets/sounds/tap.wav'
import lopp from '../assets/sounds/loop2.wav'
import musica from '../assets/sounds/music1.mp3'
import { useEffect, useRef } from "react";
import note1 from '../assets/sounds/voice1.mp3'
import note2 from '../assets/sounds/voice2.mp3'
import note3 from '../assets/sounds/voice3.mp3'
import note4 from '../assets/sounds/voice4.mp3'
import note5 from '../assets/sounds/voice5.mp3'
import note6 from '../assets/sounds/voice6.mp3'
import note7 from '../assets/sounds/voice7.mp3'
import note8 from '../assets/sounds/voice8.mp3'
import note9 from '../assets/sounds/voice9.mp3'
import note10 from '../assets/sounds/voice10.mp3'
import note11 from '../assets/sounds/voice11.mp3'

const notes = [
note1,note2,note3, note4, note5, note6, note7, note8, note9, note10, note11
]

export const playVoice = () => {
  const randomIndex = Math.floor(Math.random() * notes.length);
  const audio = new Audio(notes[randomIndex]);
  audio.play();

}


export const TapSound = () => {
    const sound = new Audio(tap)
    sound.play()
};

let audio = null
export const playBackgroundMusic = () => {
  if (!audio) {
    audio = new Audio(musica); // asegurate de que sea ruta pública o import
    audio.loop = true;
    audio.volume = 0.5; // opcional
  }

  if (audio.paused) {
    audio.play();
  }
};

export const stopBackgroundMusic = () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
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
