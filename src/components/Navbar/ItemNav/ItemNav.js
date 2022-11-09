import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "../../../style/style.css";

const ItemNav = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  console.log(user);
  const menuItems = (
    <>
      <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/blog">Blogs</Link>
      </li>
      {/* <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/addnewservice">Add New Service</Link>
      </li> */}
      <li className="text-[#a1a1a7] hover:text-white">
        <Link to="/about">About Me</Link>
      </li>

      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <h3 className="text-center text-lg text-secondary flex justify-center items-center h-full">
                  {user?.email?.slice(0, 2)}
                </h3>
              )}
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#151515cc] border-t-2 border-red-600/60  w-52"
          >
            <li>
              <Link
                to="/myreview"
                className="justify-between text-white hover:text-red-700/70"
              >
                My Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/addnewservice"
                className="justify-between text-white  hover:text-red-700/70"
              >
                Add Service
              </Link>
            </li>
            <li>
              <button
                className=" text-white  hover:text-red-700/70"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link className="text-[#a1a1a7] hover:text-white" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#0b0b0b] px-12 py-2">
      <div className="flex-1 ">
        <Link to="/">
          <div className="justify-start items-center flex">
            <p className="text-6xl text-white">J</p>
            <div className="w-[2px] h-10 mx-2 bg-[#343434]"></div>
            <p className="text-[7px] text-white textFormate2 text-start ">
              JAHID <br /> PHOTO <br />
              SERVICE
            </p>
          </div>
        </Link>
      </div>

      <div className="flex-none">
        <ul className=" flex justify-center items-center gap-x-8 p-0">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default ItemNav;
