import React, { useContext } from "react";
import { songsData } from "../songs";
import musicImg from "../assets/musicanim.webp";
import { IoPlay } from "react-icons/io5";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { datacontext } from "../context/UserContext";
import { MdOutlinePause } from "react-icons/md";

const Home = () => {
  const { audioRef, playingSong, playSong, pauseSong } =
    useContext(datacontext);

  return (
    <div className="w-full h-screen bg-black flex ">
      <div className="w-full md:w-[50%] h-full pt-[20px] md:pt-[120px] flex flex-col items-center gap-5">
        <h1 className="text-white font-semibold text-[18px]">Now Playing</h1>
        <div className="rounded-sm w-[80%] md:w-[200px] object-fill overflow-hidden relative">
          <img src={songsData[0].image} alt="" />
          <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex items-center justify-center">
            <img src={musicImg} className="w-[50%]" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white font-bold text-[30px]">
            {songsData[0].name}
          </div>
          <div className="text-gray-700 font-semibold text-[18px]">
            {songsData[0].singer}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <input type="range" id="range" />
        </div>
        <div className="flex items-center justify-center gap-5 text-white">
          <CgPlayTrackPrev className="w-[28px] h-[28px] cursor-pointer hover:text-gray-500" />
          {!playingSong ? (
            <div
              onClick={() => playSong()}
              className="w-[40px] h-[40px] rounded-full bg-white text-black hover:bg-gray-500 cursor-pointer flex justify-center items-center transition-all"
            >
              <IoPlay className="w-[20px] h-[20px]" />
            </div>
          ) : (
            <div
              onClick={() => pauseSong()}
              className="w-[40px] h-[40px] rounded-full bg-white text-black hover:bg-gray-500 cursor-pointer flex justify-center items-center transition-all"
            >
              <MdOutlinePause className="w-[20px] h-[20px]" />
            </div>
          )}

          <CgPlayTrackNext className="w-[28px] h-[28px] cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      <div className="w-[50%] h-full hidden md:block bg-amber-950"></div>
    </div>
  );
};

export default Home;
