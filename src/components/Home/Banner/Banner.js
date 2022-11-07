import React from "react";
import watchMe from "../../../asset/watch_video_button.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="flex justify-center items-end h-full">
        <div className="text-white flex justify-between items-center w-[1024px]">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-[138px]  font-bold">JAHID</h2>
            <p className="text-sm mb-[30px] textFormate2 mt-[-35px]">
              PROFESSIONAL PHOTOGRAPHER
            </p>
          </div>
          <img className="cursor-pointer" src={watchMe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
