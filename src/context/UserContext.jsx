import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../songs";

export const datacontext = createContext();

const UserContext = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [index, setIndex] = useState(0);
  const [playingSong, setPlayingSong] = useState(false);

  useEffect(() => {
    audioRef.current.src = songsData[index].song;
    audioRef.current.load();
    if (playingSong) {
      playSong();
    }
  }, [index]);

  const playSong = () => {
    setPlayingSong(true);
    audioRef.current.play();
  };

  const pauseSong = () => {
    setPlayingSong(false);
    audioRef.current.pause();
  };

  const prevSong = () => {
    setIndex((prev)=>{
      if(prev==0){
        return songsData.length
      }
      else{
        return prev-1
      }
    })
  };

  const nextSong = () => {
    setIndex((prev) => (prev + 1) % songsData.length);
  };

  const value = {
    audioRef,
    playSong,
    pauseSong,
    playingSong,
    setPlayingSong,
    prevSong,
    nextSong,
    index,
    setIndex,
  };

  return <datacontext.Provider value={value}>{children}</datacontext.Provider>;
};

export default UserContext;
