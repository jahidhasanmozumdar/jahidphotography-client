import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import "../../../style/style.css";

const InfoNav = () => {
  return (
    <div className="navbar bg-[#000000] px-12">
      <div className="navbar-start gap-x-3">
        <span>
          <AiFillFacebook className="socialButton text-[#676769]" />
        </span>
        <span>
          <BsTwitter className="socialButton text-[#676769]" />
        </span>
        <span>
          <BsInstagram className="socialButton text-[#676769]" />
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <p className="header_title">
          <span className="text-white text-[10px] textFormate ">
            {" "}
            THE JAHID PHOTOGRAPHY
          </span>
        </p>
      </div>
      <div className="navbar-end">
        <label class="relative block">
          <span class="sr-only">Search</span>

          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-[rgba(62,63,70,0.5)] w-full border-none rounded-2xl py-0 pl-2 pr-3 text-white shadow-sm focus:outline-none focus:border-none focus:ring-none focus:ring-0 sm:text-sm"
            placeholder="Search"
            type="text"
            name="search"
          />
          <span class="absolute inset-y-0 right-0 flex items-center pr-2">
            <FiSearch className="text-white" />
          </span>
        </label>
      </div>
    </div>
  );
};

export default InfoNav;
