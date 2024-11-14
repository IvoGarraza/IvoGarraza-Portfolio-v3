import tap from '../assets/sounds/tap.wav'

export const TapSound = () => {
    const sound = new Audio(tap)
    sound.play()
};
