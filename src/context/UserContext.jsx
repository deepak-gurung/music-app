import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../songs";

export const datacontext = createContext();

const UserContext = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [index, setIndex] = useState(0);
  const [playingSong, setPlayingSong] = useState(false)

  useEffect(() => {
    audioRef.current.src = songsData[index].song;
    audioRef.current.load()
  },[index]);


  const playSong = () =>{
    setPlayingSong(true)
    audioRef.current.play()
  } 

  const pauseSong = () =>{
    setPlayingSong(false)
    audioRef.current.pause()
  }

  const value = {
    audioRef,playSong,pauseSong,playingSong,setPlayingSong
  };

  return <datacontext.Provider value={value}>{children}</datacontext.Provider>;
};

export default UserContext;
