import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../songs";

export const datacontext = createContext();

const UserContext = ({ children }) => {
  const audioRef = useRef(new Audio());
  
  audioRef.currentSrc = songsData[0].song
 

  const value = {
    audioRef,
  };

  return <datacontext.Provider value={value}>{children}</datacontext.Provider>;
};

export default UserContext;
