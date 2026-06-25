import React from "react";
import { IoMdHeart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-black text-white fixed bottom-0 md:top-0 flex justify-around md:justify-center items-center gap-[50px] px-[14px]">
      <Link to={"/"}>
        <TiHome className="w-[25px] h-[25px] " />
      </Link>
      <Link to={"/search"}>
        <IoSearch className="w-[25px] h-[25px] " />
      </Link>
      <Link to={"/playlist"}>
        <RiPlayListLine className="w-[25px] h-[25px] " />
      </Link>
      <Link to={"/liked"}>
        <IoMdHeart className="w-[25px] h-[25px] " />
      </Link>
    </div>
  );
};

export default Navbar;
