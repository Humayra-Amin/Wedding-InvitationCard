import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(new Audio("/music/Wedding Song.mp3"));

  const [playing, setPlaying] = useState(false);

  audioRef.current.loop = true;
  audioRef.current.volume = 0.35;

  const playMusic = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <MusicContext.Provider
      value={{
        playMusic,
        toggleMusic,
        playing,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);