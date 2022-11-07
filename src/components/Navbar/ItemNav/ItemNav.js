import React from "react";
import { Link } from "react-router-dom";
import "../../../style/style.css";

const ItemNav = () => {
  const menuItems = (
    <>
      <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/blog">Blogs</Link>
      </li>
      <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/addnewservice">Add New Service</Link>
      </li>
      <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/about">About Me</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#0b0b0b] px-12 py-2">
      <div className="flex-1 ">
        <div className="justify-start items-center flex">
          <p className="text-6xl text-white">J</p>
          <div className="w-[2px] h-10 mx-2 bg-[#343434]"></div>
          <p className="text-[7px] text-white textFormate2 text-start ">
            JAHID <br /> PHOTO <br />
            SERVICE
          </p>
        </div>
      </div>
      <div className="flex-none">
        <ul className=" flex gap-x-8 p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default ItemNav;
