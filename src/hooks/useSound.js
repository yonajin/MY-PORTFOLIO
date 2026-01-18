import { useRef } from "react";

export const useSound = (src, volume = 0.5) => {
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;
  }

  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0; // restart sound
    audioRef.current.play().catch(() => {});
  };

  return play;
};
